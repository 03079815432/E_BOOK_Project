import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006CA6",
    height: 700,
  },
  headerTxt: {
    // marginLeft:160,
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    marginTop: 80,
  },
  subview: {
    backgroundColor: "white",
    height: 550,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  subtext: {
    color: "black",
    fontSize: 40,
    position: "absolute",
    left: 45,
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  nameInput1: {
    height: 40,
    width: 330,
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomWidth: 1,
    marginTop: 90,
    marginBottom: 0,
  },
  nameInput2: {
    height: 40,
    width: 330,
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomWidth: 1,
    marginTop: 50,
    marginBottom: 0,
  },
  nameInput3: {
    height: 40,
    width: 330,
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomWidth: 1,
    marginTop: 50,
    marginBottom: 0,
  },
  btn: {
    height: 55,
    width: 200,
    backgroundColor: "#006CA6",
    borderRadius: 80,
    borderWidth: 2,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  endview: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  endtext: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: "80",

    fontWeight: "bold",
  },
  signup: {
    marginRight: 10,
    marginTop: 27,
  },
  signuptext: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#006CA6",
  },
  email: {
    left: 15,
    bottom: 30,
    width: 30,
  },
  pass: {
    left: 15,
    bottom: 30,
    width: 30,
  },
  name: {
    left: 15,
    bottom: 30,
    width: 30,
  },
  emailvalid: {
    color: "red",
    bottom: 13,
    left: 72,
  },
  Dashboardview:{
    flex:1
  

  }
});

export default styles;