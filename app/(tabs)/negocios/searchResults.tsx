import { StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Card from '../../../components/Layout/Card';

export default function SearchResults() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Search Results</Text>
      </View>
      <View>
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  title: { fontWeight: 'bold', fontSize: 26, paddingBottom: 20 },
  texto: { fontSize: 16, textAlign: 'center' },
});
