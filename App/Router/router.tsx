import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigationTypes";
import { Dashboard, Investments, WelcomeScreen } from "../Screen";
import React from "react";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Portfolio" component={Investments} />
  </Stack.Navigator>
);

export default AppNavigator;
