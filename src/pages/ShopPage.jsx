import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

console.log('ShopPage: Loading...');

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontFamily: 'serif', marginBottom: '1rem' }}>Shop All</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>{filteredProducts.length} products</p>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Filters sidebar */}
        <div style={{ width: '250px' }}>
          <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Category</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  color: selectedCategory === category ? '#8B7355' : '#666',
                  fontWeight: selectedCategory === category ? '500' : 'normal',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div style={{ flex: '1' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ aspectRatio: '1', overflow: 'hidden', backgroundColor: '#f5f0eb', marginBottom: '0.75rem' }}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{product.name}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666' }}>${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
