import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/backgroundcolor.jpeg")}
      style={styles.container}
    >
      <View style={styles.firstText}>
        <Text
          style={{ fontSize: s(34), fontWeight: "semibold", color: "#ffffff" }}
        >
          You want {"\n"}Authentic, here {"\n"} you go!
        </Text>
      </View>

      <View style={styles.smalltext}>
        <Text
          style={{
            color: "#fff",
            marginTop: vs(8),
            fontSize: s(14),
            fontWeight: "regular",
          }}
        >
          Find it here, buy it now!
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{ fontSize: s(23), fontWeight: "semibold", color: "#fff" }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%",
    width:"100%",
  },
  firstText: {
    // flex:1,
    marginTop: vs(450),
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  smalltext: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#F83758",
    height: vs(50),
    width: s(250),
    marginLeft: s(50),
    marginTop: vs(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: s(5),
  },
});
