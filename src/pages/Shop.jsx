import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', label: 'Under $50', min: 0, max: 50 },
    { id: '50to75', label: '$50 - $75', min: 50, max: 75 },
    { id: 'over75', label: 'Over $75', min: 75, max: Infinity }
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest' }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by price
    if (activePriceRange !== 'all') {
      const range = priceRanges.find(r => r.id === activePriceRange);
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
      default:
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, activeSort]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all';

  return (
    <div className="pt-20 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-2">
            Shop All
          </h1>
          <p className="font-sans text-velmora-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              variant="secondary"
              onClick={() => setIsFilterOpen(true)}
              className="w-full flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-velmora-gold rounded-full" />
              )}
            </Button>
          </div>

          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                      activeCategory === 'all'
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-muted hover:text-velmora-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                        activeCategory === cat.id
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted hover:text-velmora-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => updateFilter('price', range.id)}
                      className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                        activePriceRange === range.id
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted hover:text-velmora-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-sans text-sm text-velmora-muted">
                {filteredProducts.length} results
              </span>
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent border-none font-sans text-sm text-velmora-charcoal pr-6 py-1 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-muted pointer-events-none" />
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
                <p className="font-sans text-velmora-muted mb-4">
                  No products found matching your criteria.
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
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-velmora-cream shadow-xl animate-slide-in-right">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl text-velmora-charcoal">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-velmora-sand transition-colors"
                >
                  <X className="w-5 h-5 text-velmora-charcoal" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      updateFilter('category', 'all');
                    }}
                    className={`block w-full text-left font-sans text-sm py-2 transition-colors ${
                      activeCategory === 'all'
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-muted'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block w-full text-left font-sans text-sm py-2 transition-colors ${
                        activeCategory === cat.id
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => updateFilter('price', range.id)}
                      className={`block w-full text-left font-sans text-sm py-2 transition-colors ${
                        activePriceRange === range.id
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button
                  size="full"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </Button>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="full"
                    onClick={() => {
                      clearFilters();
                      setIsFilterOpen(false);
                    }}
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;