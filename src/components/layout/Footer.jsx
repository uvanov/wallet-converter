// Import modules
import React from 'react';
import styled from '@emotion/styled';
import {
  Flex,
  Text
} from '@chakra-ui/react';

// Assets
import UvanovLogo from '../../assets/uvanov-logo.png';

// Styled Components
const StyledFooter = styled(Flex)`
  height: 60px;
`;

const FooterLogo = styled.img`
  width: 100px;
  user-select: none;
`;

// Exports
export const Footer = () => {
  return (
    <StyledFooter
      alignItems='center'
      justifyContent='center'
    >
      <a href="https://uvanov.com">
        <FooterLogo src={UvanovLogo} alt="uvanov" />
      </a>
    </StyledFooter>
  );
}
