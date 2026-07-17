import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding container-padding">
      <div className="text-center mb-12">
        <h2 className="serif-heading text-3xl md:text-4xl mb-3">Bestsellers</h2>
        <div className="hairline-divider w-16 mx-auto mb-4" />
        <p className="text-muted-foreground text-sm">Our most loved pieces, chosen by you</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="group"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-3 bg-muted">
              <img
                src={hoveredId === product.id ? product.images[1] : product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />

              {/* Quick add button */}
              <button
                onClick={() => addItem(product, product.variants[0])}
                className="absolute bottom-3 left-3 right-3 bg-primary/90 text-primary-foreground py-2 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground"
              >
                <ShoppingBag className="w-3 h-3" />
                Add to Cart
              </button>
            </div>

            <h3 className="product-name text-xs md:text-sm mb-1">{product.name}</h3>
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-3 h-3 fill-accent text-accent" />
              <span className="text-xs text-muted-foreground">{product.rating}</span>
            </div>
            <p className="text-sm font-medium">${product.price}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline inline-block">
          View All Products
        </Link>
      </div>
    </section>
  );
}
