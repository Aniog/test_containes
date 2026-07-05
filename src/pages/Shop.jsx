import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $100', min: 60, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Selling', value: 'best-selling' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Get filter state from URL
  const selectedCategory = searchParams.get('category') || '';
  const selectedPriceRange = searchParams.get('price') || '';
  const selectedSort = searchParams.get('sort') || 'newest';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price range filter
    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.label === selectedPriceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (selectedSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'best-selling':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Newest - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedSort]);

  // Update URL params
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

  const hasActiveFilters = selectedCategory || selectedPriceRange;

  return (
    <div className="min-h-screen bg-sand pt-20 md:pt-24">
      {/* Header */}
      <div className="container py-12 md:py-16">
        <div className="text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-4">
            Shop All Jewelry
          </h1>
          <p className="text-stone max-w-xl mx-auto">
            Discover our complete collection of premium demi-fine jewelry, crafted to be treasured.
          </p>
        </div>
      </div>

      {/* Filters & Products */}
      <div className="container pb-16">
        {/* Filter Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-linen">
          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-charcoal hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm">Filters</span>
          </button>

          {/* Active Filters (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-sm text-stone">Filter:</span>
            
            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'category' ? null : 'category')}
                className={`flex items-center gap-2 px-4 py-2 text-sm border transition-colors ${
                  selectedCategory ? 'border-gold text-gold' : 'border-linen text-charcoal hover:border-gold'
                }`}
              >
                <span>{selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'Category'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'category' && (
                <div className="absolute top-full left-0 mt-2 bg-cream border border-linen shadow-lg z-20 min-w-[160px]">
                  <button
                    onClick={() => { updateFilter('category', ''); setOpenDropdown(null); }}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-ivory transition-colors"
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { updateFilter('category', cat.id); setOpenDropdown(null); }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-ivory transition-colors"
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'price' ? null : 'price')}
                className={`flex items-center gap-2 px-4 py-2 text-sm border transition-colors ${
                  selectedPriceRange ? 'border-gold text-gold' : 'border-linen text-charcoal hover:border-gold'
                }`}
              >
                <span>{selectedPriceRange || 'Price'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'price' && (
                <div className="absolute top-full left-0 mt-2 bg-cream border border-linen shadow-lg z-20 min-w-[140px]">
                  <button
                    onClick={() => { updateFilter('price', ''); setOpenDropdown(null); }}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-ivory transition-colors"
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => { updateFilter('price', range.label); setOpenDropdown(null); }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-ivory transition-colors"
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-stone hover:text-gold transition-colors underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Results Count & Sort */}
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-sm text-stone hidden sm:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="appearance-none bg-transparent px-4 py-2 pr-8 text-sm border border-linen text-charcoal hover:border-gold focus:border-gold focus:outline-none cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-stone mb-4">No products match your filters.</p>
            <button
              onClick={clearFilters}
              className="text-gold hover:text-gold-dark transition-colors underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-espresso/40 z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-cream z-50 lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-linen">
              <h2 className="font-serif text-xl text-espresso">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-charcoal hover:text-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-medium text-espresso mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={!selectedCategory}
                      onChange={() => updateFilter('category', '')}
                      className="w-4 h-4 accent-gold"
                    />
                    <span className="text-charcoal">All Categories</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-charcoal">{cat.name} ({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-medium text-espresso mb-4">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={!selectedPriceRange}
                      onChange={() => updateFilter('price', '')}
                      className="w-4 h-4 accent-gold"
                    />
                    <span className="text-charcoal">All Prices</span>
                  </label>
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === range.label}
                        onChange={() => updateFilter('price', range.label)}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-charcoal">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 p-6 bg-cream border-t border-linen flex gap-3">
              <button
                onClick={() => { clearFilters(); setIsFilterOpen(false); }}
                className="flex-1 py-3 border border-linen text-charcoal text-sm font-medium hover:border-gold transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 py-3 bg-gold text-white text-sm font-medium hover:bg-gold-light transition-colors"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}

      {/* Close dropdown on outside click */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </div>
  );
}
