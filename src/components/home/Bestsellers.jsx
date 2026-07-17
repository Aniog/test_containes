import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '@/lib/store';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useStore();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      ref={containerRef}
      className="group block"
    >
      <div className="relative aspect-[3/4] bg-velmora-stone overflow-hidden mb-4">
        <img
          data-strk-img-id={`prod-m-${product.imgId}`}
          data-strk-img={`[${product.titleId}] gold jewelry editorial close-up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
        />
        {/* Secondary image reveal on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <img
            data-strk-img-id={`prod-a-${product.imgId}`}
            data-strk-img={`[${product.titleId}] jewelry worn detailed warm light`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={`${product.name} detail`}
          />
        </div>
        
        <button 
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 py-4 bg-velmora-onyx text-white text-[10px] uppercase tracking-widest font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-500 hover:bg-velmora-gold"
        >
          Add to Cart
        </button>
      </div>
      <div>
        <h3 id={product.titleId} className="text-xs md:text-sm uppercase tracking-widest font-serif mb-1 group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-light text-velmora-charcoal/60">${product.price}</p>
      </div>
    </Link>
  );
};

const Bestsellers = ({ products }) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest font-medium mb-4 text-velmora-gold">Our Favorites</h2>
          <p className="text-4xl md:text-5xl font-serif">The Bestsellers</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
