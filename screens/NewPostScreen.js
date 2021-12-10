import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewPostScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is New post Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default NewPostScreen;
