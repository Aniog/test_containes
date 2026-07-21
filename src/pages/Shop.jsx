import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BESTSELLERS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import { Filter, ChevronDown } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Jewelry' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' }
];

export default function Shop() {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState(id || 'all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    if (id) {
       setActiveCategory(id);
    }
  }, [id]);

  const filteredProducts = activeCategory === 'all' 
    ? BESTSELLERS 
    : BESTSELLERS.filter(p => p.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div className="pt-24 pb-24 bg-background min-h-screen" ref={containerRef}>
      {/* Header */}
      <div className="bg-secondary/50 py-16 mb-12">
         <div className="container mx-auto px-4 text-center">
            <h1 id="shop-heading" className="font-serif text-4xl md:text-5xl text-foreground mb-4">Shop the Collection</h1>
            <p className="text-muted-foreground font-sans max-w-lg mx-auto">Discover our full range of demi-fine jewelry. Crafted in 18k gold vermeil for everyday elegance.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="md:w-64 shrink-0">
             <div className="sticky top-24">
                <div className="flex items-center justify-between md:hidden mb-4" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                  <span className="font-serif text-xl">Filters</span>
                  <ChevronDown className={cn("transition-transform duration-300", isFilterOpen ? "rotate-180" : "")} />
                </div>
                
                <div className={cn("md:block space-y-8", isFilterOpen ? "block" : "hidden")}>
                  <div>
                    <h3 className="text-sm font-sans uppercase tracking-widest text-foreground font-medium mb-4 pb-2 border-b border-border">Categories</h3>
                    <ul className="space-y-3">
                      {CATEGORIES.map(category => (
                        <li key={category.id}>
                          <button 
                            className={cn(
                              "text-sm hover:text-primary transition-colors",
                              activeCategory === category.id ? "text-primary font-medium" : "text-muted-foreground"
                            )}
                            onClick={() => {
                              setActiveCategory(category.id);
                              setIsFilterOpen(false);
                            }}
                          >
                            {category.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Mock Price Filter */}
                  <div>
                    <h3 className="text-sm font-sans uppercase tracking-widest text-foreground font-medium mb-4 pb-2 border-b border-border">Price</h3>
                    <ul className="space-y-3">
                      {['Under $50', '$50 - $100', 'Over $100'].map(price => (
                        <li key={price}>
                           <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="rounded-none border-border text-primary focus:ring-primary h-4 w-4" />
                              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">{price}</span>
                           </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
             </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
             <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-muted-foreground">{filteredProducts.length} Products</span>
                <div className="flex items-center gap-2">
                   <span className="text-sm text-muted-foreground mr-2">Sort by</span>
                   <select className="bg-transparent border border-border text-sm p-2 outline-none focus:ring-1 focus:ring-primary rounded-none">
                     <option>Featured</option>
                     <option>Price: Low to High</option>
                     <option>Price: High to Low</option>
                   </select>
                </div>
             </div>

             {filteredProducts.length === 0 ? (
               <div className="py-24 text-center">
                 <p className="text-muted-foreground">No products found in this category.</p>
               </div>
             ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group flex flex-col">
                      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden block">
                        <img
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          data-strk-img-id={`shop-img-${product.id}`}
                          data-strk-img={`[shop-prod-desc-${product.id}] [shop-prod-name-${product.id}] [shop-heading]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="400"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                          <Button 
                            className="w-full uppercase tracking-widest text-xs h-10 pointer-events-auto" 
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              addToCart({...product, cartImgId: `shop-img-${product.id}`}, 'Gold');
                            }}
                          >
                            Quick Add
                          </Button>
                        </div>
                      </Link>
                      <div className="flex flex-col flex-1 text-center">
                        <Link to={`/product/${product.id}`}>
                           <h3 id={`shop-prod-name-${product.id}`} className="font-sans font-medium text-foreground uppercase tracking-wider text-sm mb-1">{product.name}</h3>
                        </Link>
                        <p id={`shop-prod-desc-${product.id}`} className="text-muted-foreground text-xs mb-2 flex-1">{product.description}</p>
                        <p className="font-sans text-foreground font-medium">${product.price}</p>
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