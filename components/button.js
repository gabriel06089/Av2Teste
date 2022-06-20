import { View, Text, StyleSheet, Platform } from "react-native";
import React, { useState, useRef } from "react";
import { Modalize } from "react-native-modalize";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Button() {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }
  };
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={onOpen}>
        <Text style={styles.title}> Realizar pedido</Text>
      </TouchableOpacity>
      <Modalize ref={modalizeRef}>
        <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>A sua data é </Text>
          <Text style={styles.pickedDate}>{date.toLocaleDateString()}s</Text>
          <Text style={styles.pickedDate}>mais 1 a 3 dias uteis</Text>
        </View>

        {!isPickerShow && (
          <View style={styles.btnContainer1}>
            <TouchableOpacity
              title="Abrir calendario"
              color="black"
              onPress={showPicker}
            />
          </View>
        )}

        {isPickerShow && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onChange}
            style={styles.datePicker}
          />
        )}
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  btnContainer: {
    width: "90%",
    height: 50,
    borderRadius: 5,
    marginLeft: "5%",
    backgroundColor: "#17181a",
    marginVertical: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    color: "#fff",
  },
  container1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: "black",
  },
  btnContainer1: {
    padding: 30,
  },

  datePicker: {
    width: 320,
    height: 260,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
