import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { products, categories } from '../data/products';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by price
    if (activePriceRange !== 'all') {
      const [min, max] = activePriceRange.split('-').map(Number);
      result = result.filter((p) => {
        if (max) {
          return p.price >= min && p.price <= max;
        }
        return p.price >= min;
      });
    }

    // Filter by material
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'bestseller':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, activeMaterial, sortBy]);

  const handleFilterChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all' || activeMaterial !== 'all';

  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $75', value: '50-75' },
    { label: '$75+', value: '75-' },
  ];

  return (
    <main className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-cream py-12 md:py-16">
        <div className="container-wide">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center">
            {activeCategory === 'all' 
              ? 'The Collection' 
              : categories.find((c) => c.id === activeCategory)?.name || 'The Collection'}
          </h1>
          <p className="text-warm-gray text-center mt-4 max-w-xl mx-auto">
            {activeCategory === 'all'
              ? 'Discover our complete collection of demi-fine gold jewelry.'
              : categories.find((c) => c.id === activeCategory)?.description}
          </p>
        </div>
      </div>

      <div className="container-wide py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
          {/* Results count */}
          <p className="text-sm text-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 text-sm text-warm-gray hover:text-charcoal transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm text-warm-gray hover:text-charcoal transition-colors cursor-pointer pr-6 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="bestseller">Best Selling</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex items-center flex-wrap gap-2 mb-6">
            <span className="text-xs text-warm-gray">Active filters:</span>
            {activeCategory !== 'all' && (
              <button
                onClick={() => handleFilterChange('category', 'all')}
                className="px-3 py-1 bg-cream text-xs flex items-center gap-1 hover:bg-hairline transition-colors"
              >
                {categories.find((c) => c.id === activeCategory)?.name}
                <X size={12} />
              </button>
            )}
            {activePriceRange !== 'all' && (
              <button
                onClick={() => handleFilterChange('price', 'all')}
                className="px-3 py-1 bg-cream text-xs flex items-center gap-1 hover:bg-hairline transition-colors"
              >
                {priceRanges.find((p) => p.value === activePriceRange)?.label}
                <X size={12} />
              </button>
            )}
            <button
              onClick={clearAllFilters}
              className="text-xs text-gold hover:text-gold-dark transition-colors underline"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleFilterChange('category', 'all')}
                      className={`text-sm transition-colors ${
                        activeCategory === 'all' ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleFilterChange('category', cat.id)}
                        className={`text-sm transition-colors ${
                          activeCategory === cat.id ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleFilterChange('price', 'all')}
                      className={`text-sm transition-colors ${
                        activePriceRange === 'all' ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      All Prices
                    </button>
                  </li>
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => handleFilterChange('price', range.value)}
                        className={`text-sm transition-colors ${
                          activePriceRange === range.value ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal mb-4">
                  Material
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleFilterChange('material', 'all')}
                      className={`text-sm transition-colors ${
                        activeMaterial === 'all' ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      All Materials
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleFilterChange('material', 'gold')}
                      className={`text-sm transition-colors ${
                        activeMaterial === 'gold' ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      Gold
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleFilterChange('material', 'silver')}
                      className={`text-sm transition-colors ${
                        activeMaterial === 'silver' ? 'text-gold' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      Silver
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-warm-gray mb-4">No products found matching your filters.</p>
                <button onClick={clearAllFilters} className="btn-secondary">
                  Clear Filters
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

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal/50" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-ivory overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-hairline">
              <h2 className="font-serif text-lg">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} className="p-2">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => {
                        handleFilterChange('category', 'all');
                        setIsFilterOpen(false);
                      }}
                      className={`text-sm w-full text-left py-1 ${
                        activeCategory === 'all' ? 'text-gold' : 'text-warm-gray'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          handleFilterChange('category', cat.id);
                          setIsFilterOpen(false);
                        }}
                        className={`text-sm w-full text-left py-1 ${
                          activeCategory === cat.id ? 'text-gold' : 'text-warm-gray'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => {
                          handleFilterChange('price', range.value);
                          setIsFilterOpen(false);
                        }}
                        className={`text-sm w-full text-left py-1 ${
                          activePriceRange === range.value ? 'text-gold' : 'text-warm-gray'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button onClick={clearAllFilters} className="btn-secondary w-full">
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Collection;
