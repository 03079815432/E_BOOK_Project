// Loginsubview.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../Config";
import styles from './styles';

export default function Loginsubview() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const toregister = () => {
    navigation.navigate('Registration');
  }

  const loginuser = async () => {
    try {
      setLoading(true);

      const credentials = await firebase.auth().signInWithEmailAndPassword(email, pass);

      const user = credentials.user;

      if (user && user.emailVerified) {
        navigation.navigate('Dashboard');
      } else {
        alert("Please verify your email before login");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const toAdminLogin = () => {
    console.log("Navigating to AdminLogin");
    navigation.navigate('AdminLogin');
  }

  return (
    <View style={styles.subview}>
      <Text style={styles.subtext}>Login</Text>
      <TextInput
        style={styles.nameInput1}
        placeholder='Email'
        onChangeText={(text) => setemail(text)}
      />
      <MaterialIcons name="email" size={24} color="black" style={styles.email} />
      <TextInput
        style={styles.nameInput2}
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={(text) => setpass(text)}
      />
      <MaterialIcons name="lock" size={24} color="black" style={styles.pass} />
      <TouchableOpacity style={styles.btn} onPress={loginuser}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#2A0134" />
        </View>
      )}
      <TouchableOpacity style={styles.adminLoginBtn} onPress={toAdminLogin}>
        <Text style={styles.btnTxt}>Admin Login</Text>
      </TouchableOpacity>
      <View style={styles.endview}>
        <Text style={styles.endtext}>
          Don't have an account?
        </Text>
        <TouchableOpacity style={styles.signup} onPress={toregister}>
          <Text style={styles.signuptext}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
