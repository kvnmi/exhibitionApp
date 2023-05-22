import React from "react";
import { View, Image, Text } from "react-native";
import { RootStackScreenProps } from "../../Router/navigationTypes";
import Screen from "../../Components/Screen";
import { normalise } from "../../utils/normalize";
import colors from "../../config/colors";
import { Entypo } from "@expo/vector-icons";
import AppButton from "../../Components/AppButton";
import { styles } from "./styles";

function Index({ navigation }: RootStackScreenProps<"Welcome">) {
  return (
    <Screen>
      <View style={styles.container}>
        <Entypo
          size={normalise(30)}
          name="cross"
          color={colors.primary}
          // onPress={navigation.goBack}
        />
        <View style={styles.imgCtn}>
          <Image
            source={require("../../../assets/coins.png")}
            style={styles.img}
          />
          <Text style={styles.text}>
            3KLE invests your money intelligently in stocks
          </Text>
          <Text style={styles.tagline}>
            Build, perserve and manage your family wealth with stocks
            investment3KLE invests your money intelligently in stocks
          </Text>
        </View>
        <AppButton
          title="Get started"
          onPress={() => navigation.navigate("Dashboard")}
        />
      </View>
    </Screen>
  );
}

export default Index;
