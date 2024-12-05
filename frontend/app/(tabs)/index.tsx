import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }} // Replace with your logo URL
            style={styles.logo}
          />
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.currentLocation}>Current location</Text>
          <Text style={styles.address}>4th Mound Road, California</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Emergency Title Section with Illustration */}
      <View style={styles.emergencyContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Are you in an emergency?</Text>
          <Text style={styles.description}>
            Press the SOS button, your live location will be shared with the nearest help center and your emergency contacts.
          </Text>
        </View>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Replace with your illustration URL
          style={styles.illustration}
        />
      </View>

      {/* SOS Button */}
      <View style={styles.sosContainer}>
        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosText}>SOS</Text>
          <Text style={styles.sosSubText}>Press 3 seconds</Text>
        </TouchableOpacity>
      </View>

      {/* Emergency Options */}
      <Text style={styles.emergencyTitle}>What's your emergency?</Text>
      <View style={styles.emergencyGrid}>
        {[
          { label: "Flood", emoji: "🌊", color: "#EBF5FB" },
          { label: "Landslide", emoji: "⛰️", color: "#F9EBEA" },
          { label: "Fire Brigade", emoji: "🚒", color: "#FDEDEC" },
          { label: "Ambulance", emoji: "🚑", color: "#F5EEF8" },
          { label: "Police", emoji: "👮", color: "#E9F7EF" },
          { label: "Help Desk", emoji: "👨‍💻", color: "#EAF2F8" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.emergencyOption, { backgroundColor: item.color }]}
          >
            <Text style={styles.emergencyIcon}>{item.emoji}</Text>
            <Text style={styles.emergencyText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        {[
          { label: "Home", emoji: "🏠" },
          { label: "Profile", emoji: "👤" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.footerItem}>
            <Text style={styles.footerIcon}>{item.emoji}</Text>
            <Text style={styles.footerText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
  },
  logoContainer: {
    marginRight: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  locationContainer: {
    flex: 1,
  },
  currentLocation: {
    fontSize: 12,
    color: "#888",
  },
  address: {
    fontSize: 14,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    fontSize: 20,
    marginLeft: 15,
  },
  emergencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    margin: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  illustration: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  sosContainer: {
    alignItems: "center",
    marginVertical: 15,
  },
  sosButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FF6F61",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sosText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  sosSubText: {
    fontSize: 12,
    color: "#FFF",
    marginTop: 5,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 5,
  },
  emergencyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  emergencyOption: {
    flexBasis: "30%",
    aspectRatio: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  emergencyIcon: {
    fontSize: 20,
    marginBottom: 10,
  },
  emergencyText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerItem: {
    alignItems: "center",
  },
  footerIcon: {
    fontSize: 24,
  },
  footerText: {
    fontSize: 12,
    marginTop: 5,
    color: "#666",
  },
});
