import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { SEED_PRODUCTS } from './Home';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/plugin/strk-img-config.json';

// Generate some more dummy products for the shop page by repeating seed
const ALL_PRODUCTS = [
  ...SEED_PRODUCTS,
  ...SEED_PRODUCTS.map(p => ({...p, id: `${p.id}-2`, name: `${p.name} II`, price: p.price + 10, imgId: `${p.imgId}-v2`, hoverImgId: `${p.hoverImgId}-v2`})),
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [activeSort, setActiveSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch(e) {}
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParam, activeSort, priceRange]); // Re-run when products might render

  // Mock filtering
  let filteredProducts = ALL_PRODUCTS;
  if (categoryParam && categoryParam !== 'collections' && categoryParam !== 'new' && categoryParam !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
  }

  // Mock Sorting
  if (activeSort === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a,b) => a.price - b.price);
  } else if (activeSort === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a,b) => b.price - a.price);
  }

  const handleCategoryChange = (cat) => {
    setSearchParams(cat === 'all' ? {} : { category: cat });
    setIsMobileFiltersOpen(false);
  };

  return (
    <div ref={containerRef} className="pt-[100px] min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary py-16 mb-12">
         <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 id="shop-title" className="text-4xl md:text-5xl font-serif mb-4 capitalize">
              {categoryParam ? categoryParam : 'All Fine Jewelry'}
            </h1>
            <p id="shop-sub" className="text-muted-foreground max-w-2xl mx-auto">
               Discover pieces crafted to be treasured. Each item is thoughtfully designed and ethically crafted.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 pb-24">
        
        {/* Controls Row */}
        <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
           <button 
             className="lg:hidden flex items-center text-sm tracking-widest uppercase font-medium"
             onClick={() => setIsMobileFiltersOpen(true)}
           >
             <SlidersHorizontal className="w-4 h-4 mr-2" />
             Filters
           </button>
           <div className="hidden lg:block text-sm text-muted-foreground uppercase tracking-widest">
             {filteredProducts.length} Results
           </div>

           <div className="flex items-center">
             <span className="text-sm uppercase tracking-widest text-muted-foreground mr-3 hidden sm:inline">Sort By:</span>
             <div className="relative group">
                <button className="flex items-center text-sm font-medium tracking-widest uppercase">
                  {activeSort === 'featured' ? 'Featured' : activeSort === 'price-low' ? 'Price: Low-High' : 'Price: High-Low'}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                   <button onClick={() => setActiveSort('featured')} className="w-full text-left px-4 py-3 text-sm hover:bg-secondary transition-colors">Featured</button>
                   <button onClick={() => setActiveSort('price-low')} className="w-full text-left px-4 py-3 text-sm hover:bg-secondary transition-colors">Price: Low to High</button>
                   <button onClick={() => setActiveSort('price-high')} className="w-full text-left px-4 py-3 text-sm hover:bg-secondary transition-colors">Price: High to Low</button>
                </div>
             </div>
           </div>
        </div>

        <div className="flex gap-12">
           {/* Desktop Sidebar */}
           <div className="hidden lg:block w-64 shrink-0">
             <div className="sticky top-32 space-y-10">
                <div>
                   <h3 className="font-serif uppercase tracking-widest text-sm mb-4">Categories</h3>
                   <ul className="space-y-3 font-light text-muted-foreground">
                      <li><button onClick={() => handleCategoryChange('all')} className={`hover:text-foreground transition-colors ${!categoryParam || categoryParam === 'all' ? 'text-foreground font-medium' : ''}`}>All Jewelry</button></li>
                      <li><button onClick={() => handleCategoryChange('earrings')} className={`hover:text-foreground transition-colors ${categoryParam === 'earrings' ? 'text-foreground font-medium' : ''}`}>Earrings</button></li>
                      <li><button onClick={() => handleCategoryChange('necklaces')} className={`hover:text-foreground transition-colors ${categoryParam === 'necklaces' ? 'text-foreground font-medium' : ''}`}>Necklaces</button></li>
                      <li><button onClick={() => handleCategoryChange('huggies')} className={`hover:text-foreground transition-colors ${categoryParam === 'huggies' ? 'text-foreground font-medium' : ''}`}>Huggies</button></li>
                      <li><button onClick={() => handleCategoryChange('sets')} className={`hover:text-foreground transition-colors ${categoryParam === 'sets' ? 'text-foreground font-medium' : ''}`}>Sets</button></li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-serif uppercase tracking-widest text-sm mb-4">Material</h3>
                   <ul className="space-y-3 font-light text-muted-foreground">
                      <li><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="accent-foreground" defaultChecked /> 18K Gold Vermeil</label></li>
                      <li><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="accent-foreground" /> Sterling Silver</label></li>
                   </ul>
                </div>
             </div>
           </div>

           {/* Product Grid */}
           <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="py-24 text-center">
                   <p className="text-muted-foreground mb-4">No products found in this collection.</p>
                   <button onClick={() => handleCategoryChange('all')} className="text-accent underline uppercase tracking-widest text-sm font-medium">Clear Filters</button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group flex flex-col">
                      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 bg-secondary overflow-hidden">
                        <img 
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                          data-strk-img-id={product.imgId}
                          data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                        />
                        <img 
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${product.name} Lifestyle`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          data-strk-img-id={product.hoverImgId}
                          data-strk-img={`woman wearing [product-desc-${product.id}] [product-name-${product.id}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                        />
                        {/* Quick Add Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm tracking-widest font-medium uppercase hover:bg-foreground hover:text-background transition-colors">
                            Quick Add
                          </button>
                        </div>
                      </Link>
                      <div className="flex flex-col flex-1">
                        <Link to={`/product/${product.id}`}>
                          <h3 id={`product-name-${product.id}`} className="font-serif uppercase tracking-wider text-sm mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                        </Link>
                        <p id={`product-desc-${product.id}`} className="text-muted-foreground text-xs mb-3 hidden">{product.description}</p>
                        <p className="text-foreground tracking-wide mt-auto">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
           </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-[80] flex">
           <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileFiltersOpen(false)} />
           <div className="relative w-4/5 max-w-sm bg-background h-full flex flex-col shadow-2xl">
              <div className="flex justify-between items-center p-6 border-b border-border">
                 <h2 className="font-serif text-2xl">Filters</h2>
                 <button onClick={() => setIsMobileFiltersOpen(false)}><X className="w-5 h-5"/></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                 <div>
                   <h3 className="font-serif uppercase tracking-widest text-sm mb-4">Categories</h3>
                   <ul className="space-y-4 text-muted-foreground">
                      <li><button onClick={() => handleCategoryChange('all')} className={!categoryParam || categoryParam === 'all' ? 'text-foreground font-medium' : ''}>All Jewelry</button></li>
                      <li><button onClick={() => handleCategoryChange('earrings')} className={categoryParam === 'earrings' ? 'text-foreground font-medium' : ''}>Earrings</button></li>
                      <li><button onClick={() => handleCategoryChange('necklaces')} className={categoryParam === 'necklaces' ? 'text-foreground font-medium' : ''}>Necklaces</button></li>
                      <li><button onClick={() => handleCategoryChange('huggies')} className={categoryParam === 'huggies' ? 'text-foreground font-medium' : ''}>Huggies</button></li>
                   </ul>
                 </div>
                 {/* ... other filters ... */}
              </div>
              <div className="p-6 border-t border-border">
                <button onClick={() => setIsMobileFiltersOpen(false)} className="w-full bg-foreground text-background py-4 uppercase tracking-widest font-medium text-sm">
                  View Results
                </button>
              </div>
           </div>
        </div>
      )}

    </div>
  );
}