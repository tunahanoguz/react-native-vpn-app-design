import * as React from 'react';
import { Image, StatusBar } from 'react-native';
import { Box, Button, Text } from '../../components';
import { texts } from '../../constants';

function Introduction({ navigation }) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="white" px={9}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Image source={require('../../assets/images/secured-man.png')} />

      <Box alignItems="center" mt={12} mb={10}>
        <Text variant="semiBold" fontSize={4} mb={1}>
          {texts.introTitle}
        </Text>

        <Text fontSize={[1]} textAlign="center" color="textGrey">
          {texts.introDescription}
        </Text>
      </Box>

      <Button
        flexDirection="row"
        bg="blue"
        onPress={() => navigation.navigate('Home')}>
        <Text uppercase variant="bold" fontSize={[0]} color="white">
          {texts.introButton}
        </Text>
      </Button>
    </Box>
  );
}

export default Introduction;
