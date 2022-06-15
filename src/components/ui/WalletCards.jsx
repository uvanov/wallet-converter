// Import modules
import React, { useCallback, useEffect, useState } from 'react';
import {
  Flex,
  Text
} from '@chakra-ui/react';

// Local modules
import { WalletCard } from './dumb/WalletCard';

let timer;

// Exports
export const WalletCards = () => {
  const [amountValue, setAmountValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('0');
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('USD');

  const currencies = ['USD', 'EUR', 'MDL', 'RUB', 'RON', 'UAH'];

  const onCurrentyFromChange = index => {
    setCurrencyFrom(currencies[index]);
  };

  const onCurrencyToChange = index => {
    setCurrencyTo(currencies[index]);
  };

  const fetchCurrency = useCallback(async () => {
    let response = await fetch(`https://api.currencyscoop.com/v1/convert?api_key=fc57983ac60466a17590c48facaf0bdc&from=${currencyFrom}&to=${currencyTo}&amount=${amountValue}`);
    response = await response.json();
    setConvertedValue(response.response.value.toFixed(2));
  }, [amountValue, currencyFrom, currencyTo]);

  useEffect(() => {
    if (!amountValue || currencyFrom === currencyTo) {
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(async () => {
      await fetchCurrency();
    }, 1000)
  }, [amountValue]);

  useEffect(() => {
    if (!amountValue) {
      return;
    }

    (async function () {
      await fetchCurrency();
    })();
  }, [currencyFrom, currencyTo]);

  return (
    <Flex
      alignItems='center'
      gap='20px'
    >
      <WalletCard
        inputValue={amountValue}
        setInputValue={setAmountValue}
        inputAddonText={currencyFrom}
        tabs={currencies}
        onTabsChange={onCurrentyFromChange}
      />
      <Text
        fontWeight='bold'
        color='#aaa'
        fontSize={50}
      >
        =
      </Text>
      <WalletCard
        inputValue={convertedValue}
        inputAddonText={currencyTo}
        tabs={currencies}
        onTabsChange={onCurrencyToChange}
      />
    </Flex>
  );
}
