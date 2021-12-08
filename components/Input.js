import React, { useReducer, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
// import { TextInput } from "react-native-paper";
// import Colors from "../../constants/Colors";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = React.forwardRef((props, ref) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initiallyValid,
    touched: false,
  });

  const { onInputChange, id } = props;

  // useEffect(() => {
  //   if (inputState.touched) {
  //     onInputChange(id, inputState.value, inputState.isValid);
  //   }
  // }, [inputState, onInputChange, id]);

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  return (
    <View style={styles.formControl}>
      <TextInput
        {...props}
        style={styles.input}
        // value={inputState.value}
        onChangeText={() => {}}
        onBlur={lostFocusHandler}
        ref={ref}
      />
      {/* {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )} */}
    </View>
  );
});

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
    marginTop: 10,
    flexDirection: "column",
    // paddingHorizontal: 5,
    // marginVertical: -1,
    // marginBottom: 15,
    // position: "absolute",
    // bottom: -100,
  },
  label: {
    // fontFamily: "product-sans-bold",
    marginVertical: 5,
    color: "black",
    fontSize: 16,
  },
  input: {
    // elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderBottomColor: "#ebfdffff",
    borderBottomWidth: 1,
    height: 40,
    backgroundColor: "#3b76e3ff",
    color: "white",
    // fontFamily: "product-sans-regular",
    fontSize: 15,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    // fontFamily: "product-sans-regular",
    fontSize: 14,
    color: "red",
  },
});

export default Input;
