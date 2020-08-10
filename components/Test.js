import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Test = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="Press Me"
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#007AFF',
    height: 'auto',
    width: 'auto',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
  text: {
    textAlign: 'center',
  },
});

export default Test;
