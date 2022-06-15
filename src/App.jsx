// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { Header } from './components/layout/Header';
import { Container } from './components/layout/Container';
import { Footer } from './components/layout/Footer';
import { Main } from './components/layout/Main';

// Exports
export const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
