import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import store from 'redux/store';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
