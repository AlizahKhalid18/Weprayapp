import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        marginTop: insets.top,
        // paddingBottom: insets.bottom,
        flex: 1,
      }}
    >
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style='dark' />
    </View>
  );
}
