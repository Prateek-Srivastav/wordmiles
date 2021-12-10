import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserPostScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is User Post Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default UserPostScreen;
