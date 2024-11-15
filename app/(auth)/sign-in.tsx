import { Button } from "@/components/Button";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Textinput_Basic } from "@/components/Textinput_Basic";
import { useAuth } from "@/providers/AuthProvider";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const defaultUserState = {
  email: "editor.staging@example.com",
  password: "HtxbYgJfB1ysRCEDX6b2",
};

export default function SignInScreen() {
  const { user, login } = useAuth();

  const [loading, setloading] = React.useState(false);
  const [form, setForm] = useState(defaultUserState);

  const onSigninMail = async () => {
    setloading(true);
    await login(form.email, form.password);
    setloading(false);
  };

  if (loading) return <LoadingScreen />;

  if (user) return <Redirect href={"/home"} />;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Login!</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>E-Mail Adresse</Text>

            <Textinput_Basic
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              placeholder="alex@example.com"
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Passwort</Text>

            <Textinput_Basic
              onChangeText={(password) => setForm({ ...form, password })}
              placeholder="********"
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <Button onPress={onSigninMail} title="Sign In" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  formAction: {
    marginVertical: 24,
  },
  input: {
    marginBottom: 16,
  },
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginBottom: 6,
    textAlign: "center",
  },
  form: {
    marginBottom: 24,
  },
});

export const signinStyles = styles;
