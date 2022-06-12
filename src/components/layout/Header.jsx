// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

// Local moodules
import { Logo } from '../ui/Logo';

// Styled Componets
const StyledHeader = styled(Flex)`
  height: 95px;
`;

// Exports
export const Header = () => {
  return (
    <StyledHeader alignItems='center'>
      <Logo />
    </StyledHeader>
  );
}
