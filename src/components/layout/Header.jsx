// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

// Local moodules
import { Logo } from '../ui/Logo';

// Styled Componets

// Exports
export const Header = () => {
  return (
    <Flex alignItems='center'>
      <Logo />
    </Flex>
  );
}
