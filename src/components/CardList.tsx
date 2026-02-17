import { StyleSheet, Text, View, FlatList } from "react-native";
import { s, vs } from "react-native-size-matters";
import TypeCard from "./TypeCard";
import { ShooseIcon, LockIcon, ClothIcon } from "../assets/icons";
import React, { useState } from "react";

const CardList = () => {
  const DataCards = [
    {
      title: "Clothes",
      id: 1,
      icon: <ShooseIcon />,
    },
    {
      title: "tag",
      id: 2,
      icon: <LockIcon />,
    },
    {
      title: "nkkr",
      id: 3,
      icon: <ClothIcon />,
    },
    {
      title: "gfrg",
      id: 4,
      icon: <ShooseIcon />,
    },
    {
      title: "Clobtbhythes",
      id: 5,
      icon: <ClothIcon />,
    },
    {
      title: "gvtbtg",
      id: 6,
      icon: <LockIcon />,
    },
  ];
  const [active, setActive] = useState("");
  return (
    <View>
      <FlatList
        data={DataCards}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TypeCard
            onprees={() => setActive(item.title)}
            isSelected={item.title === active}
            iconCard={item.icon}
          />
        )}
        horizontal
        contentContainerStyle={{ gap: s(10) }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({});
