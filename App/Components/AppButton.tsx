import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import colors from "../config/colors";
import { normalise, fontPixel } from "../utils/normalize";

interface props {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

function AppButton({ style, title, textStyle, onPress }: props) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingVertical: normalise(15),
    borderRadius: 10,
  },
  buttonText: { color: "white", fontSize: fontPixel(16) },
});

export default AppButton;
