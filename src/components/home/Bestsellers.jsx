import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section style={{ padding: '4rem 1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'baseline',
        marginBottom: '2rem' 
      }}>
        <h2 className="section-title">Bestsellers</h2>
        <Link 
          to="/shop" 
          style={{ 
            fontSize: '0.8125rem', 
            letterSpacing: '0.08em', 
            textTransform: 'uppercase',
            color: 'var(--color-gold)'
          }}
        >
          View All →
        </Link>
      </div>
      
      <div className="product-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;