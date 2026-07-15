import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const activeCategory = searchParams.get('category') || 'All';
  const activeMaterial = searchParams.get('material') || 'All';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', '18K Gold Plated', 'Silver Tone'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activeMaterial !== 'All') {
      result = result.filter(p => p.material === activeMaterial);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, activeMaterial, sortBy]);

  const toggleFilter = (type, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(type);
    } else {
      newParams.set(type, value);
    }
    setSearchParams(newParams);
  };

  const FilterSection = () => (
    <div className="space-y-10">
      <div className="space-y-5">
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground">Category</h4>
        <div className="flex flex-col space-y-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleFilter('category', cat)}
              className={cn(
                "text-left text-sm transition-colors hover:text-velmora-gold",
                activeCategory === cat ? "text-velmora-gold font-semibold" : "text-muted-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground">Material</h4>
        <div className="flex flex-col space-y-3">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => toggleFilter('material', mat)}
              className={cn(
                "text-left text-sm transition-colors hover:text-velmora-gold",
                activeMaterial === mat ? "text-velmora-gold font-semibold" : "text-muted-foreground"
              )}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-32 pb-20 px-6 md:px-12" ref={containerRef}>
      <div className="container mx-auto">
        <header className="mb-16 text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest text-foreground">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Curated pieces designed to elevate every moment. Sustainably crafted with 18K gold and a focus on timeless beauty.
          </p>
        </header>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-border">
          <div className="flex items-center gap-6">
            {/* Desktop Filters */}
            <div className="hidden md:block">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Showing {filteredProducts.length} Results
              </span>
            </div>

            {/* Mobile Filter Trigger */}
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                  <Filter className="w-4 h-4" /> Filter
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-8">
                <SheetHeader className="mb-10">
                  <SheetTitle className="font-serif text-2xl uppercase tracking-widest text-left">Filters</SheetTitle>
                </SheetHeader>
                <FilterSection />
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border-none text-[10px] uppercase tracking-widest font-bold pr-6 focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort By: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-16">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <FilterSection />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center space-y-4">
                <p className="font-serif text-2xl">No pieces found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters to find your next treasure.</p>
                <Button 
                  onClick={() => setSearchParams({})}
                  variant="outline" 
                  className="uppercase tracking-widest text-[10px] mt-4"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
