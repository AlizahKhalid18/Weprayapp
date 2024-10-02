import { Redirect } from "expo-router";
import { Image, StyleSheet, Platform, View, Text } from "react-native";

export default function HomeScreen() {
  const user = false;

  if (!user) {
    return <Redirect href={"/signin"} />;
  }

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
