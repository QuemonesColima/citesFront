import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoginButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Iniciar Sesión con:</Text>
      <View style={styles.border} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    paddingBottom: 14,
  },
  border: {
    width: "200%",
    borderBottomWidth: 1,
    borderBottomColor: "#ced4da",
  },
});

export default LoginButton;
