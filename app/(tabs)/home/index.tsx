import { StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { View } from "../../../components/Themed";
import Search from "./Search";
import Areas from "./Areas";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Search />
      <View style={styles.body}>
        <Text variant="titleLarge" style={{ textAlign: "right" }}>
          Servicios
        </Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scroll} horizontal={false}>
          <View style={styles.areasContainer}>
            <Areas />
            <Areas />
          </View>
          <View style={styles.areasContainer}>
            <Areas />
            <Areas />
          </View>
          <View style={styles.areasContainer}>
            <Areas />
            <Areas />
          </View>
          <View style={styles.areasContainer}>
            <Areas />
            <Areas />
          </View>
          <View style={styles.areasContainer}>
            <Areas />
            <Areas />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 30,
    paddingTop: 80,
  },
  body: {
    paddingTop: 40,
    paddingBottom: 10,
  },
  scrollContainer: {
    flex: 1,
    width: "100%", // Ocupar el ancho completo
  },
  scroll: {
    flex: 1,
  },
  areasContainer: {
    flexDirection: "row", // Alinea los elementos en fila horizontal
    flexWrap: "wrap", // Permite que los elementos se envuelvan a la siguiente línea si no hay suficiente espacio
  },
});
