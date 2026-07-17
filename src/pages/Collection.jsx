import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { cn } from '../lib/utils';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    let result = [...products];
    
    if (categoryParam) {
      result = result.filter(p => p.category === categoryParam);
    }
    
    switch(sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Mock newness by reversing array for demo
        result.reverse();
        break;
      default:
        break; // Keep original order for featured
    }
    
    setFilteredProducts(result);
  }, [categoryParam, sortBy]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  const getPageTitle = () => {
    if (!categoryParam || categoryParam === 'all') return 'All Jewelry';
    return categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      
      {/* Header & Controls */}
      <div className="mb-12 flex items-end justify-between border-b border-border pb-6">
        <div>
          <div className="flex gap-2 text-xs text-muted-foreground mb-4 tracking-widest uppercase">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span>Shop</span>
          </div>
          <h1 id="collection-title" className="text-4xl md:text-5xl">{getPageTitle()}</h1>
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              Filter <ChevronDown size={14} />
            </button>
            <div className="absolute top-full right-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-20">
              <div className="bg-background border border-border p-4 shadow-xl w-48 flex flex-col gap-2">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => {
                      if (cat === 'all') searchParams.delete('category');
                      else searchParams.set('category', cat);
                      setSearchParams(searchParams);
                    }}
                    className={cn(
                      "text-left capitalize py-1 hover:text-primary transition-colors",
                      (categoryParam === cat || (!categoryParam && cat === 'all')) ? "text-primary font-semibold" : "text-muted-foreground"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              Sort: Featured <ChevronDown size={14} />
            </button>
            <div className="absolute top-full right-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-20">
              <div className="bg-background border border-border p-4 shadow-xl w-48 flex flex-col gap-2">
                <button onClick={() => setSortBy('featured')} className={cn("text-left py-1 hover:text-primary", sortBy === 'featured' && 'text-primary font-semibold')}>Featured</button>
                <button onClick={() => setSortBy('newest')} className={cn("text-left py-1 hover:text-primary", sortBy === 'newest' && 'text-primary font-semibold')}>New Arrivals</button>
                <button onClick={() => setSortBy('price-low')} className={cn("text-left py-1 hover:text-primary", sortBy === 'price-low' && 'text-primary font-semibold')}>Price: Low to High</button>
                <button onClick={() => setSortBy('price-high')} className={cn("text-left py-1 hover:text-primary", sortBy === 'price-high' && 'text-primary font-semibold')}>Price: High to Low</button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile controls */}
        <button 
          className="md:hidden flex items-center justify-center p-3 border border-border"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <SlidersHorizontal size={20} />
        </button>
      </div>

      {/* Mobile Filter Drawer logic could go here */}

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-xl font-serif text-muted-foreground mb-6">No products found in this category.</p>
          <button 
            onClick={() => { searchParams.delete('category'); setSearchParams(searchParams); }}
            className="text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-8 md:gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                <Link to={`/product/${product.id}`} className="block w-full h-full">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover object-center absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0"
                    data-strk-img-id={`shop-${product.id}-img1`}
                    data-strk-img={`[shop-${product.id}-title] [collection-title] jewelry solid background`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                  />
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} lifestyle`}
                    className="w-full h-full object-cover object-center absolute inset-0 z-0 scale-105 transition-transform duration-700 group-hover:scale-100"
                    data-strk-img-id={`shop-${product.id}-img2`}
                    data-strk-img={`[shop-${product.id}-title] lifestyle worn`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                  />
                </Link>
                <div className="hidden md:block absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, 1, 'Gold');
                    }}
                    className="w-full bg-background/95 backdrop-blur py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Link to={`/product/${product.id}`}>
                  <h3 id={`shop-${product.id}-title`} className="font-serif text-lg md:text-xl uppercase tracking-wider mb-2">{product.name}</h3>
                </Link>
                <p className="text-muted-foreground">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
