import React, { useContext, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../../assets/colors/colors";
import { AppContext } from "../../provider/appContext";
import FormLayout from "../Layout/FormLayout";

type WelcomeProps = {
};

const Welcome = ({}: WelcomeProps) => {
    const {context, dispatch} = useContext(AppContext);


  useEffect(() => {
    console.log("Re-render welcome")
  })

  const onJoinPress = () => {
    dispatch({...context, step: "STEP_JOIN"})
  };

  const onStartPress = () => {
    dispatch({...context, step: "STEP_CREATE_NAME"})
    console.log("SEA -> ", context)
  };
  return (
    <FormLayout
      title={"السلام عليكم"}
      subTitle={"مرحبا بكم في تطبيق الختمة الجماعية."}
    >
        <Pressable style={styles.JointButton} onPress={onJoinPress}>
          <Text style={styles.textJoin}>{"الإنضمام إلى مجموعة"}</Text>
        </Pressable>
        <Pressable style={styles.JointButton} onPress={onStartPress}>
          <Text style={styles.textJoin}>{"بدأ ختمة جديدة"}</Text>
        </Pressable>
    </FormLayout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
  JointButton: {
    padding: 10
  },
  textJoin: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    color: colors.darkGray,
    textAlign: 'center',
  },
  startButton: {},
  text: {},
});

export default Welcome;
