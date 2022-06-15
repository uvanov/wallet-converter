import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";


export const fetchCurrencies = createAsyncThunk(
  'wallet/fetchCurrencies',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.currencyscoop.com/v1/convert?api_key=fc57983ac60466a17590c48facaf0bdc&from=${payload.from}&to=${payload.to}&amount=${payload.amount}`);
      if (!response.ok) {
        throw new Error('Server Error');
      }

      return response.json();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
)


export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    currencies: ['USD', 'EUR', 'MDL', 'RUB', 'RON', 'UAH'],
    currencyFrom: 'USD',
    currencyTo: 'USD',
    amount: '',
    value: ''
  },
  reducers: {
    setCurrencyFrom(state, action) {
      state.currencyFrom = action.payload.currency;
    },
    setCurrencyTo(state, action) {
      state.currencyTo = action.payload.currency;
    },
    setAmount(state, action) {
      state.amount = action.payload.amount;
    }
  },
  extraReducers: {
    [fetchCurrencies.pending]: () => { },
    [fetchCurrencies.fulfilled]: (state, action) => { 
      state.value = action.payload.response.value;
    },
    [fetchCurrencies.rejected]: () => { }
  }
});

export default walletSlice.reducer;