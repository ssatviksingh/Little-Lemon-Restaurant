import React from 'react';
import { ScrollView, Image, StyleSheet, Text,ImageBackground } from 'react-native';

const Welcome = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/LittleLemonLogo.png')}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <ImageBackground style={styles.image2} source={require('./img/LittleLemonBackgroundImage.png')}>
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      </ImageBackground>
      <Image
        style={styles.image}
        source={require('./img/Picture1.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('./img/Picture2.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('./img/Picture3.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('./img/Picture4.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    borderWidth:100,
  },

  image2:{
    flex:1,
    justifyContent:'center'
  },
  container: {
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome;
