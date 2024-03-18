import * as React from 'react'; 
import { Text, View, Image, Pressable, StyleSheet } from 'react-native'; 

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./img/LittleLemonLogo.png')} />
            <Text style={styles.titles}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
            <Pressable onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.title}>Welcome</Text>
            </Pressable>
        </View>
    );
}  
const styles = StyleSheet.create({
    logo: {
      height: 100,
      width: 300,
      resizeMode:'contain'
    },
    container: {
        flex:1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#fff',
    },
    button:{   
    fontSize:22,
    padding:10,
    marginVertical:8,
    margin:40,
    backgroundColor:'black',
    borderColor:'black',
    borderWidth:2,
    borderRadius:12,

},
    title: {
      borderWidth:1,
      marginTop: 16,
      paddingVertical: 10,
      color: '#333333',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    titles: {
      marginTop: 16,
      paddingVertical: 10,
      color: '#333333',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  