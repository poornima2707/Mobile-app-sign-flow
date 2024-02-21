import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.androidLarge5}>
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.androidLarge5Child}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={styles.androidLarge5Item}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.androidLarge5Inner}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <View style={styles.forgotPasswordParent}>
        <Text style={[styles.forgotPassword, styles.emailTypo1]}>
          Forgot Password
        </Text>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Text
          style={[styles.enterYourEmail, styles.enterTypo]}
        >{`Enter your email for verification process.We will
             send 4 digit code to your email.`}</Text>
        <View style={[styles.emailParent, styles.groupItemLayout]}>
          <Text style={[styles.email, styles.emailTypo]}>Email</Text>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Text style={[styles.enterEmail, styles.enterTypo]}>Enter Email</Text>
        </View>
      </View>
      <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
      <Pressable
        style={styles.sendOtp}
        onPress={() => navigation.navigate("AndroidLarge3")}
      >
        <Text style={[styles.sendOtp1, styles.emailTypo1]}>Send OTP</Text>
      </Pressable>
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
  emailTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  groupChildShadowBox: {
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
  enterTypo: {
    fontWeight: "100",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupItemLayout: {
    width: 294,
    position: "absolute",
  },
  emailTypo: {
    fontSize: FontSize.size_base,
    left: 0,
  },
  image1Icon: {
    top: -24,
  },
  androidLarge5Child: {
    top: 16,
    left: 34,
    width: 66,
    height: 87,
    position: "absolute",
  },
  androidLarge5Item: {
    top: 122,
    left: 112,
    width: 110,
    height: 88,
    position: "absolute",
  },
  androidLarge5Inner: {
    top: 93,
    left: 100,
    width: 54,
    height: 52,
    position: "absolute",
  },
  forgotPassword: {
    left: 63,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupChild: {
    top: 44,
    left: 149,
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    width: 58,
    height: 2,
  },
  enterYourEmail: {
    top: 61,
    fontFamily: FontFamily.interThin,
    height: 37,
    fontSize: FontSize.size_base,
    left: 0,
    width: 342,
  },
  email: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 28,
    backgroundColor: Color.colorGainsboro,
    height: 43,
    left: 0,
    width: 294,
  },
  enterEmail: {
    top: 41,
    left: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.encodeSansSemiExpandedThin,
  },
  emailParent: {
    top: 151,
    left: 24,
    height: 71,
  },
  forgotPasswordParent: {
    top: 250,
    left: 9,
    height: 222,
    width: 342,
    position: "absolute",
  },
  rectangleView: {
    top: 493,
    left: 32,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorRed,
    borderColor: Color.colorFirebrick,
    borderWidth: 1,
    width: 68,
    height: 28,
  },
  sendOtp1: {
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  sendOtp: {
    left: 37,
    top: 499,
    position: "absolute",
  },
  image2Icon: {
    top: 750,
  },
  androidLarge5: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge2;
