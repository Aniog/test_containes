import React from 'react';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf8f5' }}>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '3rem',
        color: '#1a1a1a',
        padding: '2rem',
        textAlign: 'center'
      }}>
        VELMORA Fine Jewelry
      </h1>
      <p style={{
        color: '#6b6b6b',
        fontSize: '1.25rem',
        textAlign: 'center',
        padding: '0 2rem'
      }}>
        Welcome to our luxury jewelry collection
      </p>
      <div style={{
        maxWidth: '1400px',
        margin: '2rem auto',
        padding: '2rem',
        backgroundColor: 'white',
        border: '1px solid #e8e0d0'
      }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '2rem',
          color: '#1a1a1a',
          marginBottom: '1rem'
        }}>
          Bestsellers
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            { name: 'VIVID AURA JEWELS', price: 42 },
            { name: 'MAJESTIC FLORA NECTAR', price: 68 },
            { name: 'GOLDEN SPHERE HUGGIES', price: 38 },
            { name: 'AMBER LACE EARRINGS', price: 54 },
            { name: 'ROYAL HEIRLOOM SET', price: 95 }
          ].map((product, i) => (
            <div key={i} style={{
              padding: '1.5rem',
              border: '1px solid #e8e0d0',
              backgroundColor: '#f5f0e8'
            }}>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                marginBottom: '0.5rem'
              }}>
                {product.name}
              </h3>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.25rem',
                color: '#c9a96e',
                fontWeight: 600
              }}>
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
