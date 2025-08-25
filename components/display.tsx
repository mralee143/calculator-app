import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Display({ value }: { value: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 120,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  text: { fontSize: 60, color: "white" },
});
