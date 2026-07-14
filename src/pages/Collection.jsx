import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const selectedCategory = searchParams.get('category') || '';
  const selectedPriceRange = searchParams.get('price') || '';
  const selectedMaterial = searchParams.get('material') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      result = result.filter(p => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    // Filter by material
    if (selectedMaterial) {
      result = result.filter(p =>
        p.materials.toLowerCase().includes(selectedMaterial.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

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
    setSortBy('featured');
  };

  const activeFiltersCount = [selectedCategory, selectedPriceRange, selectedMaterial]
    .filter(Boolean).length;

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-velmora-cream border-b border-velmora-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-2">
            {selectedCategory
              ? categories.find(c => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-velmora-taupe">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              selectedPriceRange={selectedPriceRange}
              selectedMaterial={selectedMaterial}
              onCategoryChange={(cat) => updateFilter('category', cat)}
              onPriceChange={(price) => updateFilter('price', price)}
              onMaterialChange={(mat) => updateFilter('material', mat)}
              onClear={clearFilters}
              activeFiltersCount={activeFiltersCount}
            />
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2 text-sm font-medium text-velmora-espresso"
            >
              <SlidersHorizontal size={18} />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-velmora-gold text-white text-xs rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-6 text-sm font-medium text-velmora-espresso cursor-pointer"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-taupe pointer-events-none" />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-velmora-taupe">
                Showing {filteredProducts.length} results
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 text-sm font-medium text-velmora-espresso cursor-pointer border border-velmora-sand rounded px-3 py-2"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-taupe pointer-events-none" />
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-velmora-taupe">Active filters:</span>
                {selectedCategory && (
                  <FilterTag
                    label={categories.find(c => c.id === selectedCategory)?.name}
                    onRemove={() => updateFilter('category', '')}
                  />
                )}
                {selectedPriceRange && (
                  <FilterTag
                    label={`$${selectedPriceRange.replace('-', ' - $')}`}
                    onRemove={() => updateFilter('price', '')}
                  />
                )}
                {selectedMaterial && (
                  <FilterTag
                    label={selectedMaterial}
                    onRemove={() => updateFilter('material', '')}
                  />
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs text-velmora-taupe hover:text-velmora-gold underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-velmora-taupe mb-4">No products match your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[70]"
            onClick={() => setShowFilters(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-velmora-ivory z-[80] overflow-y-auto animate-slide-in-right">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-velmora-charcoal">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 text-velmora-taupe hover:text-velmora-espresso"
                >
                  <X size={20} />
                </button>
              </div>
              <FilterSidebar
                categories={categories}
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                selectedMaterial={selectedMaterial}
                onCategoryChange={(cat) => {
                  updateFilter('category', cat);
                  setShowFilters(false);
                }}
                onPriceChange={(price) => {
                  updateFilter('price', price);
                  setShowFilters(false);
                }}
                onMaterialChange={(mat) => {
                  updateFilter('material', mat);
                  setShowFilters(false);
                }}
                onClear={() => {
                  clearFilters();
                  setShowFilters(false);
                }}
                activeFiltersCount={activeFiltersCount}
                isMobile
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function FilterSidebar({
  categories,
  selectedCategory,
  selectedPriceRange,
  selectedMaterial,
  onCategoryChange,
  onPriceChange,
  onMaterialChange,
  onClear,
  activeFiltersCount,
  isMobile
}) {
  const priceRanges = [
    { value: '0-50', label: 'Under $50' },
    { value: '50-75', label: '$50 - $75' },
    { value: '75-100', label: '$75 - $100' },
    { value: '100-', label: '$100+' },
  ];

  const materials = ['Gold Plated', 'Silver Plated'];

  return (
    <div className="space-y-8">
      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <button
          onClick={onClear}
          className="text-sm text-velmora-taupe hover:text-velmora-gold underline"
        >
          Clear all filters
        </button>
      )}

      {/* Category Filter */}
      <div>
        <h3 className="font-medium text-velmora-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={!selectedCategory}
              onChange={() => onCategoryChange('')}
              className="w-4 h-4 accent-velmora-gold"
            />
            <span className="text-sm text-velmora-taupe group-hover:text-velmora-espresso transition-colors">
              All
            </span>
          </label>
          {categories.map(category => (
            <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category.id}
                onChange={() => onCategoryChange(category.id)}
                className="w-4 h-4 accent-velmora-gold"
              />
              <span className="text-sm text-velmora-taupe group-hover:text-velmora-espresso transition-colors">
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-medium text-velmora-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={!selectedPriceRange}
              onChange={() => onPriceChange('')}
              className="w-4 h-4 accent-velmora-gold"
            />
            <span className="text-sm text-velmora-taupe group-hover:text-velmora-espresso transition-colors">
              All Prices
            </span>
          </label>
          {priceRanges.map(range => (
            <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === range.value}
                onChange={() => onPriceChange(range.value)}
                className="w-4 h-4 accent-velmora-gold"
              />
              <span className="text-sm text-velmora-taupe group-hover:text-velmora-espresso transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <h3 className="font-medium text-velmora-charcoal mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map(material => (
            <label key={material} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMaterial === material.toLowerCase()}
                onChange={() => onMaterialChange(
                  selectedMaterial === material.toLowerCase() ? '' : material.toLowerCase()
                )}
                className="w-4 h-4 accent-velmora-gold"
              />
              <span className="text-sm text-velmora-taupe group-hover:text-velmora-espresso transition-colors">
                {material}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterTag({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 bg-velmora-cream rounded-full text-sm text-velmora-espresso">
      {label}
      <button
        onClick={onRemove}
        className="ml-1 text-velmora-taupe hover:text-velmora-espresso"
      >
        <X size={14} />
      </button>
    </span>
  );
}
