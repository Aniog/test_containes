import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { formatPrice } from '../lib/utils';

const Collections = () => {
  // Group products by category
  const collections = {
    'Signature Collection': products.filter(p => p.category === 'Earrings' || p.category === 'Huggies'),
    'Statement Collection': products.filter(p => p.category === 'Necklaces'),
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-velmora-bg-dark text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[0.2em] text-xs text-white/60 mb-4">Curated with Intention</div>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Collections</h1>
          <p className="text-white/80 max-w-md mx-auto">
            Each collection tells a story of craftsmanship, intention, and quiet beauty.
          </p>
        </div>
      </div>

      {/* Collections */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {Object.entries(collections).map(([collectionName, collectionProducts], idx) => (
          <div key={idx} className="mb-20 last:mb-0">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="font-serif text-3xl">{collectionName}</h2>
                <p className="text-velmora-text-muted mt-1 text-sm">
                  {collectionProducts.length} pieces
                </p>
              </div>
              <Link to="/shop" className="text-sm uppercase tracking-widest hidden md:block hover:text-velmora-gold">
                Shop All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collectionProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.slug}`} className="group">
                  <div className="aspect-[4/3] bg-velmora-surface-warm overflow-hidden mb-4">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <div className="product-name text-base tracking-[0.1em] mb-1">{product.name}</div>
                    <div className="text-sm text-velmora-text-muted">{formatPrice(product.price)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Gift Sets Callout */}
      <div className="bg-velmora-surface border-y border-velmora-border py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[0.15em] text-xs text-velmora-text-muted mb-3">For Someone Special</div>
          <h3 className="font-serif text-3xl mb-4">Gift Sets</h3>
          <p className="text-velmora-text-muted mb-6 max-w-md mx-auto">
            Thoughtfully curated pairings presented in our signature gift box. 
            The perfect way to mark a moment.
          </p>
          <Link to="/shop" className="btn btn-outline">
            Explore Gift Sets
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;
