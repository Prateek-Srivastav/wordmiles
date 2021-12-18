import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

function PoemCard(props) {
  return (
    <View
      style={{
        alignItems: "flex-start",
        flexDirection: "row",
        ...props.style,
      }}
    >
      <TouchableOpacity
        style={{
          borderRadius: 5,
          backgroundColor: Colors.white,
          marginHorizontal: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={{
            uri: props.uri,
          }}
          progressiveRenderingEnabled
          style={{
            height: 45,
            width: 45,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.poetDetailContainer}>
          <Text
            style={{
              color: Colors.white,
              opacity: 0.5,
              fontSize: 12,
              fontFamily: "OpenSans-Regular",
            }}
          >
            @{props.username}
          </Text>
          <Text
            style={{
              color: Colors.white,
              opacity: 0.5,
              fontFamily: "OpenSans-Regular",
              fontSize: 12,
            }}
          >
            GENRE: {props.genre}
          </Text>
        </View>

        <View style={styles.poemContainer}>
          <Text
            style={{
              color: Colors.white,
              fontWeight: "300",
              fontFamily: "OpenSans-SemiBold",
              fontSize: 22,
            }}
          >
            {props.poemTitle}
          </Text>
          <TouchableOpacity>
            <Text
              style={{ color: Colors.blue, fontFamily: "OpenSans-Regular" }}
            >
              BY {props.poetName}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: Colors.white,
              opacity: 0.5,
              fontFamily: "OpenSans-Regular",
            }}
          >
            {props.datePublished}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "white",
              fontFamily: "OpenSans-Regular",
              marginTop: 15,
              // textAlign: "center",
            }}
          >
            {props.poem}
          </Text>
        </View>
        <View style={styles.poemOptionsContainer}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity>
              <Ionicons name="heart" color={Colors.red} size={17} />
            </TouchableOpacity>
            <Text style={{ color: Colors.white, fontSize: 11 }}>1</Text>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="share"
              color={Colors.white}
              size={18}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="alert-circle" color={Colors.white} size={17} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginEnd: 10,
    padding: 9,
    backgroundColor: Colors.grey,
    borderRadius: 10,
    borderColor: "white",
    elevation: 5,
  },
  poetDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  poemContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  poemOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },
});

export default PoemCard;
