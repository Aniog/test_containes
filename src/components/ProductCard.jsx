import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div
        className="relative overflow-hidden bg-velmora-cream aspect-square mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-black px-6 py-2 text-sm uppercase tracking-wider 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-white"
        >
          <Plus size={16} className="inline-block mr-2" />
          Add to Cart
        </button>
      </div>

      <div className="text-center">
        <h3 className="font-serif text-sm uppercase tracking-wider mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-1">{product.description}</p>
        <p className="font-serif text-lg">${product.price}</p>
      </div>
    </Link>
  );
}
