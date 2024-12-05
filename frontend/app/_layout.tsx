import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "./context/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="/auth/Register"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="/auth/Login" options={{ headerShown: false }} />
          <Stack.Screen
            name="/page/Ambulance"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="/page/Menu/RegisterNumber"
            options={{
              headerShown: true, // Show the header if desired
              title: "Register Number", // Custom title
            }}
          />
          <Stack.Screen
            name="/page/Menu/ViewMember"
            options={{
              headerShown: true, // Show the header if desired
              title: "View Number", // Custom title
            }}
          />
          <Stack.Screen
            name="/page/Menu/DeleteNumber"
            options={{
              headerShown: true, // Show the header if desired
              title: "View Number", // Custom title
            }}
          />
          <Stack.Screen
            name="/page/Menu/EditSoSMessage"
            options={{
              headerShown: true, // Show the header if desired
              title: "View Number", // Custom title
            }}
          />
          <Stack.Screen
            name="/page/Menu/EditTimer"
            options={{
              headerShown: true, // Show the header if desired
              title: "View Number", // Custom title
            }}
          />
          <Stack.Screen
            name="/page/Fire"
            options={{
              headerShown: true, // Show the header if desired
              title: "View Number", // Custom title
            }}
          />
          <Stack.Screen name="/Home" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
