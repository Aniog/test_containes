import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown, Grid, SlidersHorizontal } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Get initial filters from URL
  const initialCategory = searchParams.get('category') || '';
  const initialPrice = searchParams.get('price') || '';

  // Local filter state
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    initialPrice || ''
  );
  const [sortBy, setSortBy] = useState('featured');

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length === 1) {
      params.set('category', selectedCategories[0]);
    }
    if (selectedPriceRange) {
      params.set('price', selectedPriceRange);
    }
    setSearchParams(params, { replace: true });
  }, [selectedCategories, selectedPriceRange, setSearchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by price
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.label === selectedPriceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
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
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategories, selectedPriceRange, sortBy]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      }
      return [...prev, category];
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange('');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRange;

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-velmora-sand/30 py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h1
            className="text-3xl md:text-4xl mb-3"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Our Collection
          </h1>
          <p className="text-velmora-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-velmora-sand">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-velmora-espresso"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-velmora-gold text-white text-xs rounded-full flex items-center justify-center">
                {selectedCategories.length + (selectedPriceRange ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Desktop Filter Pills */}
          <div className="hidden lg:flex items-center gap-3 flex-wrap">
            <span className="text-sm text-velmora-warm-gray mr-2">Filter:</span>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`px-4 py-2 text-sm border transition-colors ${
                  selectedCategories.includes(cat.id)
                    ? 'bg-velmora-espresso text-white border-velmora-espresso'
                    : 'border-velmora-sand text-velmora-espresso hover:border-velmora-espresso'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm text-velmora-espresso"
            >
              <span>Sort: {sortOptions.find(o => o.value === sortBy)?.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lift rounded border border-velmora-sand z-10">
                {sortOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-velmora-sand/50 transition-colors first:rounded-t last:rounded-b ${
                      sortBy === option.value ? 'text-velmora-gold font-medium' : 'text-velmora-espresso'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Overlay */}
        <div
          className={`fixed inset-0 z-[100] lg:hidden transition-opacity ${
            isMobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto transition-transform ${
              isMobileFilterOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className="sticky top-0 bg-white p-4 border-b border-velmora-sand flex items-center justify-between">
              <h3 className="font-medium">Filters</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 -mr-2 text-velmora-warm-gray"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Categories */}
              <div>
                <h4 className="text-sm font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        className="w-4 h-4 border-velmora-sand text-velmora-gold focus:ring-velmora-gold"
                      />
                      <span className="text-sm text-velmora-espresso">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-sm font-medium mb-3">Price</h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === range.label}
                        onChange={() => setSelectedPriceRange(range.label)}
                        className="w-4 h-4 border-velmora-sand text-velmora-gold focus:ring-velmora-gold"
                      />
                      <span className="text-sm text-velmora-espresso">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white p-4 border-t border-velmora-sand flex gap-3">
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="flex-1"
              >
                Clear All
              </Button>
              <Button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1"
              >
                Show {filteredProducts.length} Results
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-velmora-sand rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-velmora-warm-gray" />
            </div>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              No products found
            </h3>
            <p className="text-velmora-warm-gray mb-6">
              Try adjusting your filters to find what you're looking for
            </p>
            <Button variant="secondary" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
