import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ListButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name="setting" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    height: 50,
    width: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListButton;
