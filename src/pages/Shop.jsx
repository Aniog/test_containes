import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import productsData from '../data.json';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ChevronDown, Filter } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const categoryParam = searchParams.get('category');
  const sortParam = searchParams.get('sort') || 'featured';

  // Compute products without useState
  let products = [...productsData.products];
  if (categoryParam) {
    products = products.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
  }

  if (sortParam === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  } else if (sortParam === 'price-high') {
    products.sort((a, b) => b.price - a.price);
  } // 'featured' keeps original order

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParam, sortParam]);

  const updateFilter = (type, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(type, value);
    } else {
      params.delete(type);
    }
    setSearchParams(params);
  };

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-secondary py-12 lg:py-20 text-center px-4">
         <h1 className="text-4xl lg:text-5xl font-serif mb-4">
           {categoryParam ? categoryParam : 'All Fine Jewelry'}
         </h1>
         <p className="text-muted-foreground font-light max-w-xl mx-auto">
           Explore our complete collection of demi-fine pieces, crafted in 18k gold vermeil.
         </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12" ref={containerRef}>
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center mb-6">
           <button 
             onClick={() => setIsFilterOpen(!isFilterOpen)}
             className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
           >
             <Filter className="w-4 h-4" /> Filters
           </button>
           <span className="text-sm text-muted-foreground">{products.length} products</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
             <div className="sticky top-28 space-y-10">
                
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm tracking-widest uppercase font-medium mb-4">Category</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground font-light">
                    <li>
                      <button 
                        onClick={() => updateFilter('category', null)}
                        className={`hover:text-foreground transition-colors ${!categoryParam ? 'text-foreground font-medium' : ''}`}
                      >
                        All
                      </button>
                    </li>
                    {categories.map(cat => (
                      <li key={cat}>
                        <button 
                          onClick={() => updateFilter('category', cat)}
                          className={`hover:text-foreground transition-colors ${categoryParam === cat ? 'text-foreground font-medium' : ''}`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

             </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Desktop Sort & Count */}
            <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-border">
               <span className="text-sm text-muted-foreground font-light">{products.length} products</span>
               
               <div className="flex items-center gap-2">
                 <span className="text-sm uppercase tracking-widest font-medium">Sort by</span>
                 <select 
                   value={sortParam}
                   onChange={(e) => updateFilter('sort', e.target.value)}
                   className="text-sm font-light bg-transparent focus:outline-none cursor-pointer p-1"
                 >
                   <option value="featured">Featured</option>
                   <option value="price-low">Price: Low to High</option>
                   <option value="price-high">Price: High to Low</option>
                 </select>
               </div>
            </div>

            {/* Mobile Sort */}
            <div className="lg:hidden mb-8">
                <select 
                   value={sortParam}
                   onChange={(e) => updateFilter('sort', e.target.value)}
                   className="w-full text-sm font-medium uppercase tracking-widest bg-secondary py-3 px-4 focus:outline-none appearance-none cursor-pointer"
                 >
                   <option value="featured">Sort: Featured</option>
                   <option value="price-low">Sort: Price Low - High</option>
                   <option value="price-high">Sort: Price High - Low</option>
                 </select>
            </div>

            {/* Product Grid */}
            {products.length === 0 ? (
               <div className="text-center py-20 text-muted-foreground">
                 No products found matching your criteria.
               </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
                {products.map((product) => (
                    <div key={product.id} className="group flex flex-col">
                    <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 bg-muted overflow-hidden flex-shrink-0 block">
                        <img 
                            src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                            data-strk-img-id={product.imageShop}
                            data-strk-img={product.imageQuery}
                            data-strk-img-ratio="2x3"
                            data-strk-img-width="500"
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <button 
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur text-foreground py-3 text-xs uppercase tracking-widest font-medium translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"
                        >
                        Quick Add
                        </button>
                    </Link>
                    <div className="flex flex-col flex-1">
                        <Link to={`/product/${product.id}`} className="block flex-1 text-center">
                        <h3 className="text-sm font-serif mb-1 uppercase tracking-wide" id={`shop-title-${product.id}`}>{product.name}</h3>
                        <p className="text-muted-foreground text-sm font-light">${product.price}</p>
                        </Link>
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