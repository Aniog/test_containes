import React from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      <div className="relative aspect-[3/4] bg-[#F5F5F3] overflow-hidden mb-5">
        <Link to={`/product/${product.slug}`}>
          {/* Main Image */}
          <img 
            data-strk-img={`[prod-${product.id}-title] main`}
            data-strk-img-id={`prod-${product.id}-main`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={product.name}
            className="w-full h-full object-cover transition-luxury group-hover:scale-105"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          />
          {/* Hover Image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-luxury">
             <img 
              data-strk-img={`[prod-${product.id}-title] detailed`}
              data-strk-img-id={`prod-${product.id}-hover`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              alt={`${product.name} alternate view`}
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            />
          </div>
        </Link>
        
        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-luxury flex gap-2">
           <button 
            onClick={() => addToCart(product)}
            className="flex-grow bg-[#1A1A1A] text-white py-3 text-[10px] tracking-widest font-bold uppercase transition-luxury hover:bg-[#C5A059]"
          >
            Add to Cart
          </button>
          <Link 
            to={`/product/${product.slug}`}
            className="w-12 bg-white text-[#1A1A1A] flex items-center justify-center transition-luxury hover:bg-[#1A1A1A] hover:text-white"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="text-center">
        <h3 id={`prod-${product.id}-title`} className="font-serif text-sm tracking-[0.2em] uppercase mb-2">
          {product.name}
        </h3>
        <p className="text-[#717171] text-xs font-medium">${product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
