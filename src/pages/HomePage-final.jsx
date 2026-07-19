import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const products = [
    { id: 1, name: 'Vivid Aura Jewels', price: 42, desc: 'Gold ear cuff with crystal accent' },
    { id: 2, name: 'Majestic Flora Nectar', price: 68, desc: 'Multicolor floral crystal necklace' },
    { id: 3, name: 'Golden Sphere Huggies', price: 38, desc: 'Chunky gold dome huggie earrings' },
    { id: 4, name: 'Amber Lace Earrings', price: 54, desc: 'Textured gold filigree drop earrings' },
    { id: 5, name: 'Royal Heirloom Set', price: 95, desc: 'Gift-boxed earring + necklace set' }
  ];

  const testimonials = [
    { name: 'Sarah M.', initial: 'S', rating: 5, text: 'Absolutely love my Vivid Aura earrings! The quality is exceptional.' },
    { name: 'Emily R.', initial: 'E', rating: 5, text: 'The Royal Heirloom Set was the perfect gift. Beautiful packaging.' },
    { name: 'Jessica L.', initial: 'J', rating: 5, text: 'Finally, jewelry that doesnt irritate my sensitive skin.' }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ height: '100vh', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: '0', backgroundColor: 'black', opacity: '0.3' }}></div>
        <div style={{ position: 'relative', zIndex: '10', textAlign: 'center', color: 'white', padding: '0 20px', maxWidth: '900px' }}>
          <h1 style={{ fontFamily: 'serif', fontSize: '64px', marginBottom: '24px' }}>Crafted to be Treasured</h1>
          <p style={{ fontSize: '24px', marginBottom: '48px', fontWeight: '300' }}>Demi-fine gold jewelry for everyday elegance</p>
          <Link
            to="/shop"
            style={{ display: 'inline-block', backgroundColor: '#d4a574', color: 'white', padding: '16px 48px', fontSize: '14px', letterSpacing: '2px', textDecoration: 'none' }}
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', fontSize: '14px', color: '#4a4a4a' }}>
            <span>✓ Free Worldwide Shipping</span>
            <span>✓ 30-Day Returns</span>
            <span>✓ 18K Gold Plated</span>
            <span>✓ Hypoallergenic</span>
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
              <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f5f5f5', aspectRatio: '1/1', marginBottom: '24px' }}>
                <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                  <span style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.name}</span>
                </div>
                <button style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', color: '#1a1a1a', padding: '12px 32px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', border: 'none', cursor: 'pointer' }}>
                  Add to Cart
                </button>
              </div>
              <h3 style={{ fontFamily: 'serif', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{product.name}</h3>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '4px' }}>{product.desc}</p>
              <p style={{ color: '#1a1a1a', fontWeight: '500' }}>${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. UGC / Instagram-style Section */}
      <section style={{ backgroundColor: '#fafafa', padding: '96px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '48px', textAlign: 'center', marginBottom: '16px' }}>Worn by You</h2>
          <div style={{ width: '96px', height: '2px', backgroundColor: '#d4a574', margin: '0 auto' }}></div>
        </div>
        <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', padding: '0 20px 32px' }}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} style={{ flexShrink: '0', width: '288px', height: '384px', backgroundColor: '#e5e5e5', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                <span>UGC Image {item}</span>
              </div>
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, black, transparent)', padding: '24px' }}>
                <p style={{ color: 'white', fontSize: '14px', fontStyle: 'italic' }}>Perfect everyday elegance</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '48px', marginBottom: '16px' }}>Shop by Category</h2>
          <div style={{ width: '96px', height: '2px', backgroundColor: '#d4a574', margin: '0 auto' }}></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {['Earrings', 'Necklaces', 'Huggies'].map((category, index) => (
            <Link
              key={index}
              to="/shop"
              style={{ position: 'relative', height: '384px', backgroundColor: '#e5e5e5', overflow: 'hidden', display: 'block', textDecoration: 'none' }}
            >
              <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                <span style={{ fontSize: '18px', textTransform: 'uppercase', letterSpacing: '2px' }}>{category}</span>
              </div>
              <div style={{ position: 'absolute', inset: '0', backgroundColor: 'black', opacity: '0', transition: 'opacity 0.3s' }}></div>
              <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', color: 'white', opacity: '0', transition: 'opacity 0.3s' }}>
                  <h3 style={{ fontFamily: 'serif', fontSize: '36px', marginBottom: '8px' }}>{category}</h3>
                  <p style={{ fontSize: '14px', letterSpacing: '1px' }}>Shop Now →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split Section */}
      <section style={{ padding: '96px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div style={{ position: 'relative', height: '384px', backgroundColor: '#e5e5e5' }}>
              <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                <span>Brand Story Image</span>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'serif', fontSize: '48px', marginBottom: '32px' }}>Our Story</h2>
              <div style={{ width: '96px', height: '2px', backgroundColor: '#d4a574', marginBottom: '32px' }}></div>
              <p style={{ color: '#4a4a4a', marginBottom: '24px', lineHeight: '1.6' }}>
                At Velmora, we believe that jewelry should be as unique as the person wearing it. 
                Each piece in our collection is thoughtfully designed to celebrate life's precious moments, 
                from everyday elegance to special occasions.
              </p>
              <p style={{ color: '#4a4a4a', marginBottom: '32px', lineHeight: '1.6' }}>
                Our demi-fine jewelry combines the luxury of 18K gold plating with accessible pricing, 
                making it possible for every woman to own pieces that make her feel truly special.
              </p>
              <Link
                to="/about"
                style={{ display: 'inline-block', borderBottom: '2px solid #d4a574', paddingBottom: '4px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', color: '#1a1a1a' }}
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section style={{ backgroundColor: '#fafafa', padding: '96px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontFamily: 'serif', fontSize: '48px', marginBottom: '16px' }}>What Our Customers Say</h2>
            <div style={{ width: '96px', height: '2px', backgroundColor: '#d4a574', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {testimonials.map((review, index) => (
              <div key={index} style={{ backgroundColor: 'white', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#d4a574', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'serif', fontSize: '18px', marginRight: '16px' }}>
                    {review.initial}
                  </div>
                  <div>
                    <p style={{ fontWeight: '500' }}>{review.name}</p>
                    <div style={{ color: '#f59e0b' }}>
                      {'★'.repeat(review.rating)}
                    </div>
                  </div>
                </div>
                <p style={{ color: '#4a4a4a', fontStyle: 'italic' }}>"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '96px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '48px', marginBottom: '24px' }}>Join the Velmora Family</h2>
          <p style={{ fontSize: '24px', marginBottom: '16px', color: '#d1d5db' }}>Get 10% Off Your First Order</p>
          <p style={{ marginBottom: '48px', color: '#9ca3af' }}>
            Subscribe to our newsletter for exclusive offers, new arrivals, and jewelry care tips delivered to your inbox.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{ flexGrow: '1', padding: '16px 24px', fontSize: '14px', color: '#1a1a1a' }}
            />
            <button style={{ backgroundColor: '#d4a574', color: 'white', padding: '16px 32px', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
