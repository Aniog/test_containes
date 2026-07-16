import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../lib/data';
import ProductCard from '../components/ui/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '../lib/image-helper';
import strkImgConfig from '../strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const activeCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    let result = products;
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    
    setFilteredProducts(result);
  }, [activeCategory, sortBy]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-8">
        <div>
          <h1 id="shop-title" className="font-serif text-4xl md:text-6xl mb-4 tracking-tight">Shop All</h1>
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">{filteredProducts.length} Pieces</p>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-8 w-full md:w-auto border-y md:border-none py-4 md:py-0 border-border">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 font-serif uppercase tracking-widest text-[10px] hover:text-accent transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          
          <div className="relative group ml-auto md:ml-0">
            <button className="flex items-center gap-2 font-serif uppercase tracking-widest text-[10px]">
              Sort By: {sortBy.replace('-', ' ')}
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30">
              {['featured', 'price-low', 'price-high'].map((option) => (
                <button 
                  key={option}
                  onClick={() => setSortBy(option)}
                  className="w-full text-left px-6 py-4 font-serif uppercase tracking-widest text-[10px] hover:bg-muted transition-colors"
                >
                  {option.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className={`lg:w-64 space-y-12 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <div>
            <h3 className="font-serif uppercase tracking-widest text-xs mb-6">Categories</h3>
            <div className="flex flex-col gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSearchParams(cat === 'All' ? {} : { category: cat })}
                  className={`text-left font-sans text-sm tracking-wide transition-colors ${
                    activeCategory === cat ? 'text-accent font-medium' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif uppercase tracking-widest text-xs mb-6">Price Range</h3>
            <div className="flex flex-col gap-4">
              {['Under $50', '$50 - $100', 'Over $100'].map((range) => (
                <label key={range} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-border rounded-none group-hover:border-accent transition-colors" />
                  <span className="font-sans text-sm text-muted-foreground group-hover:text-primary transition-colors">{range}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
