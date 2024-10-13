import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TTodoItem} from '../reducers/todoReducer';
import useTodo from '../hooks/useTodo';

const styles = StyleSheet.create({
  listItem: {
    minHeight: 64,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 16,
    display: 'flex',
    gap: 16,
  },
});

const TodoItem = ({id, todo, completed}: TTodoItem) => {
  const {deleteTodo, updateTodo} = useTodo();

  return (
    <View key={id} style={styles.listItem}>
      <Text>{todo}</Text>
      <Button
        title="delete"
        onPress={() => deleteTodo({id, todo, completed})}
      />
      <Button title="edit" />
      <Button
        title="mark as completed"
        onPress={() => updateTodo({id, todo, completed: !completed})}
      />
    </View>
  );
};

export default TodoItem;
