import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      images: product.images,
      variant: product.variants[0],
    });
    openDrawer();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-base-100">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-300',
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
          )}
        >
          <Button
            size="sm"
            className="rounded-full bg-cream/95 text-ink hover:bg-cream shadow-soft"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-4 space-y-1.5">
        <h3 className="font-serif text-base font-semibold uppercase tracking-wide text-ink">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-ink/80">${product.price}</p>
          <div className="flex items-center gap-1 text-gold-600">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
