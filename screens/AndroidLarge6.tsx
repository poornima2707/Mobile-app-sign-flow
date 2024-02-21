import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.androidLarge9, styles.androidBg]}>
      <View style={styles.androidPosition}>
        <View style={styles.androidPosition}>
          <View style={[styles.androidLarge4, styles.androidPosition]}>
            <View style={styles.androidPosition}>
              <View style={[styles.androidLarge4, styles.androidPosition]}>
                <View style={styles.androidLarge3Child} />
                <Image
                  style={styles.androidLarge3Item}
                  contentFit="cover"
                  source={require("../assets/rectangle-1.png")}
                />
                <Image
                  style={[styles.image1Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/image-1.png")}
                />
                <View
                  style={[styles.androidLarge3Inner, styles.logInParentLayout]}
                >
                  <View style={[styles.logInParent, styles.logInParentLayout]}>
                    <Text style={styles.logIn}>Log in</Text>
                    <View
                      style={[styles.groupChild, styles.groupChildShadowBox]}
                    />
                    <Text
                      style={[styles.loginDetailsHere, styles.dontHaveAnTypo]}
                    >
                      Login details here
                    </Text>
                    <View style={[styles.userNameParent, styles.parentLayout]}>
                      <Text style={[styles.userName, styles.signup1Typo]}>
                        User Name
                      </Text>
                      <View style={styles.groupItem} />
                    </View>
                    <View style={[styles.passwordParent, styles.parentLayout]}>
                      <Text style={[styles.userName, styles.signup1Typo]}>
                        Password
                      </Text>
                      <View style={styles.groupItem} />
                      <Text style={[styles.enterPassword, styles.enterTypo]}>
                        Enter Password
                      </Text>
                    </View>
                  </View>
                </View>
                <Text
                  style={[styles.dontHaveAn, styles.signupPosition]}
                >{`Don’t have an account? `}</Text>
                <Text style={[styles.logInWith, styles.logTypo]}>
                  Log in with
                </Text>
                <Pressable
                  style={[styles.signup, styles.signupPosition]}
                  onPress={() => navigation.navigate("AndroidLarge1")}
                >
                  <Text style={[styles.signup1, styles.signup1Typo]}>
                    SignUp
                  </Text>
                </Pressable>
                <View
                  style={[styles.rectangleView, styles.groupChildShadowBox]}
                />
                <Pressable
                  style={styles.logIn1}
                  onPress={() => navigation.navigate("AndroidLarge5")}
                >
                  <Text style={[styles.logIn2, styles.logTypo]}>Log in</Text>
                </Pressable>
                <Text style={[styles.enterUsername, styles.enterTypo]}>
                  Enter UserName
                </Text>
                <Image
                  style={[styles.image5Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/image-5.png")}
                />
                <Pressable
                  style={styles.forgotPassword}
                  onPress={() => navigation.navigate("AndroidLarge2")}
                >
                  <Text style={[styles.forgotPassword1, styles.signup1Typo]}>
                    Forgot Password?
                  </Text>
                </Pressable>
                <Image
                  style={[styles.ellipseIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-3.png")}
                />
                <Image
                  style={[
                    styles.androidLarge3Child1,
                    styles.androidChildLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-4.png")}
                />
                <Image
                  style={[styles.image6Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/image-1.png")}
                />
                <Image
                  style={[
                    styles.androidLarge3Child2,
                    styles.androidChildLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/ellipse-4.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  androidPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  iconLayout1: {
    opacity: 0.1,
    height: 234,
    width: 360,
    left: 0,
    position: "absolute",
  },
  logInParentLayout: {
    height: 271,
    width: 294,
    position: "absolute",
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
  dontHaveAnTypo: {
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
  signup1Typo: {
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
  signupPosition: {
    top: 781,
    position: "absolute",
  },
  logTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  iconLayout: {
    width: 26,
    position: "absolute",
  },
  androidChildLayout: {
    height: 27,
    top: 603,
    width: 26,
    position: "absolute",
  },
  androidLarge3Child: {
    top: 513,
    left: 186,
    backgroundColor: "#fcfafa",
    width: 149,
    height: 26,
    position: "absolute",
  },
  androidLarge3Item: {
    top: 31,
    left: 26,
    width: 309,
    height: 198,
    position: "absolute",
  },
  image1Icon: {
    top: -44,
  },
  logIn: {
    left: 104,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 44,
    left: 128,
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    width: 58,
    height: 2,
  },
  loginDetailsHere: {
    top: 54,
    left: 85,
    position: "absolute",
  },
  userName: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 28,
    backgroundColor: Color.colorGainsboro,
    height: 43,
    width: 294,
    left: 0,
    position: "absolute",
  },
  userNameParent: {
    top: 111,
  },
  enterPassword: {
    top: 41,
    left: 20,
  },
  passwordParent: {
    top: 200,
  },
  logInParent: {
    left: 0,
    top: 0,
  },
  androidLarge3Inner: {
    top: 229,
    left: 33,
  },
  dontHaveAn: {
    left: 75,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
  },
  logInWith: {
    top: 581,
    left: 148,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    position: "absolute",
  },
  signup1: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorRed,
    width: 57,
    height: 15,
  },
  signup: {
    left: 247,
  },
  rectangleView: {
    top: 512,
    left: 32,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorRed,
    borderColor: Color.colorFirebrick,
    borderWidth: 1,
    width: 68,
    height: 28,
  },
  logIn2: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  logIn1: {
    left: 49,
    top: 518,
    position: "absolute",
  },
  enterUsername: {
    top: 381,
    left: 50,
  },
  image5Icon: {
    top: 470,
    left: 291,
    height: 19,
  },
  forgotPassword1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  forgotPassword: {
    left: 195,
    top: 516,
    position: "absolute",
  },
  ellipseIcon: {
    top: 604,
    left: 130,
    height: 25,
  },
  androidLarge3Child1: {
    left: 173,
  },
  image6Icon: {
    top: 749,
  },
  androidLarge3Child2: {
    left: 212,
  },
  androidLarge4: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: 360,
  },
  androidLarge9: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge6;
