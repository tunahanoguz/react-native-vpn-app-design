import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigation from '../homeNavigation';
import { About } from '../../screens';
import theme from '../../theme';

function DrawerNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Introduction"
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        labelStyle: {
          fontFamily: 'SF-Pro-Display-Medium',
        },
        inactiveTintColor: theme.colors.textGrey,
        activeTintColor: theme.colors.dark,
        overlayColor: 0.1,
      }}>
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
