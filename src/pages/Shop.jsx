import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontFamily: 'Cormorant Garamond, serif', marginBottom: '1rem' }}>
        Shop All
      </h1>
      <p>Products will appear here.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <Link to="/product/1" style={{ padding: '0.5rem 1rem', background: '#c9a96e', color: 'white', textDecoration: 'none' }}>
          Product 1
        </Link>
        <Link to="/product/2" style={{ padding: '0.5rem 1rem', background: '#c9a96e', color: 'white', textDecoration: 'none' }}>
          Product 2
        </Link>
      </div>
    </div>
  );
};

export default Shop;
