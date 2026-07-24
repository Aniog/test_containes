import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../lib/data';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
          <img
            data-strk-img-id={`product-card-${product.id}`}
            data-strk-img={`[product-title-${product.id}] [product-cat-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Quick Add Overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
            <button
               onClick={handleAddToCart}
               className="bg-white text-black px-6 py-3 text-[10px] uppercase tracking-widest font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-black hover:text-white"
            >
              Quick Add
            </button>
          </div>
        </div>
        
        <div className="space-y-1 text-center">
          <p id={`product-cat-${product.id}`} className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.category}</p>
          <h3 id={`product-title-${product.id}`} className="font-serif uppercase tracking-widest text-sm font-medium group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-sm font-light">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

const HomeBestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = products.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4 block">Selected Works</span>
            <h2 id="bestsellers-title" className="font-serif text-4xl md:text-5xl">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-all font-medium">
            View All Jewelry
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-16">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBestsellers;
