import React from 'react';
import {FlatList, View} from 'native-base';
import useTodo from '../hooks/useTodo';
import TodoItem from './TodoItem';

const TodoList = () => {
  const {data} = useTodo();

  return (
    <View
      marginTop={-6}
      pt={4}
      bgColor="gray.50"
      borderTopRadius={12}
      px={4}
      height="100%">
      <FlatList
        data={data || []}
        renderItem={({item}) => <TodoItem {...item} />}
      />
    </View>
  );
};

export default TodoList;
