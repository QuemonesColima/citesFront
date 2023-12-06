import { StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Lugares here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
  },
  separator: {
    paddingBottom: 20,
    alignItems: "center",
  },
});
