import React, { Children, ReactNode } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import colors from "../../../assets/colors/colors";

type FormLayoutProps = {
  title: string;
  subTitle: string;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

const FormLayout = ({
  title,
  subTitle,
  style,
  children,
}: FormLayoutProps) => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <View>
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scr: {
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    color: colors.white,
    backgroundColor: colors.white,
    marginTop: 300,
    direction: "rtl",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Lato-Bold",
    fontSize: 32,
    writingDirection: "rtl",
    marginVertical: 20,
  },
  subTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    writingDirection: "rtl",
    color: colors.darkGray,
    marginBottom: 30,
  },
});

export default FormLayout;
