import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: '',
    priceRange: ''
  });

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({ ...prev, category }));
    }
  }, [searchParams]);

  const categories = [
    { id: '', label: 'All' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Gift Sets' }
  ];

  const materials = [
    { id: '', label: 'All Materials' },
    { id: '18K Gold Plated', label: '18K Gold Plated' },
    { id: 'Sterling Silver', label: 'Sterling Silver' }
  ];

  const priceRanges = [
    { id: '', label: 'All Prices' },
    { id: 'under-50', label: 'Under $50' },
    { id: '50-100', label: '$50 - $100' },
    { id: 'over-100', label: 'Over $100' }
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest' }
  ];

  // Filter products
  let filteredProducts = [...products];

  if (filters.category) {
    filteredProducts = filteredProducts.filter(p => p.category === filters.category);
  }
  if (filters.material) {
    filteredProducts = filteredProducts.filter(p => p.material === filters.material);
  }
  if (filters.priceRange) {
    filteredProducts = filteredProducts.filter(p => {
      if (filters.priceRange === 'under-50') return p.price < 50;
      if (filters.priceRange === '50-100') return p.price >= 50 && p.price <= 100;
      if (filters.priceRange === 'over-100') return p.price > 100;
      return true;
    });
  }

  // Sort products
  filteredProducts.sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return b.id - a.id;
    return 0;
  });

  const handleCategoryChange = (categoryId) => {
    const newParams = new URLSearchParams(searchParams);
    if (categoryId) {
      newParams.set('category', categoryId);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
    setFilters(prev => ({ ...prev, category: categoryId }));
  };

  const clearFilters = () => {
    setSearchParams({});
    setFilters({ category: '', material: '', priceRange: '' });
  };

  const hasActiveFilters = filters.category || filters.material || filters.priceRange;

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Header */}
      <div className="container-wide py-8 md:py-12 border-b border-border">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
          {filters.category ? categories.find(c => c.id === filters.category)?.label : 'Shop All'}
        </h1>
        <p className="text-warm-gray">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="container-wide py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left py-1 text-sm transition-colors ${
                        filters.category === cat.id
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setFilters(prev => ({ ...prev, material: mat.id }))}
                      className={`block w-full text-left py-1 text-sm transition-colors ${
                        filters.material === mat.id
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setFilters(prev => ({ ...prev, priceRange: range.id }))}
                      className={`block w-full text-left py-1 text-sm transition-colors ${
                        filters.priceRange === range.id
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
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
                  className="text-sm text-warm-gray hover:text-gold transition-colors underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2 text-sm text-charcoal"
            >
              <SlidersHorizontal size={18} />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </button>

            {/* Mobile Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-6 text-sm text-charcoal focus:outline-none cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 py-2 text-sm text-warm-gray focus:outline-none cursor-pointer border-b border-border"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      Sort by: {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-warm-gray mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-secondary">
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
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-cream p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="btn-icon"
              >
                <X size={24} />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xs font-medium tracking-wider uppercase text-charcoal mb-4">
                Category
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      filters.category === cat.id
                        ? 'text-gold font-medium'
                        : 'text-warm-gray'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h3 className="text-xs font-medium tracking-wider uppercase text-charcoal mb-4">
                Material
              </h3>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setFilters(prev => ({ ...prev, material: mat.id }))}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      filters.material === mat.id
                        ? 'text-gold font-medium'
                        : 'text-warm-gray'
                    }`}
                  >
                    {mat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs font-medium tracking-wider uppercase text-charcoal mb-4">
                Price
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setFilters(prev => ({ ...prev, priceRange: range.id }))}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      filters.priceRange === range.id
                        ? 'text-gold font-medium'
                        : 'text-warm-gray'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={clearFilters}
                className="flex-1 btn-secondary"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 btn-primary"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
