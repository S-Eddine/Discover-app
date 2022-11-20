import React, { ReactNode, useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import colors from "../../assets/colors/colors";

import Header from "./Header";
import Discover from "./Discover";
import Activities from "./Activities";
import LearnMore from "./LearnMore";
import FormLayout from "../Components/Layout/FormLayout";
import Welcome from "../Components/Steps/Welcome";
import CreateName from "../Components/Steps/Create/Name";
import { TSteps } from "../provider/types";
import { AppContext } from "../provider/appContext";

type HomeProps = {
  navigation: any;
};

const Home = ({ navigation }: HomeProps) => {
  
  const { context } = useContext(AppContext);
  console.log("Step changed 1");


  useEffect(() => {
    console.log("Step changed");
  }, [context.step]);

  const getContent = (): ReactNode => {
    switch (context.step) {
      case "STEP_WELCOM":
        return (
          <Welcome />
        );
      case "STEP_CREATE_NAME":
        return (
          <CreateName />
        );

      default:
        return (
          <View>
            <Text>Default view</Text>
          </View>
        );
    }
  };
  return (
    <View style={styles.container}>
        {getContent()}
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
