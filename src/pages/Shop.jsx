import { useState, useMemo, useEffect, useRef } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Shop() {
  const pageRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  useEffect(() => {
    if (pageRef.current) {
      return ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }
  }, []);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice !== 'all') {
      const ranges = {
        under40: [0, 40],
        '40-60': [40, 60],
        '60-80': [60, 80],
        over80: [80, Infinity],
      };
      const [min, max] = ranges[selectedPrice] || [0, Infinity];
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedMaterial('all');
  };

  const hasFilters = selectedCategory !== 'all' || selectedPrice !== 'all' || selectedMaterial !== 'all';

  const sortLabel = {
    featured: 'Featured',
    'price-asc': 'Price: Low to High',
    'price-desc': 'Price: High to Low',
    rating: 'Top Rated',
  }[sortBy];

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
          Category
        </h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'all'}
              onChange={() => setSelectedCategory('all')}
              className="accent-accent w-3.5 h-3.5"
            />
            <span className={`text-sm transition-colors ${selectedCategory === 'all' ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
              All
            </span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                className="accent-accent w-3.5 h-3.5"
              />
              <span className={`text-sm transition-colors ${selectedCategory === cat.id ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {[
            { key: 'all', label: 'All Prices' },
            { key: 'under40', label: 'Under $40' },
            { key: '40-60', label: '$40 – $60' },
            { key: '60-80', label: '$60 – $80' },
            { key: 'over80', label: 'Over $80' },
          ].map((opt) => (
            <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === opt.key}
                onChange={() => setSelectedPrice(opt.key)}
                className="accent-accent w-3.5 h-3.5"
              />
              <span className={`text-sm transition-colors ${selectedPrice === opt.key ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {[
            { key: 'all', label: 'All Materials' },
            { key: '18k-gold-plated', label: '18K Gold Plated' },
          ].map((opt) => (
            <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === opt.key}
                onChange={() => setSelectedMaterial(opt.key)}
                className="accent-accent w-3.5 h-3.5"
              />
              <span className={`text-sm transition-colors ${selectedMaterial === opt.key ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-[0.15em] text-accent underline hover:text-accent-hover transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={pageRef}>
      {/* Header */}
      <div className="pt-28 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl text-primary text-center mb-2">
          Shop All Jewelry
        </h1>
        <p className="text-secondary text-sm text-center max-w-md mx-auto">
          Discover our curated collection of demi-fine gold jewelry, designed to be worn and loved.
        </p>
      </div>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toolbar */}
          <div className="flex items-center justify-between py-4 border-y border-hairline mb-6">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-primary"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <span className="hidden lg:block text-sm text-secondary">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>

            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-primary"
              >
                Sort: {sortLabel}
                <ChevronDown size={14} className={`transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-20" onClick={() => setSortDropdownOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 bg-surface border border-hairline z-30 min-w-[200px] py-2">
                    {[
                      { key: 'featured', label: 'Featured' },
                      { key: 'price-asc', label: 'Price: Low to High' },
                      { key: 'price-desc', label: 'Price: High to Low' },
                      { key: 'rating', label: 'Top Rated' },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setSortBy(opt.key);
                          setSortDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          sortBy === opt.key ? 'text-accent' : 'text-secondary hover:text-primary'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-10">
            {/* Sidebar — desktop */}
            <aside className="hidden lg:block w-60 flex-shrink-0">
              <FilterContent />
            </aside>

            {/* Grid */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-xl text-primary mb-2">No products found</p>
                  <p className="text-secondary text-sm mb-6">Try adjusting your filters</p>
                  <button
                    onClick={clearFilters}
                    className="bg-accent text-base px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-accent-hover transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-[320px] bg-surface z-50 flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-hairline">
              <h3 className="font-serif text-lg tracking-wide text-primary">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <FilterContent />
            </div>
            <div className="px-5 py-4 border-t border-hairline">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-accent text-base py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-accent-hover transition-colors"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
