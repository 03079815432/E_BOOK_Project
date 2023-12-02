import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Background from "../Components/Background";
import styles from "../Components/styles";
import Registersubview from "../Components/Registersubview";

export default function Registration() {
  return (
    <View style={styles.container}>
      <Background />
      <Registersubview />
    </View>
  );
}