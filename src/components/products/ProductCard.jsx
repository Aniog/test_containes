import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div
      className={cn("group block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-muted overflow-hidden">
          {/* Main Image */}
          <img
            data-strk-img-id={`product-${product.id}-main`}
            data-strk-img={`[product-${product.id}-name] luxury gold jewelry product shot`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          />

          {/* Hover Image */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              data-strk-img-id={`product-${product.id}-alt`}
              data-strk-img={`[product-${product.id}-name] gold jewelry model lifestyle wearing`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              alt={`${product.name} on model`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
            <button
              onClick={handleAddToCart}
              className="btn-premium w-full py-3 text-[10px] sm:text-xs flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-3 h-3 sm:w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
          
          {/* View Details Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-foreground hover:bg-white transition-colors">
              <Eye className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="pt-6 space-y-1">
          <h3
            id={`product-${product.id}-name`}
            className="font-serif text-sm uppercase tracking-widest text-foreground group-hover:text-accent transition-colors duration-300"
          >
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
