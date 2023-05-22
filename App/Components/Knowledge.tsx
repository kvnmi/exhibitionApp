import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { IKnowledgeData } from "../config/tempData";
import colors from "../config/colors";
import {
  pixelSizeVertical,
  heightPixel,
  widthPixel,
  pixelSizeHorizontal,
  normalise,
} from "../utils/normalize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Knowledge({ icon, title }: IKnowledgeData) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={icon}
          color={colors.primary}
          size={normalise(13)}
        />
      </View>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: pixelSizeVertical(10),
  },
  iconContainer: {
    height: heightPixel(24),
    width: widthPixel(24),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(227, 223, 246, 1)",
    borderRadius: 30,
    marginRight: pixelSizeHorizontal(10),
  },
});

export default Knowledge;
