import React, { useRef, useEffect } from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/config';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group relative">
      <div className="aspect-[3/4] bg-white overflow-hidden relative border border-velmora-divider/40">
        <Link to={`/product/${product.id}`}>
          <img
            alt={product.name}
            data-strk-img-id={`prod-img-1-${product.id}`}
            data-strk-img={`[prod-title-${product.id}] [prod-desc-${product.id}] close up jewelry gold luxury`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-white text-charcoal py-3 uppercase text-[10px] tracking-velmora font-semibold hover:bg-charcoal hover:text-white transition-all flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 
          id={`prod-title-${product.id}`}
          className="text-xs uppercase tracking-velmora mb-1 font-medium group-hover:text-velmora-gold transition-colors"
        >
          {product.name}
        </h3>
        <p id={`prod-desc-${product.id}`} className="hidden">{product.description}</p>
        <p className="text-sm font-serif text-charcoal/60">${product.price}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-velmora-gold mb-2">Our Curated Selection</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Bestsellers</h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/shop" className="btn-outline px-12">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
