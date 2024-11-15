import Constants from "expo-constants";
import { Dimensions, Platform } from "react-native";

export const DEV = __DEV__;
export const EXPO = Constants.appOwnership == "expo";
export const IOS = Platform.OS === "ios";
export const ANDROID = Platform.OS === "android";
export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;
