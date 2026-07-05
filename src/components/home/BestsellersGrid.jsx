import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersGrid() {
  const { addItem } = useCart();
  const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Bestsellers</h2>
          <p className="mt-3 text-sm text-warm-500 tracking-wide">Our most-loved pieces this season</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-warm-100 overflow-hidden mb-3">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-warm-300" strokeWidth={1} />
                </div>
                <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/10 transition-colors duration-300" />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product, product.variants[0]);
                  }}
                  className="absolute bottom-3 left-3 right-3 py-2.5 bg-cream-50 text-charcoal-900 text-[10px] tracking-[0.15em] uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-gold-400 hover:text-cream-50 text-center"
                >
                  Add to Cart
                </button>
              </Link>
              <div className="space-y-1">
                <h3 className="font-serif text-sm uppercase tracking-wider truncate">{product.name}</h3>
                <div className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                  <span className="text-xs text-warm-500">{product.rating}</span>
                </div>
                <p className="text-sm font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-charcoal-900 text-charcoal-900 text-xs tracking-[0.2em] uppercase hover:bg-charcoal-900 hover:text-cream-50 transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
