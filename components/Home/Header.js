import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, SIZES, icons, images } from "../../constants";

function Header() {
  return (
    <View style={headerStyles.container}>
      {/* Profile */}
      <TouchableOpacity
        style={headerStyles.iconContainer}
        onPress={() => console.log("profile")}
      >
        <Image
          source={images.profile_photo}
          resizeMode='cover'
          style={headerStyles.icon}
        />
      </TouchableOpacity>
      {/* Screen Mirror */}
      <TouchableOpacity
        style={headerStyles.iconContainer}
        onPress={() => console.log("screen mirror")}
      >
        <Image
          source={icons.airplay}
          resizeMode='cover'
          style={headerStyles.mirrorIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  mirrorIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary,
  },
});
