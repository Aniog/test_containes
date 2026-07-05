import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const RelatedProducts = ({ currentProductId }) => {
  const relatedProducts = products
    .filter(p => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="section-padding bg-[var(--color-cream)]">
      <div className="container-wide">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-12">You May Also Like</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-[var(--color-warm-white)] mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="product-name text-sm mb-1 group-hover:text-[var(--color-gold)] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm font-medium">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
