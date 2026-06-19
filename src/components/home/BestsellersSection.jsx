import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] bg-[#f5f0eb] overflow-hidden mb-4 relative">
          <img
            data-strk-img-id={`bestseller-${product.id}-primary`}
            data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}] [bestsellers-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          <img
            data-strk-img-id={`bestseller-${product.id}-hover`}
            data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}] [bestsellers-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />
          {/* Quick add overlay */}
          <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full bg-[#1a1a1a] text-[#faf8f5] py-3 text-xs tracking-widest uppercase hover:bg-[#c9a96e] hover:text-[#1a1a1a] transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={14} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="text-center">
        <div className="flex justify-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-[#e8e4df]'}
            />
          ))}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3
            id={`product-name-${product.id}`}
            className="velmora-product-name text-sm text-[#1a1a1a] hover:text-[#c9a96e] transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={`product-desc-${product.id}`}
          className="text-xs text-[#6b6b6b] mt-1"
        >
          {product.description}
        </p>
        <p className="text-sm font-medium mt-2">${product.price}</p>
      </div>
    </div>
  );
}

export default function BestsellersSection() {
  return (
    <section className="velmora-section bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="bestsellers-title"
            className="velmora-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-4"
          >
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-4" />
          <p className="text-sm text-[#6b6b6b] max-w-md mx-auto">
            Our most loved pieces, chosen by women who know what matters.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
