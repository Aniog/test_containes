import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, Filter, X, LayoutGrid, Square } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [viewCols, setViewCols] = useState(4);
  const [sortBy, setSortBy] = useState("featured");
  
  const activeCategory = searchParams.get('category') || 'All';
  const [priceRange, setPriceRange] = useState([0, 150]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') result.reverse();

    return result;
  }, [activeCategory, priceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight capitalize">
          {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
        </h1>
        <p className="text-stone-500 font-serif italic max-w-xl mx-auto">
          Timeless designs crafted with care. Find your next heirloom piece.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between border-y border-stone-200 py-6 mb-12 gap-6">
        <div className="flex items-center gap-8 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
          <button 
            onClick={() => handleCategoryChange('All')}
            className={cn(
              "text-[10px] uppercase tracking-[0.2em] transition-all whitespace-nowrap",
              activeCategory === 'All' ? "font-bold border-b border-black" : "text-stone-400 hover:text-black"
            )}
          >
            All
          </button>
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "text-[10px] uppercase tracking-[0.2em] transition-all whitespace-nowrap",
                activeCategory === cat ? "font-bold border-b border-black" : "text-stone-400 hover:text-black"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
          <div className="flex items-center gap-4 border-r border-stone-200 pr-6 hidden md:flex">
             <button onClick={() => setViewCols(2)} className={cn("hover:text-black transition-colors", viewCols === 2 ? "text-black" : "text-stone-300")}>
               <Square size={20} />
             </button>
             <button onClick={() => setViewCols(4)} className={cn("hover:text-black transition-colors", viewCols === 4 ? "text-black" : "text-stone-300")}>
               <LayoutGrid size={20} />
             </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-stone-400">Sort:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-none shadow-none focus:ring-0 text-[10px] uppercase tracking-widest font-bold w-40 h-auto p-0">
                <SelectValue placeholder="Featured" />
              </SelectTrigger>
              <SelectContent className="rounded-none border-stone-200">
                <SelectItem value="featured" className="text-xs uppercase tracking-widest">Featured</SelectItem>
                <SelectItem value="newest" className="text-xs uppercase tracking-widest">Newest</SelectItem>
                <SelectItem value="price-low" className="text-xs uppercase tracking-widest">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="text-xs uppercase tracking-widest">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-10 hidden md:block">
          <div>
            <h4 className="font-serif uppercase tracking-[0.2em] text-xs font-bold mb-6">Price Range</h4>
            <div className="px-2">
              <Slider 
                defaultValue={[0, 150]} 
                max={150} 
                step={1} 
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-stone-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div>
             <h4 className="font-serif uppercase tracking-[0.2em] text-xs font-bold mb-6">Promotions</h4>
             <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border border-stone-300 flex items-center justify-center"></div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-500">On Sale</label>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 border border-stone-300 flex items-center justify-center"></div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-500">New Arrivals</label>
                </div>
             </div>
          </div>

          <div className="pt-10 border-t border-stone-100">
             <div 
               className="p-8 bg-stone-50 text-center space-y-4"
               data-strk-bg-id="shop-promo-bg"
               data-strk-bg="gold jewelry background silk luxury"
               data-strk-bg-ratio="1x1"
               data-strk-bg-width="400"
             >
                <p className="font-serif italic text-lg text-white">Gift wrapping available on all orders.</p>
             </div>
          </div>
        </aside>

        {/* Mobile Filter Trigger */}
        <div className="md:hidden mb-6 flex justify-between items-center bg-stone-50 p-4">
          <span className="text-[10px] uppercase tracking-widest font-bold">{filteredProducts.length} Results</span>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-none text-[10px] uppercase tracking-widest gap-2">
                <Filter size={14} /> Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader className="mb-8">
                <SheetTitle className="font-serif uppercase tracking-widest">Filters</SheetTitle>
              </SheetHeader>
              <div className="space-y-8 pb-10">
                 <div>
                    <h4 className="font-serif uppercase tracking-[0.2em] text-xs font-bold mb-6">Price Range</h4>
                    <Slider 
                      defaultValue={[0, 150]} 
                      max={150} 
                      step={1} 
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                 </div>
                 {/* Categories in mobile filter */}
                 <div>
                    <h4 className="font-serif uppercase tracking-[0.2em] text-xs font-bold mb-6">Categories</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {['All', ...CATEGORIES].map(cat => (
                         <Button 
                           key={cat}
                           variant={activeCategory === cat ? 'default' : 'outline'}
                           className="rounded-none text-[10px] uppercase tracking-widest"
                           onClick={() => handleCategoryChange(cat)}
                         >
                           {cat}
                         </Button>
                      ))}
                    </div>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="h-[40vh] flex flex-col items-center justify-center text-center gap-4">
               <p className="font-serif italic text-xl text-stone-400">No treasures found for this selection.</p>
               <Button variant="link" onClick={() => { handleCategoryChange('All'); setPriceRange([0, 150]); }} className="uppercase tracking-widest text-[10px]">Clear all filters</Button>
            </div>
          ) : (
            <div className={cn(
              "grid gap-x-4 gap-y-12",
              viewCols === 2 ? "grid-cols-2" : "grid-cols-2 lg:grid-cols-4"
            )}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
