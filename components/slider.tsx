import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

const Slider = ({ sliders = [], style }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <View style={[styles.slider, style?.slider]}>
        <PagerView
          style={{ flex: 1 }}
          onPageSelected={(index) => {
            setActiveIndex(index.nativeEvent.position);
          }}
          initialPage={0}
        >
          {sliders.map((slider: string, index: number) => (
            <View key={index}>
              <Text style={styles.sliderView}>{slider}</Text>
            </View>
          ))}
        </PagerView>
      </View>
      <View style={styles.dotsContainer}>
        {sliders.map((slider: any, index: number) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: activeIndex === index ? "#8B704E" : "#424242",
              },
            ]}
            key={index}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  slider: {
    padding: 16,
    backgroundColor: "#424242",
    borderRadius: 20,
  },

  sliderView: {
    color: "white",
    lineHeight: 22,
    fontSize: 14,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 12,
  },
  dot: {
    padding: 5,
    borderRadius: 30,
  },
});

export default Slider;
