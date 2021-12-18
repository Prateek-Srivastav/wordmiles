import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import PoemCard from "../components/PoemCard";
import { dummyData } from "../data/dummyData";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={dummyData}
        keyExtractor={(username) => `${username}${Math.random(new Date())}`}
        renderItem={(itemData) => (
          <PoemCard
            style={{ marginVertical: 10 }}
            username={itemData.item.username}
            genre={itemData.item.genre}
            uri={itemData.item.uri}
            poemTitle={itemData.item.poemTitle}
            poetName={itemData.item.poetName}
            datePublished={itemData.item.datePublished}
            poem={itemData.item.poem}
          />
        )}
      />
      <TouchableOpacity style={styles.publishButton} activeOpacity={0.5}>
        <MaterialCommunityIcons
          name="fountain-pen-tip"
          size={26}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
    paddingTop: 50,
  },
  publishButton: {
    width: 56,
    height: 56,
    backgroundColor: Colors.blue,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 10,
  },
});

export default HomeScreen;
