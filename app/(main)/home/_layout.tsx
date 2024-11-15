import { useAuth } from "@/providers/AuthProvider";
import { router, Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Layout = () => {
  const { logOut } = useAuth();

  const onLogout = () => {
    logOut();
    router.replace("/");
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerBlurEffect: "regular",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerRight: () => (
            <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    paddingRight: 10, // Adjust for spacing
    paddingVertical: 5,
  },
  logoutButtonText: {
    fontSize: 16,
    color: "#ff6347", // Customize color
  },
});

export default Layout;
