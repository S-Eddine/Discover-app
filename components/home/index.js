import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import colors from "../../assets/colors/colors";

import Header from "./Header";
import Discover from "./Discover";
import Activities from "./Activities";
import LearnMore from "./LearnMore";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Discover navigation={navigation} />
        <Activities />
        <LearnMore />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
});

export default Home;
