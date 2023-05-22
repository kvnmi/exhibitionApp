import React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import colors from "../config/colors";
import {
  heightPixel,
  widthPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  fontPixel,
  normalise,
} from "../utils/normalize";

interface props {
  price: string;
}

function Banner({ price }: props) {
  return (
    <View style={styles.banner}>
      <Image
        source={require("../../assets/bg-circle.png")}
        style={styles.imgA}
        resizeMode="center"
      />
      <Image
        source={require("../../assets/bg_circle_b.png")}
        style={styles.imgB}
        resizeMode="center"
      />
      <Text style={styles.bannerText}>{price}</Text>
      <Text style={styles.bannerTagline}>Total Balance</Text>
      <View style={styles.btnView}>
        <Pressable style={styles.btnCtn}>
          <Text style={styles.btnTxt}>Add Money</Text>
        </Pressable>
        <Pressable style={styles.btnCtn}>
          <Text style={styles.btnTxt}>Withdraw</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  banner: {
    height: heightPixel(173),
    width: widthPixel(326),
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: pixelSizeVertical(15),
    position: "relative",
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyDiv: { paddingHorizontal: pixelSizeHorizontal(20) },
  imgA: {
    position: "absolute",
    top: -3,
    left: -3,
    height: heightPixel(60),
    width: widthPixel(60),
  },
  imgB: {
    position: "absolute",
    bottom: -3,
    right: -3,
    height: heightPixel(60),
    width: widthPixel(60),
  },
  bannerText: {
    color: "white",
    fontWeight: "700",
    fontSize: fontPixel(30),
  },
  bannerTagline: {
    color: "white",
    fontSize: fontPixel(16),
  },
  btnCtn: {
    backgroundColor: "white",
    paddingHorizontal: pixelSizeVertical(10),
    paddingVertical: pixelSizeVertical(8),
    borderRadius: 5,
  },
  btnTxt: {
    fontSize: fontPixel(12),
  },
  btnView: {
    flexDirection: "row",
    columnGap: normalise(26),
    marginTop: pixelSizeVertical(20),
  },
});

export default Banner;
