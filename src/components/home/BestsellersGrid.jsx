import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';

const BestsellersGrid = ({ products }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.4em] text-muted mb-4">Curated Favorites</h2>
          <h3 className="text-3xl md:text-4xl font-serif">The Bestsellers</h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="text-xs uppercase tracking-premium border-b border-primary pb-1 hover:text-gold hover:border-gold transition-all">
            Shop All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersGrid;
