import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
      </View>
      <Text style={styles.h1}>Login</Text>
      <Text style={styles.subText}>
        Please enter your user credentials below:
      </Text>

      <Text style={styles.label}>E-mail*</Text>
      <TextInput style={styles.input} placeholder="Type your e-mail" />

      <Text style={styles.label}>Password*</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.subTexts}>or do it via other accounts</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={28} color="#332218" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={28} color="#111111" />
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Link href={"/signup"}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </Link>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 25,
    alignItems: "stretch",
    marginTop: "15%",
  },

  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
  h1: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 15,
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
    textAlign: "left",
    color: "grey",
    paddingBottom: 5,
  },
  input: {
    height: 50,
    borderColor: "transparent",
    borderRadius: 6,
    backgroundColor: "#EDF2F7",
    width: "100%",
    paddingLeft: 10,
    marginBottom: 15,
  },

  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: "grey",
    fontSize: 13,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#8B704E",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  subTexts: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
    color: "grey",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  socialButton: {
    padding: 9,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "solid",
    opacity: 0.5,
    backgroundColor: "#FFF",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
    color: "grey",
  },
  signUpLink: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginLeft: 5,
  },
});
// +++++++++++++++++++++ Login page++++++++++++++++++++++++++++++++
