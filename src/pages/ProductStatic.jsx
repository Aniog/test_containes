import React from 'react';

const ProductStatic = () => {
  console.log('ProductStatic rendered');
  
  return (
    <div style={{ padding: '40px', textAlign: 'center', background: '#fff' }}>
      <h1 style={{ fontSize: '32px', fontFamily: 'serif', color: '#1a1a1a' }}>Product Static</h1>
      <p style={{ marginTop: '20px', fontSize: '18px', color: '#666' }}>This is a static product page without useParams</p>
      <p style={{ marginTop: '10px', fontSize: '14px', color: '#999' }}>If you see this, the component renders fine</p>
    </div>
  );
};

export default ProductStatic;
