import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

// Redux Store
import { Provider } from 'react-redux'
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
)
