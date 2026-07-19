import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const HomePage = () => {
  const containerRef = useRef(null);
  
  const products = [
    { id: 1, name: 'Vivid Aura Jewels', price: 42 },
    { id: 2, name: 'Majestic Flora Nectar', price: 68 },
    { id: 3, name: 'Golden Sphere Huggies', price: 38 },
    { id: 4, name: 'Amber Lace Earrings', price: 54 },
    { id: 5, name: 'Royal Heirloom Set', price: 95 }
  ];
  
  const testimonials = [
    { name: 'Sarah M.', initial: 'S', rating: 5, text: 'Absolutely love my Vivid Aura earrings! The quality is exceptional.' },
    { name: 'Emily R.', initial: 'E', rating: 5, text: 'The Royal Heirloom Set was the perfect gift. Beautiful packaging.' },
    { name: 'Jessica L.', initial: 'J', rating: 5, text: 'Finally, jewelry that doesnt irritate my sensitive skin.' }
  ];

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
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
            <div key={product.id} style={{ textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ backgroundColor: '#f5f5f5', height: '300px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#999', fontSize: '14px' }}>{product.name}</span>
              </div>
              <h3 style={{ fontFamily: 'serif', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{product.name}</h3>
              <p style={{ color: '#1a1a1a', fontWeight: '500' }}>${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel-style Row */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '96px 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '48px', textAlign: 'center', marginBottom: '48px' }}>Worn by You</h2>
          <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '16px' }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} style={{ minWidth: '300px', height: '500px', backgroundColor: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                <span style={{ color: '#999', fontSize: '14px' }}>UGC {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 20px' }}>
        <h2 style={{ fontFamily: 'serif', fontSize: '48px', textAlign: 'center', marginBottom: '64px' }}>Shop by Category</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
            <div key={category} style={{ height: '400px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <h3 style={{ fontFamily: 'serif', fontSize: '24px', letterSpacing: '2px', textTransform: 'uppercase' }}>{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '96px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div style={{ height: '500px', backgroundColor: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#999' }}>Brand Image</span>
          </div>
          <div>
            <h2 style={{ fontFamily: 'serif', fontSize: '48px', marginBottom: '24px' }}>Our Story</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a', marginBottom: '32px' }}>
              Velmora was born from a simple belief: that beautiful jewelry should be accessible to everyone. 
              We create demi-fine pieces that celebrate life's everyday moments.
            </p>
            <button style={{ backgroundColor: 'transparent', border: '2px solid #d4a574', color: '#d4a574', padding: '12px 32px', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Read Our Story
            </button>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 20px' }}>
        <h2 style={{ fontFamily: 'serif', fontSize: '48px', textAlign: 'center', marginBottom: '64px' }}>What Our Customers Say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ color: '#f59e0b', fontSize: '24px', marginBottom: '16px' }}>
                {'★'.repeat(testimonial.rating)}
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a', marginBottom: '16px', fontStyle: 'italic' }}>
                "{testimonial.text}"
              </p>
              <p style={{ fontWeight: '500' }}>{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section style={{ backgroundColor: '#d4a574', padding: '96px 20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '48px', marginBottom: '16px' }}>Join Velmora</h2>
          <p style={{ fontSize: '18px', marginBottom: '32px' }}>Get 10% off your first order</p>
          <div style={{ display: 'flex', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ flex: '1', padding: '12px 16px', border: 'none', fontSize: '14px' }}
            />
            <button style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '12px 32px', border: 'none', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
