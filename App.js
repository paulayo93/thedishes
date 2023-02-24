// import * as firebase from "firebase";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { theme } from "./src/infrastructure/theme";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyALJuf_fMTEA5euK3WRXOhAv-C2B-LhzrU",
  authDomain: "animated-radar-378111.firebaseapp.com",
  projectId: "animated-radar-378111",
  storageBucket: "animated-radar-378111.appspot.com",
  messagingSenderId: "682940494117",
  appId: "1:682940494117:web:b30ff5a51fd11326bbeacc",
  measurementId: "G-DPLDTC8469",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
