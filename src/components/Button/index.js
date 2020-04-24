import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, flexbox, layout, space, color, border } from 'styled-system';
import theme from '../../theme';

function Button({ isShadow, children, ...props }) {
  return (
    <StyledButton
      alignSelf="center"
      py={4}
      px={12}
      borderRadius={30}
      style={
        isShadow
          ? {
              shadowColor: theme.colors.shadow,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 5 },
              elevation: 16,
            }
          : null
      }
      {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.TouchableOpacity(
  compose(flexbox, layout, space, color, border),
);

Button.propTypes = {
  isShadow: PropTypes.bool,
};

Button.defaultTypes = {
  isShadow: false,
};

export default Button;
