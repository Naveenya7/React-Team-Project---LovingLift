// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FundraiserProvider } from './Components/Pages/FundraiserContext';

ReactDOM.render(
  <FundraiserProvider>
    <App />
  </FundraiserProvider>,
  document.getElementById('root')
);
