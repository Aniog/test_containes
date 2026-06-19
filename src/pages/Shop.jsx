import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
  });

  // Get filters from URL
  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('priceRange') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      if (activeCategory && product.category !== activeCategory) return false;
      if (activePriceRange) {
        const range = priceRanges.find((r) => r.label === activePriceRange);
        if (range && (product.price < range.min || product.price > range.max)) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (activeSort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
          return b.id.localeCompare(a.id);
        default:
          return b.featured ? 1 : -1;
      }
    });

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory || activePriceRange;

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-bg-warm py-12 md:py-16 text-center">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wider mb-2">
          {activeCategory 
            ? categories.find((c) => c.id === activeCategory)?.name.toUpperCase() 
            : 'SHOP ALL'}
        </h1>
        <p className="text-secondary">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-medium"
          >
            <Filter className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-accent text-white text-xs flex items-center justify-center rounded-full">
                !
              </span>
            )}
          </button>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="hidden md:block text-sm text-muted hover:text-primary transition-colors"
            >
              Clear all
            </button>
          )}

          {/* Sort Dropdown */}
          <div className="relative ml-auto">
            <select
              value={activeSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent pr-6 text-sm font-medium cursor-pointer focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-muted hover:text-primary transition-colors mb-6 flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear all filters
                </button>
              )}

              {/* Category Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('category')}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <span className="text-xs font-medium tracking-wider uppercase">Category</span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-muted transition-transform',
                      openSections.category && 'rotate-180'
                    )}
                  />
                </button>
                {openSections.category && (
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={!activeCategory}
                        onChange={() => updateFilter('category', '')}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                        All
                      </span>
                    </label>
                    {categories.map((cat) => (
                      <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          checked={activeCategory === cat.id}
                          onChange={() => updateFilter('category', cat.id)}
                          className="w-4 h-4 accent-accent"
                        />
                        <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                          {cat.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('price')}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <span className="text-xs font-medium tracking-wider uppercase">Price</span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-muted transition-transform',
                      openSections.price && 'rotate-180'
                    )}
                  />
                </button>
                {openSections.price && (
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={!activePriceRange}
                        onChange={() => updateFilter('priceRange', '')}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                        All Prices
                      </span>
                    </label>
                    {priceRanges.map((range) => (
                      <label key={range.label} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="price"
                          checked={activePriceRange === range.label}
                          onChange={() => updateFilter('priceRange', range.label)}
                          className="w-4 h-4 accent-accent"
                        />
                        <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-secondary mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden transition-opacity duration-300',
          isFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={cn(
            'absolute left-0 top-0 h-full w-80 max-w-full bg-surface transition-transform duration-300',
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h2 className="font-serif text-lg tracking-wider">Filters</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 -mr-2 text-secondary hover:text-primary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto h-[calc(100%-65px)]">
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-xs font-medium tracking-wider uppercase mb-3">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="mobile-category"
                    checked={!activeCategory}
                    onChange={() => updateFilter('category', '')}
                    className="w-4 h-4 accent-accent"
                  />
                  <span className="text-sm text-secondary">All</span>
                </label>
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={activeCategory === cat.id}
                      onChange={() => updateFilter('category', cat.id)}
                      className="w-4 h-4 accent-accent"
                    />
                    <span className="text-sm text-secondary">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-xs font-medium tracking-wider uppercase mb-3">Price</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="mobile-price"
                    checked={!activePriceRange}
                    onChange={() => updateFilter('priceRange', '')}
                    className="w-4 h-4 accent-accent"
                  />
                  <span className="text-sm text-secondary">All Prices</span>
                </label>
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-price"
                      checked={activePriceRange === range.label}
                      onChange={() => updateFilter('priceRange', range.label)}
                      className="w-4 h-4 accent-accent"
                    />
                    <span className="text-sm text-secondary">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full py-3 bg-primary text-white text-sm font-medium tracking-wider uppercase"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
