import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Collections = () => {
  // Group products by a "collection" concept (using category for demo)
  const collections = [
    {
      name: 'The Everyday Edit',
      description: 'Timeless pieces designed for daily wear. Versatile, understated, essential.',
      products: products.slice(0, 3),
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    },
    {
      name: 'The Heirloom Collection',
      description: 'Statement pieces with sculptural presence. For the moments that matter.',
      products: products.slice(2, 5),
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center pt-12 pb-14">
          <span className="text-xs tracking-[0.2em] text-[var(--color-gold)]">CURATED</span>
          <h1 className="font-serif text-5xl mt-3">Collections</h1>
        </div>

        {collections.map((collection, index) => (
          <div key={index} className="mb-20 last:mb-0">
            <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="aspect-[16/10] bg-[var(--color-bg-alt)] overflow-hidden">
                  <img src={collection.image} alt={collection.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="font-serif text-3xl mb-4">{collection.name}</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                  {collection.description}
                </p>
                <Link to="/shop" className="btn btn-gold-outline">
                  Shop Collection
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {collection.products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group block">
                  <div className="aspect-square bg-[var(--color-bg-alt)] overflow-hidden mb-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="product-name text-sm tracking-[0.15em]">{product.name}</div>
                  <div className="text-sm mt-1">${product.price}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
