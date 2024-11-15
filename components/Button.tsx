import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export function Button(props: ButtonProps) {
  const { onPress, title } = props;
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[styles.container, props.disabled ? styles.disabledContainer : {}]}
      onPress={onPress}
    >
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#ccc",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
    paddingLeft: 5,
  },
  disabledContainer: {
    backgroundColor: "#f0f0f0",
    shadowOpacity: 0,
  },
});
