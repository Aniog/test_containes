import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products } from '@/components/home/Bestsellers';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = products.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div className="pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl mb-4">Shop All</h1>
        <p className="text-zinc-500 font-light italic">Timeless jewelry for every version of you.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-48 shrink-0">
          <div className="mb-8">
            <h4 className="text-xs font-serif tracking-widest uppercase mb-6 border-b pb-2">Category</h4>
            <ul className="flex flex-col gap-4">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      'text-sm uppercase tracking-wider transition-colors',
                      activeCategory === cat ? 'text-accent font-bold' : 'text-zinc-500 hover:text-primary'
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xs font-serif tracking-widest uppercase mb-6 border-b pb-2">Material</h4>
            <ul className="flex flex-col gap-4">
              <li><label className="flex items-center gap-3 text-sm text-zinc-500 cursor-pointer hover:text-primary"><input type="checkbox" className="accent-primary" /> 18K Gold Plated</label></li>
              <li><label className="flex items-center gap-3 text-sm text-zinc-500 cursor-pointer hover:text-primary"><input type="checkbox" className="accent-primary" /> Sterling Silver</label></li>
            </ul>
          </div>
        </aside>

        {/* Mobile Filters Trigger */}
        <div className="md:hidden flex items-center justify-between mb-8 border-y py-4">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest"
          >
            <Filter size={16} /> Filters
          </button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest">
            Sort <ChevronDown size={14} />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-10 text-[10px] uppercase tracking-widestest text-zinc-500">
            <span>Showing {filteredProducts.length} Products</span>
            <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              Sort by: {sortBy} <ChevronDown size={14} />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block relative aspect-[2/3] overflow-hidden bg-zinc-100">
                  <img
                    data-strk-img-id={`shop-${product.id}`}
                    data-strk-img={`[shop-title-${product.id}] jewelry`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </Link>
                <div className="mt-6 flex flex-col items-center">
                  <Link to={`/product/${product.id}`}>
                    <h3 id={`shop-title-${product.id}`} className="text-sm font-serif tracking-widest uppercase mb-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-zinc-500 mb-4">${product.price.toFixed(2)}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="btn-outline py-2.5 px-6 !text-[10px]"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
             <div className="py-20 text-center">
                <p className="text-zinc-500 italic">No products found for this selection.</p>
             </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[100] bg-white p-8 animate-in slide-in-from-bottom duration-300">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-serif">Filters</h2>
            <button onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
          </div>
          <div className="space-y-12">
             <div>
                <h4 className="text-xs uppercase tracking-widestest mb-6 border-b pb-2">Category</h4>
                <div className="flex flex-wrap gap-3">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsSidebarOpen(false);
                      }}
                      className={cn(
                        'px-4 py-2 border text-[10px] uppercase tracking-widestest transition-colors',
                        activeCategory === cat ? 'bg-primary text-white border-primary' : 'bg-transparent text-primary border-zinc-200'
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
             </div>
             <button
               onClick={() => setIsSidebarOpen(false)}
               className="btn-primary w-full"
             >
               Apply Filters
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple helper for class merging if not using full cn
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default Shop;
