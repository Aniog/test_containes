import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    { id: 1, name: 'VIVID AURA JEWELS', price: 42, category: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800' },
    { id: 2, name: 'MAJESTIC FLORA NECTAR', price: 68, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800' },
    { id: 3, name: 'GOLDEN SPHERE HUGGIES', price: 38, category: 'Huggies', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800' },
    { id: 4, name: 'AMBER LACE EARRINGS', price: 54, category: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800' },
    { id: 5, name: 'ROYAL HEIRLOOM SET', price: 95, category: 'Sets', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800' }
  ];

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <h1 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '2.5rem',
        textAlign: 'center',
        marginBottom: '3rem',
        fontWeight: 400
      }}>
        Shop All
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem' }}>
        {/* Filter Sidebar */}
        <div>
          <h3 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1.5rem',
            fontWeight: 600
          }}>
            Filter
          </h3>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{
              fontSize: '0.875rem',
              marginBottom: '0.75rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              Category
            </h4>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.5rem 0',
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: selectedCategory === cat ? '#c9a96e' : '#1a1a1a',
                  cursor: 'pointer',
                  textTransform: 'capitalize'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{
              fontSize: '0.875rem',
              marginBottom: '0.75rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              Price
            </h4>
            {['Under $50', '$50-$75', '$75+'].map((range) => (
              <button
                key={range}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.5rem 0',
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <p style={{
              fontSize: '0.875rem',
              color: '#6b7280',
              fontFamily: 'Inter, sans-serif'
            }}>
              {filteredProducts.length} products
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #e5e7eb',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      aspectRatio: '3/4',
                      objectFit: 'cover',
                      backgroundColor: '#e5e7eb'
                    }}
                  />
                </div>
                <h3 style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.875rem',
                  fontFamily: 'Cormorant Garamond, serif',
                  marginBottom: '0.5rem'
                }}>
                  {product.name}
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  ${product.price}.00
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
