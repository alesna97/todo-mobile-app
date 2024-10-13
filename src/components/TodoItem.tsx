import React from 'react';
import {
  Card,
  Checkbox,
  DeleteIcon,
  HStack,
  IconButton,
  Text,
} from 'native-base';
import {TTodoItem} from '../reducers/todoReducer';
import useTodo from '../hooks/useTodo';

const TodoItem = ({id, todo, completed}: TTodoItem) => {
  const {deleteTodo, updateTodo} = useTodo();

  return (
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
      alignItems="center">
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
  );
};

export default TodoItem;
