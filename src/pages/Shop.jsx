import React, { useState, useEffect, useRef } from 'react';
import { products } from '@/config';
import ProductCard from '@/components/home/Bestsellers'; // We can reuse the ProductCard logic if exported, or just refactor
import { ChevronDown, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

// Compact ProductCard for Shop page
const ShopProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-base-dark overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          data-strk-img-id={`shop-p-main-${product.id}`}
          data-strk-img={`[shop-p-name-${product.id}] gold jewelry editorial product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          )}
        />
        <img 
          src={product.hoverImage} 
          alt={product.name}
          data-strk-img-id={`shop-p-hover-${product.id}`}
          data-strk-img={`[shop-p-name-${product.id}] close up gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105",
            isHovered ? "opacity-100 scale-100" : "opacity-0"
          )}
        />
        <div className={cn(
          "absolute bottom-0 left-0 w-full p-4 transform transition-all duration-500",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}>
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white text-primary py-3 font-sans text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <h3 
          id={`shop-p-name-${product.id}`}
          className="font-serif text-sm uppercase tracking-[0.15em] group-hover:text-accent transition-colors"
        >
          {product.name}
        </h3>
        <p className="font-sans text-xs text-gray-400 uppercase tracking-widest">{product.category}</p>
        <p className="font-sans text-sm">${product.price}</p>
      </div>
    </Link>
  );
};

const Shop = () => {
  const [filter, setFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filter]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="font-serif text-xs uppercase tracking-[0.4em] text-accent mb-4">The Collection</h1>
          <h2 className="font-serif text-5xl md:text-6xl uppercase tracking-widest">Shop All</h2>
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-12 border-b border-base-dark pb-6">
          <div className="flex items-center gap-8">
            <button 
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest hover:text-accent"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={16} strokeWidth={1.5} />
              Filter
            </button>
            <div className="hidden md:flex items-center gap-6">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "font-sans text-[10px] uppercase tracking-[0.2em] transition-colors",
                    filter === cat ? "text-primary font-bold" : "text-gray-400 hover:text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-gray-500">
            <span>{filteredProducts.length} Pieces</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="md:hidden mb-8 p-6 bg-white border border-base-dark animate-fade-in">
             <div className="flex justify-between items-center mb-6">
                <span className="font-serif text-sm uppercase tracking-widest">Category</span>
                <X size={20} onClick={() => setIsFilterOpen(false)} />
             </div>
             <div className="flex flex-col gap-4">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => { setFilter(cat); setIsFilterOpen(false); }}
                    className={cn(
                      "text-left font-sans text-xs uppercase tracking-widest",
                      filter === cat ? "text-accent" : "text-gray-500"
                    )}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-12 md:gap-y-20">
          {filteredProducts.map(product => (
            <ShopProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
