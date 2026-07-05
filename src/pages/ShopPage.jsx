import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import useCartStore from '@/lib/store';
import { cn } from '@/lib/utils';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Toaster, toast } from 'sonner';

// Expanded mock data based on seeds
const ALL_PRODUCTS = [
  // Earrings
  { id: '1', name: 'VIVID AURA JEWELS', price: 42, category: 'earrings', imageQuery: '[p-1-name] gold ear cuff with crystal accent jewelry on model' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54, category: 'earrings', imageQuery: '[p-4-name] textured gold filigree drop earrings' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, category: 'huggies', imageQuery: '[p-3-name] chunky gold dome huggie earrings on model' },
  { id: '6', name: 'CELESTIAL STAR STUDS', price: 34, category: 'earrings', imageQuery: 'celestial star shaped tiny gold stud earrings aesthetic' },
  { id: '7', name: 'LUMINA DROP EARRINGS', price: 62, category: 'earrings', imageQuery: 'long delicate gold chain drop earrings minimalist' },
  // Necklaces
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, category: 'necklaces', imageQuery: '[p-2-name] multicolor floral crystal gold necklace' },
  { id: '8', name: 'ETERNAL COIN PENDANT', price: 58, category: 'necklaces', imageQuery: 'vintage style gold coin pendant necklace on chain' },
  { id: '9', name: 'SERPENTINE HERRINGBONE CHOKER', price: 48, category: 'necklaces', imageQuery: 'thick gold herringbone chain choker necklace flat lay' },
  { id: '10', name: 'MIDNIGHT ONYX LARIAT', price: 74, category: 'necklaces', imageQuery: 'gold lariat necklace with small black onyx stone' },
  // Sets
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, category: 'sets', imageQuery: '[p-5-name] gift-boxed gold earring and necklace set elegant' },
  { id: '11', name: 'EVERYDAY ESSENTIALS DUO', price: 85, category: 'sets', imageQuery: 'simple gold huggies and delicate chain necklace set' },
];

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price_asc', label: 'Price: Low to High' },
  { id: 'price_desc', label: 'Price: High to Low' },
  { id: 'az', label: 'Alphabetically: A-Z' }
];

export function ShopPage() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem, openCart } = useCartStore();
  
  const categoryParam = searchParams.get('category') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Only load images when filters change to catch new elements
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParam, sortParam]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...ALL_PRODUCTS];
    
    // Filter
    if (categoryParam !== 'all') {
      result = result.filter(p => p.category === categoryParam);
    }
    
    // Sort
    switch (sortParam) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        // Keep original order (or define featured logic here)
        break;
    }
    
    return result;
  }, [categoryParam, sortParam]);

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' && key === 'category') {
      params.delete('category');
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const handleAddToCart = (product) => {
    addItem({
      ...product,
      quantity: 1,
      variant: 'gold', // Defaulting to gold for quick add
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`
    });
    
    toast.success('Added to cart', {
      description: `1x ${product.name}`,
      action: {
        label: 'View Cart',
        onClick: () => openCart()
      }
    });
  };

  const FilterSidebar = () => (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="text-sm uppercase tracking-widest font-medium mb-4 pb-2 border-b border-border">Categories</h3>
        <ul className="space-y-3">
          {CATEGORIES.map(cat => (
            <li key={`filter-cat-${cat}`}>
              <button 
                onClick={() => setFilter('category', cat)}
                className={cn(
                  "text-sm capitalize transition-colors flex items-center w-full justify-between group",
                  categoryParam === cat ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span>{cat === 'all' ? 'All Jewelry' : cat}</span>
                {categoryParam === cat && <Check className="w-3.5 h-3.5" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-sm uppercase tracking-widest font-medium mb-4 pb-2 border-b border-border">Sort By</h3>
        <ul className="space-y-3">
          {SORTS.map(sort => (
            <li key={`filter-sort-${sort.id}`}>
              <button 
                onClick={() => setFilter('sort', sort.id)}
                className={cn(
                  "text-sm transition-colors flex items-center w-full justify-between group",
                  sortParam === sort.id ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span>{sort.label}</span>
                {sortParam === sort.id && <Check className="w-3.5 h-3.5" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen">
      
      {/* Header */}
      <div className="bg-secondary/30 py-16 px-6 mb-12 text-center border-b border-border/50">
        <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-4 text-primary">
          {categoryParam === 'all' ? 'All Collections' : categoryParam}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto font-light">
          Discover our full range of demi-fine jewelry. Crafted with precision, designed for everyday elegance.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Mobile Filter Trigger */}
        <div className="lg:hidden flex justify-between items-center pb-4 border-b border-border">
          <span className="text-sm text-muted-foreground">{filteredAndSortedProducts.length} Products</span>
          
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="text-xs uppercase tracking-widest gap-2 rounded-sm border-input">
                <Filter className="w-3.5 h-3.5" /> Filter & Sort
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:max-w-md">
              <SheetHeader className="border-b pb-4 mb-8">
                <SheetTitle className="font-serif text-2xl tracking-wide uppercase text-left">Filter & Sort</SheetTitle>
              </SheetHeader>
              <FilterSidebar />
              <div className="mt-8 pt-6 border-t border-border">
                <Button onClick={() => setIsFilterOpen(false)} className="w-full uppercase tracking-widest">
                  View Results
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:col-span-1 pr-8 border-r border-border">
          <FilterSidebar />
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-border/50">
            <span className="text-sm text-muted-foreground">{filteredAndSortedProducts.length} Products</span>
          </div>

          {filteredAndSortedProducts.length === 0 ? (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-serif mb-4">No products found</h2>
              <p className="text-muted-foreground mb-8">Sorry, we couldn't find any products matching those filters.</p>
              <Button onClick={() => setFilter('category', 'all')} variant="outline" className="uppercase tracking-widest text-xs">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
              {filteredAndSortedProducts.map((product) => (
                <div key={`shop-prod-${product.id}`} className="group relative flex flex-col group/card cursor-pointer">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary/30 overflow-hidden mb-4 rounded-sm">
                    <img
                      data-strk-img-id={`shop-${product.id}-main`}
                      data-strk-img={product.imageQuery}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    
                    {/* Hover Add to Cart Button */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300">
                      <Button 
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                        className="w-full uppercase tracking-widest text-xs h-10 shadow-lg"
                        variant="default"
                      >
                        Quick Add
                      </Button>
                    </div>
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <Link to={`/product/${product.id}`}>
                      <h3 id={`p-${product.id}-name`} className="font-serif text-sm md:text-base tracking-widest uppercase mb-2 line-clamp-1">{product.name}</h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mt-auto">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}