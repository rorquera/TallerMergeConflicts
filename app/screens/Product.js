import { View, Text, StyleSheet, Button } from 'react-native';

export const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenidos a mi tienda, soy Jhon</Text>
      <Text style={styles.producto1}>producto 1</Text>
      <Text style={styles.producto2}>producto 2</Text>
      <Text style={styles.producto3}>producto 3</Text>
      <Button
        title="HOME"
        onPress={() => {
          navigation.navigate('HomeNav');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  producto1: {
    color: 'red',
  },
  producto2: {
    color: 'green',
  },
  producto3: {
    color: 'blue',
  },
});
