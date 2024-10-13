import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import useTodo from '../hooks/useTodo';
import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    padding: 16,
    gap: 16,
    position: 'relative',
  },
});

const TodoList = () => {
  const {data} = useTodo();

  return (
    <View style={styles.container}>
      <FlatList
        data={data || []}
        renderItem={({item}) => <TodoItem {...item} />}
      />
    </View>
  );
};

export default TodoList;
