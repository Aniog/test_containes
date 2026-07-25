import React from 'react';
import ProductCard from '@/components/home/ProductCard';
import { products } from '@/data/products';

const RelatedProducts = ({ currentId }) => {
  const related = products
    .filter((product) => product.id !== currentId)
    .slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial">
        <h2 className="section-title">You May Also Like</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
