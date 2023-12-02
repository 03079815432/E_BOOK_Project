import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
  } from "react-native";
  import React, { useState } from "react";
  import styles from "./styles";
  import { MaterialIcons } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import { firebase} from "../Config"
  
  export default function Registersubview() {
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [pass, setpass] = useState("");
    const [isgmail, setisgmail] = useState(true);
    const [loading, setLoading] = useState(false);
  
    const navigation = useNavigation();
    const tologin = () => {
      navigation.navigate("Login");
    };
  
    const validateemail = (inputemail) => {
      const isValidGmail = /^[\w-.]+@gmail\.com$/.test(inputemail.toLowerCase());
      setisgmail(isValidGmail);
    };
  
    const registerUser = async () => {
      try {
        if (!isgmail) {
          alert("Please enter a valid Gmail address");
          return;
        }
  
        setLoading(true);
        const credentials = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, pass);
  
        await firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: "https://book-2a279.firebaseapp.com",
        });
  
        alert("Verification email sent");
  
        await firebase
          .firestore()
          .collection("User")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <View style={styles.subview}>
        <Text style={styles.subtext}>Register</Text>
        <TextInput
          style={styles.nameInput1}
          placeholder="Email"
          onChangeText={(text) => {
            setemail(text);
            validateemail(text);
          }}
        />
        <MaterialIcons
          name="email"
          size={24}
          color="black"
          style={styles.email}
        />
        {!isgmail && <Text style={styles.emailvalid}> email is not valid </Text>}
        <TextInput
          style={styles.nameInput3}
          placeholder="User Name"
          onChangeText={(text) => setname(text)}
        />
        <Ionicons
          name="person-circle"
          size={24}
          color="black"
          style={styles.name}
        />
        <TextInput
          style={styles.nameInput2}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setpass(text)}
        />
        <MaterialIcons name="lock" size={24} color="black" style={styles.pass} />
        <TouchableOpacity style={styles.btn} onPress={registerUser}>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <Text style={styles.btnTxt}>Signup</Text>
          )}
        </TouchableOpacity>
        <View style={styles.endview}>
          <Text style={styles.endtext}>Already have an account</Text>
          <TouchableOpacity style={styles.signup} onPress={tologin}>
            <Text style={styles.signuptext}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }