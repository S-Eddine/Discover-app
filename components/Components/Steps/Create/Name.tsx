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

type CreateNameProps = {
};

const CreateName = ({}: CreateNameProps) => {
  const { context, dispatch } = useContext(AppContext);

  const [name, setName] = useState<string>("");

  const handleNext = () => {
    dispatch({
      ...context,
      groupe: { ...context.groupe, name: name },
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
            onChangeText={setName}
            value={name}
            placeholder="اسم المجموعة"
          />
        </SafeAreaView>
        <NextButton
          disabled={name.length < 3}
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

export default CreateName;
