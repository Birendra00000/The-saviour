import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
import axios from "axios";
import CommonUrl from "../../components/BaseUrl/CommonApi";

interface RegisterData {
  username: string;
  phone_number: number; // Changed to number
  password: string;
}

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [phone_number, setPhone_number] = useState<number | null>(null); // Changed to number
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    const apiUrl = CommonUrl; // Replace with your API endpoint
    const payload: RegisterData = {
      username,
      phone_number: phone_number || 0, // Fallback for null
      password,
    };

    try {
      const response = await axios.post(
        "http://192.168.10.60:8000/account/register/",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", "Registration successful!");
        // Optionally clear form inputs
        setUsername("");
        setPhone_number(null);
        setPassword("");
      } else {
        Alert.alert("Error", response.data.message || "Registration failed!");
      }
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Response Error:", error.response.data);
        Alert.alert(
          "Error",
          error.response.data.message || "Something went wrong!"
        );
      } else if (error.request) {
        // Request was made, but no response received
        console.error("Request Error:", error.request);
        Alert.alert(
          "Error",
          "No response from server. Please check your connection."
        );
      } else {
        // Other errors like network errors
        console.error("Error:", error.message);
        Alert.alert("Error", "An error occurred. Please try again.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join us to stay safe and connected</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone_number?.toString()} // Display number as string
        onChangeText={
          (value) => setPhone_number(value ? parseInt(value, 10) : null) // Parse input to a number
        }
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.footer_wrap_login}>
        <Text>Already have an Account</Text> <Button title="Register" />{" "}
      </View>
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
    color: "red",
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
    backgroundColor: "red",
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

export default Register;
