import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import FilterSidebar from '@/components/collection/FilterSidebar';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A-Z' },
];

const materials = [
  { id: 'all', name: 'All Materials' },
  { id: 'gold', name: '18K Gold Plated' },
  { id: 'silver', name: 'Sterling Silver' },
  { id: 'crystal', name: 'Crystal' },
];

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max
    );

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const activeFiltersCount = [
    selectedCategory,
    priceRange.min !== 0 || priceRange.max !== Infinity,
    selectedMaterial !== 'all',
  ].filter(Boolean).length;

  const clearAllFilters = () => {
    setSelectedCategory('');
    setPriceRange({ min: 0, max: Infinity });
    setSelectedMaterial('all');
  };

  return (
    <main className="min-h-screen pt-20 md:pt-24">
      <div className="container-main py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-espresso mb-2">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-silk text-sm">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream">
          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm font-medium text-cocoa hover:text-espresso transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-champagne text-espresso text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Clear Filters (Mobile) */}
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="lg:hidden text-sm text-cocoa hover:text-espresso underline underline-offset-4 transition-colors"
            >
              Clear All
            </button>
          )}

          {/* Spacer */}
          <div className="hidden lg:flex-1" />

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm font-medium text-cocoa hover:text-espresso transition-colors"
            >
              Sort by:{' '}
              <span className="text-espresso">
                {sortOptions.find((o) => o.value === sortBy)?.label}
              </span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform',
                  isSortOpen && 'rotate-180'
                )}
              />
            </button>

            {isSortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-48 bg-ivory shadow-elevated z-20 py-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setIsSortOpen(false);
                      }}
                      className={cn(
                        'w-full px-4 py-2 text-left text-sm transition-colors',
                        sortBy === option.value
                          ? 'text-espresso font-medium bg-cream'
                          : 'text-cocoa hover:text-espresso hover:bg-cream/50'
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar
              isOpen={true}
              onClose={() => {}}
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              materials={materials}
              selectedMaterial={selectedMaterial}
              onMaterialChange={setSelectedMaterial}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-cocoa mb-4">No products found matching your filters.</p>
                <button
                  onClick={clearAllFilters}
                  className="text-champagne underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(cat) => {
          setSelectedCategory(cat);
        }}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        materials={materials}
        selectedMaterial={selectedMaterial}
        onMaterialChange={setSelectedMaterial}
      />
    </main>
  );
};

export default Collection;
