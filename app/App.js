/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import Route from './route'
console.disableYellowBox = true // 关闭全部黄色警告

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0, 0, 0, 0)" translucent={true} />
      <Route />
    </View>
  );
};

export default App;
