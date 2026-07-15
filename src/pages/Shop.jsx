import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [sortBy, setSortBy] = useState('newest');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryFilter, sortBy]);

  const filteredProducts = products.filter(p =>
    !categoryFilter || p.category.toLowerCase() === categoryFilter.toLowerCase()
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // default newest
  });

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif italic">
              {categoryFilter ? categoryFilter : 'All Jewelry'}
            </h1>
            <p className="text-xs uppercase tracking-widestest text-muted-foreground">
              {sortedProducts.length} pieces found
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 md:hidden">
                <Button variant="outline" size="sm" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="uppercase text-[10px] tracking-widest">
                    <SlidersHorizontal size={14} className="mr-2"/> Filters
                </Button>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] rounded-none border-none bg-secondary/30 uppercase text-[10px] tracking-widest font-bold">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="rounded-none border-none shadow-xl">
                <SelectItem value="newest" className="uppercase text-[10px] tracking-widest">Newest</SelectItem>
                <SelectItem value="price-low" className="uppercase text-[10px] tracking-widest">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="uppercase text-[10px] tracking-widest">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar (Desktop) */}
          <aside className="hidden md:block w-64 flex-shrink-0 space-y-12">
            <div>
              <h4 className="text-xs uppercase tracking-widestest font-bold mb-6 border-b pb-2">Category</h4>
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => setSearchParams({})}
                  className={cn(
                    "text-sm text-left hover:text-primary transition-colors uppercase tracking-widest",
                    !categoryFilter ? "text-primary font-bold" : "text-muted-foreground"
                  )}
                >
                  Shop All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSearchParams({ category: cat.toLowerCase() })}
                    className={cn(
                      "text-sm text-left hover:text-primary transition-colors uppercase tracking-widest",
                      categoryFilter === cat.toLowerCase() ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widestest font-bold mb-6 border-b pb-2">Material</h4>
              <div className="flex flex-col space-y-4">
                {['18K Gold Plated', 'Recycled Silver', 'Mixed Crystals'].map((mat) => (
                  <label key={mat} className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-primary/30 group-hover:border-primary transition-colors" />
                    <span className="text-sm text-muted-foreground uppercase tracking-widest">{mat}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 space-y-6 text-center">
                <p className="font-serif text-xl italic text-muted-foreground">No pieces found matching your selection.</p>
                <Button variant="outline" onClick={() => setSearchParams({})} className="uppercase tracking-widestest text-xs h-12">
                    Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default Shop;
