import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Bestsellers({ products }) {
  const { addToCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Best Sellers</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-velmora-beige aspect-square">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-velmora-charcoal/0 group-hover:bg-velmora-charcoal/10 transition-colors duration-300"></div>
        </div>
      </Link>

      <div className="mt-4 space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm tracking-wider uppercase hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-lg font-light">${product.price}</p>
        <div className="flex items-center gap-1 text-sm text-velmora-charcoal/60">
          <span>★</span>
          <span>{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
      </div>

      <button
        onClick={() => onAddToCart(product)}
        className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-velmora-gold hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        aria-label="Add to cart"
      >
        <ShoppingBag size={16} />
      </button>
    </div>
  );
}
