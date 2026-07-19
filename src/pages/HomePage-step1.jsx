import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section style={{ height: '100vh', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'white', padding: '0 20px' }}>
          <h1 style={{ fontFamily: 'serif', fontSize: '64px', marginBottom: '24px' }}>Crafted to be Treasured</h1>
          <p style={{ fontSize: '24px', marginBottom: '48px' }}>Demi-fine gold jewelry for everyday elegance</p>
          <button style={{ backgroundColor: '#d4a574', color: 'white', padding: '16px 48px', fontSize: '14px', letterSpacing: '2px' }}>
            SHOP THE COLLECTION
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
