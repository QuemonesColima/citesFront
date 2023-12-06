import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import { Button } from "react-native-paper";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.picture}>
        <Image
          source={require("../../assets/images/siabuc.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Nombre de la app</Text>

      <View style={styles.body}>
        <Text style={styles.texto}>
          Bienvenido a nuestra app de citas. Aqui podras agendar y buscar
          establecimientos
        </Text>
      </View>
      <View style={styles.logContent}>
        <Link href="/(tabs)/home" replace asChild>
          <Button mode="outlined">Iniciar</Button>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  picture: { marginBottom: 10 },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 50,
  },
  body: {
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  texto: {
    textAlign: "center",
  },
  logContent: {
    marginTop: 40,
  },
});
