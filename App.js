import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { DrawerNavigation } from './src/navigations';
import theme from './src/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
