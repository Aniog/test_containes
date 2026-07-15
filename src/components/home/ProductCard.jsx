import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
        <img
          src={isHovered && product.imageHover ? product.imageHover : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-white text-velmora-charcoal text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } hover:bg-velmora-gold hover:text-white`}
        >
          <ShoppingBag className="w-4 h-4" />
          Quick Add
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-velmora-muted mt-1">{product.description}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-muted'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-muted ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm text-velmora-gold mt-2">${product.price}</p>
      </div>
    </Link>
  );
}