import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCartContext();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app this would come from API
  const product = {
    id: id,
    name: 'VIVID AURA JEWELS',
    price: 42,
    desc: 'Gold ear cuff with crystal accent',
    details: 'Beautiful demi-fine gold ear cuff featuring sparkling crystal accents. Perfect for adding a touch of elegance to any outfit.',
    materials: '18K Gold Plated, Hypoallergenic, Nickel-free',
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600']
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity: quantity
    });
    alert('Added to cart!');
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem 2rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '4rem',
        marginBottom: '4rem'
      }}>
        {/* Left: Image Gallery */}
        <div>
          <div style={{
            backgroundColor: '#f5f0e8',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9a9a9a',
            fontSize: '1.25rem',
            marginBottom: '1.5rem'
          }}>
            Main Product Image
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[1, 2].map((img) => (
              <div key={img} style={{
                backgroundColor: '#f5f0e8',
                height: '120px',
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9a9a9a',
                cursor: 'pointer',
                border: img === 1 ? '2px solid #c9a96e' : '2px solid transparent'
              }}>
                Thumbnail {img}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 400,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#1a1a1a',
            marginBottom: '1rem'
          }}>
            {product.name}
          </h1>

          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.5rem',
            color: '#c9a96e',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            ${product.price}
          </p>

          <div style={{
            display: 'flex',
            gap: '0.25rem',
            marginBottom: '1.5rem'
          }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: '#c9a96e', fontSize: '1.25rem' }}>★</span>
            ))}
            <span style={{ color: '#6b6b6b', fontSize: '0.875rem', marginLeft: '0.5rem' }}>(24 reviews)</span>
          </div>

          <p style={{
            color: '#1a1a1a',
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            {product.details}
          </p>

          {/* Variant Selector */}
          <div style={{ marginBottom: '2rem' }}>
            <p style={{
              color: '#1a1a1a',
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.75rem'
            }}>
              Tone
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['gold', 'silver'].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: selectedVariant === variant ? '2px solid #1a1a1a' : '2px solid #e8e0d0',
                    backgroundColor: selectedVariant === variant ? '#1a1a1a' : 'transparent',
                    color: selectedVariant === variant ? 'white' : '#1a1a1a',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'all 0.3s ease'
                  }}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div style={{ marginBottom: '2rem' }}>
            <p style={{
              color: '#1a1a1a',
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.75rem'
            }}>
              Quantity
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid #e8e0d0',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: '1.25rem',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                -
              </button>
              <span style={{ fontSize: '1rem', minWidth: '2rem', textAlign: 'center' }}>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid #e8e0d0',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: '1.25rem',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            style={{
              width: '100%',
              backgroundColor: '#c9a96e',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              fontSize: '0.9375rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              transition: 'background-color 0.3s ease',
              marginBottom: '2rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#b8945a';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#c9a96e';
            }}
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          {[
            { title: 'Description', content: product.details },
            { title: 'Materials & Care', content: `Materials: ${product.materials}\n\nCare: Avoid contact with perfumes, lotions, and water. Store in provided pouch.` },
            { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy for unworn items in original packaging.' }
          ].map((accordion, i) => (
            <details key={i} style={{
              borderTop: '1px solid #e8e0d0',
              padding: '1.25rem 0'
            }}>
              <summary style={{
                cursor: 'pointer',
                color: '#1a1a1a',
                fontSize: '0.9375rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                listStyle: 'none'
              }}>
                {accordion.title} ▼
              </summary>
              <p style={{
                color: '#6b6b6b',
                fontSize: '0.9375rem',
                lineHeight: 1.8,
                marginTop: '1rem',
                whiteSpace: 'pre-line'
              }}>
                {accordion.content}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* You May Also Like */}
      <section>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#1a1a1a',
          fontWeight: 400,
          letterSpacing: '0.02em'
        }}>
          You May Also Like
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { name: 'MAJESTIC FLORA NECTAR', price: 68 },
            { name: 'AMBER LACE EARRINGS', price: 54 },
            { name: 'GOLDEN SPHERE HUGGIES', price: 38 }
          ].map((product, i) => (
            <div key={i} style={{
              backgroundColor: 'white',
              border: '1px solid #e8e0d0',
              padding: '1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                backgroundColor: '#f5f0e8',
                height: '300px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9a9a9a'
              }}>
                Related Product
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '0.95rem',
                fontWeight: 600,
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
      </section>
    </div>
  );
};

export default ProductDetail;
