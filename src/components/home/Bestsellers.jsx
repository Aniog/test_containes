import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const bestsellers = products.filter((p) => p.isBestseller);

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-velmora-sand aspect-[3/4] mb-4">
        {/* Primary image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-velmora-charcoal/80 to-velmora-dark flex items-center justify-center">
          <div className="text-center px-4">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-velmora-gold/20 flex items-center justify-center">
              <span className="font-serif text-velmora-gold text-xl italic">V</span>
            </div>
            <p className="font-serif text-velmora-gold/60 text-sm uppercase tracking-wider">{product.name}</p>
          </div>
        </div>
        {/* Hover overlay with add to cart */}
        <div className="absolute inset-0 bg-velmora-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="bg-white text-velmora-dark px-5 py-2.5 text-xs font-sans tracking-wider uppercase hover:bg-velmora-gold hover:text-white transition-colors duration-300 flex items-center gap-1.5"
          >
            <Plus className="w-3 h-3" /> Add to Cart
          </button>
        </div>
        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-white text-velmora-dark text-[10px] font-sans tracking-wider uppercase px-2.5 py-1">
            New
          </span>
        )}
      </Link>

      <Link to={`/product/${product.id}`} className="block">
        <h3 className="velmora-product-name text-sm md:text-base mb-1.5">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`} />
          ))}
          <span className="text-[11px] text-velmora-taupe ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm text-velmora-dark font-medium">${product.price}</p>
      </Link>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="velmora-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-taupe mb-3">
            Our Favorites
          </p>
          <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
