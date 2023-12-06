import { StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { View } from "../../../components/Themed";
import { Link } from "expo-router";

const Areas = () => {
  return (
    <View style={styles.container}>
      <View>
        <Link href={"/"} asChild>
          <Card style={styles.card}>
            <Card.Cover
              source={{ uri: "https://picsum.photos/700" }}
              style={styles.cardImage}
            />
            <Card.Content>
              <Paragraph style={styles.texto}>Área</Paragraph>
            </Card.Content>
          </Card>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  card: {
    width: "100%", // Ocupar el ancho completo
  },
  cardImage: {
    height: 100, // Altura deseada de la imagen
    width: 100,
  },
  texto: { textAlign: "center" },
});

export default Areas;
