import { Colors } from "@/utils/Colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthProvider from "../providers/AuthProvider";
import { ApolloProvider } from "@apollo/client";
import client from "@/api/services/graphql";

const queryClient = new QueryClient();

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView>
      <ApolloProvider client={client}>
        <AuthProvider>
          <Stack
            screenOptions={{
              headerTintColor: Colors.black,
            }}
          >
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />

            <Stack.Screen name="(main)/home" options={{ headerShown: false }} />
          </Stack>
        </AuthProvider>
      </ApolloProvider>
    </GestureHandlerRootView>
  );
}
