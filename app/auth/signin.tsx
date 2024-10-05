import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SignIn() {
  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          style={{ backgroundColor: "white" }}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.h1}>Login</Text>
          <Text style={styles.subText}>
            Please enter your user credentials below:
          </Text>

          <Text style={styles.label}>E-mail*</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your e-mail"
            placeholderTextColor="gray"
          />

          <Text style={styles.label}>Password*</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your password"
            placeholderTextColor="gray"
            secureTextEntry
          />
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/")}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <Text style={styles.subTexts}>or do it via other accounts</Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Link href={"/auth/googlevia"}>
                <Icon name="google" size={28} color="#332218" />
              </Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="facebook" size={28} color="#111111" />
            </TouchableOpacity>
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <Link href={"/auth/signup"} style={{ paddingStart: 3 }}>
              <Text style={styles.signUpLink}>Sign up</Text>
            </Link>
          </View>
          <StatusBar style="dark" />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    padding: 25,
  },

  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
  h1: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 15,
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    marginBottom: 25,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
    textAlign: "left",
    color: "#555555",
    paddingBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#32324720",
    borderRadius: 6,
    // backgroundColor: "#EDF2F7",
    width: "100%",
    paddingLeft: 10,
    marginBottom: 16,
  },

  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: "grey",
    fontSize: 12,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#8B704E",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  subTexts: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 16,
    color: "#5C5C5C",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  socialButton: {
    height: 42,
    width: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    opacity: 0.8,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
    color: "#5C5C5C",
  },
  signUpLink: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
});
// +++++++++++++++++++++ Login page++++++++++++++++++++++++++++++++
