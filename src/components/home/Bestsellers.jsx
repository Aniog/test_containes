import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2>Bestsellers</h2>
          <p className="text-muted mt-2" style={{ maxWidth: '420px', margin: '0.5rem auto 0' }}>
            Timeless pieces loved by our community
          </p>
        </div>
        
        <div className="shop-grid" style={{ marginBottom: '2rem' }}>
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/shop" className="btn btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
