import React from 'react';

const getSymbolFromCurrency = (currency: Amount['currency']): string => {
  switch (currency) {
    case 'EUR':
      return '€';
    case 'USD':
      return '$';
    default:
      return '';
  }
};

const Amount: React.FC<Amount> = ({ value, currency }) => (
  <>
    {value} {getSymbolFromCurrency(currency)}
  </>
);

export default Amount;
