import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const { addToCart } = useCart();

  const product = {
    id: id,
    name: "VIVID AURA JEWELS",
    description: "Gold ear cuff with crystal accent. A delicate piece that catches the light beautifully.",
    price: 42,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"
    ],
    rating: 4.8,
    reviews: 124,
    variants: ['Gold', 'Silver'],
    inStock: true
  };

  const handleAddToCart = () => {
    addToCart({ ...product, variant: selectedVariant }, quantity);
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        {/* Left - Image Gallery */}
        <div>
          <div style={{ aspectRatio: '3/4', backgroundColor: '#e5e7eb', marginBottom: '1rem' }}>
            <img src={product.images[selectedImage]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {product.images.map((img, index) => (
              <button key={index} onClick={() => setSelectedImage(index)} style={{ width: '80px', height: '80px', border: selectedImage === index ? '2px solid #c9a96e' : '2px solid transparent', padding: 0, cursor: 'pointer' }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontWeight: 400 }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>${product.price}.00</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ color: '#c9a96e' }}>★★★★★</span>
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8, color: '#374151', marginBottom: '2rem' }}>
            {product.description}
          </p>

          {/* Variant Selector */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              Tone
            </label>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  style={{
                    padding: '0.75rem 2rem',
                    border: selectedVariant === variant ? '2px solid #c9a96e' : '2px solid #e5e7eb',
                    backgroundColor: selectedVariant === variant ? '#c9a96e' : 'transparent',
                    color: selectedVariant === variant ? 'white' : '#1a1a1a',
                    cursor: 'pointer'
                  }}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              Quantity
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ width: '2.5rem', height: '2.5rem', border: '1px solid #e5e7eb', backgroundColor: 'transparent', cursor: 'pointer' }}>-</button>
              <span style={{ minWidth: '2rem', textAlign: 'center' }}>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} style={{ width: '2.5rem', height: '2.5rem', border: '1px solid #e5e7eb', backgroundColor: 'transparent', cursor: 'pointer' }}>+</button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            style={{
              width: '100%',
              padding: '1rem 2rem',
              backgroundColor: '#c9a96e',
              color: 'white',
              border: 'none',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '2rem'
            }}
          >
            Add to Cart - ${product.price}.00
          </button>

          {/* Accordions */}
          <div style={{ borderTop: '1px solid #e5e7eb' }}>
            {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
              <details key={section} style={{ borderBottom: '1px solid #e5e7eb', padding: '1.5rem 0' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}>
                  {section}
                </summary>
                <p style={{ marginTop: '1rem', lineHeight: 1.8, color: '#374151', fontSize: '0.875rem' }}>
                  {section === 'Description' && 'Our demi-fine jewelry is crafted with 18K gold plating over high-quality brass.'}
                  {section === 'Materials & Care' && 'Avoid water and perfume. Store in a cool, dry place.'}
                  {section === 'Shipping & Returns' && 'Free worldwide shipping. 30-day return policy.'}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
