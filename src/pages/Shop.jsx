import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORY_FILTERS } from '@/lib/data';
import ProductCard from '@/components/products/ProductCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Filter, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);

  const activeCategories = useMemo(() => {
    const categories = searchParams.get('categories');
    return categories ? categories.split(',') : [];
  }, [searchParams]);

  const toggleCategory = (category) => {
    const newCategories = activeCategories.includes(category)
      ? activeCategories.filter(c => c !== category)
      : [...activeCategories, category];
    
    if (newCategories.length > 0) {
      setSearchParams({ categories: newCategories.join(',') });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by category
    if (activeCategories.length > 0) {
      result = result.filter(p => activeCategories.includes(p.category));
    }

    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured
        break;
    }

    return result;
  }, [activeCategories, sortBy, priceRange]);

  const FilterContent = () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-stone-900">Categories</h3>
        <div className="space-y-4">
          {CATEGORY_FILTERS.map((cat) => (
            <div key={cat} className="flex items-center space-x-3">
              <Checkbox 
                id={`cat-${cat}`} 
                checked={activeCategories.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
                className="border-stone-300 data-[state=checked]:bg-stone-900 data-[state=checked]:border-stone-900"
              />
              <label 
                htmlFor={`cat-${cat}`}
                className="text-xs uppercase tracking-[0.1em] text-stone-600 font-medium cursor-pointer"
              >
                {cat}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900">Price Range</h3>
          <span className="text-[10px] tabular-nums text-stone-500 font-medium">${priceRange[0]} — ${priceRange[1]}</span>
        </div>
        <Slider 
          value={priceRange}
          max={150}
          step={5}
          onValueChange={setPriceRange}
          className="py-4"
        />
      </div>
      
      <Button 
        variant="ghost" 
        onClick={() => { setSearchParams({}); setPriceRange([0, 150]); }}
        className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 p-0 h-auto hover:bg-transparent hover:text-stone-900"
      >
        Reset Filters
      </Button>
    </div>
  );

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">The Collection</h1>
          <p className="text-stone-500 text-xs uppercase tracking-[0.3em]">Adorn yourself in timeless gold</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 border-b border-stone-100 pb-4">
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden rounded-none border-stone-200 h-10 gap-2">
                      <Filter className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Filter</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px]">
                    <SheetHeader>
                      <SheetTitle className="text-left font-serif text-2xl mb-8">Filters</SheetTitle>
                    </SheetHeader>
                    <FilterContent />
                  </SheetContent>
                </Sheet>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
                  {filteredProducts.length} Results
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold hidden sm:inline">Sort By</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px] md:w-[180px] rounded-none border-none shadow-none focus:ring-0 text-[10px] uppercase tracking-[0.15em] font-bold h-10 px-0 justify-end gap-2">
                    <SelectValue placeholder="Featured" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-stone-100 uppercase text-[10px] tracking-widest font-bold">
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">New Arrivals</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <p className="text-stone-400 font-serif text-xl italic mb-6">No pieces found matching your criteria.</p>
                <Button 
                  onClick={() => { setSearchParams({}); setPriceRange([0, 150]); }}
                  className="rounded-none bg-stone-900 text-white tracking-widest text-[10px] px-8"
                >
                  CLEAR ALL FILTERS
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
