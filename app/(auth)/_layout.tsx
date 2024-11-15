import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "black",
      }}
    >
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    </Stack>
  );
}
