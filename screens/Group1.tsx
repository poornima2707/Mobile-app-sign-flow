import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Group1 = () => {
  return (
    <View style={styles.confirmPasswordParent}>
      <Text style={[styles.confirmPassword, styles.confirmFlexBox]}>
        Confirm Password
      </Text>
      <View style={styles.groupChild} />
      <Text style={[styles.enterConfirmPassword, styles.confirmFlexBox]}>
        Enter confirm password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  confirmPassword: {
    top: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    left: 0,
  },
  groupChild: {
    top: 28,
    backgroundColor: Color.colorGainsboro,
    width: 294,
    height: 43,
    left: 0,
    position: "absolute",
  },
  enterConfirmPassword: {
    top: 41,
    left: 20,
    fontSize: FontSize.size_sm,
    fontWeight: "100",
    fontFamily: FontFamily.encodeSansSemiExpandedThin,
  },
  confirmPasswordParent: {
    flex: 1,
    width: "100%",
    height: 71,
  },
});

export default Group1;
