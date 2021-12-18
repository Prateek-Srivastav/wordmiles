import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "dynalight-regular": require("./assets/fonts/dynalight.regular.ttf"),
    // "OpenSans-VariableFont_wdth,wght": require("./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
    "OpenSans-Medium": require("./assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <HomeScreen />;
}
