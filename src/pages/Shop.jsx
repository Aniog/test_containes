import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A to Z' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-100', label: '$50 - $100' },
  { value: 'over-100', label: 'Over $100' },
];

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedPrice = searchParams.get('price') || 'all';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    switch (selectedPrice) {
      case 'under-50':
        result = result.filter(p => p.price < 50);
        break;
      case '50-100':
        result = result.filter(p => p.price >= 50 && p.price <= 100);
        break;
      case 'over-100':
        result = result.filter(p => p.price > 100);
        break;
    }

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
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== 'all';

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Header */}
      <div className="bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <h1 
            className="heading-serif text-3xl md:text-4xl lg:text-5xl text-center"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Shop All Jewelry
          </h1>
          <p className="text-warm-gray text-center mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Filter Bar */}
        <div className="lg:hidden flex items-center justify-between mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </Button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-hairline px-4 py-2 pr-10 text-sm focus:outline-none focus:border-gold"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-soft-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar
                categories={categories}
                priceRanges={priceRanges}
                selectedCategory={selectedCategory}
                selectedPrice={selectedPrice}
                onCategoryChange={(val) => updateFilter('category', val)}
                onPriceChange={(val) => updateFilter('price', val)}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-hairline px-4 py-2 pr-10 text-sm focus:outline-none focus:border-gold"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-soft-gray pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-warm-gray mb-4">
                  No products match your current filters.
                </p>
                <Button variant="secondary" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        categories={categories}
        priceRanges={priceRanges}
        selectedCategory={selectedCategory}
        selectedPrice={selectedPrice}
        onCategoryChange={(val) => {
          updateFilter('category', val);
          setIsFilterOpen(false);
        }}
        onPriceChange={(val) => {
          updateFilter('price', val);
          setIsFilterOpen(false);
        }}
        onClear={() => {
          clearFilters();
          setIsFilterOpen(false);
        }}
        hasActiveFilters={hasActiveFilters}
      />
    </div>
  );
}

function FilterSidebar({
  categories,
  priceRanges,
  selectedCategory,
  selectedPrice,
  onCategoryChange,
  onPriceChange,
  onClear,
  hasActiveFilters,
}) {
  return (
    <div className="space-y-8">
      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClear}
          className="text-sm text-gold hover:text-gold-dark transition-colors flex items-center gap-1"
        >
          <X className="w-3 h-3" />
          Clear all filters
        </button>
      )}

      {/* Categories */}
      <div>
        <h3 className="text-xs font-medium tracking-button uppercase mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <FilterOption
            label="All"
            isSelected={selectedCategory === 'all'}
            onClick={() => onCategoryChange('all')}
          />
          {categories.map((cat) => (
            <FilterOption
              key={cat.id}
              label={cat.name}
              isSelected={selectedCategory === cat.id}
              onClick={() => onCategoryChange(cat.id)}
            />
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs font-medium tracking-button uppercase mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <FilterOption
              key={range.value}
              label={range.label}
              isSelected={selectedPrice === range.value}
              onClick={() => onPriceChange(range.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterOption({ label, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'block w-full text-left py-1.5 text-sm transition-colors',
        isSelected ? 'text-gold font-medium' : 'text-warm-gray hover:text-charcoal'
      )}
    >
      {label}
    </button>
  );
}

function MobileFilterDrawer({
  isOpen,
  onClose,
  categories,
  priceRanges,
  selectedCategory,
  selectedPrice,
  onCategoryChange,
  onPriceChange,
  onClear,
  hasActiveFilters,
}) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 lg:hidden transition-opacity',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'absolute left-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-elevated',
          'transform transition-transform duration-300 ease-luxury',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="heading-serif text-xl">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-charcoal/60 hover:text-charcoal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full pb-32">
          <FilterSidebar
            categories={categories}
            priceRanges={priceRanges}
            selectedCategory={selectedCategory}
            selectedPrice={selectedPrice}
            onCategoryChange={onCategoryChange}
            onPriceChange={onPriceChange}
            onClear={onClear}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-hairline">
          <Button variant="primary" size="full" onClick={onClose}>
            View {products.length} Products
          </Button>
        </div>
      </div>
    </div>
  );
}
