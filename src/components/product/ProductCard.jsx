import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gold-light/20 mb-3">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-[10px] uppercase tracking-[0.1em] text-charcoal font-medium">
            {product.badge}
          </span>
        )}

        {/* Quick Add */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 py-2.5 bg-charcoal/90 text-white text-[10px] uppercase tracking-[0.15em] font-medium opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold"
        >
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="font-serif text-xs uppercase tracking-[0.15em] text-charcoal">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-warm-gray font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
