import React from "react";
import { StyleSheet, View } from "react-native";
import useCalculator from "../hooks/useCalculator";
import Button from "./button";
import Display from "./display";

const buttons = [
  ["C", "±", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

export default function CalculatorScreen() {
  const { display, handleInput } = useCalculator();

  return (
    <View style={styles.container}>
      <Display value={display} />
      <View style={styles.buttonContainer}>
        {buttons.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((btn) => (
              <Button key={btn} label={btn} onPress={() => handleInput(btn)} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", justifyContent: "flex-end" },
  buttonContainer: { padding: 10 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
