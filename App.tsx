
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddMenu from './AddMenu';
import MenuScreen from './Menu';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="AddMenu" component={AddMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

