import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceMin: '',
    priceMax: '',
    material: '',
  });

  const [sort, setSort] = useState('featured');

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    setSearchParams(params, { replace: true });
  }, [filters.category]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      if (filters.category && product.category !== filters.category) return false;
      if (filters.priceMin && product.price < parseInt(filters.priceMin)) return false;
      if (filters.priceMax && product.price > parseInt(filters.priceMax)) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.reviews - a.reviews; // Using reviews as proxy for newest
        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setFilters({ category: '', priceMin: '', priceMax: '', material: '' });
  };

  const hasActiveFilters = filters.category || filters.priceMin || filters.priceMax;

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {filters.category 
              ? categories.find(c => c.id === filters.category)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="mt-2 text-sm text-taupe font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-sans text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Desktop Filter Pills */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm text-taupe font-sans">Filter:</span>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilters(f => ({ ...f, category: f.category === cat.id ? '' : cat.id }))}
                className={`px-4 py-1.5 text-sm font-sans transition-all ${
                  filters.category === cat.id
                    ? 'bg-charcoal text-cream'
                    : 'border border-sand text-charcoal hover:border-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm font-sans text-charcoal"
            >
              Sort by
              <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 bg-cream shadow-lg border border-sand z-20 min-w-[180px]">
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSort(option.value);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm font-sans hover:bg-champagne/20 ${
                        sort === option.value ? 'text-gold-700' : 'text-charcoal'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-taupe font-sans">Active filters:</span>
            {filters.category && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-champagne/30 text-sm font-sans text-charcoal">
                {categories.find(c => c.id === filters.category)?.name}
                <button onClick={() => setFilters(f => ({ ...f, category: '' }))}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {(filters.priceMin || filters.priceMax) && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-champagne/30 text-sm font-sans text-charcoal">
                ${filters.priceMin || '0'} - ${filters.priceMax || '∞'}
                <button onClick={() => setFilters(f => ({ ...f, priceMin: '', priceMax: '' }))}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-taupe font-sans underline hover:text-charcoal"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-taupe font-sans">No products found matching your filters.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-sm font-sans text-charcoal underline hover:text-gold-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-charcoal/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream overflow-y-auto animate-slide-in">
            <div className="flex items-center justify-between p-6 border-b border-sand">
              <h2 className="font-serif text-lg text-charcoal">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-taupe hover:text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-sans font-medium text-charcoal mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat.id}
                        onChange={() => setFilters(f => ({ ...f, category: cat.id }))}
                        className="w-4 h-4 text-charcoal focus:ring-charcoal"
                      />
                      <span className="text-sm font-sans text-charcoal">{cat.name}</span>
                    </label>
                  ))}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={filters.category === ''}
                      onChange={() => setFilters(f => ({ ...f, category: '' }))}
                      className="w-4 h-4 text-charcoal focus:ring-charcoal"
                    />
                    <span className="text-sm font-sans text-charcoal">All</span>
                  </label>
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-sans font-medium text-charcoal mb-3">Price</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceMin}
                    onChange={(e) => setFilters(f => ({ ...f, priceMin: e.target.value }))}
                    className="w-full px-3 py-2 border border-sand text-sm font-sans focus:outline-none focus:border-charcoal"
                  />
                  <span className="text-taupe">—</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceMax}
                    onChange={(e) => setFilters(f => ({ ...f, priceMax: e.target.value }))}
                    className="w-full px-3 py-2 border border-sand text-sm font-sans focus:outline-none focus:border-charcoal"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-sand flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border border-charcoal text-charcoal font-sans font-medium text-sm"
              >
                Clear
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 py-3 bg-charcoal text-cream font-sans font-medium text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
