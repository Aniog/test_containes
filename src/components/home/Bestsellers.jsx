import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-surface-cream overflow-hidden rounded-sm mb-4">
        <div
          className="absolute inset-0"
          data-strk-img-id={`bestseller-${product.id}`}
          data-strk-img={`[${product.id}-name] ${product.imageSearch}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        >
          <div className="w-full h-full bg-gradient-to-br from-brand-gold-pale/30 to-surface-cream" />
        </div>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-surface-primary/20 transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="absolute bottom-4 left-4 right-4 bg-surface-primary text-text-primary text-xs uppercase tracking-[0.12em] py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-surface-tertiary transition-colors duration-300 font-sans"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>

        {/* Bestseller badge */}
        <div className="absolute top-3 left-3 bg-brand-gold text-surface-primary text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 font-sans font-medium">
          Bestseller
        </div>
      </div>

      {/* Info */}
      <div className="px-1">
        <h3 className="font-sans text-sm uppercase tracking-[0.12em] text-text-dark font-medium mb-1 group-hover:text-brand-gold-dark transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-brand-gold-dark font-medium">${product.price}</p>
        <div className="flex items-center gap-1 mt-1.5">
          <Star size={11} className="text-brand-gold fill-brand-gold" />
          <span className="font-sans text-xs text-text-dark-secondary">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="bg-surface-warm section-padding section-padding-y">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-sans text-overline uppercase text-brand-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-heading-2 text-text-dark tracking-[0.03em]">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
