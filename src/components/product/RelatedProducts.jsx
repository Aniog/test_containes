import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const RelatedProducts = ({ currentSlug }) => {
  const related = products.filter((p) => p.slug !== currentSlug).slice(0, 4);

  return (
    <section className="section-container py-16 md:py-24">
      <h2 className="font-serif text-3xl text-ink md:text-4xl">You May Also Like</h2>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {related.map((product) => (
          <article key={product.id} className="product-card">
            <Link to={`/product/${product.slug}`} className="block">
              <div className="aspect-[3/4] overflow-hidden bg-background">
                <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base uppercase tracking-product text-ink">{product.name}</h3>
                <p className="mt-1 text-sm text-ink-secondary">${product.price}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
