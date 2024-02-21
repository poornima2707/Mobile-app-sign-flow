import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Rectangle = () => {
  return <View style={styles.rectangle} />;
};

const styles = StyleSheet.create({
  rectangle: {
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 100,
  },
});

export default Rectangle;
