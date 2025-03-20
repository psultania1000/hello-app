import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another Text, Just to see!</Text>
      </View>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="Click Me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: { margin: 28, borderWidth: 1, borderColor: "red", padding: 16 },
});
