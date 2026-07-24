import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const category = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'newest';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filteredProducts = products.filter((p) => {
    if (category === 'all') return true;
    return p.category === category;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // default newest/featured
  });

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-background min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-serif italic mb-4 uppercase tracking-widest">
                {category === 'all' ? 'All Jewelry' : category}
            </h1>
            <p className="text-muted-foreground font-sans text-sm tracking-widest uppercase">
                {sortedProducts.length} pieces
            </p>
        </header>

        <div className="flex items-center justify-between mb-12 border-y border-border py-4">
            <button 
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 text-sm font-sans uppercase tracking-[0.1em] hover:opacity-70 transition-opacity"
            >
                <Filter className="w-4 h-4" /> Filter
            </button>

            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSearchParams({ category: cat, sort: sortBy })}
                            className={cn(
                                "text-xs font-sans uppercase tracking-[0.15em] hover:opacity-100 transition-opacity",
                                category === cat ? "opacity-100 underline underline-offset-8" : "opacity-40"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="relative group flex items-center gap-2 text-sm font-sans uppercase tracking-[0.1em] cursor-pointer">
                    Sort By <ChevronDown className="w-4 h-4" />
                    <div className="absolute top-full right-0 mt-2 bg-background border border-border p-4 shadow-xl hidden group-hover:flex flex-col gap-4 z-20 min-w-[200px]">
                        <button 
                            onClick={() => setSearchParams({ category, sort: 'newest' })}
                            className={cn("text-left text-xs uppercase tracking-widest hover:text-primary transition-colors", sortBy === 'newest' && "text-primary")}
                        >
                            Newest
                        </button>
                        <button 
                            onClick={() => setSearchParams({ category, sort: 'price-low' })}
                            className={cn("text-left text-xs uppercase tracking-widest hover:text-primary transition-colors", sortBy === 'price-low' && "text-primary")}
                        >
                            Price: Low to High
                        </button>
                        <button 
                            onClick={() => setSearchParams({ category, sort: 'price-high' })}
                            className={cn("text-left text-xs uppercase tracking-widest hover:text-primary transition-colors", sortBy === 'price-high' && "text-primary")}
                        >
                            Price: High to Low
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile Filter Overlay */}
        {isFilterOpen && (
            <div className="fixed inset-0 bg-background z-[100] p-12 flex flex-col">
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-2xl font-serif">Categories</h2>
                    <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
                </div>
                <div className="flex flex-col gap-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSearchParams({ category: cat, sort: sortBy });
                                setIsFilterOpen(false);
                            }}
                            className={cn(
                                "text-left text-2xl font-serif italic tracking-wide",
                                category === cat ? "text-primary" : "text-foreground"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
