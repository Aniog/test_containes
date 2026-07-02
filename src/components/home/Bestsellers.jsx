import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (product) => {
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
            Best Sellers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black">
            Most Treasured Pieces
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Image */}
              <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-beige/30 aspect-[3/4] mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick add on hover */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product);
                  }}
                  className={cn(
                    'absolute bottom-3 left-3 right-3 bg-near-black/80 text-white text-xs uppercase tracking-wider py-2.5 font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-near-black',
                    addedId === product.id && '!bg-gold !opacity-100'
                  )}
                >
                  {addedId === product.id ? 'Added!' : 'Add to Cart'}
                </button>
              </Link>

              {/* Info */}
              <Link to={`/product/${product.slug}`}>
                <h3 className="font-serif text-xs uppercase tracking-wide-lg text-near-black truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <span className="text-[11px] text-taupe">{product.rating}</span>
                </div>
                <p className="text-sm font-medium text-near-black mt-1">
                  ${product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold hover:bg-gold hover:text-white px-10 py-3 text-xs uppercase tracking-wider font-medium transition-all duration-300"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}