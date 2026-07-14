import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';
import { seedProducts } from '../data/products';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

export function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  // Filters State
  const activeCategory = searchParams.get('category') || 'all';
  const sortOrder = searchParams.get('sort') || 'featured';

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
  
  const filteredProducts = useMemo(() => {
    let result = [...seedProducts];
    
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    switch (sortOrder) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // featured (default order)
        break;
    }
    
    return result;
  }, [activeCategory, sortOrder]);

  useEffect(() => {
     // Re-run image loading when filters change the visible products
     const frameId = window.requestAnimationFrame(() => {
       if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
       }
     });
     return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);


  const updateFilter = (type, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' && type === 'category') {
      params.delete(type);
    } else {
      params.set(type, value);
    }
    setSearchParams(params);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen bg-background text-foreground max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="py-12 border-b border-border/50 text-center md:text-left mb-8 flex flex-col md:flex-row justify-between items-end">
         <div className="mb-6 md:mb-0">
           <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">
              {activeCategory === 'all' ? 'All Jewelry' : activeCategory}
           </h1>
           <p className="text-muted-foreground max-w-xl text-sm">
             Discover our core collection of demi-fine jewelry. Pieces you'll reach for daily.
           </p>
         </div>

         {/* Desktop Sort / Filters Built-in */}
         <div className="flex items-center gap-4 w-full md:w-auto justify-end">
             {/* Mobile Filter Button */}
             <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
                <SheetTrigger asChild>
                   <Button variant="outline" className="md:hidden flex-1 rounded-none border-foreground text-foreground uppercase tracking-widest text-xs h-10">
                     <Filter className="w-4 h-4 mr-2" /> Filters
                   </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[80vh]">
                   <SheetHeader>
                     <SheetTitle className="font-serif uppercase tracking-widest">Filters</SheetTitle>
                   </SheetHeader>
                   <div className="py-6 space-y-8">
                      <div>
                        <h4 className="font-medium uppercase tracking-widest text-sm mb-4">Category</h4>
                        <div className="space-y-3">
                           {categories.map(c => (
                             <div 
                               key={c} 
                               className={`text-sm cursor-pointer capitalize flex items-center justify-between ${activeCategory === c ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                               onClick={() => { updateFilter('category', c); setMobileFilterOpen(false); }}
                              >
                               {c}
                               {activeCategory === c && <Check className="w-4 h-4" />}
                             </div>
                           ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium uppercase tracking-widest text-sm mb-4">Sort By</h4>
                        <div className="space-y-3">
                           {[
                             { label: 'Featured', val: 'featured' },
                             { label: 'Price: Low to High', val: 'price-asc' },
                             { label: 'Price: High to Low', val: 'price-desc' }
                           ].map(s => (
                             <div 
                               key={s.val} 
                               className={`text-sm cursor-pointer flex items-center justify-between ${sortOrder === s.val ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                               onClick={() => { updateFilter('sort', s.val); setMobileFilterOpen(false); }}
                              >
                               {s.label}
                               {sortOrder === s.val && <Check className="w-4 h-4" />}
                             </div>
                           ))}
                        </div>
                      </div>
                   </div>
                </SheetContent>
             </Sheet>
             
             {/* Desktop Sort */}
             <div className="hidden md:flex relative group">
                <Button variant="ghost" className="uppercase tracking-widest text-xs">
                  Sort By: {sortOrder === 'featured' ? 'Featured' : sortOrder === 'price-asc' ? 'Low to High' : 'High to Low'} <ChevronDown className="w-3 h-3 ml-2" />
                </Button>
                <div className="absolute top-full right-0 mt-1 w-48 bg-card border border-border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                    <button className="w-full text-left px-4 py-3 text-sm hover:bg-accent transition-colors" onClick={() => updateFilter('sort', 'featured')}>Featured</button>
                    <button className="w-full text-left px-4 py-3 text-sm hover:bg-accent transition-colors" onClick={() => updateFilter('sort', 'price-asc')}>Price: Low to High</button>
                    <button className="w-full text-left px-4 py-3 text-sm hover:bg-accent transition-colors" onClick={() => updateFilter('sort', 'price-desc')}>Price: High to Low</button>
                </div>
             </div>
         </div>
      </div>

      <div className="flex gap-12">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-32 space-y-10">
            <div>
              <h3 className="font-serif text-lg tracking-widest uppercase mb-4">Category</h3>
              <ul className="space-y-3">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      className={`text-sm hover:text-primary transition-colors capitalize tracking-wide ${activeCategory === category ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                      onClick={() => updateFilter('category', category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              No products found matching your filters.
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-16">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-accent mb-4">
                    <img
                      alt={product.name}
                      data-strk-img-id={`col-img-${product.id}`}
                      data-strk-img={`[col-prod-${product.id}-desc] [col-prod-${product.id}-name]`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-x-0 bottom-0 py-4 px-2 sm:px-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <Button 
                        className="w-full bg-white text-foreground hover:bg-neutral-100 rounded-none shadow-sm uppercase tracking-widest text-[10px] sm:text-xs h-10"
                        onClick={(e) => {
                          e.preventDefault();
                          addItem({ ...product, quantity: 1, variant: 'gold' });
                        }}
                      >
                        Quick Add
                      </Button>
                    </div>
                  </Link>
                  <div className="text-center">
                    <h3 id={`col-prod-${product.id}-name`} className="font-serif text-sm sm:text-base tracking-widest uppercase mb-1 line-clamp-1">
                      <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <p id={`col-prod-${product.id}-desc`} className="hidden">{product.description}</p>
                    <p className="text-muted-foreground text-sm">${product.price}</p>
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