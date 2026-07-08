import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import { ShoppingBag } from 'lucide-react';

export default function Bestsellers({ products }) {
  const { addItem } = useCart();

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => {
            const p = product.data || product;
            return (
              <div key={p.id} className="group">
                <div className="relative aspect-[3/4] bg-parchment rounded overflow-hidden mb-4">
                  <Link to={`/product/${p.slug}`} className="block absolute inset-0">
                    {/* Placeholder image block with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-parchment via-stone to-warmgray/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="font-serif text-2xl text-gold/60">V</span>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
                  </Link>

                  {/* Quick add — outside link so it doesn't navigate */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem({ id: p.id, name: p.name, price: p.price, image_url: '' });
                    }}
                    className="absolute bottom-4 left-4 right-4 py-3 bg-cream text-charcoal text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 z-10"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>

                <Link to={`/product/${p.slug}`} className="block space-y-1">
                  <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-charcoal truncate">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <StarRating rating={p.rating || 4.5} size={12} />
                  </div>
                  <p className="text-sm font-medium text-taupe">
                    ${p.price.toFixed(2)}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
