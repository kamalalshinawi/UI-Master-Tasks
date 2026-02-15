import { StyleSheet, Text, View, Button } from "react-native";
import { s, vs } from "react-native-size-matters";
import SocialIcon from "./SocialIcon";
import { GoogleIcon, AppleIcon, FaceBookIcon } from "../assets/icons";
import React from "react";

const SocialSignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.signtext}>- OR Continue with -</Text>
      <View style={styles.socialStatus}>
        <SocialIcon icon={<GoogleIcon />} />
        <SocialIcon icon={<AppleIcon />} />
        <SocialIcon icon={<FaceBookIcon />} />
      </View>

      <View style={styles.textSocial}>
        <Text
          style={{
            fontSize: s(14),
            fontWeight: "regular",
          }}
        >
          Create An Account
        </Text>
        <Text
          style={{
            marginLeft: vs(5),
            color: "#F83758",
            fontSize: s(14),
            fontWeight: "semibold",
            textDecorationLine: "underline",
          }}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default SocialSignIn;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(65),
    alignItems: "center",
    justifyContent: "center",
  },
  signtext: {
    fontSize: s(12),
    fontWeight: "medium",
  },
  socialStatus: {
    flexDirection: "row",
    gap: s(12),
  },
  textSocial: {
    flexDirection: "row",
  },
});
