import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import useCartStore from '@/store/useCartStore';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCartStore();
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      import('@/strk-img-config.json').then(config => {
        window.ImageHelper.loadImages(config.default || config, containerRef.current);
      }).catch(() => {});
    }
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ ...product, variant: 'Gold' });
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group flex flex-col block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`product-${product.id}`}
          data-strk-img={`[product-title-${product.id}] jewelry gold`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500"
          loading="lazy"
        />
        
        <div 
          className={`absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/90 backdrop-blur-sm px-4 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-foreground">Quick Add</span>
          <button 
            onClick={handleAddToCart}
            className="pointer-events-auto bg-foreground text-background p-1.5 rounded-sm hover:bg-primary hover:text-foreground transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow items-center text-center">
        <h3 id={`product-title-${product.id}`} className="font-serif tracking-widest uppercase text-sm mb-1">{product.name}</h3>
        <p className="text-muted text-sm">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
