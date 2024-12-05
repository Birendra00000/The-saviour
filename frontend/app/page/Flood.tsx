import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const EmergencyAlertScreen = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(3); // Initial timer value
  const [isRunning, setIsRunning] = useState(true); // Tracks if the timer is running
  const [previousTimer, setPreviousTimer] = useState(3); // Store the previous timer value before stopping

  // Effect to handle the timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1); // Decrease the timer by 1 each second
      }, 1000);
    } else if (interval) {
      clearInterval(interval); // Clear the interval if the timer reaches 0 or is stopped
    }

    return () => {
      if (interval) {
        clearInterval(interval); // Cleanup the interval
      }
    };
  }, [isRunning, timer]);

  // Function to start/stop and resume the timer
  const handleTimerPress = () => {
    if (isRunning) {
      setIsRunning(false); // Stop the timer
      setPreviousTimer(timer); // Store the current timer value before stopping
    } else {
      setIsRunning(true); // Start the timer again
      setTimer(previousTimer); // Resume from the previous timer value
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Icon */}

      {/* Title and Description */}
      <Text style={styles.title}>Sending Emergency Alert</Text>

      {/* Timer */}
      <TouchableOpacity
        style={styles.timerContainer}
        onPress={handleTimerPress}
      >
        <Text style={styles.timerText}>{`00 : ${timer
          .toString()
          .padStart(2, "0")}`}</Text>
        <Text style={styles.timerSubtitle}>Seconds</Text>
      </TouchableOpacity>
      <Text style={styles.stopInstruction}>Tap the timer to stop/restart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#F9FAFC",
    paddingVertical: 40,
  },
  topIconContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  topIcon: {
    backgroundColor: "#FFFFFF",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  topIconText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF5C5C",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
  },

  timerContainer: {
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
  timerText: {
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  timerSubtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 5,
  },
  stopInstruction: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6B7280",
    textAlign: "center",
    marginTop: 20,
  },
});

export default EmergencyAlertScreen;
