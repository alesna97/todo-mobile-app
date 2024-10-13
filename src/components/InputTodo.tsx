/* eslint-disable @typescript-eslint/no-shadow */
import React, {useEffect, useState} from 'react';
import {AddIcon, Button, Divider, Input, Modal, Text, View} from 'native-base';
import {Fab} from 'native-base';
import useTodo from '../hooks/useTodo';

const InputTodo = () => {
  const {
    updateTodo,
    createTodo,
    selectedTodo,
    unSelectTodo,
    openInput,
    toggleInput,
  } = useTodo();
  const [value, setValue] = useState('');

  const handleOpen = () => toggleInput(true);
  const handleClose = () => toggleInput(false);

  const onChange = (text: string) => {
    setValue(text);
  };

  const proceedTodo = (value: string) => {
    if (selectedTodo?.id) {
      updateTodo({todo: value});
      unSelectTodo();
      handleClose();
      return setValue('');
    }

    createTodo(value);
    handleClose();
    return setValue('');
  };

  useEffect(() => {
    if (selectedTodo?.id) {
      setValue(selectedTodo?.todo);
    }
  }, [selectedTodo?.id, selectedTodo?.todo]);

  return (
    <>
      <Fab size="lg" icon={<AddIcon />} onPress={handleOpen} />
      <Modal isOpen={openInput} onClose={handleClose}>
        <View bgColor="white" p={4} borderRadius={12} width={'90%'}>
          <Text fontSize="lg" fontWeight={500} mb={2}>
            Add new todo
          </Text>
          <Divider mb={4} />
          <Input
            placeholder="enter your todo here..."
            height={46}
            borderRadius={8}
            mb={2}
            value={value}
            onChangeText={onChange}
          />
          <Button mb={2} onPress={() => proceedTodo(value)}>
            <Text color="white">Save</Text>
          </Button>
          <Button onPress={handleClose} variant="outline" color="primary.500">
            <Text>Cancel</Text>
          </Button>
        </View>
      </Modal>
    </>
  );
};

export default InputTodo;
