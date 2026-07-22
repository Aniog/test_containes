import React from 'react';
import { useParams } from 'react-router-dom';

const ProductBare = () => {
  const { id } = useParams();
  console.log('ProductBare rendered with id:', id);
  
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '32px', fontFamily: 'serif' }}>Product Bare</h1>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>Product ID: {id}</p>
      <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>If you see this, the component is working</p>
    </div>
  );
};

export default ProductBare;
