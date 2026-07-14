import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/button';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      tone: product.tone,
      images: product.images,
    });
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <Button variant="accent" className="w-full" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-base tracking-wide text-charcoal">{product.name.toUpperCase()}</h3>
        <div className="mt-1 flex items-center gap-2">
          <div className="flex items-center gap-1 text-gold">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs">{product.rating}</span>
          </div>
          <span className="text-xs text-muted">({product.reviewCount})</span>
        </div>
        <p className="mt-2 text-sm text-charcoal">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
