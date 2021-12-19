import React from "react";
import { View, Animated, StyleSheet } from "react-native";

import { dummyData, COLORS, SIZES } from "../../constants";

function RenderDots({ newSeasonScrollX }) {
  const dotPosition = Animated.divide(newSeasonScrollX, SIZES.width);
  return (
    <View style={renderDotsStyles.container}>
      {dummyData.newSeason.map((item, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        const dotWidth = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [6, 20, 6],
          extrapolate: "clamp",
        });
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.lightGray, COLORS.primary, COLORS.lightGray],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`dot-${item.id || index}`}
            opacity={opacity}
            style={{
              borderRadius: SIZES.radius,
              marginHorizontal: 3,
              width: dotWidth,
              height: 6,
              backgroundColor: dotColor,
            }}
          />
        );
      })}
    </View>
  );
}

export default RenderDots;

const renderDotsStyles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
