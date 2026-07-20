import React from 'react';

const Price = ({ amount, className = '' }) => (
  <span className={`font-sans text-stone-900 ${className}`}>
    ${amount.toFixed(2)}
  </span>
);

export default Price;
