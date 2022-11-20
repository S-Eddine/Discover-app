import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import { AppContext } from "../../../provider/appContext";
import FormLayout from "../../Layout/FormLayout";
import NextButton from "../../Layout/NextButton";

type CreateNumberProps = {
};

const CreateNumber = ({}: CreateNumberProps) => {
  const { context, dispatch } = useContext(AppContext);
  const [number, setNumber] = useState<string>('');

  const handleNext = () => {
    dispatch({
      ...context,
      groupe: { ...context.groupe, numberOfReader: Number(number) },
      step: "STEP_CREATE_LVL",
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <FormLayout
        title={"إنشاء مجموعة جديدة"}
        subTitle={"المرجو تحديد عدد القراء في المجموعة"}
      >
        <SafeAreaView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            keyboardType='decimal-pad'
            placeholder="عدد القراء"
          />
        </SafeAreaView>
        <NextButton
          disabled={number.length >1}
          onClick={handleNext}
        />
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

export default CreateNumber;
