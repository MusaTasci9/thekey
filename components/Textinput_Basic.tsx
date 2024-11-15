import * as React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

export interface Props extends TextInputProps {
  marginTop?: boolean;
  marginBottom?: boolean;
}

export const Textinput_Basic = React.forwardRef<TextInput, Props>(
  (props, ref) => {
    return (
      <View
        style={[
          styles.container,
          props.marginTop && styles.marginTop,
          props.marginBottom && styles.marginBottom,
        ]}
      >
        <TextInput
          placeholderTextColor="#6b7280"
          {...props}
          style={[styles.input, props.style]}
          ref={ref}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  marginTop: {
    marginTop: 15,
  },
  marginBottom: {
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  input: {
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
});
