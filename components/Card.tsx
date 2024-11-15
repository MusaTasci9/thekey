import { Colors } from "@/utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export interface Props {
  title: string;
}

export function Card(props: Props) {
  const { title } = props;
  return (
    <View style={styles.card}>
      {/* Currency */}
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
    </View>
  );
}

const PADDING = 15;

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    marginRight: 12,
    justifyContent: "space-between",
    paddingHorizontal: PADDING,
    paddingVertical: PADDING,
    borderRadius: 15,
    elevation: 14,
    marginTop: 5,
    minWidth: 200,
    marginLeft: 5,

    backgroundColor: "#f7f7f7",
    shadowColor: "#ccc",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    borderRadius: 90,
  },
  cardIcon: {
    width: 60,
    height: 60,
    borderRadius: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: {
    paddingTop: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.primaryColor,
    marginBottom: 5,
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
  },
  cardPrice: {
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
  cardCategory_choosed: {
    color: Colors.primaryColor,
  },
});
