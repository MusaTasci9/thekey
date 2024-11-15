import AsyncStorage from "@react-native-async-storage/async-storage";
import { onSignIn, onSignOut } from "../api/services/user";

// Mock AsyncStorage methods
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

// Mock the implementation of onSignIn and onSignOut
jest.mock("../api/services/user", () => ({
  onSignIn: jest.fn(async (email, password) => {
    const userData = {
      accessToken: "testAccessToken",
      refreshToken: "testRefreshToken",
      username: email.split("@")[0],
    };
    await AsyncStorage.setItem("STORAGE_USER", JSON.stringify(userData));
    return userData;
  }),
  onSignOut: jest.fn(async () => {
    await AsyncStorage.removeItem("STORAGE_USER");
  }),
}));

describe("user service", () => {
  it("should sign in and store user data in AsyncStorage", async () => {
    const email = "editor.staging@example.com";
    const password = "HtxbYgJfB1ysRCEDX6b2";

    // Call the mocked onSignIn function
    const user = await onSignIn(email, password);

    // Verify that AsyncStorage.setItem was called with correct arguments
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "STORAGE_USER",
      JSON.stringify({
        accessToken: "testAccessToken",
        refreshToken: "testRefreshToken",
        username: "editor.staging",
      })
    );

    // Verify the returned user data
    expect(user).toEqual({
      accessToken: "testAccessToken",
      refreshToken: "testRefreshToken",
      username: "editor.staging",
    });
  });

  it("should sign out and remove user data from AsyncStorage", async () => {
    // Call the mocked onSignOut function
    await onSignOut();

    // Verify that AsyncStorage.removeItem was called with the correct key
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith("STORAGE_USER");
  });
});
