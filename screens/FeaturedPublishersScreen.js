import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FeaturedPubishersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is featured publishers screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default FeaturedPubishersScreen;
