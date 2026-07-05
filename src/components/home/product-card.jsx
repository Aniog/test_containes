import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Badge from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/button';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: product.variants[0],
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm bg-brand-warm aspect-[3/4]">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Button size="sm" className="w-full bg-white/90 text-brand-ink hover:bg-white" onClick={handleAdd}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
        {product.badge && (
          <div className="absolute left-3 top-3">
            <Badge>{product.badge}</Badge>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-base uppercase tracking-widest text-brand-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-brand-muted">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
