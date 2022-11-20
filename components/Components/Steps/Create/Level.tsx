import React, { useContext, useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import { AppContext } from "../../../provider/appContext";
import { TLevel } from "../../../provider/types";
import FormLayout from "../../Layout/FormLayout";
import NextButton from "../../Layout/NextButton";
import Selection from "../../Layout/Selection";

type CreateLevelProps = {};

const LEVEL_TABLE = ["LOW", "MEDIUM", "HIGH"];

const CreateLevel = ({}: CreateLevelProps) => {
  const { context, dispatch } = useContext(AppContext);

  const [userName, setUserName] = useState<string>("");
  const [level, setLevel] = useState<TLevel>("MEDIUM");

  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const handleSelectedLevel = (index: number) => {
    console.log("SEA try ", index);
    setSelectedIndex(index);
  };

  useEffect(() => {
    console.log("Re-render Create");
  });

  const handleNext = () => {
    dispatch({
      ...context,
      groupe: {
        ...context.groupe,
        readers: [
          { readerName: userName, level: LEVEL_TABLE[selectedIndex] as TLevel },
        ],
      },
      step: "STEP_CREATE_NOR",
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <FormLayout
        title={"إنشاء مجموعة جديدة"}
        subTitle={"المرجو تحديد اسم المجموعة الجديدة"}
      >
        <SafeAreaView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setUserName}
            value={userName}
          />
        </SafeAreaView>
        <Selection
          element={LEVEL_TABLE}
          selectedIndex={selectedIndex}
          setSelectedIndex={handleSelectedLevel}
        />
        <NextButton disabled={userName.length < 3} onClick={handleNext} />
      </FormLayout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    height: 80,
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 56,
    writingDirection: "rtl",
  },
});

export default CreateLevel;
