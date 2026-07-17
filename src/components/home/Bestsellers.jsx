import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Curated for You</p>
          <h2 className="serif-heading text-4xl md:text-5xl">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-secondary/30">
                <img
                  src={hoveredId === product.id ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-widest uppercase px-2 py-1">
                    {product.badge}
                  </span>
                )}

                {/* Quick Add */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={() => addItem(product, product.variants[0])}
                    className="w-full bg-foreground/90 text-background text-xs tracking-widest uppercase py-3 hover:bg-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <span className="text-xs text-muted-foreground">{product.rating}</span>
                </div>
                <Link to={`/product/${product.id}`} className="product-name text-sm block mb-1 hover:text-primary transition-colors">
                  {product.name}
                </Link>
                <p className="text-sm font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
