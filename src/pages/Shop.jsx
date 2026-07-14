import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { seedProducts } from '@/lib/data';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/button';
import { ChevronDown, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCartStore();
  
  const initialCategory = searchParams.get('category') || 'all';
  const initialSort = searchParams.get('sort') || 'featured';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeSort, setActiveSort] = useState(initialSort);
  const [filteredProducts, setFilteredProducts] = useState(seedProducts);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

// Remove window.scrollTo from components since Layout handles it
  useEffect(() => {
     setActiveCategory(searchParams.get('category') || 'all');
     setActiveSort(searchParams.get('sort') || 'featured');
  }, [searchParams]);

  // Apply filters and sort
  useEffect(() => {
    let result = [...seedProducts];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Sort
    switch (activeSort) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For seed data, just reverse
        result.reverse();
        break;
      case 'featured':
      default:
        // Keep original order
        break;
    }

    setFilteredProducts(result);
  }, [activeCategory, activeSort]);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (sort) => {
    if (sort === 'featured') {
      searchParams.delete('sort');
    } else {
       searchParams.set('sort', sort);
    }
    setSearchParams(searchParams);
  };

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Sets' }
  ];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-secondary/30 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
           <h1 id="shop-title" className="font-serif text-4xl md:text-5xl mb-4 text-foreground capitalize">
              {activeCategory === 'all' ? 'The Collection' : activeCategory}
           </h1>
           <p className="text-muted-foreground text-lg max-w-lg mx-auto">
             Timeless demi-fine jewelry designed for the modern editorial aesthetic. Find your everyday signature.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center mb-6">
             <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
                <SheetTrigger asChild>
                   <Button variant="outline" className="rounded-none gap-2 uppercase tracking-widest text-xs">
                      <Filter className="w-4 h-4" /> Filters
                   </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                   <SheetHeader className="text-left mb-8">
                      <SheetTitle className="font-serif tracking-widest uppercase">Filters</SheetTitle>
                   </SheetHeader>
                   <div className="space-y-8">
                      <div>
                        <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Categories</h3>
                        <ul className="space-y-3">
                          {categories.map(cat => (
                            <li key={cat.id}>
                              <button 
                                onClick={() => {
                                   handleCategoryChange(cat.id);
                                   setIsMobileFiltersOpen(false);
                                }}
                                className={cn(
                                  "text-sm capitalize transition-colors",
                                  activeCategory === cat.id ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                                )}
                              >
                                {cat.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                   </div>
                </SheetContent>
             </Sheet>
             
             <div className="w-[180px]">
                <Select value={activeSort} onValueChange={handleSortChange}>
                  <SelectTrigger className="rounded-none border-border">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">New Arrivals</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
             </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 shrink-0">
             <div className="sticky top-32">
                <h3 className="font-serif text-lg tracking-widest uppercase mb-6">Shop</h3>
                <ul className="space-y-4 border-b border-border pb-8 mb-8">
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button 
                        onClick={() => handleCategoryChange(cat.id)}
                        className={cn(
                          "uppercase tracking-widest text-sm transition-colors flex items-center justify-between w-full text-left",
                          activeCategory === cat.id ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {cat.label}
                        {activeCategory === cat.id && <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>}
                      </button>
                    </li>
                  ))}
                </ul>

                <div>
                   <h3 className="text-xs font-medium uppercase tracking-widest mb-4 text-muted-foreground">Sort By</h3>
                   <Select value={activeSort} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-full rounded-none border-transparent bg-transparent px-0 hover:bg-transparent focus:ring-0 uppercase tracking-widest text-sm text-foreground">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">New Arrivals</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
             </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
             {filteredProducts.length === 0 ? (
                <div className="py-20 text-center">
                   <p className="text-muted-foreground text-lg mb-4">No products found in this category.</p>
                   <Button variant="outline" onClick={() => handleCategoryChange('all')} className="rounded-none uppercase tracking-widest">
                     Clear Filters
                   </Button>
                </div>
             ) : (
               <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group relative">
                      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                        <img
                          data-strk-img-id={`shop-${product.id}`}
                          data-strk-img={`[shop-title] [shop-product-title-${product.id}] on dark background`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                           <Button 
                              className="w-full rounded-none tracking-widest uppercase bg-white text-black hover:bg-neutral-100 hidden md:flex opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                addItem({ ...product, quantity: 1, variant: 'gold' });
                              }}
                           >
                              Quick Add
                           </Button>
                        </div>
                      </Link>
                      <div className="flex flex-col text-center">
                        <h3 id={`shop-product-title-${product.id}`} className="font-serif tracking-widest uppercase text-xs md:text-sm mb-2">{product.title}</h3>
                        <span className="text-muted-foreground text-sm">${product.price.toFixed(2)}</span>
                        {/* Mobile add to cart */}
                        <Button 
                           variant="link"
                           className="md:hidden mt-2 p-0 h-auto text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
                           onClick={(e) => {
                             e.preventDefault();
                             addItem({ ...product, quantity: 1, variant: 'gold' });
                           }}
                        >
                           + Add
                        </Button>
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