import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-[3/4] bg-brand-warm rounded-sm overflow-hidden relative mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-brand-muted uppercase tracking-wider">Image</span>
        </div>
        {hovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300">
            <button
              onClick={handleAddToCart}
              className="bg-white text-brand-charcoal p-3 rounded-full shadow-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
              aria-label={`Add ${product.name} to cart`}
            >
              <Plus size={20} />
            </button>
          </div>
        )}
      </div>
      <h3 className="product-name text-sm mb-1">{product.name}</h3>
      <p className="text-sm text-brand-muted">${product.price}</p>
    </Link>
  );
};

export default ProductCard;
