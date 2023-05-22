import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { RootStackScreenProps } from "../../Router/navigationTypes";
import Screen from "../../Components/Screen";
import { normalise } from "../../utils/normalize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import CircularProgress from "../../Components/CircularProgress";
import AppButton from "../../Components/AppButton";
import { styles } from "./styles";
import { portfolioCardData } from "../../config/tempData";

function Index({ navigation }: RootStackScreenProps<"Portfolio">) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.navCtn}>
          <MaterialCommunityIcons
            size={normalise(30)}
            name="chevron-left"
            color={colors.primary}
            onPress={navigation.goBack}
          />
          <MaterialCommunityIcons
            size={normalise(25)}
            name="help-circle-outline"
          />
        </View>
        <Text style={styles.headerText}>Aggressive Portfolio</Text>
        <View style={styles.imgCtn}>
          <Image
            source={require("../../../assets/portfolio.png")}
            style={styles.img}
          />
        </View>
        <FlatList
          scrollEnabled
          showsVerticalScrollIndicator={false}
          data={portfolioCardData}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.listCtn}
          renderItem={({ item }) => (
            <View style={styles.cardCtn}>
              <Text style={styles.cardText}>{item.title}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CircularProgress progress={item.progress} />
                <MaterialCommunityIcons
                  size={normalise(30)}
                  name="chevron-right"
                  color={"rgba(136, 135, 137, 1)"}
                />
              </View>
            </View>
          )}
          ListHeaderComponent={() => (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <View style={styles.cardHead}>
                <Text style={{ fontWeight: "700", color: "#4B4B4B" }}>
                  Prospective Outcome
                </Text>
                <Text style={{ color: "#4B4B4B" }}>Risk:6</Text>
                <Text style={{ color: "#4B4B4B" }}>Returns 10-15%</Text>
              </View>
            </View>
          )}
          ListFooterComponent={() => (
            <AppButton
              title="This portfolio is selected"
              style={{
                backgroundColor: "rgba(194, 199, 255, 1)",
              }}
            />
          )}
        />
      </View>
    </Screen>
  );
}

export default Index;
