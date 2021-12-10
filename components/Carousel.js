import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import CarouselItem from "./CarouselItem";

const { width, heigth } = Dimensions.get("window");
let flatList;

function infiniteScroll(dataList, viewHeight) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + viewHeight;
    else {
      scrollValue = 0;
      scrolled = 0;
    }

    this.flatList.scrollToOffset({ animated: true, offset: scrollValue });
  }, 3000);
}

const Carousel = ({ data, viewHeight }) => {
  const scrollY = new Animated.Value(0);
  let position = Animated.divide(scrollY, width);
  const [dataList, setDataList] = useState(data);
  //   const viewHeight = viewHeight;

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList, viewHeight);
  });

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          ref={(flatList) => {
            this.flatList = flatList;
          }}
          keyExtractor={(item, index) => "key" + index}
          vertical
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          scrollEventThrottle={160}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        />
      </View>
    );
  }

  console.log("Please provide Text");
  return null;
};

// const styles = StyleSheet.create({
//   dotView: { flexDirection: "row", justifyContent: "center" },
// });

export default Carousel;
