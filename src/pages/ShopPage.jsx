import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity }
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' }
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [ref, isVisible] = useScrollReveal();

  // Get current filter values from URL
  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || null;
  const activeSort = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by price range
    if (activePriceRange) {
      const range = priceRanges.find(r => r.label === activePriceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (activeSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - keep original order with featured first
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [activeCategory, activePriceRange, activeSort]);

  // Update URL params
  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'all' && value !== 'featured') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange || activeSort !== 'featured';

  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: 'var(--velmora-cream)' }}>
      {/* Hero Banner */}
      <div 
        className="relative py-16 md:py-20 overflow-hidden"
        style={{ backgroundColor: 'var(--velmora-warm-white)' }}
      >
        <div className="velmora-container text-center">
          <p 
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: 'var(--velmora-gold)' }}
          >
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
            Shop All Jewelry
          </h1>
          <p className="text-sm md:text-base max-w-xl mx-auto" style={{ color: 'var(--velmora-walnut)' }}>
            Discover our complete collection of demi-fine gold jewelry. 
            Each piece crafted with intention, made to be treasured.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="velmora-container py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <Filters
                categories={categories}
                priceRanges={priceRanges}
                activeCategory={activeCategory}
                activePriceRange={activePriceRange}
                onCategoryChange={(cat) => updateParams('category', cat)}
                onPriceChange={(price) => updateParams('price', price)}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b" style={{ borderColor: 'var(--velmora-sand)' }}>
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-sm"
                >
                  <SlidersHorizontal size={18} strokeWidth={1.5} />
                  Filters
                </button>

                <p className="text-sm" style={{ color: 'var(--velmora-taupe)' }}>
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 text-sm"
                >
                  Sort by: 
                  <span className="font-medium">
                    {sortOptions.find(o => o.value === activeSort)?.label}
                  </span>
                  <ChevronDown size={16} strokeWidth={1.5} />
                </button>
                
                {isSortOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsSortOpen(false)} 
                    />
                    <div 
                      className="absolute right-0 top-full mt-2 py-2 w-48 bg-white shadow-lg z-20"
                      style={{ border: '1px solid var(--velmora-sand)' }}
                    >
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            updateParams('sort', option.value);
                            setIsSortOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                            activeSort === option.value ? 'font-medium' : ''
                          }`}
                          style={{
                            backgroundColor: activeSort === option.value ? 'var(--velmora-sand)' : 'transparent'
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Active Filters Tags */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCategory !== 'all' && (
                  <FilterTag
                    label={categories.find(c => c.id === activeCategory)?.name}
                    onRemove={() => updateParams('category', 'all')}
                  />
                )}
                {activePriceRange && (
                  <FilterTag
                    label={activePriceRange}
                    onRemove={() => updateParams('price', '')}
                  />
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-wider transition-colors hover:text-[var(--velmora-gold)]"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div 
                ref={ref}
                className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 stagger-children ${isVisible ? 'visible' : ''}`}
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-2xl mb-2">No products found</p>
                <p className="text-sm mb-6" style={{ color: 'var(--velmora-taupe)' }}>
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsFilterOpen(false)}
          />
          <div 
            className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-[var(--velmora-warm-white)] overflow-y-auto animate-slide-in-right"
          >
            <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--velmora-sand)' }}>
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-6">
              <Filters
                categories={categories}
                priceRanges={priceRanges}
                activeCategory={activeCategory}
                activePriceRange={activePriceRange}
                onCategoryChange={(cat) => {
                  updateParams('category', cat);
                  setIsFilterOpen(false);
                }}
                onPriceChange={(price) => {
                  updateParams('price', price);
                  setIsFilterOpen(false);
                }}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
                isMobile
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// Filter Component
function Filters({
  categories,
  priceRanges,
  activeCategory,
  activePriceRange,
  onCategoryChange,
  onPriceChange,
  onClear,
  hasActiveFilters,
  isMobile = false
}) {
  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--velmora-taupe)' }}>
          Category
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                checked={activeCategory === category.id}
                onChange={() => onCategoryChange(category.id)}
                className="w-4 h-4 accent-[var(--velmora-gold)]"
              />
              <span className="text-sm transition-colors group-hover:text-[var(--velmora-gold)]">
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--velmora-taupe)' }}>
          Price
        </h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={activePriceRange === range.label}
                onChange={() => onPriceChange(range.label)}
                className="w-4 h-4 accent-[var(--velmora-gold)]"
              />
              <span className="text-sm transition-colors group-hover:text-[var(--velmora-gold)]">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClear}
          className="text-sm underline transition-colors hover:text-[var(--velmora-gold)]"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}

// Filter Tag Component
function FilterTag({ label, onRemove }) {
  return (
    <span 
      className="inline-flex items-center gap-2 px-3 py-1 text-xs"
      style={{ 
        backgroundColor: 'var(--velmora-sand)',
        color: 'var(--velmora-charcoal)'
      }}
    >
      {label}
      <button onClick={onRemove} className="hover:text-[var(--velmora-gold)]">
        <X size={14} strokeWidth={1.5} />
      </button>
    </span>
  );
}
