// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Styled Components
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 95px 1fr 60px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: 1670px;
`;

// Exports
export const Container = (props) => (
  <StyledContainer {...props} />
);


