import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Loginsubview from "../Components/Loginsubview";
import Background from "../Components/Background";
import styles from "../Components/styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <Background />
      <Loginsubview />
    </View>
  );
}