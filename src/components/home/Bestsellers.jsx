import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const id = product.id;
  const { name, price, variants } = product.data;

  return (
    <div className="group relative">
      <Link to={`/product/${product.data.slug}`} className="block overflow-hidden relative aspect-[3/4] bg-stone-muted">
        <img
          data-strk-img-id={`prod-main-${id}`}
          data-strk-img={`[prod-name-${id}] jewelry editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        
        {/* Quick Add Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, variants?.[0] || 'Gold');
            toast.success(`${name} added to bag`);
          }}
          className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-obsidian py-3 text-[10px] tracking-[0.2em] font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-obsidian hover:text-white flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-3 h-3" />
          QUICK ADD
        </button>
      </Link>

      <div className="mt-6 text-center">
        <h3 id={`prod-name-${id}`} className="text-xs tracking-[0.2em] font-medium uppercase mb-2 group-hover:text-gold transition-colors">
          {name}
        </h3>
        <p className="font-serif text-stone-500">{formatPrice(price)}</p>
      </div>
    </div>
  );
};

const Bestsellers = ({ products }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <span className="text-gold text-[10px] tracking-[0.4em] uppercase mb-4">Curated Favorites</span>
          <h2 className="text-4xl md:text-5xl font-serif text-center">The Bestsellers</h2>
          <div className="w-12 h-[1px] bg-gold mt-8" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/shop" 
            className="inline-block text-xs font-bold tracking-[0.3em] uppercase border-b border-obsidian pb-2 hover:text-gold hover:border-gold transition-all duration-300"
          >
            Explore All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
