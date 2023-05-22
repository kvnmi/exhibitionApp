import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import {
  normalise,
  heightPixel,
  widthPixel,
  pixelSizeHorizontal,
  fontPixel,
} from "../utils/normalize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ITransactionData } from "../config/tempData";

interface props {}

function Transaction({ price, tagline, title }: ITransactionData) {
  return (
    <View style={styles.container}>
      <View style={styles.iconCtn}>
        <MaterialCommunityIcons
          name="check"
          color={"white"}
          size={normalise(13)}
        />
      </View>
      <View style={styles.bodyCtn}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.tagline}>{tagline}</Text>
        </View>
        <Text style={[styles.tagline, { color: "rgba(75, 75, 75, 1)" }]}>
          ${price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: normalise(15),
  },
  iconCtn: {
    height: heightPixel(24),
    width: widthPixel(24),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 30,
    marginRight: pixelSizeHorizontal(10),
  },
  bodyCtn: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  tagline: { fontSize: fontPixel(12), fontWeight: "400" },
  title: { fontSize: fontPixel(14), fontWeight: "600" },
});

export default Transaction;
