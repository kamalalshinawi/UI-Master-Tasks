import { StyleSheet, Text, View, Image } from "react-native";
import { s, vs } from "react-native-size-matters";
import { LoveIcon } from "../assets/icons";
import React, { FC } from "react";

interface TypeImage {
  img: string;
  title: string;
}

const BannerCard: FC<TypeImage> = ({ img, title }) => {
  return (
    <View style={styles.bannercard}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: vs(4),
        }}
      >
        <View
          style={{
            height: vs(23),
            width: s(50),
            backgroundColor: "#ffffff",
            borderRadius: s(12),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: s(10), fontWeight: "semibold" }}>
            50% OFF
          </Text>
        </View>

        <View
          style={{
            height: vs(20),
            width: s(20),
            borderRadius: s(50),
            borderWidth: s(1),
            borderColor: "#D3D3D3",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <EvilIcons name="heart" size={20} color="black" /> */}
          <LoveIcon />
        </View>
      </View>

      <View>
        <Image
          source={{ uri: img }}
          style={{
            width: s(70),
            height: vs(70),
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
      </View>

      <Text
        style={{
          // marginTop: vs(100),
          // marginLeft: s(15),
          fontSize: s(14),
          fontWeight: "medium",
          color: "#000000",
        }}
      >
        {title}
      </Text>
      <View style={styles.Prices}>
        <Text style={{ fontSize: s(10), fontWeight: "bold" }}> 45,000</Text>
        <Text
          style={{
            marginRight: s(20),
            textDecorationLine: "line-through",
            color: "#AFAFAF",
            fontSize: s(10),
            fontWeight: "bold",
          }}
        >
          55,000
        </Text>
      </View>
    </View>
  );
};

export default BannerCard;

const styles = StyleSheet.create({
  bannercard: {
    height: vs(140),
    width: s(140),
    backgroundColor: "#F8F8F8",
    borderRadius: s(15),
    paddingHorizontal: s(13),
  },
  Prices: {
    // paddingLeft: s(15),
    // paddingBottom: vs(4),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
