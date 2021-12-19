import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

function StillWatchingProfiles({ profiles = [] }) {
  const length = profiles.length;
  const moreThan3 = length > 3;
  const profilesToRender = moreThan3 ? profiles.slice(0, 3) : profiles; // if more than 3 then extract first 3 else we'll have only 3 profiles

  return (
    <View style={stillWatchingStyles.container}>
      {profilesToRender.map((item, index) => {
        const firstItem = index === 0;
        return (
          <View
            key={`profile-${item.id || index}`}
            style={firstItem ? undefined : { marginLeft: -15 }}
          >
            <Image
              source={item.profile}
              resizeMode='cover'
              style={stillWatchingStyles.profileImage}
            />
          </View>
        );
      })}
      {moreThan3 && (
        <Text style={stillWatchingStyles.moreThan3Text}>+{length - 3}</Text>
      )}
    </View>
  );
}

export default StillWatchingProfiles;

const stillWatchingStyles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.black,
  },
  moreThan3Text: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.body3,
  },
});
