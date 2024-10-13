import React from 'react';
import {HStack, Input, Text, VStack} from 'native-base';
import dayjs from 'dayjs';

const Header = ({handleSearch}: {handleSearch: (text: string) => void}) => {
  return (
    <VStack bgColor="primary.500" px={4} space={4} py={4} height={180}>
      <HStack width="100%" justifyContent="flex-end">
        <VStack>
          <Text color="white" fontWeight={600} fontSize="3xl" textAlign="right">
            {dayjs().format('dddd')}
          </Text>
          <Text color="white" fontWeight={600} fontSize="xl">
            {dayjs().format('DD MMMM YYYY')}
          </Text>
        </VStack>
      </HStack>
      <Input
        placeholder="Search todo"
        bgColor="white"
        borderRadius={12}
        onChangeText={handleSearch}
        height={46}
      />
    </VStack>
  );
};

export default Header;
