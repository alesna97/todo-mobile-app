import React from 'react';
import {Text, View} from 'native-base';
import dayjs from 'dayjs';

const Header = () => {
  return (
    <View height={200} bgColor="primary.500" p={2} justifyContent="center">
      <Text color="white" fontWeight={600} fontSize="2xl">
        {dayjs().format('dddd')},
      </Text>
      <Text color="white" fontWeight={600} fontSize="2xl">
        {dayjs().format('DD MMMM YYYY')}
      </Text>
    </View>
  );
};

export default Header;
