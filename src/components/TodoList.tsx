import React, {useState} from 'react';
import {FlatList, View} from 'native-base';
import useTodo from '../hooks/useTodo';
import TodoItem from './TodoItem';
import Header from './Header';

const TodoList = () => {
  const [search, setSearch] = useState('');
  const {data} = useTodo({search});

  return (
    <>
      <Header handleSearch={setSearch} />
      <View
        marginTop={-2}
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
    </>
  );
};

export default TodoList;
