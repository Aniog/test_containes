import React, { useState, useEffect, useRef } from 'react';
import { products as allProducts } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';
import { Filter, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [products, setProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    let filtered = activeCategory === 'All' 
      ? allProducts 
      : allProducts.filter(p => p.category === activeCategory);
    
    if (sortOrder === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    
    setProducts(filtered);
  }, [activeCategory, sortOrder]);

  return (
    <div ref={containerRef} className="pt-24 lg:pt-32 pb-20 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">The Collection</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">TIMELESS PIECES FOR YOUR CURATED STACK</p>
        </div>

        {/* Filters and Sort */}
        <div className="flex items-center justify-between border-y py-4 mb-10">
          <button 
            className="flex items-center text-[10px] uppercase tracking-widest font-bold md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Filter size={16} className="mr-2" /> Filters
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-widest font-bold transition-opacity hover:opacity-100",
                  activeCategory === cat ? "opacity-100 border-b border-black pb-1" : "opacity-40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group flex items-center">
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 mr-2">Sort By:</span>
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-transparent text-[10px] uppercase tracking-widest font-bold outline-none cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Mobile Filter Sidebar */}
        <div 
          className={cn(
            "fixed inset-0 bg-black/30 backdrop-blur-sm z-[150] transition-opacity duration-300 md:hidden",
            isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsSidebarOpen(false)}
        />
        <div 
          className={cn(
            "fixed top-0 left-0 h-full w-4/5 bg-white z-[160] p-8 shadow-2xl transition-transform duration-500 ease-in-out md:hidden",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-sm uppercase tracking-widest font-bold font-serif">Filters</h2>
            <button onClick={() => setIsSidebarOpen(false)}><X size={20} /></button>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">Category</h3>
              <div className="flex flex-col space-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsSidebarOpen(false);
                    }}
                    className={cn(
                      "text-left text-xs uppercase tracking-widest transition-colors",
                      activeCategory === cat ? "text-black font-bold" : "text-muted-foreground"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        {products.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-muted-foreground serif italic">No items found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
