import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';

export default function Background() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Ionicons name="book-sharp" size={130} color="black" style={styles.headerTxt} />
      </View>
    </SafeAreaView>
  );
}