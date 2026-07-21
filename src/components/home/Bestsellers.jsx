import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus } from 'lucide-react';

export default function Bestsellers({ products }) {
  const { addToCart } = useCart();

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl lg:text-4xl mb-4">Best Sellers</h2>
        <div className="w-16 h-px bg-[#8B7355] mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/shop"
          className="inline-block border border-[#2A2520] text-[#2A2520] px-10 py-4 text-sm tracking-wider uppercase hover:bg-[#2A2520] hover:text-[#FAF8F5] transition-all duration-300"
        >
          View All Collections
        </Link>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-[#F5F0EB] aspect-square mb-4">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Quick Add Button - Appears on Hover */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FAF8F5] text-[#2A2520] px-6 py-3 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#2A2520] hover:text-[#FAF8F5]"
          >
            Add to Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-serif text-sm tracking-[0.15em] uppercase">
            {product.name}
          </h3>
          <p className="text-sm text-[#6B5E54]">${product.price}</p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-[#8B7355]' : 'text-[#E8E0D8]'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-[#6B5E54] ml-1">({product.reviews})</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
