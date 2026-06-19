import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/store';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-secondary aspect-[3/4]">
        <img 
          data-strk-img-id={`product-img-${product.id}`}
          data-strk-img={`[product-title-${product.id}] [product-category-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-background/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-background transition-colors shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
        </div>
      </Link>
      
      <div className="mt-4 flex flex-col items-center">
        <span id={`product-category-${product.id}`} className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
          {product.category}
        </span>
        <h3 id={`product-title-${product.id}`} className="font-serif text-sm md:text-md uppercase tracking-widest text-center group-hover:opacity-60 transition-opacity">
          {product.name}
        </h3>
        <p className="mt-1 font-sans text-sm">${product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
