import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={styles.box}>Hello World</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {fontSize: 100},
});
