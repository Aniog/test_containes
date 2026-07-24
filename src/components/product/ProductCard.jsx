import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-secondary/30 aspect-[3/4]">
        {/* Primary Image */}
        <img
          data-strk-img-id={`${product.id}-main`}
          data-strk-img={`[${product.id}-name] luxury gold jewelry photography studio shot clean background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <img
            data-strk-img-id={`${product.id}-alt`}
            data-strk-img={`[${product.id}-name] jewelry worn on model lifestyle editorial close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Add Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-0 left-0 w-full bg-background/90 backdrop-blur-sm py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-sans"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          <span>Quick Add</span>
        </button>
      </Link>

      <div className="mt-6 text-center space-y-1">
        <h3 id={`${product.id}-name`} className="font-serif text-sm tracking-widest uppercase text-foreground/90">
          {product.name}
        </h3>
        <p className="font-sans text-xs text-muted-foreground">
          ${product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
