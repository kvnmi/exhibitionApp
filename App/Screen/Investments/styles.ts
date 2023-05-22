import {
  normalise,
  fontPixel,
  pixelSizeVertical,
  widthPixel,
  heightPixel,
} from "../../utils/normalize";
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

interface props {
  container: ViewStyle;
  navCtn: ViewStyle;
  cardCtn: ViewStyle;
  listCtn: ViewStyle;
  cardHead: ViewStyle;
  imgCtn: ViewStyle;
  img: ImageStyle;
  headerText: TextStyle;
  cardHeadText: TextStyle;
  cardText: TextStyle;
}

export const styles = StyleSheet.create<props>({
  container: {
    padding: normalise(10),
    flex: 1,
  },
  navCtn: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: normalise(20),
  },
  headerText: {
    textAlign: "center",
    color: "rgba(8, 13, 69, 1)",
    fontWeight: "700",
    fontSize: fontPixel(24),
  },
  imgCtn: {
    marginVertical: pixelSizeVertical(25),
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: widthPixel(180),
    height: heightPixel(180),
    resizeMode: "center",
  },
  cardText: {
    color: "rgba(8, 13, 69, 1)",
    fontWeight: "600",
    fontSize: fontPixel(14),
  },
  cardHeadText: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: fontPixel(14),
    fontWeight: "600",
  },
  cardCtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: normalise(10),
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    paddingVertical: pixelSizeVertical(15),
    borderRadius: 10,
  },
  listCtn: {
    rowGap: 12,
    paddingHorizontal: normalise(10),
  },
  cardHead: {
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderRadius: 10,
    padding: normalise(15),
    rowGap: 5,
  },
});
