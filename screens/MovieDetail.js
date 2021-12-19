import React from "react";
import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Header,
  CategoryAndRating,
  RenderMovieDetail,
} from "../components/MovieDetail";
import { COLORS, SIZES, FONTS, icons } from "../constants";

const MovieDetail = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const selectedMovie = params.selectedMovie;
  console.log("params", JSON.stringify(params, null, 2));
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: COLORS.black }}
      style={{ backgroundColor: COLORS.black }}
    >
      {/* Header */}
      <Header />
      {/* Category & Rating */}
      <CategoryAndRating />
      {/* Movie Details */}
      <RenderMovieDetail />
    </ScrollView>
  );
};

export default MovieDetail;
