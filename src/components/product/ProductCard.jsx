import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();

  return (
    <div 
      className="product-card group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden mb-4">
          {/* Primary Image */}
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Secondary Image (hover) */}
          <div className="product-image-secondary">
            <img 
              src={product.images[1]} 
              alt={`${product.name} - alternate view`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Add Button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 'gold', 1);
            }}
            className="absolute bottom-0 left-0 right-0 bg-velmora-charcoal/90 text-white py-3 uppercase tracking-widest text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-velmora-gold"
          >
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm tracking-widest uppercase mb-1 group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star size={12} fill="#C9A962" stroke="#C9A962" />
          <span className="text-xs text-velmora-taupe">{product.rating}</span>
          <span className="text-xs text-velmora-taupe">({product.reviews})</span>
        </div>
        <p className="text-velmora-gold font-medium">${product.price}</p>
      </div>
    </div>
  );
}