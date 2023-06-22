import React from "react";
import { Dimensions, Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    marginTop: Platform.select({
      ios: 24,
      android: 36,
    }),
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    borderRadius: 8,
    maxWidth: "80%",
    width: 300,
  },
});
