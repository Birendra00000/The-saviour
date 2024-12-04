import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Action Buttons (Top Row) */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.button}  onPress={() => {
                router.push("/Flood"); // Navigate to Login screen
              }}>
          <Text style={styles.buttonText}>Flood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          router.push("/Police")
        }} >
          <Text style={styles.buttonText}>Police</Text>
        </TouchableOpacity>
      </View>

      {/* SOS Button */}
      <View style={styles.sosContainer}>
        <Text style={styles.sosText}>SOS</Text>
      </View>

      {/* Action Buttons (Bottom Row) */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.button} onPress={() => {
          router.push("/Ambulance")
        }}>
          <Text style={styles.buttonText}>Ambulance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          router.push("/Other")
        }}>
          <Text style={styles.buttonText}>Other</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6F0", // Background color
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  sosContainer: {
    backgroundColor: "#FF5C5C",
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },

  sosText: {
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#FF5C5C",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HomeScreen;
