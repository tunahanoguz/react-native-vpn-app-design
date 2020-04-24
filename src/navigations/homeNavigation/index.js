import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Introduction, Home } from '../../screens';

function HomeNavigation() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Introduction"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'SF-Pro-Display-Medium',
          textTransform: 'uppercase',
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginTop: 6, paddingHorizontal: 30 }}>
            <Image source={require('../../assets/icons/menu.png')} />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen
        name="Introduction"
        component={Introduction}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Home" component={Home} options={{ title: 'VPN' }} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
