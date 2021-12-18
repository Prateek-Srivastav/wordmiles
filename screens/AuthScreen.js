import React, { useState, useReducer, useCallback, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import Input from "../components/Input";
import Carousel from "../components/Carousel";
import Colors from "../constants/Colors";

const carouselData = [
  {
    text: "Aspiring Poets",
    id: 1,
  },
  {
    text: "Professional Publishers",
    id: 2,
  },
  {
    text: "Occassional Writers",
    id: 3,
  },
];

const AuthScreen = (props) => {
  const [viewHeight, setViewHeight] = useState();

  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setViewHeight(height);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-white.png")}
        />
        <Text style={styles.titleText}>Word Miles</Text>
      </View>
      <View style={styles.carouselTitleContainer}>
        <Text style={styles.carouselTitle}> A Social platform for</Text>
      </View>
      <View style={styles.carouselContainer} onLayout={onLayout}>
        <Carousel data={carouselData} viewHeight={viewHeight} />
      </View>
      <View style={styles.authContainer}>
        <View
          style={{
            flex: 1,
            position: "absolute",
            marginTop: 50,
            left: 150,
            // alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            Not a member yet?
          </Text>
          <TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Create Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <Input
            id="userId"
            label="User ID"
            selectionColor="#ccc"
            placeholder="User ID"
            placeholderTextColor="#ccc"
            returnKeyType="next"
          />

          <Input
            id="password"
            label="Password"
            selectionColor="#ccc"
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
          />
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginTop: 8,
                }}
              >
                <Text style={{ color: "white" }}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  // justifyContent: "center",
                  // alignItems: "center",
                  // borderWidth: 2,
                  // borderColor: "blue",
                  width: 100,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 15,
                    // borderWidth: 2,
                    // borderColor: "blue",
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                  >
                    LOGIN
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  logo: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").height / 11,
  },
  titleContainer: {
    flexDirection: "row",
    top: Dimensions.get("window").height / 11,
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 35,
  },
  titleText: {
    color: "white",
    fontFamily: "dynalight-regular",
    fontSize: 65,
    textAlign: "center",
  },
  carouselTitleContainer: {
    // width: "100%",
    top: Dimensions.get("window").height / 8,
    // left: Dimensions.get("window").width / 100,
    marginHorizontal: 12,
    // marginBottom: -10,
  },
  carouselTitle: {
    color: "white",
    fontSize: 30,
  },
  carouselContainer: {
    flex: 0.06,
    marginHorizontal: 12,
    justifyContent: "center",
    alignItems: "flex-start",
    // marginTop: 5,
    top: Dimensions.get("window").height / 7.5,
    // left: Dimensions.get("window").width / 9.5,
  },
  authContainer: {
    // flex: 1,
    // borderColor: "blue",
    position: "absolute",
    bottom: -150,
    left: 30,
    backgroundColor: "#3b76e3ff",
    // width: Dimensions.get("window").height / 2,
    // height: Dimensions.get("window").height / 2,
    // borderRadius: Dimensions.get("window").height / 4,
    width: 500,
    height: 500,
    borderRadius: 250,
  },
  loginContainer: {
    flex: 1,
    position: "absolute",
    top: 150,
    left: 50,
    width: 260,
    // borderWidth: 4,
    // margin: 10,
  },
});

export default AuthScreen;
