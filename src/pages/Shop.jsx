import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const seedProducts = [
  { id: 1, name: 'VIVID AURA JEWELS', price: 42, type: 'EAR CUFF', category: 'earrings', imgId: 'product-1-vivid-aura', titleId: 's-prod-1-title', descId: 's-prod-1-desc' },
  { id: 2, name: 'MAJESTIC FLORA NECTAR', price: 68, type: 'NECKLACE', category: 'necklaces', imgId: 'product-2-flora', titleId: 's-prod-2-title', descId: 's-prod-2-desc' },
  { id: 3, name: 'GOLDEN SPHERE HUGGIES', price: 38, type: 'HUGGIES', category: 'huggies', imgId: 'product-3-sphere', titleId: 's-prod-3-title', descId: 's-prod-3-desc' },
  { id: 4, name: 'AMBER LACE EARRINGS', price: 54, type: 'EARRINGS', category: 'earrings', imgId: 'product-4-amber', titleId: 's-prod-4-title', descId: 's-prod-4-desc' },
  { id: 5, name: 'ROYAL HEIRLOOM SET', price: 95, type: 'SET', category: 'sets', imgId: 'product-5-heirloom', titleId: 's-prod-5-title', descId: 's-prod-5-desc' },
  { id: 6, name: 'LUMINA DIAMOND STUDS', price: 110, type: 'EARRINGS', category: 'earrings', imgId: 'product-6-lum', titleId: 's-prod-6-title', descId: 's-prod-6-desc' },
  { id: 7, name: 'CELESTIAL PENDANT', price: 85, type: 'NECKLACE', category: 'necklaces', imgId: 'product-7-cel', titleId: 's-prod-7-title', descId: 's-prod-7-desc' },
  { id: 8, name: 'MINIMAL BAR HUGGIES', price: 45, type: 'HUGGIES', category: 'huggies', imgId: 'product-8-min', titleId: 's-prod-8-title', descId: 's-prod-8-desc' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParams = searchParams.getAll('category');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ImageHelper && ImageHelper.loadImages && containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParams, sortOption]);

  const toggleCategory = (cat) => {
    const newParams = new URLSearchParams(searchParams);
    if (categoryParams.includes(cat)) {
      const remainingCats = categoryParams.filter(c => c !== cat);
      newParams.delete('category');
      remainingCats.forEach(c => newParams.append('category', c));
    } else {
      newParams.append('category', cat);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = seedProducts.filter(p => {
    if (categoryParams.length === 0) return true;
    return categoryParams.includes(p.category);
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    return 0; // featured/default
  });

  const categories = [
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Sets' },
  ];

  return (
    <div className="pt-24 pb-24 bg-background min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 id="shop-title" className="text-4xl md:text-5xl font-serif mb-4">Shop the Collection</h1>
          <p id="shop-sub" className="text-muted-foreground font-light max-w-2xl mx-auto">
            Discover our curated selection of ethically crafted, premium demi-fine jewelry designed for everyday elegance.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center border-b pb-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-sm uppercase tracking-widest font-medium"
            >
              <Filter className="w-4 h-4 mr-2" /> Filters
            </button>
            <span className="text-sm text-muted-foreground">{sortedProducts.length} Results</span>
          </div>

          {/* Sidebar */}
          <aside className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-28 space-y-10">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest mb-6 pb-2 border-b">Categories</h3>
                <div className="space-y-4">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center cursor-pointer group">
                      <div className={`w-4 h-4 border flex items-center justify-center mr-3 transition-colors ${categoryParams.includes(cat.id) ? 'bg-primary border-primary text-primary-foreground' : 'border-input group-hover:border-primary'}`}>
                        {categoryParams.includes(cat.id) && <Check className="w-3 h-3" />}
                      </div>
                      <span className={`text-sm ${categoryParams.includes(cat.id) ? 'font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}>
                        {cat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest mb-6 pb-2 border-b">Material</h3>
                <div className="space-y-4">
                  <label className="flex items-center cursor-pointer group">
                    <div className="w-4 h-4 border border-input rounded-full flex items-center justify-center mr-3 bg-[#e6c15c]/20" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground">18k Gold Plated</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <div className="w-4 h-4 border border-input rounded-full flex items-center justify-center mr-3 bg-gray-200/50" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground">Sterling Silver</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Desktop Sort & Count */}
            <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b">
              <span className="text-sm text-muted-foreground font-light">{sortedProducts.length} Results</span>
              
              <div className="relative">
                <button 
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center text-sm font-medium uppercase tracking-widest"
                >
                  Sort By: {sortOption === 'featured' ? 'Featured' : sortOption === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>
                
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-background border shadow-lg z-20 py-2">
                    <button 
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => { setSortOption('featured'); setIsSortOpen(false); }}
                    >
                      Featured
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => { setSortOption('price-low'); setIsSortOpen(false); }}
                    >
                      Price: Low to High
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => { setSortOption('price-high'); setIsSortOpen(false); }}
                    >
                      Price: High to Low
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group relative cursor-pointer flex flex-col">
                  <div className="aspect-[4/5] bg-muted w-full overflow-hidden relative mb-4 z-0">
                    <Link to={`/product/${product.id}`} className="absolute inset-0 z-10 w-full h-full block">
                      <img
                        data-strk-img-id={`${product.imgId}-main`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] [shop-sub] gold jewelry`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-opacity duration-500"
                      />
                      <img
                        data-strk-img-id={`${product.imgId}-hover`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] model wearing fine jewelry`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.name} on model`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-muted"
                      />
                    </Link>
                    <button className="absolute bottom-4 left-4 right-4 z-20 bg-background/95 backdrop-blur py-3 text-xs tracking-widest uppercase font-medium translate-y-16 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground">
                      Quick Add
                    </button>
                  </div>
                  <div className="flex flex-col flex-1 text-center relative z-10">
                    <h3 id={product.titleId} className="text-sm font-medium tracking-widest uppercase mt-4 mb-2 hover:text-primary transition-colors">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p id={product.descId} className="text-secondary-foreground">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-serif text-xl">No products found matching your filters.</p>
                <button 
                  onClick={() => setSearchParams(new URLSearchParams())}
                  className="mt-6 text-primary uppercase tracking-widest text-sm border-b border-primary pb-1"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination Placeholder */}
            {sortedProducts.length > 0 && (
              <div className="mt-20 border-t pt-8 flex justify-center">
                <div className="flex space-x-2">
                  <span className="w-10 h-10 flex items-center justify-center border border-primary bg-primary text-primary-foreground text-sm">1</span>
                  <span className="w-10 h-10 flex items-center justify-center border text-muted-foreground hover:border-primary hover:text-primary cursor-pointer transition-colors text-sm">2</span>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Shop;