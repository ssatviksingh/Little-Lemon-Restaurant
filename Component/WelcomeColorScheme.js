import {
  ScrollView,
  Image,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const WelcomeColor = () => {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]}>
      <Image
        style={styles.logo}
        source={require('./img/Picture1.png')}
        resizeMode="center"
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
  container: {
    padding: 24,
    marginTop: 25,
  },
  regular: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default WelcomeColor;
