import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const InstractionText = ({ children, style }) => {
  return <Text style={[styles.label, style]}> {children}</Text>;
};

export default InstractionText;

const styles = StyleSheet.create({
  label: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
