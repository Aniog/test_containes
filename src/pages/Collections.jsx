import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allProducts = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    imgId1: 'prod-vivid-1',
    imgId2: 'prod-vivid-2',
    desc: 'gold ear cuff with crystal accent'
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    imgId1: 'prod-majestic-1',
    imgId2: 'prod-majestic-2',
    desc: 'multicolor floral crystal necklace'
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    imgId1: 'prod-golden-1',
    imgId2: 'prod-golden-2',
    desc: 'chunky gold dome huggie earrings'
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    imgId1: 'prod-amber-1',
    imgId2: 'prod-amber-2',
    desc: 'textured gold filigree drop earrings'
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold',
    imgId1: 'prod-royal-1',
    imgId2: 'prod-royal-2',
    desc: 'gift-boxed earring + necklace set'
  },
  {
    id: 'silver-drop-huggies',
    name: 'Moonlight Drop Huggies',
    price: 45,
    category: 'huggies',
    material: 'silver',
    imgId1: 'prod-moon-1',
    imgId2: 'prod-moon-2',
    desc: 'silver huggies with small dangling crystal'
  },
  {
    id: 'pearl-essence-necklace',
    name: 'Pearl Essence Necklace',
    price: 72,
    category: 'necklaces',
    material: 'gold',
    imgId1: 'prod-pearl-1',
    imgId2: 'prod-pearl-2',
    desc: 'baroque pearl pendant on thin gold chain'
  },
  {
    id: 'classic-hoops',
    name: 'Essential Gold Hoops',
    price: 48,
    category: 'earrings',
    material: 'gold',
    imgId1: 'prod-hoops-1',
    imgId2: 'prod-hoops-2',
    desc: 'classic medium thick gold hoop earrings'
  }
];

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filteredProducts = allProducts.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured/default
  });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const updateCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-24 pb-24 min-h-screen" ref={containerRef}>
      {/* Header */}
      <div className="bg-surface-alt py-16 mb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 id="collection-title" className="text-4xl md:text-5xl font-serif mb-4 capitalize">
            {activeCategory === 'all' ? 'All Collections' : activeCategory}
          </h1>
          <p id="collection-desc" className="text-muted tracking-wide max-w-xl mx-auto">
            Discover our curated selection of demi-fine jewelry designed for everyday wear.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 text-sm uppercase tracking-widest"
          >
            <Filter size={16} />
            <span>Filters</span>
          </button>
          
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-sm uppercase tracking-widest border-none outline-none appearance-none pr-4"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Sidebar / Filters (Desktop & Mobile Drawer) */}
        <aside className={`fixed inset-0 z-50 bg-background md:bg-transparent md:static md:w-64 md:block flex flex-col p-6 md:p-0 transition-transform duration-300 transform ${isFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <div className="flex justify-between items-center md:hidden mb-10">
            <h2 className="font-serif text-2xl uppercase tracking-widest">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest mb-6">Category</h3>
              <ul className="space-y-4">
                {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => {
                        updateCategory(cat);
                        setIsFilterOpen(false);
                      }}
                      className={`text-sm capitalize transition-colors ${activeCategory === cat ? 'text-foreground font-medium' : 'text-muted hover:text-foreground'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden md:block">
              <h3 className="text-sm font-medium uppercase tracking-widest mb-6">Material</h3>
              <ul className="space-y-4">
                <li><button className="text-sm text-foreground font-medium flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-accent"></div> 18K Gold Plated</button></li>
                <li><button className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-gray-300"></div> Sterling Silver</button></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <p className="text-sm text-muted">{filteredProducts.length} Results</p>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pl-4 pr-10 py-2 text-sm uppercase tracking-widest focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((item) => (
              <div key={item.id} className="group relative">
                <Link to={`/product/${item.id}`} className="block aspect-[4/5] bg-surface-alt relative overflow-hidden mb-4">
                  <img
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                    data-strk-img-id={item.imgId1}
                    data-strk-img={`[prod-desc-${item.id}] [prod-title-${item.id}] [collection-desc] [collection-title]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <img
                    alt={`${item.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    data-strk-img-id={item.imgId2}
                    data-strk-img={`[prod-desc-${item.id}] [prod-title-${item.id}] [collection-desc] [collection-title] model worn`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  
                  {item.category === 'sets' && (
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest">
                      Gift Set
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        // Add to cart logic will go here
                        console.log('Added to cart', item.id);
                      }}
                      className="w-full bg-white/90 backdrop-blur text-foreground font-medium py-3 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                
                <Link to={`/product/${item.id}`} className="block">
                  <h3 id={`prod-title-${item.id}`} className="font-serif text-lg uppercase tracking-widest mb-1">{item.name}</h3>
                  <p className="text-muted mb-2">${item.price}</p>
                </Link>
                <span id={`prod-desc-${item.id}`} className="hidden">{item.desc}</span>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted mb-4 tracking-wide">No products found in this category.</p>
              <button 
                onClick={() => updateCategory('all')}
                className="text-sm font-medium tracking-widest uppercase border-b border-current pb-1 hover:text-accent transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;