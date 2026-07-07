import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants?.[0] || 'Gold';
    addItem(product, variant, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-charcoal-100 overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered && product.image_hover_url ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {product.image_hover_url && (
          <img
            src={product.image_hover_url}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 py-3 text-center text-xs uppercase tracking-extra-wide font-medium transition-all duration-300 ${
            added
              ? 'bg-charcoal-800 text-cream-50'
              : 'bg-cream-50/95 text-charcoal-950 translate-y-full group-hover:translate-y-0'
          }`}
        >
          {added ? 'Added to Bag' : 'Add to Cart'}
        </button>
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-serif text-sm uppercase tracking-wide text-charcoal-950">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-charcoal-600">${product.price}</p>
      </div>
    </Link>
  );
}

export default function BestsellersGrid({ products }) {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 font-light">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-charcoal-300 text-charcoal-800 px-8 py-3 text-xs uppercase tracking-extra-wide font-medium hover:bg-charcoal-950 hover:text-cream-50 hover:border-charcoal-950 transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
