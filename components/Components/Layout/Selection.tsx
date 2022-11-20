import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../../assets/colors/colors";

type SelectionProps = {
  element: string[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

const Selection = ({
  element,
  selectedIndex,
  setSelectedIndex,
}: SelectionProps) => {
  return (
    <View style={styles.container}>
      {element.map((label, index) => {
        return (
          <Pressable
            onPress={() => setSelectedIndex(index)}
            key={index}
            style={styles.button}
          >
            <Text
              style={[
                styles.text,
                selectedIndex === index ? styles.selected : styles.notSelected,
              ]}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: 'center'
  },
  button: {
    height: 70,
    width: '33,8%'
  },
  text: {
    padding: 15,
    textAlign: "center",
  },
  selected: {
    backgroundColor: colors.orange,
  },
  notSelected: {
    backgroundColor: colors.gray,
  },
});

export default Selection;
