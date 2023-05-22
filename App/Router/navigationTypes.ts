import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Dashboard: undefined;
  Welcome: undefined;
  Portfolio: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
