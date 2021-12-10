import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LikedScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Liked Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default LikedScreen;
