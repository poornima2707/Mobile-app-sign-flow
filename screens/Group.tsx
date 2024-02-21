import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.newPasswordParent}>
      <Text style={[styles.newPassword, styles.newFlexBox]}> New Password</Text>
      <View style={styles.groupChild} />
      <Text style={[styles.enterNewPassword, styles.newFlexBox]}>
        Enter new password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  newFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  newPassword: {
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
  enterNewPassword: {
    top: 41,
    left: 20,
    fontSize: FontSize.size_sm,
    fontWeight: "100",
    fontFamily: FontFamily.encodeSansSemiExpandedThin,
  },
  newPasswordParent: {
    flex: 1,
    width: "100%",
    height: 71,
  },
});

export default Group;
