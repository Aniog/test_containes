import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function HomePage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: '48px', fontFamily: 'serif', letterSpacing: '0.15em' }}>VELMORA</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>Fine Jewelry</p>
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Bestsellers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div style={{ border: '1px solid #e5e5e5', padding: '20px' }}>
            <div style={{ height: '200px', background: '#f5f0eb', marginBottom: '10px' }}></div>
            <h3 style={{ fontSize: '16px', letterSpacing: '0.1em' }}>VIDE AURA JEWELS</h3>
            <p>$42</p>
          </div>
          <div style={{ border: '1px solid #e5e5e5', padding: '20px' }}>
            <div style={{ height: '200px', background: '#f5f0eb', marginBottom: '10px' }}></div>
            <h3 style={{ fontSize: '16px', letterSpacing: '0.1em' }}>MAJESTIC FLORA NECTAR</h3>
            <p>$68</p>
          </div>
          <div style={{ border: '1px solid #e5e5e5', padding: '20px' }}>
            <div style={{ height: '200px', background: '#f5f0eb', marginBottom: '10px' }}></div>
            <h3 style={{ fontSize: '16px', letterSpacing: '0.1em' }}>GOLDEN SPHERE HUGGIES</h3>
            <p>$38</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
