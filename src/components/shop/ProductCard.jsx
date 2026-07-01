import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
          {/* Primary Image */}
          <img 
            data-strk-img-id={`home-product-${product.id}-1`}
            data-strk-img={`[home-product-title-${product.id}] [home-product-desc-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
          />
          {/* Hover Image Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/5">
             <img 
              data-strk-img-id={`home-product-${product.id}-2`}
              data-strk-img={`[home-product-title-${product.id}] model wearing`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={`${product.name} alternate view`}
            />
          </div>
          
          {/* Quick Actions Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/10 backdrop-blur-md flex gap-2">
            <button 
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="flex-grow bg-white text-stone-950 py-3 text-[10px] font-sans font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Bag
            </button>
          </div>
        </div>

        <div className="mt-6 text-center space-y-2">
          <p id={`home-product-desc-${product.id}`} className="hidden">{product.description}</p>
          <h3 id={`home-product-title-${product.id}`} className="font-serif uppercase tracking-[0.2em] text-xs font-medium group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="font-sans text-stone-500 text-sm tracking-wide">
            ${product.price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
