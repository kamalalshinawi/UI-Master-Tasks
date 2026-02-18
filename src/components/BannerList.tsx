import { StyleSheet, Text, View, FlatList } from "react-native";
import { s, vs } from "react-native-size-matters";
import BannerCard from "./BannerCard";
import { dummyData } from "../data/data";
import React from "react";

const BannerList = () => {
  return (
    <View style={{ marginBottom: vs(20) }}>
      <View>
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BannerCard img={item.image} title={item.title} />
          )}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: vs(310), gap: s(10) }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default BannerList;

const styles = StyleSheet.create({});
