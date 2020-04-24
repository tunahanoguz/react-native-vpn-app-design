import * as React from 'react';
import styled from 'styled-components';
import { compose, flexbox, layout, space, color, border } from 'styled-system';
import LinearGradient from 'react-native-linear-gradient';

const GradientBox = styled(LinearGradient)(
  compose(flexbox, layout, space, color, border),
);

export default GradientBox;
