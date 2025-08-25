import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const { width } = Dimensions.get("window");
const buttonSize = width / 4 - 10;

export default function Button({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  const isOperator = ["÷", "×", "−", "+", "="].includes(label);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOperator && styles.operator,
        label === "0" && styles.zero,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 28, color: "#fff" },
  operator: { backgroundColor: "#ff9500" },
  zero: {
    width: buttonSize * 2 + 10,
    borderRadius: buttonSize,
    alignItems: "flex-start",
    paddingLeft: 30,
  },
});
