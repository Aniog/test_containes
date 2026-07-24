import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';

const strkImgConfig = { images: {}, backgrounds: {} };

const ALL_PRODUCTS = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42.00, category: 'earrings', imageId: 'shop-prod-1' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68.00, category: 'necklaces', imageId: 'shop-prod-2' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38.00, category: 'huggies', imageId: 'shop-prod-3' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54.00, category: 'earrings', imageId: 'shop-prod-4' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95.00, category: 'necklaces', imageId: 'shop-prod-5' },
  { id: '6', name: 'CELESTIAL DROP EARRINGS', price: 48.00, category: 'earrings', imageId: 'shop-prod-6' },
  { id: '7', name: 'MINIMALIST CHAIN CHOKER', price: 45.00, category: 'necklaces', imageId: 'shop-prod-7' },
  { id: '8', name: 'ETERNAL KNOT HUGGIES', price: 35.00, category: 'huggies', imageId: 'shop-prod-8' },
];

export default function Shop() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate loading for realistic feel
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeCategory, sortOrder]);

  useEffect(() => {
    if (!isLoading) {
       // Request image load after loading state finishes and new DOM is rendered
       const frameId = window.requestAnimationFrame(() => {
         if (containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
         }
       });
       return () => window.cancelAnimationFrame(frameId);
    }
  }, [isLoading, activeCategory, sortOrder]);


  let filteredProducts = ALL_PRODUCTS.filter(p => activeCategory === 'all' || p.category === activeCategory);
  
  if (sortOrder === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container py-12 md:py-24" ref={containerRef}>
      <header className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-6" id="shop-header-title">The Collection</h1>
        <p className="text-muted-foreground leading-relaxed" id="shop-header-desc">
          Explore our curated selection of demi-fine jewelry. Every piece is crafted with attention to detail and designed for effortless everyday wear.
        </p>
      </header>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-4 border-b border-border gap-4">
        <button 
          className="md:hidden flex items-center gap-2 uppercase tracking-widest text-sm font-medium"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>

        <div className={`flex items-center gap-6 overflow-x-auto hide-scrollbar w-full md:w-auto ${isFilterOpen ? 'block' : 'hidden md:flex'}`}>
          {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`uppercase tracking-widest text-sm whitespace-nowrap pb-1 border-b-2 transition-colors ${
                activeCategory === cat 
                  ? 'border-foreground text-foreground font-medium' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 uppercase tracking-widest text-xs md:text-sm self-end md:self-auto mt-4 md:mt-0">
          <span className="text-muted-foreground">Sort By:</span>
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1 font-medium">
              {sortOrder === 'featured' ? 'Featured' : sortOrder === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
              <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              <button className="block w-full text-left px-4 py-3 hover:bg-secondary transition-colors" onClick={() => setSortOrder('featured')}>Featured</button>
              <button className="block w-full text-left px-4 py-3 hover:bg-secondary transition-colors" onClick={() => setSortOrder('price-low')}>Price: Low to High</button>
              <button className="block w-full text-left px-4 py-3 hover:bg-secondary transition-colors" onClick={() => setSortOrder('price-high')}>Price: High to Low</button>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="min-h-[50vh] flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
        </div>
      ) : (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map((product) => (
                <div key={product.id} className="group relative flex flex-col group/card cursor-pointer">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
                    {/* Primary Image */}
                    <img 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover/card:opacity-0"
                    data-strk-img-id={`${product.imageId}-1`}
                    data-strk-img={`[shop-prod-${product.id}-title] elegant gold jewelry product shot minimalist background`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    {/* Hover Image */}
                    <img 
                    alt={`${product.name} lifestyle`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                    data-strk-img-id={`${product.imageId}-2`}
                    data-strk-img={`[shop-prod-${product.id}-title] lifestyle model editorial shot gold jewelry aesthetic`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    
                    {/* Quick Add Button */}
                    <div className="absolute inset-x-0 bottom-0 p-2 md:p-4 translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                    <button 
                        onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart({ ...product, image: `https://images.unsplash.com/photo-[replace-me]`, variant: 'Gold' }, 1, 'Gold');
                        }}
                        className="w-full bg-background/90 backdrop-blur text-foreground py-3 text-xs md:text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                    >
                        + Quick Add
                    </button>
                    </div>
                </Link>
                <div className="flex flex-col gap-1 items-center text-center px-2">
                    <h3 id={`shop-prod-${product.id}-title`} className="font-serif uppercase tracking-wider text-xs md:text-sm leading-tight md:leading-normal">{product.name}</h3>
                    <p className="text-muted-foreground text-sm">${product.price.toFixed(2)}</p>
                </div>
                </div>
            ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="py-24 text-center">
                    <p className="font-serif text-2xl mb-4">No products found</p>
                    <button onClick={() => setActiveCategory('all')} className="text-accent underline underline-offset-4 uppercase tracking-widest text-sm">
                        Clear Filters
                    </button>
                </div>
            )}
        </>
      )}
    </div>
  );
}
