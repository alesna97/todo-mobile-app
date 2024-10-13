/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TodoProvider from './src/components/TodoProvider';
import TodoList from './src/components/TodoList';
import InputTodo from './src/components/InputTodo';
import {NativeBaseProvider, extendTheme} from 'native-base';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NativeBaseProvider
      theme={extendTheme({
        colors: {
          primary: {
            '50': '#FFE6F0',
            '100': '#FFB3D1',
            '200': '#FF9EB7',
            '300': '#FF8AAE',
            '400': '#FF6F94',
            '500': '#FF4F7D',
            '600': '#FF3B6B',
            '700': '#FF2B5B',
            '800': '#FF1B4C',
            '900': '#E5003D',
          },
        },
      })}>
      <TodoProvider>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />

          <TodoList />
          <InputTodo />
        </SafeAreaView>
      </TodoProvider>
    </NativeBaseProvider>
  );
}

export default App;
