import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type NextButtonProps = {
  disabled: boolean;
  label?: string;
  onClick: () => void;
};

const NextButton = ({ disabled, label= `< التالي`, onClick }: NextButtonProps) => {
  return (
    <Pressable onPress={onClick} disabled={disabled}>
      <Text style={styles.nextButton}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    writingDirection: "rtl",
    marginVertical: 20,
  },
});

export default NextButton;
