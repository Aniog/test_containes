import React from 'react';

const HomePage = () => {
  const products = [
    { id: 1, name: 'Vivid Aura Jewels', price: 42 },
    { id: 2, name: 'Majestic Flora Nectar', price: 68 },
    { id: 3, name: 'Golden Sphere Huggies', price: 38 },
    { id: 4, name: 'Amber Lace Earrings', price: 54 },
    { id: 5, name: 'Royal Heirloom Set', price: 95 }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ height: '100vh', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'white', padding: '0 20px' }}>
          <h1 style={{ fontFamily: 'serif', fontSize: '64px', marginBottom: '24px' }}>Crafted to be Treasured</h1>
          <p style={{ fontSize: '24px', marginBottom: '48px' }}>Demi-fine gold jewelry for everyday elegance</p>
          <button style={{ backgroundColor: '#d4a574', color: 'white', padding: '16px 48px', fontSize: '14px', letterSpacing: '2px' }}>
            SHOP THE COLLECTION
          </button>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', fontSize: '14px', color: '#4a4a4a' }}>
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '48px', marginBottom: '16px' }}>Bestsellers</h2>
          <div style={{ width: '96px', height: '2px', backgroundColor: '#d4a574', margin: '0 auto' }}></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ cursor: 'pointer' }}>
              <div style={{ backgroundColor: '#f5f5f5', height: '300px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#999', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.name}</span>
              </div>
              <h3 style={{ fontFamily: 'serif', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{product.name}</h3>
              <p style={{ color: '#1a1a1a', fontWeight: '500' }}>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
