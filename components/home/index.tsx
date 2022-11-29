import React, { ReactNode, useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../assets/colors/colors";
import Welcome from "../Components/Steps/Welcome";
import CreateName from "../Components/Steps/Create/Name";
import { AppContext } from "../provider/appContext";
import CreateNumber from "../Components/Steps/Create/Number";
import CreateLevel from "../Components/Steps/Create/Level";
import CreateEndDate from "../Components/Steps/Create/Date";

type HomeProps = {
  navigation: any;
};

const Home = ({ navigation }: HomeProps) => {
  
  const { context } = useContext(AppContext);

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
      
      case 'STEP_CREATE_NOR':
        return <CreateNumber />
      
      case 'STEP_CREATE_LVL':
        return <CreateLevel />

      case 'STEP_CREATE_DATE':
        return <CreateEndDate />

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
