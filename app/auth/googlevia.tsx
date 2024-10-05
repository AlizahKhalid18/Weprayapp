import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function ViaGoogle() {
  const [country, setCountry] = useState("Select your country");
  const [religion, setReligion] = useState("Select your religion");
  const [showCountryOptions, setShowCountryOptions] = useState(false);
  const [showReligionOptions, setShowReligionOptions] = useState(false);

  const countries = ["USA", "Canada", "UK"];
  const religions = ["Islam", "Christianity", "Hinduism"];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
      </View>
      <Text style={styles.h1}>Account Setup</Text>
      <Text style={styles.subText}>
        Please complete your profile to proceed!
      </Text>

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

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
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

});
// +++++++++++++++++++++++++ Google via+++++++++++++++++++++++++++
