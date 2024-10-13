import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 46,
  },
  container: {
    // position: 'static',
    // bottom: 0,
    // right: 0,
  },
  button: {
    backgroundColor: 'red',
  },
});

const InputTodo = () => {
  return (
    <View style={styles.container}>
      {/* <TextInput style={styles.input} placeholder="type your todo here..." /> */}

      <Button title="test" />
    </View>
  );
};

export default InputTodo;
