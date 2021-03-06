// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

// Local components
import { WalletTabList } from './WalletTabList';
import { WalletInput } from './WalletInput';

// Styled Components
const WalletCardWrapper = styled(Flex)`
  width: 600px;
  background-color: #A9C784;
  border-radius: 17px;
  padding: 0px 22px;
  height: 320px;
`;

// Exports
export const WalletCard = ({
  inputValue,
  onInputChange,
  inputAddonText,
  tabs,
  onTabsChange
}) => {
  return (
    <WalletCardWrapper
      alignItems='center'
    >
      <Flex
        direction='column'
        gap='5px'
        w='100%'
      >
        <WalletInput
          value={inputValue}
          onChange={event => onInputChange(event)}
          addonText={inputAddonText}
        />
        <WalletTabList
          tabs={tabs}
          onChange={(index) => onTabsChange(index)}
        />
      </Flex>
    </WalletCardWrapper>
  );
}
