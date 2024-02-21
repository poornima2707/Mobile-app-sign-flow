import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge5 = () => {
  return (
    <View style={styles.androidLarge8}>
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={styles.androidLarge8Child} />
      <Text style={styles.done}>Done</Text>
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.image7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.image8Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.image9Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    opacity: 0.1,
    height: 234,
    width: 360,
    left: 0,
    position: "absolute",
  },
  image6Icon: {
    top: 157,
    left: 116,
    width: 128,
    height: 128,
    position: "absolute",
  },
  androidLarge8Child: {
    top: 444,
    left: 136,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorRed,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorFirebrick,
    borderWidth: 1,
    width: 88,
    height: 32,
    position: "absolute",
  },
  done: {
    top: 453,
    left: 165,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  image1Icon: {
    top: 0,
  },
  image7Icon: {
    top: 211,
  },
  image8Icon: {
    top: 445,
  },
  image9Icon: {
    top: 679,
  },
  androidLarge8: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge5;
