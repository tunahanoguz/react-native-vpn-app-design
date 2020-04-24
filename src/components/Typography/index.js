import * as React from 'react';
import styled from 'styled-components';
import {
  compose,
  variant,
  flexbox,
  typography,
  space,
  color,
} from 'styled-system';
import theme from '../../theme';

function Text({ uppercase, children, ...props }) {
  return (
    <StyledText
      style={uppercase && { textTransform: 'uppercase' }}
      css={{ color: theme.colors.dark, includeFontPadding: false }}
      {...props}>
      {children}
    </StyledText>
  );
}

const StyledText = styled.Text(
  compose(
    flexbox,
    typography,
    space,
    color,
    variant({
      variants: {
        normal: { fontFamily: 'SF-Pro-Display-Regular' },
        medium: { fontFamily: 'SF-Pro-Display-Medium' },
        semiBold: { fontFamily: 'SF-Pro-Display-Semibold' },
        bold: { fontFamily: 'SF-Pro-Display-Bold' },
      },
    }),
  ),
);

StyledText.defaultProps = {
  variant: 'normal',
};

export default Text;
