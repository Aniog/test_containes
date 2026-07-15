import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const activeCategory = searchParams.get('category') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const materials = ['all', 'gold', 'silver'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by material
    if (activeMaterial !== 'all') {
      result = result.filter(p => p.material === activeMaterial);
    }

    // Sort
    switch (activeSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For demo, just reverse
        result.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [activeCategory, activeMaterial, activeSort]);

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

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all';

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <p className="text-warmGray max-w-xl mx-auto">
            Discover our complete collection of premium demi-fine jewelry.
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm uppercase tracking-widest"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={activeSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent pr-6 text-sm uppercase tracking-widest focus:outline-none"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <div className="space-y-3">
                <button
                  onClick={() => updateFilter('category', 'all')}
                  className={`block text-sm ${
                    activeCategory === 'all' ? 'text-gold' : 'text-warmGray hover:text-charcoal'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={`block text-sm capitalize ${
                      activeCategory === cat.id ? 'text-gold' : 'text-warmGray hover:text-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Material</h3>
              <div className="space-y-3">
                {materials.map(mat => (
                  <button
                    key={mat}
                    onClick={() => updateFilter('material', mat)}
                    className={`block text-sm capitalize ${
                      activeMaterial === mat ? 'text-gold' : 'text-warmGray hover:text-charcoal'
                    }`}
                  >
                    {mat === 'all' ? 'All Materials' : mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-warmGray hover:text-gold underline"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-sm text-warmGray">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent pr-6 text-sm uppercase tracking-widest focus:outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-charcoal/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-cream p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-xl">Filters</span>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    updateFilter('category', 'all');
                    setIsFilterOpen(false);
                  }}
                  className={`block text-sm ${
                    activeCategory === 'all' ? 'text-gold' : 'text-warmGray'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      updateFilter('category', cat.id);
                      setIsFilterOpen(false);
                    }}
                    className={`block text-sm capitalize ${
                      activeCategory === cat.id ? 'text-gold' : 'text-warmGray'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Material</h3>
              <div className="space-y-3">
                {materials.map(mat => (
                  <button
                    key={mat}
                    onClick={() => {
                      updateFilter('material', mat);
                      setIsFilterOpen(false);
                    }}
                    className={`block text-sm capitalize ${
                      activeMaterial === mat ? 'text-gold' : 'text-warmGray'
                    }`}
                  >
                    {mat === 'all' ? 'All Materials' : mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={() => {
                  clearFilters();
                  setIsFilterOpen(false);
                }}
                className="w-full py-3 border border-charcoal text-charcoal text-sm uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}