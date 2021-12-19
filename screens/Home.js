import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import { COLORS } from "../constants";
import {
  Header,
  NewSeasonSection,
  ContinueWatchingSection,
} from "../components/Home";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.black, paddingBottom: 100 }}
    >
      <StatusBar barStyle='dark-content' />
      <ScrollView>
        <Header />
        <NewSeasonSection navigation={navigation} />
        <ContinueWatchingSection navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
