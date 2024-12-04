import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

<<<<<<< HEAD

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
=======
interface LoginData {
  phone_number: string;
  password: string;
}
>>>>>>> 883e870c0fd8a431165e52ffae05069b6b21b59f

const LoginScreen: React.FC = () => {
  const [phone_number, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    const apiUrl = "http://192.168.10.60:8000/account/login/"; // Replace with your API endpoint
    const payload: LoginData = {
      phone_number,
      password,
    };

    try {
      const response = await axios.post(apiUrl, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        Alert.alert("Success", "Login successful!");
        // Optionally navigate to another screen after successful login
      } else {
        Alert.alert("Error", response.data.message || "Login failed!");
      }
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status other than 200 range
        Alert.alert(
          "Error",
          error.response.data.message || "Something went wrong!"
        );
      } else {
        // Network error or other issues
        Alert.alert("Error", "An error occurred. Please try again.");
      }
      console.error("Error during login:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>
        Welcome back! Please login to continue.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone_number}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          /* Navigation logic to Register screen */
        }}
      >
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#28A745",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "#ced4da",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: "#28A745",
    textAlign: "center",
    marginTop: 10,
  },
});

export default LoginScreen;
