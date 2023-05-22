import React, { useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../Components/Screen";
import {
  fontPixel,
  normalise,
  pixelSizeVertical,
  widthPixel,
} from "../../utils/normalize";
import colors from "../../config/colors";
import {
  KnowledgeList,
  NavItems,
  PortfolioItems,
  TransactionList,
} from "../../Components/ItemsList";
import {
  knowledgeData,
  navData,
  portfolioData,
  transactionData,
} from "../../config/tempData";
import AppButton from "../../Components/AppButton";
import { styles } from "./styles";
import BannerSlider from "../../Components/BannerSlider";
import { RootStackScreenProps } from "../../Router/navigationTypes";

function Dashboard({ navigation }: RootStackScreenProps<"Dashboard">) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <Screen scrollable>
      <View style={styles.container}>
        <MaterialCommunityIcons
          size={normalise(30)}
          name="chevron-left"
          color={colors.primary}
          style={styles.bodyDiv}
          onPress={navigation.goBack}
        />
        <Text style={styles.headerText}>Family Plus Investments</Text>
        <BannerSlider
          prices={["$4,500.00", "$2,000.00"]}
          animatedValue={animatedValue}
        />
        <View style={styles.body}>
          <NavItems data={navData} />

          <PortfolioItems
            data={portfolioData}
            onPress={() => navigation.navigate("Portfolio")}
          />
        </View>
        <View style={styles.bodyDiv}>
          <View>
            <Text style={{ fontWeight: "700", fontSize: fontPixel(16) }}>
              Recent Transactions
            </Text>
            <TransactionList data={transactionData} />
            <AppButton title="View all" />
          </View>
          <View style={styles.graphCtn}>
            <View style={{ width: widthPixel(200), alignSelf: "center" }}>
              <Text style={styles.graphTxt}>
                Hypothetical projection of{" "}
                {<Text style={{ fontWeight: "500" }}>$12000</Text>} at age{" "}
                {<Text style={{ fontWeight: "500" }}>16</Text>}
              </Text>
            </View>
            <View style={styles.investCtn}>
              <Text style={styles.investTxt}>Investment: $550</Text>
              <Text style={styles.investTxt}>Returns: $12,000</Text>
            </View>
            <View style={styles.graphImgDiv}>
              <Image
                source={require("../../../assets/graph.png")}
                style={styles.graphImg}
                resizeMethod="resize"
              />
            </View>
          </View>
          <View style={{ marginTop: pixelSizeVertical(30) }}>
            <Text style={styles.footerTxt}>Grow your Knowledge</Text>
            <KnowledgeList data={knowledgeData} />
          </View>
        </View>
      </View>
    </Screen>
  );
}

export default Dashboard;
