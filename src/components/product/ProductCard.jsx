import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-gradient-to-t from-brand-black/60 to-transparent p-4 transition-transform duration-500 ease-velmora group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleAddToCart}
            className="btn-primary w-full"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="product-name">{product.name}</h3>
        <p className="text-sm text-brand-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
