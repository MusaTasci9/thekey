import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../models/models";
import client, { LOGIN_MUTATION } from "./graphql"; // Import the Apollo Client

const STORAGE_USER = "STORAGE_USER";

// Sign-In Function
export const onSignIn = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const { data } = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: { email, password },
    });

    // No username found in graphql so used the mail
    const username = email.split("@")[0];

    const user: User = {
      accessToken: data.Auth.loginJwt.loginResult.jwtTokens.accessToken,
      refreshToken: data.Auth.loginJwt.loginResult.jwtTokens.refreshToken,
      username,
    };

    // Save token in AsyncStorage
    await AsyncStorage.setItem(STORAGE_USER, JSON.stringify(user));

    // Return user data
    return user;
  } catch (error) {
    console.error("Sign-in error:", error);
    alert("Sign-in error");
    return null;
  }
};

// Sign-Out Function
export const onSignOut = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_USER);
  } catch (e) {
    console.error("Sign-out error:", e);
  }
};

export const checkIfAuthenticated = async (): Promise<User | null> => {
  try {
    // Retrieve token from AsyncStorage
    const user = await AsyncStorage.getItem(STORAGE_USER);
    return user ? (JSON.parse(user) as User) : null;
  } catch (error) {
    console.error("Error initializing authentication:", error);
    return null;
  }
};
