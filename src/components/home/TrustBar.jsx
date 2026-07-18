import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="trust-bar">
      {items.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};

export default TrustBar;
