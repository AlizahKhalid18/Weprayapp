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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link } from "expo-router";
import Dropdown from "@/components/dropdown";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";

const countries = [
  { label: "USA", value: "USA" },
  { label: "Canada", value: "Canada" },
  { label: "UK", value: "UK" },
];
const religions = [
  { label: "Islam", value: "Islam" },
  { label: "Christianity", value: "Christianity" },
  { label: "Hinduism", value: "Hinduism" },
];

export default function SignUp() {
  const [country, setCountry] = useState({});
  const [religion, setReligion] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  return (
    <KeyboardAvoidingView
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
          <Text style={styles.h1}>Create your Account</Text>
          <Text style={styles.subText}>It's free and easy</Text>

          <Text style={styles.label}>Full Name*</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Enter your name"
          />

          <Text style={styles.label}>Email*</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Type your e-mail"
          />

          <Text style={styles.label}>Password*</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your password"
            placeholderTextColor="gray"
            secureTextEntry
          />

          <Text style={styles.label}>Country*</Text>
          <Dropdown
            placeholder="Select your country"
            options={countries}
            onChange={setCountry}
            value={country}
          />

          <Text style={styles.label}>Religion*</Text>
          <Dropdown
            placeholder="Select your religion"
            options={religions}
            onChange={setReligion}
            value={religion}
          />

          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              style={styles.checkbox}
            />

            <Text style={styles.checkboxText}>
              By creating an account, you agree to the
              <Text style={styles.link}> Terms and Conditions </Text>
              and
              <Text style={styles.link}> Privacy Policy </Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Link href={"/auth/signin"}>
              <Text style={styles.buttonText}>Sign up</Text>
            </Link>
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
            <StatusBar style="dark" />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    minHeight: "100%",
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
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 16,
    gap: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
  },
  checkboxText: {
    fontSize: 13,
    flex: 1,
    color: "grey",
  },
  termsContainer: {
    flexDirection: "row",
    marginLeft: 23,
    marginBottom: 15,
  },
  link: {
    fontSize: 13,
    color: "black",
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
});
// +++++++++++++++++++++++++ signup page+++++++++++++++++++++++++++
