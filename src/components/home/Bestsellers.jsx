import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { SEED_PRODUCTS } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';

const Bestsellers = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4">The Bestsellers</h2>
          <p className="text-velmora-muted uppercase tracking-[0.2em] text-xs">Curated favorites loved by our community</p>
        </div>
        <Link 
          to="/shop" 
          className="text-xs uppercase tracking-widest font-bold border-b border-velmora-primary pb-1 hover:text-velmora-accent hover:border-velmora-accent transition-all duration-300"
        >
          View All Collection
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
        {SEED_PRODUCTS.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group"
          >
            <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-velmora-surface mb-6 overflow-hidden">
              {/* Primary Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg={`gold jewelry ${product.category} ${product.name} 1`}
                data-strk-bg-id={`product-${product.id}-img-1`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="400"
              />
              {/* Hover Image Reveal */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                data-strk-bg={`gold jewelry ${product.category} ${product.name} 2`}
                data-strk-bg-id={`product-${product.id}-img-2`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="400"
              />
              
              {/* Quick Add Button */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="w-full bg-white/90 backdrop-blur-sm text-velmora-primary py-3 uppercase tracking-widest text-[10px] font-bold shadow-lg hover:bg-velmora-primary hover:text-white transition-all"
                >
                  Quick Add
                </button>
              </div>
            </Link>

            <Link to={`/product/${product.id}`} className="space-y-2">
              <h3 className="font-serif uppercase tracking-[0.15em] text-xs leading-tight group-hover:text-velmora-accent transition-colors duration-300">
                {product.name}
              </h3>
              <div className="flex items-center gap-1">
                <div className="flex text-velmora-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <span className="text-[10px] text-velmora-muted">(48)</span>
              </div>
              <p className="font-sans text-sm">{formatPrice(product.price)}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
