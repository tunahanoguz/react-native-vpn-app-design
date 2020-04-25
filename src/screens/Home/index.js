import * as React from 'react';
import { Image } from 'react-native';
import { Box, Button, VPNButton, Text, ServerPicker } from '../../components';
import { countries, texts } from '../../constants';
import theme from '../../theme';

function Home() {
  const [isConnected, setIsConnected] = React.useState(false);
  const [isPickerOpen, setIsPickerOpen] = React.useState(false);
  const [pickerButtonHeight, setPickerButtonHeight] = React.useState(0);

  function toggleVPN() {
    setIsConnected((value) => !value);
  }

  function togglePicker() {
    setIsPickerOpen((value) => !value);
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
        justifyContent="center"
        alignItems="center"
        bg="light"
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setPickerButtonHeight(height);
        }}
        style={{
          shadowColor: theme.colors.shadow,
          shadowRadius: 2,
          shadowOffset: { width: 0, height: -4 },
          elevation: 32,
        }}>
        <Button flexDirection="row" alignItems="center" onPress={togglePicker}>
          <Image source={require('../../assets/icons/united-states.png')} />
          <Text fontSize={2} ml={5} mr={3}>
            {countries[1].name}
          </Text>
          <Image source={require('../../assets/icons/bottom.png')} />
        </Button>
      </Box>

      <ServerPicker
        isOpen={isPickerOpen}
        setIsOpen={togglePicker}
        additionalHeight={pickerButtonHeight}
      />
    </Box>
  );
}

export default Home;
