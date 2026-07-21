import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div 
      className="product-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-velmora-cream aspect-square">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-600"
          />
          
          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-velmora-white text-velmora-black px-6 py-2 font-sans text-xs tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-white"
          >
            <ShoppingBag size={14} className="inline-block mr-2" />
            Add to Cart
          </button>

          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-velmora-white bg-opacity-90 px-2 py-1 flex items-center space-x-1">
            <Star size={12} className="text-velmora-gold fill-current" />
            <span className="font-sans text-xs">{product.rating}</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-1">
          <h3 className="product-name text-sm font-medium text-velmora-black">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-velmora-gray">
            {product.description}
          </p>
          <p className="font-serif text-lg text-velmora-black">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}
