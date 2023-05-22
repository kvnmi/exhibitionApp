import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import colors from "../../config/colors";
import {
  normalise,
  fontPixel,
  heightPixel,
  widthPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../utils/normalize";

interface props {
  container: ViewStyle;
  body: ViewStyle;
  banner: ViewStyle;
  btnCtn: ViewStyle;
  btnView: ViewStyle;
  headerText: TextStyle;
  bannerText: TextStyle;
  bannerTagline: TextStyle;
  btnTxt: TextStyle;
  imgA: ImageStyle;
  imgB: ImageStyle;
  bodyDiv: ViewStyle;
  graphCtn: ViewStyle;
  graphTxt: TextStyle;
  investCtn: ViewStyle;
  investTxt: TextStyle;
  graphImgDiv: ViewStyle;
  graphImg: ImageStyle;
  footerTxt: TextStyle;
}

export const styles = StyleSheet.create<props>({
  container: {
    paddingBottom: normalise(20),
  },
  body: {
    justifyContent: "center",
    paddingHorizontal: normalise(20),
  },
  headerText: {
    fontWeight: "500",
    fontSize: fontPixel(20),
    textAlign: "center",
  },
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
  graphCtn: {
    backgroundColor: "rgba(237, 238, 247, 1)",
    marginTop: pixelSizeVertical(30),
    paddingTop: pixelSizeVertical(40),
    paddingBottom: pixelSizeVertical(25),
  },
  graphTxt: {
    textAlign: "center",
    fontWeight: "300",
    fontSize: fontPixel(18),
    color: "rgba(75, 75, 75, 1)",
  },
  investCtn: {
    flexDirection: "row",
    paddingHorizontal: normalise(10),
    justifyContent: "space-between",
    marginTop: pixelSizeVertical(20),
  },
  investTxt: { fontWeight: "300", fontSize: fontPixel(12) },
  graphImgDiv: {
    marginTop: pixelSizeVertical(30),
    paddingRight: normalise(10),
    overflow: "hidden",
  },
  graphImg: {
    width: widthPixel(310),
    height: heightPixel(197),
    resizeMode: "contain",
  },
  footerTxt: {
    fontSize: fontPixel(16),
    fontWeight: "600",
    paddingBottom: pixelSizeVertical(10),
  },
});
