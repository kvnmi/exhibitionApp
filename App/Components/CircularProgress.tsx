import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, Text } from "react-native";
import { Svg, Circle, Path } from "react-native-svg";
import { fontPixel, normalise } from "../utils/normalize";

interface CircularProgressProps {
  progress: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const size = normalise(32);
  const strokeWidth = 5;
  const color = "#1826D0";

  useEffect(() => {
    animateProgress();
  }, [progress]);

  const animateProgress = () => {
    Animated.timing(progressAnimation, {
      toValue: progress,
      duration: 1000,
      easing: Easing.circle,
      useNativeDriver: false,
    }).start();
  };

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progressRotation = progressAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["-90deg", "360deg"],
  }) as Animated.AnimatedInterpolation<number>;

  return (
    <View style={{ alignItems: "center" }}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#E3DFF7"
          strokeWidth={strokeWidth}
        />
        <Path
          d={`M ${size / 2}, ${size / 2 - radius}
              A ${radius},${radius} 0 ${progress <= 0.5 ? 0 : 1} 1
              ${
                size / 2 +
                radius * Math.cos(progress * Math.PI * 2 - Math.PI / 2)
              },
              ${
                size / 2 +
                radius * Math.sin(progress * Math.PI * 2 - Math.PI / 2)
              }`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          strokeDasharray={`${circumference} ${circumference}`}
          transform={[{ rotate: progressRotation }] as any}
        />
        <Text
          style={{
            fontSize: fontPixel(9),
            fontWeight: "bold",
            color: color,
            alignSelf: "center",
            position: "absolute",
            top: normalise(size / 2 - 8),
          }}
        >
          {`${Math.round(progress * 100)}%`}
        </Text>
      </Svg>
    </View>
  );
};

export default CircularProgress;
