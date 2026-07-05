import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges } from '../data/products';
import ProductCard from '../components/shop/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (activePriceRange !== 'all') {
      const range = priceRanges.find(r => r.id === activePriceRange);
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price <= range.max);
      }
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return filtered;
  }, [activeCategory, activePriceRange, sortBy]);

  const handleCategoryChange = (catId) => {
    const params = new URLSearchParams(searchParams);
    if (catId === 'all') {
      params.delete('category');
    } else {
      params.set('category', catId);
    }
    setSearchParams(params);
  };

  const handlePriceChange = (rangeId) => {
    const params = new URLSearchParams(searchParams);
    if (rangeId === 'all') {
      params.delete('price');
    } else {
      params.set('price', rangeId);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all';

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="font-sans text-xs tracking-widest-xl uppercase text-brand-warm-gray mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
              activeCategory === 'all' ? 'text-brand-gold font-medium' : 'text-brand-charcoal hover:text-brand-gold'
            }`}
          >
            All Pieces
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                activeCategory === cat.id ? 'text-brand-gold font-medium' : 'text-brand-charcoal hover:text-brand-gold'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="font-sans text-xs tracking-widest-xl uppercase text-brand-warm-gray mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => handlePriceChange('all')}
            className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
              activePriceRange === 'all' ? 'text-brand-gold font-medium' : 'text-brand-charcoal hover:text-brand-gold'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.id}
              onClick={() => handlePriceChange(range.id)}
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                activePriceRange === range.id ? 'text-brand-gold font-medium' : 'text-brand-charcoal hover:text-brand-gold'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs underline text-brand-warm-gray hover:text-brand-charcoal transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-cream pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <p className="section-subheading mb-3">Collection</p>
        <h1 className="section-heading">Shop All Jewelry</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden flex items-center gap-2 font-sans text-sm text-brand-charcoal"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            {hasActiveFilters && (
              <div className="hidden md:flex items-center gap-2">
                {activeCategory !== 'all' && (
                  <span className="flex items-center gap-1 px-3 py-1 bg-brand-ivory font-sans text-xs text-brand-charcoal">
                    {categories.find(c => c.id === activeCategory)?.name}
                    <X size={12} className="cursor-pointer" onClick={() => handleCategoryChange('all')} />
                  </span>
                )}
                {activePriceRange !== 'all' && (
                  <span className="flex items-center gap-1 px-3 py-1 bg-brand-ivory font-sans text-xs text-brand-charcoal">
                    {priceRanges.find(r => r.id === activePriceRange)?.label}
                    <X size={12} className="cursor-pointer" onClick={() => handlePriceChange('all')} />
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-sm text-brand-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-charcoal" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter drawer */}
          {filtersOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-80 bg-brand-cream p-6 overflow-y-auto shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl text-brand-charcoal">Filters</h2>
                  <button onClick={() => setFiltersOpen(false)} className="text-brand-charcoal">
                    <X size={20} />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <p className="font-sans text-xs text-brand-warm-gray mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-sm text-brand-warm-gray mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
