import {
  normalise,
  pixelSizeVertical,
  widthPixel,
  heightPixel,
  fontPixel,
} from "../../utils/normalize";

import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

interface props {
  container: ViewStyle;
  imgCtn: ViewStyle;
  img: ImageStyle;
  text: TextStyle;
  tagline: TextStyle;
}

export const styles = StyleSheet.create<props>({
  container: {
    padding: normalise(15),
  },
  imgCtn: {
    marginVertical: pixelSizeVertical(40),
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  img: {
    width: widthPixel(238),
    height: heightPixel(238),
    resizeMode: "center",
  },
  text: {
    textAlign: "center",
    fontSize: fontPixel(24),
    color: "rgba(8, 13, 69, 1)",
    fontWeight: "700",
  },
  tagline: {
    color: "rgba(8, 13, 69, 1)",
    fontSize: fontPixel(14),
    textAlign: "center",
  },
});
