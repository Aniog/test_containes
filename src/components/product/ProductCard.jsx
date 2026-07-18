import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden mb-4 img-hover-zoom">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full aspect-[3/4] object-cover"
          />
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-2 text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white"
          >
            <Plus size={16} className="inline-block mr-2" />
            Add to Cart
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="product-name text-sm">{product.name}</h3>
          <p className="text-sm text-velmora-warm-gray">{product.description}</p>
          <p className="font-serif text-lg">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
