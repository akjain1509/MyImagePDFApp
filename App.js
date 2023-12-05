import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./src/navigation/appNavigation";
// import { store } from "./src/features/store";
// import { Provider } from "react-redux";

export default function App() {
  return <RootNavigation />;
}
