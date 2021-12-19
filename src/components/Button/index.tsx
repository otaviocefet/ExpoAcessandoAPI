import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";

export default function Button({ size, title, onPress, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={size ? styles.buttonSize : styles.button}
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B61AD5',
    borderRadius: 5,
    margin: 10,
  },
  buttonSize: {
    backgroundColor: 'blue',
    borderRadius: 5,
    margin: 10,
    width: 120,
  },
  text: {
    color: 'white',
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontSize: 18,
  },
});
