// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

// Local modules
import { WalletCard } from '../ui/WalletCard';

// Styled Components


// Exports
export const Main = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
    >
      <WalletCard />
    </Flex>
  );
}
