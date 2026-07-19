import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section style={{ height: '100vh', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '64px', fontFamily: 'serif', marginBottom: '20px' }}>Crafted to be Treasured</h1>
          <p style={{ fontSize: '20px', marginBottom: '40px' }}>Demi-fine gold jewelry for everyday elegance</p>
          <button style={{ backgroundColor: '#d4a574', color: 'white', padding: '16px 48px', fontSize: '14px', letterSpacing: '2px' }}>SHOP THE COLLECTION</button>
        </div>
      </section>
      
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '48px', fontFamily: 'serif', textAlign: 'center', marginBottom: '40px' }}>Bestsellers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          <div style={{ border: '1px solid #e5e5e5', padding: '20px' }}>
            <div style={{ backgroundColor: '#f5f5f5', height: '200px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Vivid Aura Jewels</div>
            <h3 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Vivid Aura Jewels</h3>
            <p style={{ color: '#666' }}>$42</p>
          </div>
          <div style={{ border: '1px solid #e5e5e5', padding: '20px' }}>
            <div style={{ backgroundColor: '#f5f5f5', height: '200px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Majestic Flora Nectar</div>
            <h3 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Majestic Flora Nectar</h3>
            <p style={{ color: '#666' }}>$68</p>
          </div>
          <div style={{ border: '1px solid #e5e5e5', padding: '20px' }}>
            <div style={{ backgroundColor: '#f5f5f5', height: '200px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Golden Sphere Huggies</div>
            <h3 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Golden Sphere Huggies</h3>
            <p style={{ color: '#666' }}>$38</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
