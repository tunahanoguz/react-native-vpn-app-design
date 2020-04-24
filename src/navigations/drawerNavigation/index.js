import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigation from '../homeNavigation';
import { About } from '../../screens';

function DrawerNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Introduction">
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
