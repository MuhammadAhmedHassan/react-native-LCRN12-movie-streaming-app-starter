import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { dummyData, SIZES, COLORS, FONTS, icons } from "../../constants";
import { ProgressBar } from "../";

const ContinueWatchingSection = ({}) => {
  const navigation = useNavigation();
  const length = dummyData.continueWatching.length;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerLeftText}>Continue Watching</Text>
        <Image source={icons.right_arrow} style={styles.headerIcon} />
      </View>
      {/* List */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: SIZES.padding }}
        data={dummyData.continueWatching}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          const isFirstItem = index === 0;
          const isLastItem = index === length - 1;
          const { thumbnail, name, overallProgress } = item;
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("MovieDetail", { selectedMovie: item })
              }
            >
              <View
                style={{
                  marginLeft: isFirstItem ? SIZES.padding : 20,
                  marginRight: isLastItem ? SIZES.padding : 0,
                }}
              >
                {/* Thumbnail */}
                <Image
                  source={thumbnail}
                  resizeMode='cover'
                  style={styles.thumbnail}
                />
                {/* Name */}
                <Text style={styles.thumbnailTitle}>{name}</Text>

                {/* Progress bar */}
                <ProgressBar
                  containerStyle={{
                    position: "relative",
                    marginTop: SIZES.radius,
                  }}
                  barStyle={{ height: 3 }}
                  barPercentage={overallProgress}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default ContinueWatchingSection;

const styles = StyleSheet.create({
  container: { marginTop: SIZES.padding },
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: SIZES.padding,
    alignItems: "center",
  },
  headerLeftText: {
    flex: 1,
    color: COLORS.white,
    ...FONTS.h2,
  },
  headerIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
  },
  thumbnail: {
    width: SIZES.width / 3,
    height: SIZES.width / 3 + 60,
    borderRadius: 20,
  },
  thumbnailTitle: {
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.h4,
  },
});
