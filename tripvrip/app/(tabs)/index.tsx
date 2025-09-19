import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async () => {
  let valid = true;
  setEmailError("");
  setPasswordError("");

  if (!email) {
    setEmailError("Email is required.");
    valid = false;
  } else if (!validateEmail(email)) {
    setEmailError("Invalid email format.");
    valid = false;
  }

  if (!password) {
    setPasswordError("Password is required.");
    valid = false;
  } else if (password.length < 6) {
    setPasswordError("Password must be at least 6 characters.");
    valid = false;
  }

  if (!valid) return;

  try {
    // Call FastAPI /login
    const response = await axios.post("http://127.0.0.1:8000/login", {
      email,
      password,
    });

    const { access_token, token_type } = response.data;
    console.log("Login successful:", access_token);

    alert(`Login successful! Token: ${access_token}`);
    // Optionally save token in AsyncStorage for later use
  } catch (error: any) {
    console.log("Login failed:", error.response?.data?.detail || error.message);
    alert("Login failed: " + (error.response?.data?.detail || error.message));
  }
};
  return (
    <ImageBackground
      source={require("../../assets/images/backgroundweb.jpg")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={2}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={[styles.input, emailError ? styles.inputError : null]}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TextInput
          style={[styles.input, passwordError ? styles.inputError : null]}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  card: {
    width: "50%",
    height: "50%",
    padding: 25,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#807a7aff",
    marginBottom: 20,
  },
  input: {
    width: "50%",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    fontSize: 16,
    color: "#000",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  inputError: {
    borderColor: "red",
  },
errorText: {
  color: "red",
  fontSize: 14,
  width: "50%",      // 👈 same width as input
  textAlign: "left",  // 👈 aligns text to start of input
  marginBottom: 10,
},

  button: {
    width: "50%",
    backgroundColor: "rgba(0, 122, 255, 0.8)",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LoginScreen;
