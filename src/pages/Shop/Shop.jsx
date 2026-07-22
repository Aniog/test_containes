import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getBestsellers } from '@/lib/data';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { ChevronDown, SlidersHorizontal, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export default function Shop() {
  const allProducts = getBestsellers();
  const { addItem } = useCartStore();
  const containerRef = useRef(null);
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Featured");

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortOption]);

  const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
  const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Best Rated"];

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ ...product, quantity: 1, tone: product.tones[0] });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];
    
    // Filter
    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }
    
    // Sort
    switch (sortOption) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Best Rated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    return result;
  }, [allProducts, activeCategory, sortOption]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-xl tracking-wide mb-4 text-brand-dark">Category</h3>
        <ul className="space-y-3">
          {categories.map(cat => (
            <li key={cat}>
              <button 
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-wide hover:text-brand transition-colors text-left w-full flex justify-between items-center ${activeCategory === cat ? 'text-brand font-medium' : 'text-muted-foreground'}`}
              >
                {cat}
                {activeCategory === cat && <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 text-sm text-muted-foreground border-t border-border">
        <p className="mb-4 text-xs tracking-wider uppercase font-medium text-brand-dark/70">Materials</p>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="rounded-sm border-border text-brand focus:ring-brand accent-brand h-4 w-4" defaultChecked />
            <span>18K Gold Plated</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="rounded-sm border-border text-brand focus:ring-brand accent-brand h-4 w-4" defaultChecked />
            <span>Sterling Silver</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-white pt-20" ref={containerRef}>
      {/* Header */}
      <div className="bg-neutral-50 border-b border-border py-12 md:py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-4 drop-shadow-sm">The Collection</h1>
          <p className="text-muted-foreground max-w-lg mx-auto font-light">Explore our complete range of demi-fine jewelry designed for the modern romantic.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Desktop Sidebar Filter */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
             <FilterSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
              
              {/* Mobile Filter */}
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="rounded-none border-border bg-white text-brand-dark flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4" /> Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetHeader className="mb-8">
                      <SheetTitle className="font-serif text-2xl">Filters</SheetTitle>
                    </SheetHeader>
                    <FilterSidebar />
                  </SheetContent>
                </Sheet>
              </div>

              <div className="text-sm text-muted-foreground hidden lg:block">
                Showing {filteredAndSortedProducts.length} results
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-sm border-none bg-transparent hover:bg-neutral-50 px-2 font-medium">
                      {sortOption} <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-white border-border rounded-none">
                    {sortOptions.map(option => (
                      <DropdownMenuItem 
                        key={option}
                        onClick={() => setSortOption(option)}
                        className={`text-sm cursor-pointer py-2 px-3 ${sortOption === option ? 'bg-neutral-50 font-medium' : ''}`}
                      >
                        {option}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Product Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="group flex flex-col cursor-pointer relative">
                    <Link to={`/product/${product.id}`} className="aspect-[3/4] relative overflow-hidden bg-neutral-50 mb-4 block">
                      <img 
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                        data-strk-img={`[product-${product.id}-title]`}
                        data-strk-img-id={product.images.primary || `shop-${product.id}-fallback`}
                        data-strk-img-ratio="3x4"
                        alt={product.name}
                        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                      />
                      <img 
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                        data-strk-img={`[product-${product.id}-title] hover`}
                        data-strk-img-id={product.images.hover || `shop-hover-${product.id}-img-fallback`}
                        data-strk-img-ratio="3x4"
                        alt={`${product.name} detail hover`}
                        className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                      />
                      
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                        <Button 
                          onClick={(e) => handleQuickAdd(e, product)}
                          className="w-full bg-white/90 hover:bg-white text-brand-dark border-none shadow-sm rounded-none backdrop-blur-sm"
                        >
                          Quick Add
                        </Button>
                      </div>
                    </Link>
                    
                    <div className="flex flex-col">
                      <Link to={`/product/${product.id}`} id={`product-${product.id}-title`} className="font-serif uppercase tracking-widest text-xs font-semibold mb-1 group-hover:text-brand transition-colors text-brand-dark">
                        {product.name}
                      </Link>
                      <p className="text-sm text-brand-dark/80 mb-2">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <h3 className="font-serif text-2xl text-brand-dark mb-2">No matching products</h3>
                <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
                <Button 
                  onClick={() => {setActiveCategory("All"); setSortOption("Featured");}}
                  className="mt-6 bg-brand text-white hover:bg-brand-dark rounded-none"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Pagination Placeholder */}
            {filteredAndSortedProducts.length > 0 && (
              <div className="mt-16 flex justify-center border-t border-border pt-8">
                 <div className="flex gap-2">
                   <span className="w-10 h-10 flex items-center justify-center border border-brand text-brand font-medium text-sm rounded-sm">1</span>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}