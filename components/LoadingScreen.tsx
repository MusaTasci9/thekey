import * as React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export interface Custom_LoadingScreenProps {}

export function LoadingScreen(props: Custom_LoadingScreenProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={"black"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
