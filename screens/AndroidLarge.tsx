import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AndroidLarge = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.androidLarge1}>
      <Pressable
        style={styles.image4}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
      </Pressable>
      <Image
        style={[styles.image1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.image3Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </Pressable>
      <Text style={styles.theFastestFood}>
        The Fastest food delivery service
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    opacity: 0.1,
    width: 360,
    position: "absolute",
  },
  icon: {
    opacity: 0.1,
    height: "100%",
    width: "100%",
  },
  image4: {
    left: -70,
    height: 252,
    width: 360,
    top: 255,
    position: "absolute",
  },
  image1Icon: {
    top: 0,
    height: 234,
  },
  image3Icon: {
    top: 486,
    height: 314,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 92,
    width: 182,
    height: 182,
    top: 255,
    position: "absolute",
  },
  container: {
    left: 123,
    top: 285,
    width: 121,
    height: 123,
    position: "absolute",
  },
  theFastestFood: {
    marginLeft: -74,
    top: 458,
    left: "50%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.loveLightRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  androidLarge1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge;
