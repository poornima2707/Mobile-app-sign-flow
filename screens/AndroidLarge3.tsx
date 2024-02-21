import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.androidLarge6}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.androidLarge6Child}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={styles.androidLarge6Item}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.androidLarge6Inner}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <View style={styles.otpParent}>
        <Text style={[styles.otp, styles.otpTypo]}>OTP</Text>
        <View style={[styles.groupChild, styles.childShadowBox]} />
        <Text
          style={[styles.weWillSend, styles.ifYouDontTypo]}
        >{`We will send you a code verification to 
                 you on email address.

`}</Text>
        <Text style={[styles.ifYouDont, styles.ifYouDontTypo]}>
          If you don’t receive a code?
        </Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupLayout]} />
      </View>
      <View style={[styles.androidLarge6Child1, styles.childShadowBox]} />
      <Pressable
        style={styles.verifyOtp}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <Text style={[styles.verifyOtp1, styles.otpTypo]}>Verify OTP</Text>
      </Pressable>
      <Text style={styles.resend}>Resend</Text>
      <View style={[styles.androidLarge6Child2, styles.groupLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  otpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  childShadowBox: {
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
  ifYouDontTypo: {
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 46,
    width: 49,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  image1Icon: {
    top: -24,
    width: 360,
    height: 234,
    opacity: 0.1,
    left: 0,
    position: "absolute",
  },
  androidLarge6Child: {
    top: 16,
    left: 34,
    width: 66,
    height: 87,
    position: "absolute",
  },
  androidLarge6Item: {
    top: 122,
    width: 110,
    height: 88,
    left: 112,
    position: "absolute",
  },
  androidLarge6Inner: {
    top: 93,
    left: 100,
    width: 54,
    height: 52,
    position: "absolute",
  },
  otp: {
    top: 0,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 112,
    position: "absolute",
  },
  groupChild: {
    top: 43,
    left: 114,
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    width: 58,
    height: 2,
  },
  weWillSend: {
    top: 149,
    height: 37,
    width: 342,
  },
  ifYouDont: {
    top: 189,
  },
  groupItem: {
    left: 146,
    top: 67,
    height: 46,
    width: 49,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
  },
  groupInner: {
    left: 74,
    top: 67,
    height: 46,
    width: 49,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
  },
  rectangleView: {
    left: 214,
    top: 67,
    height: 46,
    width: 49,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
  },
  otpParent: {
    top: 251,
    left: 44,
    height: 208,
    width: 342,
    position: "absolute",
  },
  androidLarge6Child1: {
    top: 499,
    left: 155,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorRed,
    borderColor: Color.colorFirebrick,
    borderWidth: 1,
    width: 88,
    height: 32,
  },
  verifyOtp1: {
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  verifyOtp: {
    left: 168,
    top: 508,
    position: "absolute",
  },
  resend: {
    top: 440,
    left: 258,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  androidLarge6Child2: {
    top: 318,
    left: 51,
  },
  androidLarge6: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge3;
