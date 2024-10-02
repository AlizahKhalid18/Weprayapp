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
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link } from "expo-router";

export default function App() {
  const [country, setCountry] = useState("Select your country");
  const [religion, setReligion] = useState("Select your religion");
  const [showCountryOptions, setShowCountryOptions] = useState(false);
  const [showReligionOptions, setShowReligionOptions] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const countries = ["USA", "Canada", "UK"];
  const religions = ["Islam", "Christianity", "Hinduism"];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
      </View>
      <Text style={styles.h1}>Create your Account</Text>
      <Text style={styles.subText}>It's free and easy</Text>

      <Text style={styles.label}>Full Name*</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />

      <Text style={styles.label}>Email*</Text>
      <TextInput style={styles.input} placeholder="Type your e-mail" />

      <Text style={styles.label}>Password*</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your password"
        secureTextEntry
      />

      <Text style={styles.label}>Country*</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setShowCountryOptions(!showCountryOptions)}
      >
        <Text style={styles.dropdownText}>{country}</Text>
      </TouchableOpacity>
      {showCountryOptions &&
        countries.map((countryItem) => (
          <TouchableOpacity
            key={countryItem}
            onPress={() => {
              setCountry(countryItem);
              setShowCountryOptions(false);
            }}
          >
            <Text style={styles.option}>{countryItem}</Text>
          </TouchableOpacity>
        ))}

      <Text style={styles.label}>Religion*</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setShowReligionOptions(!showReligionOptions)}
      >
        <Text style={styles.dropdownText}>{religion}</Text>
      </TouchableOpacity>
      {showReligionOptions &&
        religions.map((religionItem) => (
          <TouchableOpacity
            key={religionItem}
            onPress={() => {
              setReligion(religionItem);
              setShowReligionOptions(false);
            }}
          >
            <Text style={styles.option}>{religionItem}</Text>
          </TouchableOpacity>
        ))}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={() => setIsChecked(!isChecked)}
          style={styles.checkbox}
        >
          {isChecked && <Text style={styles.checkboxChecked}>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          By creating an account, you agree to the
        </Text>
      </View>
      <View style={styles.termsContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.andText}>and</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Link href={"/signin"}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Link>
      </TouchableOpacity>
      <Text style={styles.subTexts}>or do it via other accounts</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={28} color="#332218" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={28} color="#111111" />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
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
    height: "130%",
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
    marginTop: 25,
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
  dropdown: {
    height: 50,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#EDF2F7",
    justifyContent: "center",
    paddingLeft: 10,
    marginBottom: 15,
  },
  dropdownText: {
    color: "grey",
  },
  option: {
    padding: 10,
    backgroundColor: "#EDF2F7",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
  },
  checkboxChecked: {
    color: "black",
    fontSize: 9,
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
  andText: {
    fontSize: 13,
    color: "grey",
    marginHorizontal: 5,
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
    padding: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "solid",
    opacity: 0.5,
    backgroundColor: "#FFF",
  },
});
// +++++++++++++++++++++++++ signup page+++++++++++++++++++++++++++
