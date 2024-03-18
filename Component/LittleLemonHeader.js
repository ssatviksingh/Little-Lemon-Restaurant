import * as React from 'react';
import { StyleSheet , View , Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
      <View style={hStyles.lvStyle}>
        <Text style={hStyles.ltStyles} numberOfLines={1}>
        Little Lemon</Text>
      </View>
    );
  }

  const hStyles = StyleSheet.create({
    lvStyle:
    {backgroundColor: '#EE9972' },

    ltStyles:
    { padding: 20, fontSize: 30, color: 'black', textAlign: "center" }
  })