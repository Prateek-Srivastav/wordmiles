import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default SearchScreen;
