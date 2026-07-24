import React from 'react';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { addToCartAtom } from '@/lib/store';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [, addToCart] = useAtom(addToCartAtom);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`${product.imageQuery} model jewelry wearing`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          alt={product.name}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        
        {/* Hover Reveal Image / Quick Add */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <Button 
            variant="secondary" 
            className="w-full font-serif uppercase tracking-widest text-[10px] h-10 bg-white/90 hover:bg-white"
            onClick={handleAddToCart}
          >
            Quick Add
          </Button>
        </div>

        {/* Tag (optional) */}
        {product.price > 80 && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-white text-[10px] uppercase tracking-widest px-2 py-1">Limited</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col items-center text-center gap-1">
        <h3 className="font-serif text-sm uppercase tracking-[0.2em] group-hover:opacity-60 transition-opacity px-2">
          {product.name}
        </h3>
        <p className="font-sans text-xs text-muted-foreground font-light italic">
          ${product.price}.00
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
