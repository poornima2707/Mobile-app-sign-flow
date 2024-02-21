import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image1 = () => {
  return (
    <ImageBackground
      style={styles.image2Icon}
      resizeMode="cover"
      source={require("../assets/image-1.png")}
    />
  );
};

const styles = StyleSheet.create({
  image2Icon: {
    flex: 1,
    width: "100%",
    height: 234,
    opacity: 0.1,
  },
});

export default Image1;
