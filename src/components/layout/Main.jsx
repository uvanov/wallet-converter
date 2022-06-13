// Import modules
import React from 'react';
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
