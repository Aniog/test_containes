import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '../lib/utils';
import { useCartStore } from '../store/cartStore';
import { productsDb } from '../data/products';

export function CollectionPage() {
  const { categoryId } = useParams();
  const title = categoryId && categoryId !== 'all' ? categoryId : 'All Jewelry';
  
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [activeSort, setActiveSort] = useState('Featured');
  
  // Filters state
  const [filters, setFilters] = useState({
    price: [],
    material: []
  });

  const { addItem } = useCartStore();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
        let frameId = requestAnimationFrame(() => {
            try {
                ImageHelper.loadImages(strkImgConfig, containerRef.current);
            } catch (e) {
                console.log('ImageHelper not available yet or strkImgConfig missing', e);
            }
        });
        return () => cancelAnimationFrame(frameId);
    }
  }, [categoryId, activeSort, filters]); // Reload on filter/sort changes

  // Filter logic
  let filteredProducts = productsDb.filter(p => !categoryId || categoryId === 'all' || p.category === categoryId);
  
  if (filters.material.length > 0) {
    filteredProducts = filteredProducts.filter(p => filters.material.includes(p.material));
  }
  
  if (filters.price.length > 0) {
    filteredProducts = filteredProducts.filter(p => {
        if (filters.price.includes('under50') && p.price < 50) return true;
        if (filters.price.includes('50to100') && p.price >= 50 && p.price <= 100) return true;
        if (filters.price.includes('over100') && p.price > 100) return true;
        return false;
    });
  }

  // Sort logic
  if (activeSort === 'Price: Low to High') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'Price: High to Low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div ref={containerRef} className="pt-24 bg-background min-h-screen">
      
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 text-center border-b border-border">
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-wider mb-4 capitalize">
          {title}
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-balance">
          Discover our curated collection of {title.toLowerCase()}, designed for everyday elegance and effortless layering.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">
        {/* Toolbar */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-border relative">
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filters {Object.values(filters).flat().length > 0 && `(${Object.values(filters).flat().length})`}
          </button>
          
          <div className="relative">
             <button 
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors"
              >
                Sort: {activeSort} <ChevronDown className="w-4 h-4" />
              </button>
              
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border shadow-lg z-20 py-2">
                    {['Featured', 'Price: Low to High', 'Price: High to Low'].map(option => (
                        <button 
                            key={option}
                            onClick={() => { setActiveSort(option); setSortOpen(false); }}
                            className={cn(
                                "w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors",
                                activeSort === option ? "font-medium" : "text-muted-foreground"
                            )}
                        >
                            {option}
                        </button>
                    ))}
                </div>
              )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sidebar Filters */}
          <div className={cn(
              "w-full md:w-64 flex-shrink-0 space-y-8",
              filterOpen ? "block" : "hidden md:block" // Hidden on mobile unless toggled
          )}>
              
              <div>
                  <h3 className="uppercase tracking-widest text-sm font-medium mb-4">Material</h3>
                  <div className="space-y-3">
                      {[
                          { label: 'Gold Vermeil', value: 'gold' },
                          { label: 'Sterling Silver', value: 'silver' },
                          { label: 'Pearl', value: 'pearl' }
                      ].map(acc => (
                         <label key={acc.value} className="flex items-center gap-3 cursor-pointer group">
                             <div className={cn(
                                 "w-4 h-4 border border-border flex items-center justify-center rounded-sm transition-colors group-hover:border-primary",
                                 filters.material.includes(acc.value) ? "bg-primary border-primary" : "bg-transparent"
                             )}>
                                 {filters.material.includes(acc.value) && <div className="w-2 h-2 bg-primary-foreground rounded-sm" />}
                             </div>
                             <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{acc.label}</span>
                         </label>
                      ))}
                  </div>
              </div>

              <div>
                  <h3 className="uppercase tracking-widest text-sm font-medium mb-4">Price</h3>
                  <div className="space-y-3">
                      {[
                          { label: 'Under $50', value: 'under50' },
                          { label: '$50 - $100', value: '50to100' },
                          { label: 'Over $100', value: 'over100' }
                      ].map(acc => (
                         <label key={acc.value} className="flex items-center gap-3 cursor-pointer group">
                             <div className={cn(
                                 "w-4 h-4 border border-border flex items-center justify-center rounded-sm transition-colors group-hover:border-primary",
                                 filters.price.includes(acc.value) ? "bg-primary border-primary" : "bg-transparent"
                             )}>
                                 {filters.price.includes(acc.value) && <div className="w-2 h-2 bg-primary-foreground rounded-sm" />}
                             </div>
                             <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{acc.label}</span>
                         </label>
                      ))}
                  </div>
              </div>

              {Object.values(filters).flat().length > 0 && (
                  <button 
                      onClick={() => setFilters({ price: [], material: [] })}
                      className="text-xs uppercase tracking-widest underline underline-offset-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                      Clear All Filters
                  </button>
              )}
          </div>

          {/* Product Grid */}
          <div className="flex-1">
              {filteredProducts.length === 0 ? (
                  <div className="text-center py-24">
                      <p className="text-lg text-muted-foreground">No products match your filters.</p>
                      <button 
                          onClick={() => setFilters({ price: [], material: [] })}
                          className="mt-4 border-b border-primary pb-1 text-sm uppercase tracking-widest hover:text-accent-foreground hover:border-accent-foreground transition-colors"
                      >
                          Clear Filters
                      </button>
                  </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group relative flex flex-col cursor-pointer">
                            <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] mb-4 bg-muted overflow-hidden">
                               {productsDb.map(p => p.id === product.id && (
                                   <React.Fragment key={p.id}>
                                     <img
                                     data-strk-img-id={`collection-product-${p.id}`}
                                     data-strk-img={`${p.desc} ${p.name}`}
                                     data-strk-img-ratio="3x4"
                                     data-strk-img-width="400"
                                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                     alt={p.name}
                                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                     />
                                     
                                     {/* Second image on hover */}
                                     <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                                     <img
                                         data-strk-img-id={`collection-product-${p.id}-hover`}
                                         data-strk-img={`lifestyle ${p.desc}`}
                                         data-strk-img-ratio="3x4"
                                         data-strk-img-width="400"
                                         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                         alt={`${p.name} worn`}
                                         className="w-full h-full object-cover"
                                     />
                                     </div>
                                   </React.Fragment>
                                ))}

                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                                <button 
                                    onClick={(e) => {
                                    e.preventDefault();
                                    addItem({
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        imageId: product.imageId,
                                        desc: product.desc
                                    });
                                    }}
                                    className="w-full bg-primary/95 text-primary-foreground py-3 uppercase tracking-widest text-xs font-medium hover:bg-primary transition-colors editorial-shadow backdrop-blur-sm"
                                >
                                    Quick Add
                                </button>
                                </div>
                            </Link>
                            
                            <div className="flex flex-col flex-1">
                                <h3 className="font-serif text-lg tracking-wider uppercase mb-1">
                                    {product.name}
                                </h3>
                                <span className="font-medium text-primary">${product.price}</span>
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