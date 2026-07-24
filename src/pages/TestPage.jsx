import React from 'react';

export default function TestPage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Velmora Test Page</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>If you can see this, React is working!</p>
      <div style={{ marginTop: '30px' }}>
        <a href="/" style={{ marginRight: '20px', color: 'black' }}>Home</a>
        <a href="/shop" style={{ marginRight: '20px', color: 'black' }}>Shop</a>
        <a href="/product/vivid-aura-jewels" style={{ color: 'black' }}>Product</a>
      </div>
    </div>
  );
}
