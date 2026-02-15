import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Login from "../components/Login";
import React from "react";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.textcontent}>Welcome{"\n"}Back!</Text>
      </View>

      <Login />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(32),
    backgroundColor: "#fff",
    paddingTop: vs(19),
  },
  headerText: {
    marginBottom: vs(36),
  },
  textcontent: {
    fontSize: s(36),
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#F83758",
    height: vs(50),
    width: s(300),
    borderRadius: s(4),
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: s(20),
    fontWeight: "semibold",
  },
});
