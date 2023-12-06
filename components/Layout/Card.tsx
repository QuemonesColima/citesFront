import { Card } from "react-native-paper";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";

const Tarjeta = () => (
  <View style={styles.container}>
    <Card style={styles.card}>
      <Card.Cover
        source={{ uri: "https://picsum.photos/700" }}
        style={styles.cardImg}
      />
    </Card>
    <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>Título</Text>
      <Text>Autor Fulanito de Tal</Text>
      <Text>2010</Text>
    </View>
    <View>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.buttonText}>Ver</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#ced4da",
    borderBottomWidth: 2,
  },
  card: { marginRight: 16 },
  cardImg: { height: 100, width: 100 },
  cardBody: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: "bold" },
  cardButton: {
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
    borderColor: "#ced4da",
  },
  buttonText: { fontSize: 18, fontWeight: "bold", color: "#023e8a" },
});
export default Tarjeta;
