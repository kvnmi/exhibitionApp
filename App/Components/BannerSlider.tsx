import React, { FC, Fragment } from "react";
import { Animated, View, StyleSheet, Dimensions, FlatList } from "react-native";
import { normalise, pixelSizeHorizontal } from "../utils/normalize";
import Banner from "./Banner";
import colors from "../config/colors";

const PaginationDots: FC<{ color: any }> = ({ color }) => {
  return (
    <Animated.View
      style={[
        {
          backgroundColor: color,
          width: 6,
          height: 6,
          borderRadius: 14,
          marginHorizontal: normalise(5),
          marginTop: normalise(15),
        },
      ]}
    />
  );
};

interface props {
  prices: string[];
  animatedValue: Animated.Value;
}

function Index({ animatedValue, prices }: props) {
  const { width } = Dimensions.get("window");

  return (
    <Fragment>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animatedValue } } }],
          { useNativeDriver: false }
        )}
        bounces={false}
        horizontal
        snapToInterval={width}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
          waitForInteraction: true,
        }}
        showsHorizontalScrollIndicator={false}
        data={prices}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={[styles.listItemCtn, { width }]}>
              <Banner price={item} />
            </View>
          );
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FlatList
          horizontal
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          data={prices}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ index }) => {
            const colorOutput = ["#E3DFF7", colors.primary, "#E3DFF7"];

            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const colorScale = animatedValue.interpolate({
              inputRange,
              outputRange: colorOutput,
              extrapolate: "clamp",
            });

            return <PaginationDots color={colorScale} />;
          }}
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  listItemCtn: {
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(20),
  },
});

export default Index;
