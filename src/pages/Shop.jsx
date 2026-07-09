import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [activeCategory, sortBy, priceRange]);

  let filtered = [...products];

  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  if (priceRange === 'under50') {
    filtered = filtered.filter(p => p.price < 50);
  } else if (priceRange === '50to80') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 80);
  } else if (priceRange === 'over80') {
    filtered = filtered.filter(p => p.price > 80);
  }

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const handleCategoryChange = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-light text-center">
          {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
        </h1>
        <p className="mt-3 text-sm text-muted-fg text-center">
          Discover our curated collection of demi-fine gold jewelry.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal bg-transparent border-none cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-sm text-muted-fg hidden md:block">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm text-charcoal bg-transparent border border-border px-3 py-2 rounded-sm focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs font-medium uppercase tracking-widest text-charcoal mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block text-sm transition-colors bg-transparent border-none cursor-pointer text-left ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block text-sm transition-colors bg-transparent border-none cursor-pointer text-left ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs font-medium uppercase tracking-widest text-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50 – $80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`block text-sm transition-colors bg-transparent border-none cursor-pointer text-left ${
                        priceRange === opt.value ? 'text-gold font-medium' : 'text-muted-fg hover:text-charcoal'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-cream">
              <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                <h2 className="font-serif text-lg">Filters</h2>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="p-2 bg-transparent border-none cursor-pointer"
                >
                  <X className="w-5 h-5 text-charcoal" />
                </button>
              </div>
              <div className="p-4 space-y-8">
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-widest text-charcoal mb-4">Category</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => { handleCategoryChange('all'); setFilterOpen(false); }}
                      className={`block text-sm bg-transparent border-none cursor-pointer ${activeCategory === 'all' ? 'text-gold font-medium' : 'text-muted-fg'}`}
                    >
                      All Jewelry
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => { handleCategoryChange(cat.id); setFilterOpen(false); }}
                        className={`block text-sm bg-transparent border-none cursor-pointer ${activeCategory === cat.id ? 'text-gold font-medium' : 'text-muted-fg'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-widest text-charcoal mb-4">Price</h3>
                  <div className="space-y-3">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to80', label: '$50 – $80' },
                      { value: 'over80', label: 'Over $80' },
                    ].map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setPriceRange(opt.value); setFilterOpen(false); }}
                        className={`block text-sm bg-transparent border-none cursor-pointer ${priceRange === opt.value ? 'text-gold font-medium' : 'text-muted-fg'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="mt-2 text-sm text-muted-fg">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
