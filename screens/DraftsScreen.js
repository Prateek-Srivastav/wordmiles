import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DraftScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Draft Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default DraftScreen;
