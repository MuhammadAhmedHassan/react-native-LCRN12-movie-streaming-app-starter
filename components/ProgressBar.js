import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, SIZES } from "../constants";

const ProgressBar = ({ containerStyle, barStyle, barPercentage }) => {
  return (
    <View style={containerStyle}>
      <View style={{ ...styles.bar, ...barStyle }} />
      <View
        style={{
          ...styles.bar,
          width: barPercentage,
          backgroundColor: COLORS.primary,
          ...barStyle,
        }}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  bar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    marginTop: SIZES.base,
    backgroundColor: COLORS.gray,
  },
});
