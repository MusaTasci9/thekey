import { useContentNodes } from "@/api/services/useContentNodes";
import { Card } from "@/components/Card";
import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export interface Props {}

export default function HomeScreen(props: Props) {
  const { nodes, loading, error, loadMoreNodes } = useContentNodes();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <FlatList
        data={nodes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Card title={item.node.structureDefinition.title} />
          </View>
        )}
        onEndReached={loadMoreNodes}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
