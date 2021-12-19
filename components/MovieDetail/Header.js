import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { SIZES, COLORS, icons, FONTS } from "../../constants";

const Header = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const selectedMovie = params.selectedMovie;

  return (
    <ImageBackground
      source={selectedMovie?.details?.image}
      resizeMode='cover'
      style={{
        width: "100%",
        height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
      }}
    >
      <View style={{ flex: 1 }}>
        <HeaderBar />

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["transparent", COLORS.black]}
            style={{
              width: "100%",
              height: 150,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {/* Season */}
            <Text style={styles.seasonText}>
              {selectedMovie?.details?.season}
            </Text>
            {/* Name */}
            <Text style={styles.movieName}>{selectedMovie?.name}</Text>
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  seasonText: {
    color: COLORS.white,
    ...FONTS.body4,
  },
  movieName: {
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.h1,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    paddingHorizontal: SIZES.padding,
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: COLORS.transparentBlack,
  },
  icon: { width: 20, height: 20, tintColor: COLORS.white },
});

function HeaderBar() {
  const navigation = useNavigation();

  function renderButton(icon, onPress) {
    return (
      <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {/* Back */}
      {renderButton(icons.left_arrow, () => navigation.goBack())}
      {/* Share */}
      {renderButton(icons.upload, () => console.log("share"))}
    </View>
  );
}
