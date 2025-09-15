import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = () => (
  <View style={styles.container}>
    <Text style={styles.text}>About Screen</Text>
  </View>
);

export default About;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
