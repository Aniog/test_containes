import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const allProducts = [
  { id: 'vivid-aura', name: 'Vivid Aura Jewels', price: 42, category: 'earrings', material: 'gold', desc: 'Gold ear cuff with crystal accent' },
  { id: 'majestic-flora', name: 'Majestic Flora Nectar', price: 68, category: 'necklaces', material: 'gold', desc: 'Multicolor floral crystal necklace' },
  { id: 'golden-sphere', name: 'Golden Sphere Huggies', price: 38, category: 'huggies', material: 'gold', desc: 'Chunky gold dome huggie earrings' },
  { id: 'amber-lace', name: 'Amber Lace Earrings', price: 54, category: 'earrings', material: 'gold', desc: 'Textured gold filigree drop earrings' },
  { id: 'royal-heirloom', name: 'Royal Heirloom Set', price: 95, category: 'sets', material: 'gold', desc: 'Gift-boxed earring + necklace set' },
  { id: 'silver-drop', name: 'Moonlight Drop Earrings', price: 48, category: 'earrings', material: 'silver', desc: 'Minimalist silver drop earrings' },
  { id: 'pearl-choker', name: 'Luminous Pearl Choker', price: 82, category: 'necklaces', material: 'gold', desc: 'Freshwater pearl choker with gold clasp' },
  { id: 'twilight-hoops', name: 'Twilight Hoops', price: 62, category: 'earrings', material: 'gold', desc: 'Oversized gold hoops with hammered texture' },
  { id: 'crystal-studs', name: 'Starlight Studs', price: 34, category: 'earrings', material: 'silver', desc: 'Everyday crystal stud earrings in silver' },
  { id: 'chain-link', name: 'Bold Link Necklace', price: 110, category: 'necklaces', material: 'gold', desc: 'Heavy 18k gold vermeil chain necklace' },
];

