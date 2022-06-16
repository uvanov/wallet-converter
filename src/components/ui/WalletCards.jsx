// Import modules
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Flex,
  Text
} from '@chakra-ui/react';

// Local modules
import { WalletCard } from './dumb/WalletCard';

let timer;
const currencies = ['USD', 'EUR', 'MDL', 'RUB', 'RON', 'UAH'];

// Exports
export const WalletCards = () => {
  const [primaryAmountValue, setPrimaryAmountValue] = useState('');
  const [secondaryAmountValue, setSecondaryAmountValue] = useState('');
  const [primaryCurrency, setPrimaryCurrency] = useState('USD');
  const [secondaryCurrency, setSecondaryCurrency] = useState('USD');


  const previousState = useRef({
    primary: primaryAmountValue,
    secondary: secondaryAmountValue
  });

  const onPrimaryCurrencyChange = index => {
    setPrimaryCurrency(currencies[index]);
  };

  const onSecondaryCurrencyChange = index => {
    setSecondaryCurrency(currencies[index]);
  };

  const fetchCurrency = async (from, to, amount, setter) => {
    let response = await fetch(`https://api.currencyscoop.com/v1/convert?api_key=fc57983ac60466a17590c48facaf0bdc&from=${from}&to=${to}&amount=${amount}`);
    response = await response.json();
    setter(response.response.value.toFixed(2));
    console.log('fetch', { from, to, amount });
  }

  useEffect(() => {
    if (primaryCurrency === secondaryCurrency) {
      return;
    }
    clearTimeout(timer);

    timer = setTimeout(async () => {
      if (primaryAmountValue !== previousState.current.primary) {
        console.log('Primary amount was changed');
        await fetchCurrency(primaryCurrency, secondaryCurrency, primaryAmountValue, setSecondaryAmountValue);
        previousState.current.primary = primaryAmountValue;
      } else if (secondaryAmountValue !== previousState.current.secondary) {
        console.log('Secondary amount was changed');
        await fetchCurrency(secondaryCurrency, primaryCurrency, secondaryAmountValue, setPrimaryAmountValue);
        previousState.current.secondary = secondaryAmountValue;
      }
    }, 1000)
    // TODO: Fetch triggers twice, because one of amounts change after fetch.
    // Solution: Try to connect fetch with input's onChange
  }, [primaryAmountValue, secondaryAmountValue]);

  useEffect(() => {
    if (!primaryAmountValue) {
      return;
    }

    (async function () {
      console.log('currency was changed');
      await fetchCurrency(primaryCurrency, secondaryCurrency, primaryAmountValue, setSecondaryAmountValue);
    })();
  }, [primaryCurrency, secondaryCurrency]);

  return (
    <Flex
      alignItems='center'
      gap='20px'
    >
      <WalletCard
        inputValue={primaryAmountValue}
        setInputValue={setPrimaryAmountValue}
        inputAddonText={primaryCurrency}
        tabs={currencies}
        onTabsChange={onPrimaryCurrencyChange}
      />
      <Text
        fontWeight='bold'
        color='#aaa'
        fontSize={50}
      >
        =
      </Text>
      <WalletCard
        inputValue={secondaryAmountValue}
        setInputValue={setSecondaryAmountValue}
        inputAddonText={secondaryCurrency}
        tabs={currencies}
        onTabsChange={onSecondaryCurrencyChange}
      />
    </Flex>
  );
}
