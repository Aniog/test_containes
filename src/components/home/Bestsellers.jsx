import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: 'Gold',
      quantity: 1,
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-xs uppercase tracking-superwide font-medium mb-3">
            Editor's Pick
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group product-card"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] bg-beige overflow-hidden mb-3">
                <img
                  src={
                    hoveredId === product.id && product.images[1]
                      ? product.images[1]
                      : product.images[0]
                  }
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="product-image-overlay" />
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="absolute bottom-3 left-3 right-3 bg-charcoal text-cream text-[10px] uppercase tracking-widest py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3 h-3" />
                  Quick Add
                </button>
              </div>
              <h3 className="text-[11px] uppercase tracking-widest font-medium text-charcoal truncate">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 text-gold fill-gold" />
                <span className="text-[10px] text-taupe">{product.rating}</span>
              </div>
              <p className="text-sm font-medium text-charcoal mt-1">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-charcoal text-charcoal uppercase tracking-widest text-xs px-8 py-3 hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}