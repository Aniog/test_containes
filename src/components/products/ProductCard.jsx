import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);
  const { addItem, toggleCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || 'gold', 1);
    setAdded(true);
    toggleCart();
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-sm bg-surface-alt aspect-[4/5]">
        <img
          alt={product.name}
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[product-card-${product.id}-title] [product-card-${product.id}-category]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-velmora">
          <Button
            variant={added ? 'dark' : 'primary'}
            className="w-full shadow-lg"
            onClick={handleAdd}
          >
            {added ? 'Added' : 'Add to Cart'}
          </Button>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <p id={`product-card-${product.id}-category`} className="hidden">{product.category}</p>
        <h3 id={`product-card-${product.id}-title`} className="font-serif text-sm tracking-widest-xl uppercase text-ink">
          {product.name}
        </h3>
        <p className="text-sm text-ink-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
