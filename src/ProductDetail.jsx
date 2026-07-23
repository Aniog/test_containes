import React, { useState } from 'react';

function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'VIVID AURA JEWELS',
    price: 42,
    description: 'A stunning gold ear cuff with crystal accent, perfect for adding a touch of elegance to any outfit.',
    images: ['Product Image 1', 'Product Image 2', 'Product Image 3'],
    variants: ['Gold', 'Silver'],
    rating: 4.8,
    reviews: 124
  };

  const images = [
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800',
    'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800'
  ];

  return (
    <div style={{ backgroundColor: '#fdf9f3', minHeight: '100vh', fontFamily: 'Cormorant Garamond, serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        {/* Left: Image Gallery */}
        <div>
          <div style={{ height: '600px', backgroundColor: '#e8e0d4', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#8a7b6b' }}>
            {product.images[selectedImage]}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {product.images.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImage(i)}
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  backgroundColor: '#e8e0d4', 
                  cursor: 'pointer',
                  border: i === selectedImage ? '2px solid #c9a96e' : '2px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem'
                }}
              >
                {img}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div style={{ paddingTop: '2rem' }}>
          <h1 style={{ 
            fontSize: '2rem', 
            fontWeight: '300', 
            letterSpacing: '0.15em', 
            marginBottom: '1rem',
            color: '#2d2824'
          }}>
            {product.name}
          </h1>

          <p style={{ fontSize: '1.5rem', color: '#c9a96e', marginBottom: '1rem', fontWeight: '500' }}>
            ${product.price}
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} style={{ color: '#c9a96e', fontSize: '1.2rem' }}>{star}</span>
            ))}
            <span style={{ color: '#8a7b6b', marginLeft: '0.5rem' }}>({product.reviews} reviews)</span>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#8a7b6b', marginBottom: '2rem' }}>
            {product.description}
          </p>

          {/* Variant Selector */}
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '0.5rem', color: '#2d2824' }}>TONE</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  style={{
                    padding: '0.75rem 2rem',
                    border: `1px solid ${selectedVariant === variant ? '#c9a96e' : '#e8e0d4'}`,
                    backgroundColor: selectedVariant === variant ? '#c9a96e' : 'transparent',
                    color: selectedVariant === variant ? '#2d2824' : '#2d2824',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '0.5rem', color: '#2d2824' }}>QUANTITY</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ padding: '0.5rem 1rem', border: '1px solid #e8e0d4', backgroundColor: 'transparent', cursor: 'pointer' }}
              >
                -
              </button>
              <span style={{ fontSize: '1.1rem', minWidth: '2rem', textAlign: 'center' }}>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                style={{ padding: '0.5rem 1rem', border: '1px solid #e8e0d4', backgroundColor: 'transparent', cursor: 'pointer' }}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button style={{ 
            width: '100%', 
            padding: '1.25rem', 
            backgroundColor: '#2d2824', 
            color: '#fdf9f3', 
            border: 'none', 
            fontSize: '1rem', 
            letterSpacing: '0.1em',
            cursor: 'pointer',
            marginBottom: '2rem'
          }}>
            ADD TO CART
          </button>

          {/* Accordions */}
          <div style={{ borderTop: '1px solid #e8e0d4' }}>
            {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
              <div key={section} style={{ borderBottom: '1px solid #e8e0d4', padding: '1.5rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <span style={{ fontSize: '0.9rem', letterSpacing: '0.1em', color: '#2d2824' }}>{section}</span>
                  <span style={{ color: '#8a7b6b' }}>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '300', textAlign: 'center', marginBottom: '3rem', letterSpacing: '0.05em', color: '#2d2824' }}>
          You May Also Like
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {[
            { name: 'MAJESTIC FLORA NECTAR', price: 68 },
            { name: 'GOLDEN SPHERE HUGGIES', price: 38 },
            { name: 'AMBER LACE EARRINGS', price: 54 },
            { name: 'ROYAL HEIRLOOM SET', price: 95 }
          ].map((product, i) => (
            <div key={i} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ height: '250px', backgroundColor: '#e8e0d4', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Product Image</div>
              <h3 style={{ fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '0.5rem', color: '#2d2824' }}>{product.name}</h3>
              <p style={{ color: '#c9a96e', fontSize: '1.1rem', fontWeight: '500' }}>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
