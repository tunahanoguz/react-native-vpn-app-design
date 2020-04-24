import * as React from 'react';
import { Box, GradientBox } from '../index';
import theme from '../../theme';
import { Image, TouchableOpacity } from 'react-native';

function VPNButton({ isConnected, setIsConnected }) {
  return (
    <TouchableOpacity onPress={() => setIsConnected((value) => !value)}>
      <GradientBox
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        width={180}
        height={180}
        mb={8}
        p={10}
        borderRadius={100}
        colors={
          isConnected
            ? theme.gradients.darkBlueGradient
            : theme.gradients.darkGreyGradient
        }
        useAngle={true}
        angle={45}>
        {isConnected ? (
          <InnerBox isConnected={isConnected}>
            <InnerGradientBox isConnected={isConnected}>
              <ConfirmIcon />
            </InnerGradientBox>
          </InnerBox>
        ) : (
          <InnerGradientBox isConnected={isConnected}>
            <InnerBox isConnected={isConnected}>
              <OkayIcon />
            </InnerBox>
          </InnerGradientBox>
        )}
      </GradientBox>
    </TouchableOpacity>
  );
}

const InnerGradientBox = ({ isConnected, children }) => {
  return (
    <GradientBox
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      width={140}
      height={140}
      borderRadius={100}
      colors={
        isConnected
          ? theme.gradients.lightBlueGradient
          : theme.gradients.lightGreyGradient
      }
      useAngle={true}
      angle={45}>
      {children}
    </GradientBox>
  );
};

const InnerBox = ({ isConnected, children }) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      width={160}
      height={160}
      bg={isConnected ? 'middleCircleBlue' : 'innerCircleGrey'}
      borderRadius={100}>
      {children}
    </Box>
  );
};

const ConfirmIcon = () => {
  return <Image source={require('../../assets/icons/confirm.png')} />;
};

const OkayIcon = () => {
  return <Image source={require('../../assets/icons/okay.png')} />;
};

export default VPNButton;
