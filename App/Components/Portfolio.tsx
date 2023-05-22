import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import colors from "../config/colors";
import {
  widthPixel,
  pixelSizeVertical,
  fontPixel,
  normalise,
} from "../utils/normalize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface props {
  title: string;
  tagline: string;
  onPress: () => void;
}

function Portfolio({ tagline, title, onPress }: props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.body}>
        <Text style={styles.txt}>{tagline}</Text>
        <MaterialCommunityIcons name="chevron-right" size={normalise(25)} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: widthPixel(327),
    paddingVertical: pixelSizeVertical(15),
    paddingHorizontal: pixelSizeVertical(19),
  },
  header: { fontSize: fontPixel(15) },
  body: {
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
  },
  txt: { fontSize: fontPixel(15), color: colors.primary },
});

export default Portfolio;
