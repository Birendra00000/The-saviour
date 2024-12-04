import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const EmergencyAlertScreen = () => {
  const [timer, setTimer] = useState(5);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined; // Explicitly define the type of interval

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, timer]);

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      {/* Top Icon */}
      <View style={styles.topIconContainer}>
        <View style={styles.topIcon}>
          <Text style={styles.topIconText}>*</Text>
        </View>
      </View>

      {/* Title and Description */}
      <Text style={styles.title}>Sending Emergency Alert</Text>
      <Text style={styles.subtitle}>SOS Will be sent once the timer is off</Text>

      {/* Timer */}
      <TouchableOpacity style={styles.timerContainer} onPress={stopTimer}>
        <Text style={styles.timerText}>{`00 : ${timer.toString().padStart(2, '0')}`}</Text>
        <Text style={styles.timerSubtitle}>Seconds</Text>
      </TouchableOpacity>
      <Text style={styles.stopInstruction}>Tap the timer to stop</Text>

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>☰</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.sosButton]}>
          <Text style={[styles.actionButtonText, styles.sosButtonText]}>SOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F9FAFC',
    paddingVertical: 40,
  },
  topIconContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  topIcon: {
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  topIconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5C5C',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 10,
  },
  timerContainer: {
    backgroundColor: '#FF5C5C',
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF5C5C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  timerText: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  timerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
  },
  stopInstruction: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 20,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  actionButton: {
    backgroundColor: '#1F2937',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  actionButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  sosButton: {
    backgroundColor: '#FF5C5C',
  },
  sosButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default EmergencyAlertScreen;
