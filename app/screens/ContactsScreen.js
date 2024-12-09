import {View, Text, StyleSheet, Button} from 'react-native'

export const Contacts = ({navigation}) => {
    return <View style={styles.container}>
        <Text>Estoy en contact</Text>
        <Button
            title='HOME'
            onPress={()=>{
<<<<<<< HEAD
                navigation.navigate('WellcomeJhon');
=======
                navigation.navigate('WellcomeNav');
>>>>>>> 28a2ca23562412a7cf073e6a8596d04bfa56db10
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  