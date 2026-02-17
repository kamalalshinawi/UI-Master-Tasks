import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { ClothIcon } from "../assets/icons";
import React, { FC, ReactNode } from "react";

interface TypeCards {
  isSelected?: boolean;
  onprees?: () => void;
  iconCard: ReactNode;
}

const TypeCard: FC<TypeCards> = ({ isSelected = false, onprees, iconCard }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && { backgroundColor: "#F17547" }]}
      onPress={onprees}
    >
      {iconCard}
    </TouchableOpacity>
  );
};

export default TypeCard;

const styles = StyleSheet.create({
  card: {
    height: vs(50),
    width: s(50),
    backgroundColor: "#F2F2F2",
    borderRadius: s(8),
    alignItems: "center",
    justifyContent: "center",
  },
  activeCard: {
    backgroundColor: "#F17547",
    height: vs(50),
    width: s(50),
    borderRadius: s(8),
    alignItems: "center",
    justifyContent: "center",
  },
});
