import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Rectangle1 = () => {
  return <View style={styles.rectangle2} />;
};

const styles = StyleSheet.create({
  rectangle2: {
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 100,
  },
});

export default Rectangle1;
