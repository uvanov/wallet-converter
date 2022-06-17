// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Styled Components
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledLoader = styled.div`
  border: 7px solid #f3f3f3; /* Light grey */
  border-top-color: #aaa; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
`;


// Exports
export const Loader = () => {
  return (
    <StyledLoader />
  );
}
