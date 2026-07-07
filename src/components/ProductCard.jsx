import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '../CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden mb-4 img-zoom">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-velmora-charcoal text-white px-6 py-2 font-sans text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold"
          >
            Add to Cart
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="product-name text-sm">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-velmora-stone">
            {product.description}
          </p>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star size={14} className="text-velmora-gold fill-velmora-gold" />
              <span className="font-sans text-xs ml-1">{product.rating}</span>
            </div>
            <span className="font-sans text-xs text-velmora-stone">
              ({product.reviews} reviews)
            </span>
          </div>
          <p className="font-serif text-lg">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
