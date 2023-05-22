import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigator from "./App/Router/router";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
