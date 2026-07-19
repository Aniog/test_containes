import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    openDrawer();
  };

  const titleId = `product-card-${product.id}-title`;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm bg-brand-warm aspect-[3/4]">
        <img
          data-strk-img-id={hovered && product.imgIds[1] ? product.imgIds[1] : product.imgIds[0]}
          data-strk-img={`[${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-surface/90 px-3 py-1 text-[10px] uppercase tracking-widest text-brand-ink">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-full bg-brand-ink/90 py-3 text-xs font-medium uppercase tracking-widest text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-brand-ink"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
      <div className="mt-4">
        <h3 id={titleId} className="font-serif text-base text-brand-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
