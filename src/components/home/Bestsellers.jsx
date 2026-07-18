import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Star } from 'lucide-react';

export default function Bestsellers() {
  const { addItem } = useCart();
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-charcoal">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={() => addItem(product, 1, 'gold')} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <div className="group">
      {/* Image area */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <ShoppingBag className="w-10 h-10 text-velmora-sand" />
        </div>

        {/* Hover overlay with quick add */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAdd();
            }}
            className="px-6 py-2.5 bg-velmora-gold text-white text-[10px] font-semibold tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300"
          >
            Add to Cart
          </button>
        </div>

        {/* Rating badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 px-2 py-1">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-[10px] font-medium text-velmora-charcoal">{product.rating}</span>
        </div>
      </Link>

      {/* Info */}
      <Link to={`/product/${product.id}`}>
        <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-velmora-stone mt-1">${product.price}</p>
      </Link>
    </div>
  );
}
