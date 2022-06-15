// Import modules
import React from 'react';
import { Flex } from '@chakra-ui/react';

// Local modules
import { WalletCards } from '../ui/WalletCards.jsx';

// Styled Components

// Exports
export const Main = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
    >
      <WalletCards />
    </Flex>
  );
}
