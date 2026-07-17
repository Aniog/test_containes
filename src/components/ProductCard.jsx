import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { ProductCardImage, ProductThumbImage } from './ProductImage';

export default function ProductCard({ product }) {
  const { addItem } = useCartStore();
  const [isHovered, setIsHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigating to product detail
    addItem(product, 'gold'); // Defaulting to gold for quick add
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
        <ProductCardImage
          productId={product.id}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          idQuery={`[product-title-${product.id}]`}
        />
        
        {/* Quick Add Button */}
        <div className={`absolute bottom-0 inset-x-0 p-4 transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-background text-foreground py-3 uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="text-center flex flex-col items-center">
        <h3 id={`product-title-${product.id}`} className="font-serif uppercase tracking-wider text-sm lg:text-base">
          {product.name}
        </h3>
        <p className="text-muted-foreground mt-1 text-sm tracking-widest">${product.price}</p>
      </div>
    </Link>
  );
}