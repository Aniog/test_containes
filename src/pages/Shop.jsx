import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SEED_PRODUCTS } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';

const strkImgConfig = {};

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest Arrivals' }
];

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  const categoryFilter = searchParams.get('category');
  
  // Extend seed products to make the grid look full
  const displayProducts = [
    ...SEED_PRODUCTS, 
    ...SEED_PRODUCTS.map(p => ({
        ...p, 
        id: p.id+'-2', 
        name: p.name + ' II'
    })), 
    ...SEED_PRODUCTS.slice(0, 2).map(p => ({
        ...p, 
        id: p.id+'-3', 
        name: p.name + ' III'
    }))
  ];

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages && containerRef.current) {
        // use requestAnimationFrame so react commits DOM before we scan it
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [categoryFilter, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = displayProducts;

    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryFilter, sortBy]);

  const handleCategoryChange = (cat) => {
    if (categoryFilter === cat) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categories = [...new Set(displayProducts.map(p => p.category))];

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      {/* Page Header */}
      <div className="text-center mb-16 px-6">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">
          {categoryFilter ? <span className="capitalize">{categoryFilter}</span> : 'All Jewelry'}
        </h1>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          {filteredProducts.length} Products
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center border-b border-border pb-4">
          <button 
            className="flex items-center gap-2 uppercase tracking-widest text-sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={16} /> Filters
          </button>
          <div className="relative">
             <select 
                className="appearance-none bg-transparent uppercase tracking-widest text-sm pr-6 cursor-pointer focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sidebar Filters */}
        <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0 space-y-10`}>
          <div>
            <h3 className="font-serif uppercase tracking-widest text-sm border-b border-border pb-4 mb-4">Category</h3>
            <ul className="space-y-3">
              {categories.map(cat => (
                <li key={cat}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="accent-foreground w-4 h-4 rounded-sm border-border text-foreground focus:ring-foreground"
                      checked={categoryFilter === cat}
                      onChange={() => handleCategoryChange(cat)}
                    />
                    <span className="capitalize text-sm text-foreground/80 group-hover:text-foreground transition-colors">{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

           <div>
            <h3 className="font-serif uppercase tracking-widest text-sm border-b border-border pb-4 mb-4">Material</h3>
            <ul className="space-y-3">
              <li>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="accent-foreground w-4 h-4 rounded-sm border-border text-foreground focus:ring-foreground" defaultChecked />
                    <span className="capitalize text-sm text-foreground/80 group-hover:text-foreground transition-colors">18k Gold Plated</span>
                  </label>
                </li>
                 <li>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="accent-foreground w-4 h-4 rounded-sm border-border text-foreground focus:ring-foreground" />
                    <span className="capitalize text-sm text-foreground/80 group-hover:text-foreground transition-colors">Solid Gold</span>
                  </label>
                </li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Desktop Sort */}
          <div className="hidden md:flex justify-end mb-8 relative">
              <div className="relative">
                 <select 
                    className="appearance-none bg-transparent uppercase tracking-widest text-sm pr-6 cursor-pointer focus:outline-none text-muted-foreground hover:text-foreground transition-colors"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    {SORT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-muted-foreground mb-4">No products found matching your filters.</p>
              <button 
                onClick={() => {
                  searchParams.delete('category');
                  setSearchParams(searchParams);
                }}
                className="text-sm tracking-widest uppercase border-b border-foreground hover:text-accent hover:border-accent pb-1 transition-colors"
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