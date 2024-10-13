import React from 'react';
import {
  Card,
  Checkbox,
  DeleteIcon,
  HStack,
  IconButton,
  Pressable,
  Text,
} from 'native-base';
import {TTodoItem} from '../reducers/todoReducer';
import useTodo from '../hooks/useTodo';

const TodoItem = ({id, todo, completed}: TTodoItem) => {
  const {deleteTodo, updateTodo, toggleInput, selectTodo} = useTodo();

  const onPress = () => {
    toggleInput(true);
    selectTodo({id, todo, completed});
  };

  return (
    <Pressable onPress={onPress}>
      <Card
        key={id}
        minHeight={16}
        backgroundColor={'white'}
        px={4}
        borderRadius={8}
        shadow={1}
        mb={2}
        display="flex"
        flexDir="row"
        alignItems="center"
        position="relative">
        <HStack
          flex={1}
          alignItems="center"
          space={4}
          opacity={completed ? 0.3 : 1}>
          <Checkbox
            isChecked={completed}
            value="test"
            onChange={() => updateTodo({id, todo, completed: !completed})}
          />
          <Text fontSize="lg" flex={1}>
            {todo}
          </Text>
        </HStack>
        <IconButton
          zIndex={1}
          icon={<DeleteIcon />}
          onPress={() => deleteTodo({id, todo, completed})}
        />
      </Card>
    </Pressable>
  );
};

export default TodoItem;
