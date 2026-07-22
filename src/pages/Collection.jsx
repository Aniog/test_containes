import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui';
import { ProductCard } from '@/components/product';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const currentCategory = searchParams.get('category') || 'all';
  const currentPrice = searchParams.get('price') || null;
  const currentSort = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (currentCategory !== 'all') {
      result = result.filter((p) => p.category === currentCategory);
    }

    // Filter by price
    if (currentPrice) {
      const range = priceRanges.find((r) => r.label === currentPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (currentSort) {
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
  }, [currentCategory, currentPrice, currentSort]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasFilters = currentCategory !== 'all' || currentPrice;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs font-medium uppercase tracking-wider text-brand-text-primary mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {[{ id: 'all', name: 'All Jewelry' }, ...categories].map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                checked={currentCategory === cat.id}
                onChange={() => updateFilter('category', cat.id)}
                className="sr-only"
              />
              <span
                className={cn(
                  'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors',
                  currentCategory === cat.id
                    ? 'border-brand-gold bg-brand-gold'
                    : 'border-brand-border-subtle group-hover:border-brand-gold'
                )}
              >
                {currentCategory === cat.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-bg-primary" />
                )}
              </span>
              <span className="text-sm text-brand-text-secondary group-hover:text-brand-text-primary transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs font-medium uppercase tracking-wider text-brand-text-primary mb-4">
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
                checked={currentPrice === range.label}
                onChange={() => updateFilter('price', range.label)}
                className="sr-only"
              />
              <span
                className={cn(
                  'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors',
                  currentPrice === range.label
                    ? 'border-brand-gold bg-brand-gold'
                    : 'border-brand-border-subtle group-hover:border-brand-gold'
                )}
              >
                {currentPrice === range.label && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-bg-primary" />
                )}
              </span>
              <span className="text-sm text-brand-text-secondary group-hover:text-brand-text-primary transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <div className="container-main py-8 md:py-12">
        <h1 className="serif-heading text-3xl md:text-4xl text-brand-text-primary">
          {currentCategory === 'all'
            ? 'All Jewelry'
            : categories.find((c) => c.id === currentCategory)?.name || 'Shop'}
        </h1>
        <p className="mt-2 text-brand-text-secondary">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="container-main pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-border-subtle">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasFilters && (
                  <span className="w-2 h-2 rounded-full bg-brand-gold" />
                )}
              </button>

              {/* Sort Dropdown */}
              <div className="relative ml-auto">
                <select
                  value={currentSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 bg-brand-bg-secondary border border-brand-border-subtle text-sm text-brand-text-primary hover:border-brand-gold transition-colors cursor-pointer rounded-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-secondary pointer-events-none" />
              </div>
            </div>

            {/* Active Filters */}
            {hasFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {currentCategory !== 'all' && (
                  <button
                    onClick={() => updateFilter('category', null)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-brand-bg-secondary border border-brand-border-subtle text-xs text-brand-text-secondary hover:border-brand-gold hover:text-brand-text-primary transition-colors rounded-sm"
                  >
                    {categories.find((c) => c.id === currentCategory)?.name}
                    <X className="w-3 h-3" />
                  </button>
                )}
                {currentPrice && (
                  <button
                    onClick={() => updateFilter('price', null)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-brand-bg-secondary border border-brand-border-subtle text-xs text-brand-text-secondary hover:border-brand-gold hover:text-brand-text-primary transition-colors rounded-sm"
                  >
                    {currentPrice}
                    <X className="w-3 h-3" />
                  </button>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs text-brand-gold hover:text-brand-gold-hover transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-brand-text-secondary mb-4">
                  No products match your filters
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
      <div
        className={cn(
          'fixed inset-0 z-[70] transition-opacity duration-300 lg:hidden',
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-brand-bg-secondary transform transition-transform duration-300',
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-brand-border-subtle">
            <h2 className="font-medium">Filters</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 text-brand-text-secondary hover:text-brand-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto h-[calc(100%-64px)]">
            <FilterContent />
            <Button
              fullWidth
              className="mt-8"
              onClick={() => setIsFilterOpen(false)}
            >
              View {filteredProducts.length} Results
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
