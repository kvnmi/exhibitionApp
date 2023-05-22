import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import colors from "../config/colors";
import { normalise, fontPixel } from "../utils/normalize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface props {
  tagline: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  transform: boolean;
}

function NavItem({ icon, tagline, transform }: props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.iconCtn,
          transform && { transform: [{ rotate: "90deg" }] },
        ]}
      >
        <MaterialCommunityIcons
          name={icon}
          color={colors.primary}
          size={normalise(20)}
        />
      </Pressable>
      <Text style={styles.tagline}>{tagline}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  iconCtn: {
    backgroundColor: "rgba(242, 225, 255, 1)",
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
  },
  tagline: {
    fontSize: fontPixel(12),
    textAlign: "center",
  },
});

export default NavItem;
