import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

export default function Bestsellers() {
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 5);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      material: 'gold',
      quantity: 1,
    });
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-[0.15em] text-stone">Curated for you</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 text-foreground">Bestsellers</h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative bg-card rounded-sm overflow-hidden"
            >
              {/* Image container */}
              <div className="aspect-square overflow-hidden bg-ivory relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                {/* Quick add - desktop */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-3 left-3 right-3 bg-foreground/90 text-white text-xs uppercase tracking-[0.1em] py-2.5 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Quick Add
                </button>
              </div>

              {/* Product info */}
              <div className="p-3 md:p-4">
                <h3 className="font-serif text-xs md:text-sm uppercase tracking-wider truncate">
                  {product.name}
                </h3>
                <p className="text-xs text-stone mt-1">${product.price}</p>

                {/* Star rating */}
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-accent' : 'text-muted'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[10px] text-stone">({product.reviewCount})</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}