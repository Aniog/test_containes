import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const defaultVariant = product.variants?.[0] || { label: 'Gold', value: 'gold' };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultVariant, 1);
  };

  const formatPrice = (price) => `$${price}`;

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-card-image">
        {/* Primary image placeholder - warm editorial style */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#EDE6D9] via-[#D4C5A8] to-[#B8976A] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #F2EDE6 0%, #E8DFD0 50%, #D4C5A8 100%)' }}
        >
          <div className="text-center px-4">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#B8976A] to-[#9A7A52] opacity-80" />
            <div className="text-[10px] text-velmora-text-muted tracking-[0.1em] uppercase">
              {product.shortDescription}
            </div>
          </div>
        </div>
        
        {/* Secondary image on hover */}
        <div 
          className="product-card-image-alt"
          style={{ background: 'linear-gradient(135deg, #D4C5A8 0%, #B8976A 50%, #9A7A52 100%)' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/30" />
              <div className="text-[10px] text-white/80 tracking-[0.1em] uppercase">
                {product.shortDescription}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary btn-sm"
        >
          Add to Cart
        </button>
      </div>

      <div className="product-card-info">
        <h3 className="product-card-name text-velmora-text group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <div className="product-card-price">
          {formatPrice(product.price)}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
