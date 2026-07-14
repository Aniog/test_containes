import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus, ShoppingBag } from 'lucide-react';

export default function Bestsellers({ products }) {
  const { addToCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl mb-4">Best sellers</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
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
        {/* Image Container */}
        <div className="relative overflow-hidden bg-velmora-light-gray aspect-square mb-4">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-black px-6 py-3 text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-white flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            ADD TO CART
          </button>
        </div>

        {/* Product Info */}
        <div>
          <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
            {product.name}
          </h3>
          <p className="text-velmora-gold font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
