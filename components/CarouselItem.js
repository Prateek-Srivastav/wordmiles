import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.itemTitle}> {item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    // position: "absolute",
    // bottom: 10,
    // margin: 10,
    // left: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  itemTitle: {
    color: "white",
    fontSize: 30,
    // shadowColor: "#000",
    // shadowOffset: { width: 0.8, height: 0.8 },
    // shadowOpacity: 1,
    // shadowRadius: 3,
    // marginBottom: 5,
    // left: Dimensions.get("window").width / 8,
    // marginStart: 15,
    // fontWeight: "bold",
    // elevation: 5,
  },
});

export default CarouselItem;
