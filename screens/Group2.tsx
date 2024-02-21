import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Group2 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.verifiedParent}>
        <Text style={[styles.verified, styles.verifiedFlexBox]}>Verified</Text>
        <View style={styles.groupChild} />
        <Text
          style={[styles.yourAccountHas, styles.verifiedFlexBox]}
        >{`Your account has been verified 
               succesfully`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  verifiedFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  verified: {
    left: 63,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    top: 0,
  },
  groupChild: {
    top: 44,
    left: 87,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    width: 58,
    height: 2,
    position: "absolute",
  },
  yourAccountHas: {
    top: 54,
    fontSize: FontSize.size_base,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    left: 0,
  },
  verifiedParent: {
    width: 231,
    left: 0,
    top: 0,
    position: "absolute",
    height: 92,
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 92,
  },
});

export default Group2;
