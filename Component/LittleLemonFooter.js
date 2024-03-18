import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={fStyle.container}>
      <Text style={fStyle.textinput}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

const fStyle=StyleSheet.create({
  container:{
    backgroundColor: '#EE9972',
    marginVertical:10
  },
  textinput:{
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
    backgroundColor:'#f4ce14'
  }
})