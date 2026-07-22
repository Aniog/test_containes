import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/mockProducts';
import { useStore } from '../store';
import { Button } from '@/components/ui/button.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet.jsx';

export default function Collection() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam ? [categoryParam] : []
  );
  const { addToCart } = useStore();

  useEffect(() => {
    // Schedule ImageHelper after React has committed the filtered list
    const frameId = window.requestAnimationFrame(() => {
       ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategories, sortBy]);

  // Handle URL changes
  useEffect(() => {
    if (categoryParam) {
      if (!selectedCategories.includes(categoryParam)) {
          setSelectedCategories([categoryParam]);
      }
    } else {
        // If empty URL param but state has items, we probably want to clear them if navigating plain to /collection
        // Or keep them, let's keep it simple: if URL is empty, clear filters only if coming from a full clear action.
        // Actually better: just sync url to state
    }
  }, [categoryParam]);


  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      const newSelection = prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      if (newSelection.length === 1) {
        setSearchParams({ category: newSelection[0] });
      } else if (newSelection.length === 0) {
        setSearchParams({});
      } else {
          // just let state handle multiple
          setSearchParams({});
      }
      return newSelection;
    });
  };

  const categories = [...new Set(products.map(p => p.category))];

  // Filtering
  let filteredProducts = selectedCategories.length > 0
    ? products.filter(p => selectedCategories.includes(p.category))
    : products;

  // Sorting
  if (sortBy === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else {
    // featured: roughly use ID
    filteredProducts.sort((a, b) => a.id.localeCompare(b.id));
  }

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-heading text-xl mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map(category => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={`cat-${category}`} 
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <label 
                htmlFor={`cat-${category}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Placeholder for future filters */}
      <div>
        <h3 className="font-heading text-xl mb-4 opacity-50">Material</h3>
        <div className="space-y-3 opacity-50">
          <div className="flex items-center space-x-2">
            <Checkbox id="mat-18k" disabled checked />
            <label htmlFor="mat-18k" className="text-sm cursor-not-allowed">18k Gold Plated</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mat-silver" disabled />
            <label htmlFor="mat-silver" className="text-sm cursor-not-allowed">Sterling Silver</label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 pb-32">
      {/* Header */}
      <div className="bg-muted/30 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 id="shop-main-title" className="text-4xl md:text-5xl lg:text-6xl mb-4">
            {selectedCategories.length === 1 ? selectedCategories[0] : 'All Collections'}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
            Explore our curated selection of demi-fine jewelry. Designed for the everyday, meant to last a lifetime.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-border/50">
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden flex items-center gap-2 h-10 px-4 rounded-none">
                      <SlidersHorizontal className="w-4 h-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px]">
                    <SheetHeader className="mb-8 text-left">
                      <SheetTitle className="font-heading text-2xl font-normal">Filters</SheetTitle>
                    </SheetHeader>
                    <FilterSidebar />
                  </SheetContent>
                </Sheet>
                <span className="text-sm text-muted-foreground">{filteredProducts.length} Results</span>
              </div>

              <div className="w-[180px]">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="rounded-none border-0 border-b border-border shadow-none focus:ring-0">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
               <div className="py-20 text-center text-muted-foreground">
                   No products found matching your criteria.
               </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group flex flex-col">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                        <img
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            data-strk-img-id={`col-img-${product.id}`}
                            data-strk-img={`[col-title-${product.id}] jewelry item`}
                            data-strk-img-ratio="4x5"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 flex justify-center bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100">
                        <Button 
                            onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                            }}
                            className="w-full rounded-none bg-background/95 backdrop-blur text-foreground hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-xs h-10 border-0"
                        >
                            Add to Cart
                        </Button>
                        </div>
                    </Link>
                    <div className="text-center flex flex-col flex-1">
                        <h3 id={`col-title-${product.id}`} className="text-sm font-heading tracking-widest mb-2 uppercase leading-snug">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mt-auto">${product.price}</p>
                    </div>
                    </div>
                ))}
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}