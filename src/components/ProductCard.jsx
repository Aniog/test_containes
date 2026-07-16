import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, featured = false }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: product.variant || 'gold',
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative bg-velvet-surface rounded overflow-hidden aspect-[3/4]">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-velvet-gold text-velvet-deep text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded">
            New
          </span>
        )}

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-velvet-deep/90 via-velvet-deep/40 to-transparent transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-velvet-gold text-velvet-deep text-xs font-medium tracking-wider uppercase py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-velvet-gold-light transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-3 md:mt-4 space-y-1">
        <h3 className="product-name group-hover:text-velvet-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-velvet-gold text-velvet-gold" />
          <span className="text-velvet-muted text-[11px]">{product.rating}</span>
        </div>
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  );
}