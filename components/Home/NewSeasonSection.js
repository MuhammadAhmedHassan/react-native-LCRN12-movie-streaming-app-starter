import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
  StyleSheet,
} from "react-native";

import { dummyData, COLORS, SIZES, FONTS, icons } from "../../constants";
import { RenderDots, StillWatchingProfiles } from "./";

function NewSeasonSection({ navigation }) {
  const newSeasonScrollX = useRef(new Animated.Value(0)).current;

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment='center'
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{ marginTop: SIZES.radius }}
        data={dummyData.newSeason}
        keyExtractor={(item) => `${item.id}`}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: newSeasonScrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("MovieDetail", { selectedMovie: item })
            }
          >
            <View style={newSeasonStyles.thumbnailContainer}>
              <ImageBackground
                source={item.thumbnail}
                resizeMode='cover'
                style={newSeasonStyles.imageBackground}
                imageStyle={{ borderRadius: 40 }}
              >
                <View style={newSeasonStyles.actions}>
                  {/* Play Now */}
                  <View style={newSeasonStyles.actionsLeft}>
                    <View style={newSeasonStyles.playNow}>
                      <Image
                        source={icons.play}
                        resizeMode='contain'
                        style={newSeasonStyles.playIcon}
                      />
                    </View>
                    <Text style={newSeasonStyles.playNowText}>Play Now</Text>
                  </View>
                  {/* Still Watching */}
                  {item.stillWatching.length > 0 && (
                    <View style={{ justifyContent: "center" }}>
                      <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
                        Still Watching
                      </Text>
                      <StillWatchingProfiles profiles={item.stillWatching} />
                    </View>
                  )}
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
      <RenderDots newSeasonScrollX={newSeasonScrollX} />
    </ScrollView>
  );
}

export default NewSeasonSection;

const newSeasonStyles = StyleSheet.create({
  thumbnailContainer: {
    width: SIZES.width,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    width: SIZES.width * 0.85,
    height: SIZES.width * 0.85,
    justifyContent: "flex-end",
  },
  actions: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    marginBottom: SIZES.radius,
    paddingHorizontal: SIZES.radius,
  },
  actionsLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  playNow: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.transparentWhite,
  },
  playIcon: { width: 15, height: 15, tintColor: COLORS.white },
  playNowText: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.h3,
  },
});
