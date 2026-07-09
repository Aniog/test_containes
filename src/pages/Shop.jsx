import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories, priceRanges, materials } from '@/data/products';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Material filter
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.colors.includes(activeMaterial));
    }

    // Price filter
    if (activePriceRange !== 'all') {
      const range = priceRanges.find((r) => r.id === activePriceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, activeMaterial, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all' || activeMaterial !== 'all';

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-serif text-sm tracking-widest uppercase text-warm-700 mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', 'all')}
            className={cn(
              'block text-sm font-sans transition-colors',
              activeCategory === 'all' ? 'text-gold font-medium' : 'text-warm-400 hover:text-warm-600'
            )}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={cn(
                'block text-sm font-sans transition-colors',
                activeCategory === cat.id ? 'text-gold font-medium' : 'text-warm-400 hover:text-warm-600'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-serif text-sm tracking-widest uppercase text-warm-700 mb-4">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('price', 'all')}
            className={cn(
              'block text-sm font-sans transition-colors',
              activePriceRange === 'all' ? 'text-gold font-medium' : 'text-warm-400 hover:text-warm-600'
            )}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => updateFilter('price', range.id)}
              className={cn(
                'block text-sm font-sans transition-colors',
                activePriceRange === range.id ? 'text-gold font-medium' : 'text-warm-400 hover:text-warm-600'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-serif text-sm tracking-widest uppercase text-warm-700 mb-4">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('material', 'all')}
            className={cn(
              'block text-sm font-sans transition-colors',
              activeMaterial === 'all' ? 'text-gold font-medium' : 'text-warm-400 hover:text-warm-600'
            )}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => updateFilter('material', mat.id)}
              className={cn(
                'block text-sm font-sans transition-colors',
                activeMaterial === mat.id ? 'text-gold font-medium' : 'text-warm-400 hover:text-warm-600'
              )}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans text-warm-400 hover:text-gold underline transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-12 md:py-16">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase text-warm-800">
            {activeCategory !== 'all'
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
          <p className="font-sans text-sm text-warm-400 mt-4">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} found
          </p>
        </div>

        {/* Controls bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-200">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-warm-500 hover:text-gold transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </button>

          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-warm-400 hidden sm:block">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent font-sans text-xs tracking-wider uppercase text-warm-600 pr-8 py-2 cursor-pointer focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-warm-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="flex gap-8 lg:gap-12 pb-16 md:pb-24">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter overlay */}
          <div
            className={cn(
              'fixed inset-0 z-40 lg:hidden transition-all duration-300',
              filterOpen ? 'pointer-events-auto' : 'pointer-events-none'
            )}
          >
            <div
              className={cn(
                'absolute inset-0 bg-black/40 transition-opacity',
                filterOpen ? 'opacity-100' : 'opacity-0'
              )}
              onClick={() => setFilterOpen(false)}
            />
            <div
              className={cn(
                'absolute left-0 top-0 h-full w-80 bg-white shadow-2xl p-8 overflow-y-auto transition-transform duration-300',
                filterOpen ? 'translate-x-0' : '-translate-x-full'
              )}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-lg tracking-widest uppercase text-warm-800">Filters</h2>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-5 h-5 text-warm-400" />
                </button>
              </div>
              <FilterContent />
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="font-serif text-xl text-warm-400 mb-2">No pieces found</p>
                <p className="font-sans text-sm text-warm-300 mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs tracking-wider uppercase text-gold hover:text-gold-dark underline transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
