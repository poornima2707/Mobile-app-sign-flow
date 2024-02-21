import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.androidLarge7}>
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.androidLarge7Child}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={styles.androidLarge7Item}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.androidLarge7Inner}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <View style={styles.resetPasswordParent}>
        <Text style={[styles.resetPassword, styles.submitTypo]}>
          Reset Password
        </Text>
        <View style={styles.groupChild} />
      </View>
      <View style={styles.rectangleShadowBox} />
      <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
      <Pressable
        style={styles.rectangleShadowBox}
        onPress={() => navigation.navigate("AndroidLarge5")}
      />
      <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
      <Image
        style={[styles.image2Icon, styles.iconLayout]}
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
  submitTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  image1Icon: {
    top: -24,
  },
  androidLarge7Child: {
    top: 16,
    left: 34,
    width: 66,
    height: 87,
    position: "absolute",
  },
  androidLarge7Item: {
    top: 122,
    left: 112,
    width: 110,
    height: 88,
    position: "absolute",
  },
  androidLarge7Inner: {
    top: 93,
    left: 100,
    width: 54,
    height: 52,
    position: "absolute",
  },
  resetPassword: {
    top: 0,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    left: 0,
    fontFamily: FontFamily.interRegular,
  },
  groupChild: {
    top: 38,
    left: 78,
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    width: 58,
    height: 2,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  resetPasswordParent: {
    top: 256,
    left: 80,
    width: 228,
    height: 39,
    position: "absolute",
  },
  rectangleShadowBox: {
    height: 32,
    width: 88,
    borderWidth: 1,
    borderColor: Color.colorFirebrick,
    backgroundColor: Color.colorRed,
    borderRadius: Border.br_6xl,
    left: 36,
    top: 519,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  submit: {
    top: 528,
    left: 61,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  image2Icon: {
    top: 748,
  },
  androidLarge7: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge4;
