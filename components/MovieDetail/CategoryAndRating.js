import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

import { SIZES, FONTS, COLORS, icons } from "../../constants";

const CategoryAndRating = () => {
  const { params } = useRoute();
  const selectedMovie = params.selectedMovie;

  return (
    <View style={styles.container}>
      {/* Age */}
      <RenderBadge
        text={selectedMovie?.details?.age}
        style={{ marginLeft: 0 }}
      />
      {/* Genre */}
      <RenderBadge
        text={selectedMovie?.details?.genre}
        style={{ paddingHorizontal: SIZES.padding }}
      />
      {/* Ratings */}
      <RenderBadge text={selectedMovie?.details?.ratings} icon={icons.star} />
    </View>
  );
};

export default CategoryAndRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: SIZES.base,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: 3,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.gray1,
  },
  badgeText: { color: COLORS.white, ...FONTS.h4 },
});

function RenderBadge({ text, style = {}, icon }) {
  return (
    <View style={[styles.categoryContainer, style]}>
      {!!icon && (
        <Image
          source={icon}
          resizeMode='contain'
          style={{ width: 15, height: 15, marginRight: SIZES.base }}
        />
      )}
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
}
