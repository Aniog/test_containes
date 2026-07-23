import React from 'react';

export default function SimpleHome() {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 
        style={{ 
          fontSize: '3rem', 
          fontFamily: 'Cormorant Garamond, serif',
          color: '#2d2824',
          marginBottom: '1rem'
        }}
      >
        VELMORA
      </h1>
      <p style={{ color: '#7a7168', fontSize: '1.125rem', marginBottom: '2rem' }}>
        Fine Jewelry Storefront
      </p>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #fae8c4 0%, #e0b884 100%)',
        padding: '60px 40px',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem',
          fontFamily: 'Cormorant Garamond, serif',
          color: '#2d2824',
          marginBottom: '1rem'
        }}>
          Crafted to be Treasured
        </h2>
        <p style={{ color: '#7a7168', fontSize: '1rem' }}>
          Demi-fine gold jewelry for life's meaningful moments
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} style={{ 
            background: '#fdf9f3',
            padding: '20px',
            border: '1px solid #e0d9d0'
          }}>
            <div style={{ 
              background: '#fae8c4',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#2d2824' }}>
                Product {item}
              </span>
            </div>
            <h3 style={{ 
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.25rem',
              color: '#2d2824',
              marginBottom: '0.5rem'
            }}>
              JEWELRY PIECE {item}
            </h3>
            <p style={{ color: '#7a7168', fontSize: '0.95rem' }}>$49.00</p>
          </div>
        ))}
      </div>
    </div>
  );
}
