import React, { useState, useEffect } from 'react';
import { Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import Box from '../Box';
import Button from '../Button';
import Text from '../Typography';
import { countries, texts } from '../../constants';
import theme from '../../theme';

function ServerPicker({ isOpen, setIsOpen, additionalHeight }) {
  const [selectedValue, setSelectedValue] = useState(1);
  const [animatedValue, setAnimatedValue] = useState(
    new Animated.Value(isOpen ? 1 : 0),
  );
  const [outerAnimatedValue, setOuterAnimatedValue] = useState(
    new Animated.Value(isOpen ? 1 : 0),
  );
  const [_height, setHeight] = useState(0);
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  useEffect(() => {
    let toValue = isOpen ? 1 : 0;
    Animated.timing(animatedValue, {
      toValue: toValue,
      duration: 400,
      useNativeDriver: true,
    }).start();

    Animated.timing(outerAnimatedValue, {
      toValue: toValue,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  let translation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [deviceHeight, 0],
  });

  let outerTranslation = outerAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [deviceHeight, 0],
  });

  return (
    isOpen && (
      <Box
        as={Animated.View}
        style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: [{ translateY: outerTranslation }],
            backgroundColor: theme.colors.darkOpacity,
          }}
          onPress={setIsOpen}
        />

        <Box
          as={Animated.View}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setHeight(height);
          }}
          style={{
            transform: [{ translateY: translation }],
            shadowColor: theme.colors.shadow,
            shadowRadius: 2,
            shadowOffset: { width: 0, height: -4 },
            elevation: 32,
          }}
          justifyContent="center"
          alignItems="center"
          position="absolute"
          bottom={0}
          width={deviceWidth}
          px={9}
          py={7}
          bg="light">
          {countries.map((country) => {
            const { id, icon, name } = country;

            return (
              <Button
                key={id}
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
                px="0"
                onPress={() => setSelectedValue(id)}>
                <Box flexDirection="row" alignItems="center">
                  <Image source={icon} />
                  <Text fontSize={2} ml={5}>
                    {name}
                  </Text>
                </Box>

                <Box
                  width={20}
                  height={20}
                  borderRadius={100}
                  borderWidth={1}
                  borderColor={
                    selectedValue === id ? 'transparent' : 'unselectedCircle'
                  }
                  bg={selectedValue === id && 'selectedCircle'}
                />
              </Button>
            );
          })}
        </Box>
      </Box>
    )
  );
}

export default ServerPicker;
