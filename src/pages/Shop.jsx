import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { seedProducts } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const activeCategory = searchParams.get('category') || 'All';
  const activeMaterial = searchParams.get('material') || 'All';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activeMaterial, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Collections'];
  const materials = ['All', '18K Gold Plated', 'Silver Tone', 'Recycled Gold'];

  const filteredProducts = seedProducts.filter(product => {
    const categoryMatch = activeCategory === 'All' || product.category === activeCategory;
    return categoryMatch;
  });

  // Simple sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured
  });

  const toggleFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="pt-24 min-h-screen bg-background" ref={containerRef}>
      {/* Header */}
      <div className="px-6 md:px-12 py-12 max-w-[1440px] mx-auto border-b border-border">
        <h1 id="shop-title" className="brand-title text-2xl md:text-3xl tracking-[0.2em] mb-4">SHOP ALL</h1>
        <p className="font-light text-muted-foreground max-w-2xl leading-relaxed">
          Timeless jewelry for the modern woman. Each piece is hand-crafted with demi-fine materials and designed to be treasured for years to come.
        </p>
      </div>

      {/* Toolbar */}
      <div className="sticky top-[80px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="px-6 md:px-12 py-4 max-w-[1440px] mx-auto flex items-center justify-between">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 brand-title text-[10px] uppercase tracking-widest hover:text-accent transition-colors"
          >
            <Filter className="w-3 h-3" />
            <span>{isFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <span className="text-[10px] text-muted-foreground brand-title uppercase tracking-widest hidden md:inline">Sort By</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent brand-title text-[10px] uppercase tracking-widest outline-none border-none cursor-pointer focus:ring-0"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 py-12">
        {/* Sidebar Filters */}
        <aside className={cn(
          "w-full md:w-64 space-y-10 transition-all duration-300 overflow-hidden md:overflow-visible",
          isFilterOpen ? "block" : "hidden md:block opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
        )}>
          <div>
            <h3 className="brand-title text-[10px] uppercase tracking-[0.2em] mb-6">Category</h3>
            <div className="space-y-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => toggleFilter('category', cat)}
                  className={cn(
                    "block text-sm font-light hover:text-accent transition-colors",
                    activeCategory === cat ? "text-accent font-medium underline underline-offset-4" : "text-muted-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="brand-title text-[10px] uppercase tracking-[0.2em] mb-6">Material</h3>
            <div className="space-y-4">
              {materials.map(mat => (
                <button
                  key={mat}
                  onClick={() => toggleFilter('material', mat)}
                  className={cn(
                    "block text-sm font-light hover:text-accent transition-colors",
                    activeMaterial === mat ? "text-accent font-medium underline underline-offset-4" : "text-muted-foreground"
                  )}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {sortedProducts.map((product) => (
              <div key={product.id} className="group animate-in fade-in duration-700">
                <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] bg-secondary overflow-hidden mb-6">
                  <img
                    data-strk-img-id={`shop-product-${product.id}`}
                    data-strk-img={`[shop-product-name-${product.id}] [shop-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="w-full bg-white py-3 brand-title text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-sm"
                    >
                      Quick Add
                    </button>
                  </div>
                  {product.tag && (
                    <span className="absolute top-4 left-4 brand-title text-[8px] bg-white/90 px-2 py-1 shadow-sm">
                      {product.tag}
                    </span>
                  )}
                </Link>
                <div className="text-center space-y-2">
                  <h3 id={`shop-product-name-${product.id}`} className="brand-title text-xs tracking-widest">{product.name}</h3>
                  <p className="text-sm font-light text-muted-foreground">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="py-32 text-center">
              <p className="brand-title text-sm text-muted-foreground uppercase tracking-widest">No products found for these filters.</p>
              <button 
                onClick={() => setSearchParams({})}
                className="mt-6 brand-title text-xs underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
