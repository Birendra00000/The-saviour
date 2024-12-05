import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

const FireScreen = () => {
  const router = useRouter();
  const mobileNumber = "9805253000"; // Emergency contact number

  // Function to directly open the phone app and initiate a call
  const handleEmergencyCall = () => {
    Linking.openURL(`tel:${mobileNumber}`); // Directly opens the call app
  };

  return (
    <View style={styles.container}>
      {/* Title and Description */}
      <Text style={styles.title}>Emergency Alert</Text>
      <Text style={styles.subtitle}>
        Tap the button below to make an emergency call.
      </Text>

      {/* Emergency Call Button */}
      <TouchableOpacity
        style={styles.callButtonContainer}
        onPress={handleEmergencyCall}
      >
        <Text style={styles.callButtonText}>SOS Call</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFC",
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 30,
  },
  callButtonContainer: {
    backgroundColor: "#FF5C5C",
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#FF5C5C",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  callButtonText: {
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default FireScreen;
