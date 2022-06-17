// Import modules
import React from 'react';
import styled from '@emotion/styled';
import {
  Tab,
  TabList,
  Tabs
} from '@chakra-ui/react';


// Styled Components
const WalletTab = styled(Tab)`
  background: #5A8F30;
  font-size: 18px;
  color: white;
  font-weight: 700;
`;

// Exports
export const WalletTabList = ({ tabs, onChange }) => {
  return (
    <Tabs
      onChange={selectedTabId => onChange(selectedTabId)}
      isFitted
      variant='unstyled'
    >
      <TabList>
        {
          tabs?.map(tab => (
            <WalletTab
              _selected={{ bg: '#7DD835' }}
              key={tab}
            >
              {tab}
            </WalletTab>
          ))
        }
      </TabList>
    </Tabs>
  );
}
