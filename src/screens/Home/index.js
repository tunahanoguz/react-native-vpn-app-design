import * as React from 'react';
import { Image } from 'react-native';
import { Box, Button, VPNButton, Text } from '../../components';
import { countries, texts } from '../../constants';
import theme from '../../theme';

function Home() {
  const [isConnected, setIsConnected] = React.useState(false);

  function toggleVPN() {
    setIsConnected((value) => !value);
  }

  return (
    <Box flex={1} bg="white">
      <Box flex={0.9} justifyContent="center">
        <Button
          flexDirection="row"
          alignItems="center"
          mb={8}
          py={2}
          px={5}
          isShadow={true}
          bg="white">
          <Text medium color="textGrey">
            {isConnected ? texts.connected : texts.disconnected}
          </Text>
          <Box
            width={8}
            height={8}
            ml={0}
            bg={isConnected ? 'green' : 'disconnectedGrey'}
            borderRadius={100}
          />
        </Button>

        <VPNButton isConnected={isConnected} setIsConnected={setIsConnected} />

        <Button
          borderWidth={isConnected ? '1px' : '0px'}
          borderColor="borderDark"
          bg={isConnected ? 'transparent' : 'blue'}
          onPress={toggleVPN}>
          <Text variant="bold" uppercase color={!isConnected && 'white'}>
            {isConnected ? texts.disconnect : texts.connect}
          </Text>
        </Button>
      </Box>

      <Box
        flex={0.1}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bg="light"
        css={{
          shadowColor: theme.colors.shadow,
          shadowOffset: { width: 0, height: 5 },
          elevation: 100,
        }}>
        <Image source={require('../../assets/icons/united-states.png')} />
        <Text fontSize={2} ml={5}>
          {countries[1].name}
        </Text>
      </Box>
    </Box>
  );
}

export default Home;
