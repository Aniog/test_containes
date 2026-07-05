import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/lib/store';
import ProductCard from '@/components/ProductCard';
import { Filter, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Necklaces', 'Earrings', 'Huggies', 'Holiday Sets'];

  useEffect(() => {
    let result = products;
    if (activeCategory !== 'All') {
      result = products.filter(p => p.category === activeCategory);
    }
    
    if (sortBy === 'Price: Low to High') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(result);

    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory, sortBy]);

  return (
    <main ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-6xl tracking-wide uppercase">Shop All</h1>
          <div className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest text-muted">
            <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
            <span>/</span>
            <span className="text-primary font-medium">Shop All</span>
          </div>
        </header>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-6 mb-12 space-y-6 md:space-y-0">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-extrawide px-6 py-2 border transition-all duration-300",
                  activeCategory === cat ? "bg-primary text-white border-primary" : "border-border hover:border-primary text-muted hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-8 w-full md:w-auto justify-between md:justify-end">
            <button 
              className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-primary hover:opacity-60 transition-opacity"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={14} />
              <span>Filter</span>
            </button>

            <div className="relative group">
              <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-primary hover:opacity-60 transition-opacity">
                <span>Sort: {sortBy}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                {['Featured', 'Price: Low to High', 'Price: High to Low', 'A-Z'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="w-full text-left px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-secondary/5 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-6 md:gap-x-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
             <p className="font-serif text-xl italic text-muted">No products found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;
