import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const data = product.data || product;

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4 transition-all duration-700 ease-in-out group-hover:shadow-soft">
        <Link to={`/product/${product.id}`}>
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            data-strk-img-id={data.strk_img_id || `p-img-${product.id}`}
            data-strk-img={data.image || `[product-title-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={data.name}
          />
          {/* Second image hover reveal placeholder */}
          <img 
             className={cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-700", isHovered ? "opacity-100" : "opacity-0")}
             src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
             data-strk-img-id={data.strk_img_hover_id || `p-hvr-${product.id}`}
             data-strk-img={data.image_hover || `[product-title-${product.id}] worn on model`}
             data-strk-img-ratio="3x4"
             data-strk-img-width="600"
             alt={`${data.name} alternate view`}
          />
        </Link>
        
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex gap-2">
          <Button 
            onClick={() => addToCart({ ...data, id: product.id })}
            className="flex-1 bg-white hover:bg-white text-primary rounded-none h-12 text-[10px] uppercase tracking-widest border border-primary/10 shadow-sm"
          >
            <ShoppingBag className="w-3 h-3 mr-2" />
            Add to Bag
          </Button>
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 w-12 p-0 shadow-sm"
          >
            <Link to={`/product/${product.id}`}>
              <Eye className="w-3 h-3" />
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="text-center">
        <h3 id={`product-title-${product.id}`} className="text-[11px] font-serif uppercase tracking-[0.25em] mb-2 px-2">
          {data.name}
        </h3>
        <p id={`product-price-${product.id}`} className="text-xs text-muted font-sans font-light tracking-widest">
          ${data.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
