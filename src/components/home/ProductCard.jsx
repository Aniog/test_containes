import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      quantity: 1,
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
        <img
          className="w-full h-full object-cover"
          data-strk-img-id={`product-${product.id}-${isHovered ? '2' : '1'}`}
          data-strk-img={`[product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-charcoal-900 px-5 py-2.5 text-xs tracking-wider uppercase font-medium shadow-lg transition-all duration-300 flex items-center gap-2 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3
          id={`product-name-${product.id}`}
          className="product-name mb-1.5 group-hover:text-velvet-600 transition-colors"
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-0.5 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-velvet-500 text-velvet-500'
                  : 'fill-charcoal-200 text-charcoal-200'
              }`}
            />
          ))}
          <span className="text-[11px] text-charcoal-400 ml-1">({product.reviewCount})</span>
        </div>
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  );
}