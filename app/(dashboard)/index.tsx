import Header from "@/components/header";
import Slider from "@/components/slider";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
let init = false;

const sliders = [
  "Umar reported: The Messenger of Allah, peace and blessings be upon him, commanded to announce among the people, “Whoever sincerely testifies there is no God but Allah alone, without any partner, he will have Paradise.” Umar said, “What if they take it for granted?” The Prophet said, “Then leave them be.” Source: al-Tawḥīd li-Ibn Khuzaymah 2/904 Grade: Sahih (authentic) according to Al-Albani",
  "The Messenger of Allah, peace and blessings be upon him, said, “Whoever believes in Allah and the Last Day should speak good or remain silent. Whoever believes in Allah and the Last Day should honor his neighbor. Whoever believes in Allah and the Last Day should honor his guest.",
];

export default function HomeScreen() {
  if (!init) {
    init = true;
    return <Redirect href={"/auth/signin"} />;
  }

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
      contentContainerStyle={{
        minHeight: "100%",
        paddingBottom: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={require("../../assets/images/hero.png")}
        style={styles.image}
      />

      <View style={styles.section}>
        <Text style={styles.reminderText}>Daily Reminders</Text>
        <Slider
          style={{
            slider: {
              minHeight: 254,
              marginTop: 16,
            },
          }}
          sliders={sliders}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Islamic Resources</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  reminderText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: "78%",
    padding: 16,
    borderRadius: 30,
    backgroundColor: "#8B704E",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
