import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ChevronDown, Filter } from 'lucide-react';
import { useCart } from '../lib/CartContext';

const PRODUCTS = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    price: 42,
    type: 'Ear Cuff',
    material: '18K Gold Plated',
    imgId: 'product-1-vivid-aura',
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    price: 68,
    type: 'Necklace',
    material: '18K Gold Plated',
    imgId: 'product-2-majestic-flora',
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    price: 38,
    type: 'Huggies',
    material: 'Solid Gold',
    imgId: 'product-3-golden-sphere',
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    price: 54,
    type: 'Earrings',
    material: '18K Gold Plated',
    imgId: 'product-4-amber-lace',
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    price: 95,
    type: 'Set',
    material: '18K Gold Plated',
    imgId: 'product-5-royal-heirloom',
  },
  {
    id: '6',
    name: 'Luminous Pearl Drop',
    price: 48,
    type: 'Earrings',
    material: 'Solid Gold',
    imgId: 'product-6-pearl-drop',
  },
  {
    id: '7',
    name: 'Twilight Chain',
    price: 62,
    type: 'Necklace',
    material: '18K Gold Plated',
    imgId: 'product-7-twilight-chain',
  },
  {
    id: '8',
    name: 'Petite Diamond Huggies',
    price: 75,
    type: 'Huggies',
    material: 'Solid Gold',
    imgId: 'product-8-diamond-huggies',
  }
];

const CATEGORIES = ['All', 'Ear Cuff', 'Necklace', 'Huggies', 'Earrings', 'Set'];
const MATERIALS = ['All', '18K Gold Plated', 'Solid Gold'];

export default function Collection() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeMaterial, setActiveMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    let cleanup = () => {};
    try {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } catch (e) {
      console.log('ImageHelper not ready or config missing', e);
    }
    return () => cleanup && typeof cleanup === 'function' && cleanup();
  }, [activeCategory, activeMaterial, sortBy]);

  let filteredProducts = PRODUCTS.filter(p => {
    if (activeCategory !== 'All' && p.type !== activeCategory) return false;
    if (activeMaterial !== 'All' && p.material !== activeMaterial) return false;
    return true;
  });

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div ref={containerRef} className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 id="collection-title" className="text-4xl md:text-5xl font-serif uppercase tracking-[0.1em] mb-4">Shop the Collection</h1>
        <p className="text-sm text-foreground/70 font-light leading-relaxed">
          Discover our full range of demi-fine jewelry. Each piece is crafted to be worn, loved, and layered every day.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center border-b border-border pb-4">
          <button 
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
          <div className="relative">
            <select 
              className="appearance-none bg-transparent text-xs uppercase tracking-[0.2em] font-semibold pr-6 focus:outline-none cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sidebar Filters */}
        <div className={`lg:w-1/4 flex flex-col gap-10 ${isMobileFilterOpen ? 'block' : 'hidden lg:flex'}`}>
          {/* Category Filter */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 border-b border-border pb-2">Category</h3>
            <ul className="flex flex-col gap-4">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm tracking-wide transition-colors ${activeCategory === cat ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Material Filter */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 border-b border-border pb-2">Material</h3>
            <ul className="flex flex-col gap-4">
              {MATERIALS.map(mat => (
                <li key={mat}>
                  <button 
                    onClick={() => setActiveMaterial(mat)}
                    className={`text-sm tracking-wide transition-colors ${activeMaterial === mat ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
                  >
                    {mat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Grid */}
        <div className="lg:w-3/4 flex flex-col">
          {/* Desktop Sort */}
          <div className="hidden lg:flex justify-between items-center mb-8 border-b border-border pb-4 w-full">
            <span className="text-xs text-foreground/50 tracking-wide">{filteredProducts.length} Products</span>
            <div className="relative">
              <select 
                className="appearance-none bg-transparent text-xs uppercase tracking-[0.2em] font-semibold pr-6 focus:outline-none cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-12">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group group/card block cursor-pointer">
                  <div className="relative aspect-[3/4] bg-secondary/30 mb-4 overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={product.name}
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[prod-type-${product.id}] [prod-name-${product.id}] [collection-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <button 
                        className="w-full bg-background text-foreground py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-accent hover:text-accent-foreground transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 opacity-0 group-hover:opacity-100 border border-transparent"
                        onClick={(e) => { e.preventDefault(); addToCart(product); }}
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p id={`prod-type-${product.id}`} className="text-[10px] text-foreground/50 uppercase tracking-[0.2em] mb-1 font-semibold">{product.type}</p>
                    <h3 id={`prod-name-${product.id}`} className="font-serif uppercase tracking-[0.1em] text-sm mb-2">{product.name}</h3>
                    <p className="text-sm font-medium text-foreground/80">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-lg text-foreground/60 mb-4">No products found matching your filters.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setActiveMaterial('All'); }}
                className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-foreground hover:text-accent hover:border-accent transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}