// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

// Styled Components
const WalletCardInput = styled.input`
  outline: 0;
  border: 0;
  border-radius: 3px 0 0 3px;
  background-color: #fff;

  height: 58px;
  width: 100%;
  padding-right: 18px;

  font-size: 25px;
  text-align: right;
  transition: box-shadow .3s;
  
  &:focus {
    box-shadow: 0 0 25px rgba(0, 0, 0, .3);
  }

  &::placeholder {
    color: black;
    opacity: .3;
  }
`;

const WalletCardInputAddon = styled(Flex)`
  padding: 10px;
  border: 0;
  border-radius: 0 3px 3px 0;
  background-color: #e9e9e9;
  font-size: 12px;
`;

// Exports
export const WalletInput = ({
  value,
  onChange,
  addonText
}) => {
  return (
    <Flex>
      <WalletCardInput
        placeholder='Input summ'
        value={value}
        onChange={event => onChange(event)}
      />
      <WalletCardInputAddon
        alignItems='center'
        children={addonText}
      />
    </Flex>
  );
}
