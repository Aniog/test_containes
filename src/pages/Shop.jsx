import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['Gold', 'Silver'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory) {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (activePriceRange) {
      const range = priceRanges.find((r) => r.label === activePriceRange);
      if (range) {
        filtered = filtered.filter(
          (p) => p.price >= range.min && p.price < range.max
        );
      }
    }

    if (activeMaterial) {
      filtered = filtered.filter(
        (p) => p.material.toLowerCase() === activeMaterial.toLowerCase()
      );
    }

    // Sort
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
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [activeCategory, activePriceRange, activeMaterial, sortBy]);

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

  const hasActiveFilters = activeCategory || activePriceRange || activeMaterial;

  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-black mb-4">
            Our Collection
          </h1>
          <p className="text-sm text-velmora-stone max-w-md mx-auto">
            Discover our curated selection of demi-fine gold jewelry, designed
            for everyday elegance.
          </p>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-cream-dark">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase font-sans font-medium lg:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs text-velmora-stone hover:text-velmora-gold transition-colors"
              >
                <X className="w-3 h-3" />
                Clear all
              </button>
            )}
          </div>
          <p className="text-sm text-velmora-stone">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-[0.1em] uppercase font-sans font-medium pr-8 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar filters - desktop */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block w-full lg:w-64 flex-shrink-0`}
          >
            {/* Mobile filter overlay */}
            {showFilters && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setShowFilters(false)}
                />
                <div className="absolute left-0 top-0 bottom-0 w-80 bg-velmora-ivory p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-serif text-lg">Filters</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <FilterContent
                    activeCategory={activeCategory}
                    activePriceRange={activePriceRange}
                    activeMaterial={activeMaterial}
                    updateFilter={updateFilter}
                  />
                </div>
              </div>
            )}

            {/* Desktop sidebar */}
            <div className="hidden lg:block sticky top-28">
              <FilterContent
                activeCategory={activeCategory}
                activePriceRange={activePriceRange}
                activeMaterial={activeMaterial}
                updateFilter={updateFilter}
              />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl mb-4">No pieces found</p>
                <p className="text-sm text-velmora-stone mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-[0.1em] uppercase font-sans font-medium text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function FilterContent({
  activeCategory,
  activePriceRange,
  activeMaterial,
  updateFilter,
}) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-sans font-semibold mb-4">
          Category
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', '')}
            className={`block w-full text-left text-sm py-1.5 transition-colors ${
              !activeCategory
                ? 'text-velmora-gold font-medium'
                : 'text-velmora-stone hover:text-velmora-black'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                updateFilter('category', activeCategory === cat.id ? '' : cat.id)
              }
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activeCategory === cat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-black'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-sans font-semibold mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() =>
                updateFilter(
                  'price',
                  activePriceRange === range.label ? '' : range.label
                )
              }
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activePriceRange === range.label
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-black'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-sans font-semibold mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() =>
                updateFilter(
                  'material',
                  activeMaterial === mat ? '' : mat
                )
              }
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activeMaterial === mat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-black'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
