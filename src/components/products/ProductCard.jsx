import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || 'gold');
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-100 aspect-[3/4]">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Button className="w-full bg-white/90 text-ink-900 hover:bg-white" size="sm" onClick={handleAddToCart}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <p className="product-name text-ink-900">{product.name}</p>
        <p className="text-sm text-ink-600">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
