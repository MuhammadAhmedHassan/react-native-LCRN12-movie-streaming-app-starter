import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { COLORS, SIZES, FONTS, icons } from "../../constants";
import { ProgressBar } from "../";

const RenderMovieDetail = () => {
  const { params } = useRoute();
  const selectedMovie = params.selectedMovie;

  const isIOS = Platform.OS === "ios";
  const progress = selectedMovie?.details?.progress;
  return (
    <View style={styles.container}>
      {/* Title, running time and progress bar */}
      <View>
        {/* Title and running time */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h4 }}>
            {selectedMovie?.details?.currentEpisode}
          </Text>
          <Text style={{ color: COLORS.lightGray, ...FONTS.body4 }}>
            {selectedMovie?.details?.runningTime}
          </Text>
        </View>
        {/* Progress Bar */}
        <ProgressBar
          containerStyle={{ marginTop: SIZES.radius }}
          barStyle={{ height: 5, borderRadius: 3 }}
          barPercentage={progress}
        />
      </View>

      {/* Watch */}
      <TouchableOpacity
        onPress={() => console.log("watch")}
        style={{
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: isIOS ? SIZES.padding * 2 : 0,
          borderRadius: 15,
          backgroundColor: COLORS.primary,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
          {progress === "0%" ? "WATCH NOW" : "CONTINUE WATCH"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderMovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    justifyContent: "space-around",
  },
});
