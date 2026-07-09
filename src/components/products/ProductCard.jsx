import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  // Data structure abstraction
  const data = product.data || product;
  const name = data.name;
  const price = data.price;
  const stockQuery = data.stock_image_query;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative flex flex-col"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-velmora-cream overflow-hidden">
        {/* Main Image */}
        <img
          data-strk-img-id={`prod-main-${product.id}`}
          data-strk-img={`[prod-title-${product.id}] [site-brand-name] [site-mood]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="https://placehold.co/600x800/FCFAFA/242424?text=VELMORA"
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Reveal Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <img
            data-strk-img-id={`prod-hover-${product.id}`}
            data-strk-img={`[prod-title-${product.id}] [site-mood] lifestyle`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="https://placehold.co/600x800/FCFAFA/242424?text=VELMORA"
            alt={`${name} lifestyle`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Add Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-0 left-0 right-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 py-4 flex items-center justify-center gap-2 uppercase tracking-widest text-[10px] font-bold text-velmora-charcoal"
        >
          <ShoppingBag className="w-3 h-3" />
          Quick Add
        </button>
      </Link>

      <div className="mt-6 text-center">
        <h3 id={`prod-title-${product.id}`} className="uppercase tracking-[0.2em] text-sm font-medium mb-1">
          {name}
        </h3>
        <p id={`prod-price-${product.id}`} className="text-velmora-charcoal/60 text-sm font-light">
          ${price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
