import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

const CollectionsPage = () => {
  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-950 mb-3">
            Our Collections
          </h1>
          <div className="w-12 h-px bg-gold-400 mx-auto mb-4" />
          <p className="font-sans text-sm text-stone-500 max-w-md mx-auto">
            Curated collections for every style and occasion
          </p>
        </div>

        {categories.map((cat) => {
          const catProducts = products.filter((p) => p.category === cat.id);
          if (catProducts.length === 0) return null;

          return (
            <section key={cat.id} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-serif text-2xl text-stone-950">
                    {cat.label}
                  </h2>
                  <div className="w-8 h-px bg-gold-400 mt-2" />
                </div>
                <Link
                  to={`/shop?category=${cat.id}`}
                  className="font-sans text-xs uppercase tracking-[0.15em] text-gold-600 hover:text-gold-700 transition-colors"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default CollectionsPage;
