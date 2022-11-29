import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { AppContext } from "../../../provider/appContext";
import FormLayout from "../../Layout/FormLayout";
import NextButton from "../../Layout/NextButton";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import colors from "../../../../assets/colors/colors";

type CreateEndDateProps = {};

const CreateEndDate = ({}: CreateEndDateProps) => {
  const { context, dispatch } = useContext(AppContext);

  const [date, setDate] = useState<Date | undefined>();

  const setNewDate = (event: DateTimePickerEvent, date: Date | undefined) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;
    setDate(date);
  };

  const handleNext = () => {
    dispatch({
      ...context,
      groupe: { ...context.groupe, date: date },
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
        <DateTimePicker
          value={new Date()}
          minimumDate={new Date()}
          onChange={setNewDate}
          style={styles.datePicker}
          display={'calendar'}
        />
        <NextButton disabled={false} onClick={handleNext} />
      </FormLayout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b6666'
  },
  datePicker: {
    alignSelf: 'center',
    fontSize: 45,
  },
});

export default CreateEndDate;
