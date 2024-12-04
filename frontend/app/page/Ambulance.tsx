import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

interface Ambulance {
  id: string;
  latitude: number;
  longitude: number;
}

const AmbulanceScreen: React.FC = () => {
  const [userLocation, setUserLocation] =
    useState<Location.LocationObject | null>(null);
  const [nearestAmbulance, setNearestAmbulance] = useState<Ambulance | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  // Dummy ambulances
  const ambulances: Ambulance[] = [
    { id: "1", latitude: 45.61921927, longitude: -73.71678582 }, // 500 meters away
    { id: "2", latitude: 27.7185, longitude: 85.3158 }, // 600 meters away
    { id: "3", latitude: 27.719, longitude: 85.3148 }, // 700 meters away
  ];

  // Function to calculate the distance between two points in meters
  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const toRadians = (degree: number) => (degree * Math.PI) / 180;
    const R = 6371000; // Radius of Earth in meters
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in meters
  };

  // Fetch user location and find the nearest ambulance
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        // Request location permissions
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permission Denied", "Location permission is required.");
          setLoading(false);
          return;
        }

        // Get user's current location
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation(location);

        // Find the nearest ambulance
        const distances = ambulances.map((ambulance) => ({
          ...ambulance,
          distance: calculateDistance(
            location.coords.latitude,
            location.coords.longitude,
            ambulance.latitude,
            ambulance.longitude
          ),
        }));

        distances.sort((a, b) => a.distance - b.distance); // Sort by nearest distance
        setNearestAmbulance(distances[0]); // Set nearest ambulance
      } catch (error) {
        Alert.alert("Error", "Failed to fetch location.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userLocation.coords.latitude,
            longitude: userLocation.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {/* User's Location */}
          <Marker
            coordinate={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
            }}
            title="You"
            description="Your current location"
            pinColor="blue"
          />

          {/* Ambulance Locations */}
          {ambulances.map((ambulance) => (
            <Marker
              key={ambulance.id}
              coordinate={{
                latitude: ambulance.latitude,
                longitude: ambulance.longitude,
              }}
              title={`Ambulance ${ambulance.id}`}
              description="Ambulance location"
              pinColor="red"
            />
          ))}

          {/* Nearest Ambulance */}
          {nearestAmbulance && (
            <Marker
              coordinate={{
                latitude: nearestAmbulance.latitude,
                longitude: nearestAmbulance.longitude,
              }}
              title="Nearest Ambulance"
              description="This is the closest ambulance"
              pinColor="green"
            />
          )}
        </MapView>
      )}
      <View style={styles.info}>
        <Text style={styles.infoText}>
          Nearest Ambulance:{" "}
          {nearestAmbulance
            ? `Ambulance ${nearestAmbulance.id} at ${calculateDistance(
                userLocation?.coords.latitude || 0,
                userLocation?.coords.longitude || 0,
                nearestAmbulance.latitude,
                nearestAmbulance.longitude
              ).toFixed(0)} meters`
            : "No ambulances available"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  info: {
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AmbulanceScreen;
