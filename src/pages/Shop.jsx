import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/config';
import ProductCard from '@/components/home/Bestsellers'; // Reusing Card component but I'll make it exported
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Redefining ProductCard locally for Shop to be cleaner
const ShopProductCard = ({ product }) => {
  return (
        <div className="group relative">
      <div className="aspect-[3/4] bg-white overflow-hidden relative border border-velmora-divider/40">
        <a href={`/product/${product.id}`}>
          <img
            alt={product.name}
            data-strk-img-id={`shop-prod-img-${product.id}`}
            data-strk-img={`[shop-prod-title-${product.id}] clean studio jewelry photography gold luxury`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </a>
      </div>

      <div className="mt-4">
        <h3 
          id={`shop-prod-title-${product.id}`}
          className="text-xs uppercase tracking-velmora mb-1 font-medium group-hover:text-velmora-gold transition-colors"
        >
          {product.name}
        </h3>
        <p className="text-sm font-serif text-charcoal/60 font-medium">${product.price}</p>
      </div>
    </div>
  );
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';
  const sortOption = searchParams.get('sort') || 'featured';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  
  const filteredProducts = products.filter(p => 
    categoryFilter === 'All' ? true : p.category === categoryFilter
  );

  // Simple sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    return 0; // default featured
  });

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter, sortOption]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 space-y-4 md:space-y-0 border-b border-velmora-divider pb-8">
          <div>
             <h1 className="text-sm uppercase tracking-[0.4em] text-velmora-gold mb-2">Collection</h1>
             <h2 className="text-4xl md:text-5xl font-serif">
               {categoryFilter === 'All' ? 'Complete Catalog' : categoryFilter}
             </h2>
          </div>
          
          <div className="flex items-center space-x-6 w-full md:w-auto">
             <button 
               onClick={() => setIsSidebarOpen(true)}
               className="flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold border-b border-charcoal/20 pb-1"
             >
               <Filter className="w-3 h-3" />
               <span>Filter</span>
             </button>
             
             <div className="relative group">
                <select 
                  value={sortOption}
                  onChange={(e) => {
                    searchParams.set('sort', e.target.value);
                    setSearchParams(searchParams);
                  }}
                  className="appearance-none bg-transparent text-xs uppercase tracking-widest font-semibold pr-8 outline-none border-b border-charcoal/20 pb-1 cursor-pointer"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
             </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {sortedProducts.map((product) => (
            <ShopProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="py-24 text-center">
             <p className="text-xl font-serif text-charcoal/40 italic">No pieces found in this selection.</p>
          </div>
        )}
      </div>

      {/* Filter Sidebar Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/30 z-[60] transition-opacity duration-300",
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-xs bg-parchment z-[70] transition-transform duration-500 p-8",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-sm uppercase tracking-velmora font-bold">Filters</h3>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-12">
          <div>
             <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-charcoal/40">Category</h4>
             <div className="flex flex-col space-y-4">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => {
                     searchParams.set('category', cat);
                     setSearchParams(searchParams);
                     setIsSidebarOpen(false);
                   }}
                   className={cn(
                     "text-sm tracking-velmora uppercase text-left transition-colors",
                     categoryFilter === cat ? "text-velmora-gold font-bold" : "text-charcoal hover:text-velmora-gold"
                   )}
                 >
                   {cat}
                 </button>
               ))}
             </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-8 right-8">
           <button 
             onClick={() => {
               setSearchParams({}); 
               setIsSidebarOpen(false);
             }}
             className="w-full btn-outline"
           >
             Clear All
           </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
