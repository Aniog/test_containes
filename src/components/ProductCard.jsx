import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="product-card bg-velmora-sand/30 aspect-[4/5] overflow-hidden">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Secondary Image (hover) */}
        <div
          className="secondary-image"
          style={{ backgroundImage: `url(${product.imageHover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <img
            src={product.imageHover}
            alt={`${product.name} - alternate view`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-0 left-0 right-0 bg-velmora-charcoal text-white py-4 uppercase tracking-widest text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="font-serif text-lg tracking-wider text-velmora-charcoal">
          {product.name}
        </h3>
        <p className="text-sm text-velmora-taupe mt-1">{product.description}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-taupe'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-taupe ml-1">({product.reviews})</span>
        </div>

        <p className="mt-2 text-velmora-charcoal font-medium">${product.price}</p>
      </div>
    </Link>
  );
}