export default function Shop() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [sortOrder, setSortOrder] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const containerRef = useRef(null);

  useEffect(() => {
    // Update active category if URL changes
    const cat = searchParams.get('category') || 'all';
    setActiveCategory(cat);
  }, [location.search]);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Scan images whenever filtering changes
    const timer = setTimeout(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeCategory, activeMaterial, sortOrder]);

  // Filter and sort products
  let filteredProducts = [...allProducts];
  
  if (activeCategory !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
  }
  
  if (activeMaterial !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.material === activeMaterial);
  }

  if (sortOrder === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'newest') {
    // Mock sort for newest, just reverse the array
    filteredProducts.reverse();
  }

  const FilterSidebar = () => (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="uppercase tracking-widest text-xs font-semibold mb-4 text-foreground/80">Category</h3>
        <ul className="space-y-3 text-sm font-light text-muted-foreground">
          <li>
            <button 
              onClick={() => setActiveCategory('all')} 
              className={`hover:text-foreground transition-colors ${activeCategory === 'all' ? 'text-primary font-medium' : ''}`}
            >
              All Jewelry
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveCategory('earrings')} 
              className={`hover:text-foreground transition-colors ${activeCategory === 'earrings' ? 'text-primary font-medium' : ''}`}
            >
              Earrings & Studs
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveCategory('necklaces')} 
              className={`hover:text-foreground transition-colors ${activeCategory === 'necklaces' ? 'text-primary font-medium' : ''}`}
            >
              Necklaces
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveCategory('huggies')} 
              className={`hover:text-foreground transition-colors ${activeCategory === 'huggies' ? 'text-primary font-medium' : ''}`}
            >
              Huggies & Hoops
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveCategory('sets')} 
              className={`hover:text-foreground transition-colors ${activeCategory === 'sets' ? 'text-primary font-medium' : ''}`}
            >
              Gift Sets
            </button>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="uppercase tracking-widest text-xs font-semibold mb-4 text-foreground/80">Material</h3>
        <ul className="space-y-3 text-sm font-light text-muted-foreground">
          <li>
            <button 
              onClick={() => setActiveMaterial('all')} 
              className={`hover:text-foreground transition-colors ${activeMaterial === 'all' ? 'text-primary font-medium' : ''}`}
            >
              All Materials
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveMaterial('gold')} 
              className={`flex items-center gap-2 hover:text-foreground transition-colors ${activeMaterial === 'gold' ? 'text-primary font-medium' : ''}`}
            >
              <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-200"></span>
              18K Gold Vermeil
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveMaterial('silver')} 
              className={`flex items-center gap-2 hover:text-foreground transition-colors ${activeMaterial === 'silver' ? 'text-primary font-medium' : ''}`}
            >
              <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-slate-300 to-slate-100"></span>
              Sterling Silver
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen bg-background">
      {/* Header Banner */}
      <div className="bg-muted py-16 md:py-24 mb-12 text-center"
           data-strk-bg-id="shop-header-bg"
           data-strk-bg="[shop-title] elegant fine jewelry lifestyle background"
           data-strk-bg-ratio="2x3"
           data-strk-bg-width="1600">
        <div className="container mx-auto px-4 relative z-10">
          <h1 id="shop-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 capitalize">
            {activeCategory === 'all' ? 'The Collection' : activeCategory}
          </h1>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            Explore our curated selection of demi-fine pieces, crafted to elevate your everyday.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Tools row (Mobile Filter + Sort) */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
          {/* Mobile Filter Trigger */}
          <div className="md:hidden">
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="uppercase tracking-widest text-xs px-0 hover:bg-transparent flex gap-2">
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader className="mb-8">
                  <SheetTitle className="font-serif text-2xl text-left">Filters</SheetTitle>
                </SheetHeader>
                <FilterSidebar />
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:block text-sm text-muted-foreground font-light">
            Showing {filteredProducts.length} result{filteredProducts.length !== 1 && 's'}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground hidden sm:block">Sort by:</span>
            <div className="relative">
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="appearance-none bg-transparent pr-8 py-1 text-sm uppercase tracking-widest font-medium border-b border-transparent hover:border-border transition-colors cursor-pointer outline-none focus:border-foreground"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 shrink-0 pt-4">
            <FilterSidebar />
          </aside>

          {/* Product Grid */}
          <main className="flex-grow">
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center">
                <h3 className="font-serif text-2xl mb-4">No products found</h3>
                <p className="text-muted-foreground mb-8">Try adjusting your filters to find what you're looking for.</p>
                <Button 
                  onClick={() => { setActiveCategory('all'); setActiveMaterial('all'); }}
                  variant="outline"
                  className="uppercase tracking-widest text-xs"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-6 md:gap-y-10">
                {filteredProducts.map((item) => (
                  <Link to={`/product/${item.id}`} key={item.id} className="group flex flex-col">
                    <div className="relative aspect-[4/5] mb-4 bg-muted overflow-hidden flex-shrink-0">
                      {/* Primary Image */}
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                        alt={item.name}
                        className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                        data-strk-img-id={`shop-img-${item.id}`}
                        data-strk-img={`[shop-name-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                      />
                      {/* Hover Image */}
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                        alt={`${item.name} alternative view`}
                        className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        data-strk-img-id={`shop-img-hover-${item.id}`}
                        data-strk-img={`woman wearing [shop-name-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                      />
                      
                      {/* Quick Add overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block z-10">
                        <Button 
                          variant="secondary" 
                          className="w-full bg-white/90 backdrop-blur text-foreground hover:bg-white uppercase tracking-wider text-xs shadow-sm"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent navigating to PDP
                            const event = new CustomEvent('open-cart');
                            window.dispatchEvent(event);
                          }}
                        >
                          Quick Add
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3 id={`shop-name-${item.id}`} className="font-serif text-base md:text-lg leading-tight uppercase tracking-wider mb-1 line-clamp-2">{item.name}</h3>
                      <p id={`shop-desc-${item.id}`} className="text-sm text-muted-foreground font-light mb-2 hidden">{item.desc}</p>
                      <p className="text-sm font-medium mt-auto">${item.price.toFixed(2)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            
            {/* Simple Pagination Mock */}
            {filteredProducts.length > 0 && (
              <div className="mt-16 pt-8 border-t border-border flex items-center justify-center">
                <Button variant="outline" className="uppercase tracking-widest text-xs px-10 rounded-none hover:bg-foreground hover:text-background transition-colors">
                  Load More
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}