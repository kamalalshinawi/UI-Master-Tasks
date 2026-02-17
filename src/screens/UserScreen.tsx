import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import Header from "../components/Header";
import { HandIcon } from "../assets/icons";
import BannerView from "../components/BannerView";
import React from "react";

const UserScreen = () => {
  interface Banner {
    id: number;
    title: string;
  }
  const Banners: Banner[] = [
    {
      id: 1,
      title: "20% OFF DURING THE WEEKEND",
    },
    {
      id: 2,
      title: "20% OFF DURING THE WEEKEND",
    },
    {
      id: 3,
      title: "20% OFF DURING THE WEEKEND",
    },
  ];
  //   const Banners = ["Offer1", "offer2", "offer3"];
  //   const DataBanner = {
  //     offer1: {
  //       id: 1,
  //       title: "20% OFF DURING THE WEEKEND",
  //     },
  //     offer2: {
  //       id: 2,
  //       title: "20% OFF DURING THE WEEKEND",
  //     },

  //   };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.screencontent}>
        <Text style={styles.textOne}>Hello Fola {<HandIcon />}</Text>
        <Text style={styles.textTwo}>Let’s start shopping!</Text>
      </View>
      {/* <View style={styles.bannerView}>
        <BannerView  textBanner="20% OFF DURING THE WEEKEND" />
         <BannerView  textBanner="20% OFF DURING THE WEEKEND" />
      </View> */}

      <View>
        <FlatList
          data={Banners}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <BannerView textBanner={item.title} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: s(10), marginTop: vs(20) }}
        />
      </View>

      <View style={styles.middleContent}>
        <Text
          style={{ fontSize: s(20), fontWeight: "semibold", color: "#000000" }}
        >
          Top Categories
        </Text>
        <TouchableOpacity>
          <Text
            style={{ color: "#F17547", fontSize: s(16), fontWeight: "medium" }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(26),
    paddingVertical: vs(30),
  },
  header: {},
  screencontent: {},
  textOne: {
    color: "#000000",
    fontSize: s(20),
    fontWeight: "semibold",
  },
  textTwo: {
    color: "#000000",
    fontSize: s(12),
    fontWeight: "semibold",
  },
  bannerView: {
    marginTop: s(20),
  },
  middleContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: vs(20),
  },
});
