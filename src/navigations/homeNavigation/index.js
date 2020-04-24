import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Introduction, Home } from '../../screens';

function HomeNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Introduction">
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
