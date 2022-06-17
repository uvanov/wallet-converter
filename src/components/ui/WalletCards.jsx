// Import modules
import React, { useEffect, useRef, useState } from 'react';
import {
  Flex,
  Text
} from '@chakra-ui/react';

// Local modules
import { WalletCard } from './dumb/WalletCard';
import { Loader } from './dumb/Loader';

let timer;
const currencies = ['USD', 'EUR', 'MDL', 'RUB', 'RON', 'UAH'];

// Exports
export const WalletCards = () => {
  const [primaryAmountValue, setPrimaryAmountValue] = useState('');
  const [secondaryAmountValue, setSecondaryAmountValue] = useState('');
  const [primaryCurrency, setPrimaryCurrency] = useState('USD');
  const [secondaryCurrency, setSecondaryCurrency] = useState('USD');
  const [isFetchLoading, setIsFetchLoading] = useState(false);


  const isFetchAble = useRef(true);

  const onPrimaryCurrencyChange = index => {
    setPrimaryCurrency(currencies[index]);
  };

  const onSecondaryCurrencyChange = index => {
    setSecondaryCurrency(currencies[index]);
  };

  const fetchCurrency = async (from, to, amount, setter) => {
    if (isFetchAble.current) {
      // setIsFetchLoading(true);
      let response = await fetch(`https://api.currencyscoop.com/v1/convert?api_key=fc57983ac60466a17590c48facaf0bdc&from=${from}&to=${to}&amount=${amount}`);
      response = await response.json();
      setter(response.response.value.toFixed(2));
      // setIsFetchLoading(false);
      isFetchAble.current = false;
      console.log('fetch', { from, to, amount });
    } else {
      isFetchAble.current = true;
    }
  };

  const onInputChange = (from, to, currentAmount, setter) => {
    if (primaryCurrency === secondaryCurrency) {
      return;
    };
    clearTimeout(timer);

    timer = setTimeout(async () => {
      await fetchCurrency(from, to, currentAmount, setter);
    }, 500);
  };


  useEffect(() => {
    onInputChange(primaryCurrency, secondaryCurrency, primaryAmountValue, setSecondaryAmountValue);
  }, [primaryAmountValue]);

  useEffect(() => {
    onInputChange(secondaryCurrency, primaryCurrency, secondaryAmountValue, setPrimaryAmountValue);
  }, [secondaryAmountValue]);

  useEffect(() => {
    if (!primaryAmountValue) {
      return;
    }

    fetchCurrency(primaryCurrency, secondaryCurrency, primaryAmountValue, setSecondaryAmountValue);
  }, [primaryCurrency, secondaryCurrency]);

  return (
    <Flex
      alignItems='center'
      gap='20px'
    >
      <WalletCard
        inputValue={primaryAmountValue}
        onInputChange={event => setPrimaryAmountValue(event.target.value)}
        inputAddonText={primaryCurrency}
        tabs={currencies}
        onTabsChange={onPrimaryCurrencyChange}
      />
      <Text
        fontWeight='bold'
        color='#aaa'
        fontSize={50}
      >
        {isFetchLoading ? <Loader /> : "="}
      </Text>
      <WalletCard
        inputValue={secondaryAmountValue}
        onInputChange={event => setSecondaryAmountValue(event.target.value)}
        inputAddonText={secondaryCurrency}
        tabs={currencies}
        onTabsChange={onSecondaryCurrencyChange}
      />
    </Flex>
  );
}
