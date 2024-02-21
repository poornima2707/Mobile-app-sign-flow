import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.androidLarge2}>
      <Image
        style={styles.androidLarge2Child}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.signUpParent, styles.groupItemLayout]}>
        <Text style={[styles.signUp, styles.signTypo]}>Sign Up</Text>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Text style={[styles.signupDetailsHere, styles.alreadyHaveAnTypo]}>
          Signup details here
        </Text>
        <View style={[styles.userNameParent, styles.parentLayout]}>
          <Text style={[styles.userName, styles.login1Typo]}>User Name</Text>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
        </View>
        <View style={[styles.phoneParent, styles.parentLayout]}>
          <Text style={[styles.userName, styles.login1Typo]}>Phone</Text>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Text style={[styles.enterPhoneno, styles.enterTypo]}>
            Enter Phoneno.
          </Text>
        </View>
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={[styles.userName, styles.login1Typo]}>Email</Text>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Text style={[styles.enterEmail, styles.enterTypo]}>Enter Email</Text>
        </View>
        <View style={[styles.passwordParent, styles.parentLayout]}>
          <Text style={[styles.userName, styles.login1Typo]}>Password</Text>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Text style={[styles.enterEmail, styles.enterTypo]}>
            Enter Password
          </Text>
        </View>
      </View>
      <Text
        style={[styles.alreadyHaveAn, styles.loginPosition]}
      >{`Already have an account? `}</Text>
      <Pressable
        style={[styles.login, styles.loginPosition]}
        onPress={() => navigation.navigate("AndroidLarge6")}
      >
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </Pressable>
      <View style={[styles.androidLarge2Item, styles.groupChildShadowBox]} />
      <Pressable
        style={styles.signUp1}
        onPress={() => navigation.navigate("AndroidLarge5")}
      >
        <Text style={[styles.signUp2, styles.signTypo]}>Sign Up</Text>
      </Pressable>
      <Text style={[styles.enterUsername, styles.enterTypo]}>
        Enter UserName
      </Text>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={[styles.image6Icon, styles.iconLayout]}
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
    position: "absolute",
  },
  groupItemLayout: {
    width: 294,
    position: "absolute",
  },
  signTypo: {
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
  alreadyHaveAnTypo: {
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
  },
  parentLayout: {
    height: 71,
    width: 294,
    left: 0,
    position: "absolute",
  },
  login1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  enterTypo: {
    fontFamily: FontFamily.encodeSansSemiExpandedThin,
    fontSize: FontSize.size_sm,
    fontWeight: "100",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  loginPosition: {
    top: 781,
    position: "absolute",
  },
  androidLarge2Child: {
    top: 31,
    left: 26,
    width: 309,
    height: 198,
    position: "absolute",
  },
  image1Icon: {
    top: -44,
    left: 0,
  },
  signUp: {
    left: 91,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  groupChild: {
    top: 44,
    left: 128,
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    width: 58,
    height: 2,
  },
  signupDetailsHere: {
    top: 54,
    left: 87,
    position: "absolute",
  },
  userName: {
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: 0,
  },
  groupItem: {
    top: 28,
    backgroundColor: Color.colorGainsboro,
    height: 43,
    left: 0,
  },
  userNameParent: {
    top: 111,
  },
  enterPhoneno: {
    top: 40,
    left: 16,
  },
  phoneParent: {
    top: 207,
  },
  enterEmail: {
    top: 41,
    left: 20,
  },
  emailParent: {
    top: 287,
  },
  passwordParent: {
    top: 383,
  },
  signUpParent: {
    top: 229,
    left: 33,
    height: 454,
  },
  alreadyHaveAn: {
    left: 75,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
  },
  login1: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorRed,
    width: 57,
    height: 15,
  },
  login: {
    left: 263,
  },
  androidLarge2Item: {
    top: 701,
    left: 32,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorRed,
    borderColor: Color.colorFirebrick,
    borderWidth: 1,
    width: 68,
    height: 28,
  },
  signUp2: {
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  signUp1: {
    left: 44,
    top: 707,
    position: "absolute",
  },
  enterUsername: {
    top: 381,
    left: 50,
  },
  image5Icon: {
    top: 653,
    left: 291,
    width: 26,
    height: 19,
    position: "absolute",
  },
  image6Icon: {
    top: 752,
    left: 10,
  },
  androidLarge2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge1;
