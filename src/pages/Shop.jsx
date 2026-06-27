import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: searchParams.get('material') || '',
    priceRange: searchParams.get('price') || ''
  });
  
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Category filter
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }
    
    // Material filter
    if (filters.material) {
      result = result.filter(p => p.material === filters.material);
    }
    
    // Price filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
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
        result.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    return result;
  }, [filters, sortBy]);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Update URL params
    const params = new URLSearchParams();
    if (newFilters.category) params.set('category', newFilters.category);
    if (newFilters.material) params.set('material', newFilters.material);
    if (newFilters.priceRange) params.set('price', newFilters.priceRange);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({ category: '', material: '', priceRange: '' });
    setSearchParams({});
  };

  const hasActiveFilters = filters.category || filters.material || filters.priceRange;

  const filterOptions = {
    category: [
      { value: '', label: 'All Categories' },
      { value: 'earrings', label: 'Earrings' },
      { value: 'necklaces', label: 'Necklaces' },
      { value: 'huggies', label: 'Huggies' },
      { value: 'sets', label: 'Gift Sets' }
    ],
    material: [
      { value: '', label: 'All Materials' },
      { value: 'gold', label: 'Gold' },
      { value: 'silver', label: 'Silver' }
    ],
    priceRange: [
      { value: '', label: 'All Prices' },
      { value: '0-50', label: 'Under $50' },
      { value: '50-75', label: '$50 - $75' },
      { value: '75-100', label: '$75 - $100' },
      { value: '100-', label: 'Over $100' }
    ]
  };

  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center py-12">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wider mb-4">
            Shop All
          </h1>
          <p className="text-velmora-text-muted max-w-md mx-auto">
            Explore our complete collection of demi-fine gold jewelry, crafted for the modern woman.
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b" style={{ borderColor: 'var(--color-velmora-border)' }}>
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm tracking-wider hover:opacity-70"
          >
            <Filter className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-velmora-gold)' }} />
            )}
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-velmora-text-muted hidden sm:inline">
              {filteredProducts.length} products
            </span>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-6 py-2 text-sm tracking-wider focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-velmora-text-muted">Active filters:</span>
            {filters.category && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-velmora-cream-dark rounded-full">
                {categories.find(c => c.id === filters.category)?.name || filters.category}
                <button onClick={() => handleFilterChange('category', '')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.material && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-velmora-cream-dark rounded-full capitalize">
                {filters.material}
                <button onClick={() => handleFilterChange('material', '')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.priceRange && (
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-velmora-cream-dark rounded-full">
                {filterOptions.priceRange.find(p => p.value === filters.priceRange)?.label}
                <button onClick={() => handleFilterChange('priceRange', '')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button 
              onClick={clearFilters}
              className="text-xs underline hover:opacity-70"
              style={{ color: 'var(--color-velmora-gold)' }}
            >
              Clear all
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-velmora-text-muted mb-4">No products found matching your criteria.</p>
            <button 
              onClick={clearFilters}
              className="text-sm underline"
              style={{ color: 'var(--color-velmora-gold)' }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-full max-w-sm z-50 bg-velmora-cream shadow-xl animate-slide-down">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-velmora-border)' }}>
                <h2 className="font-serif text-xl tracking-wider">Filters</h2>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:opacity-70 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm tracking-wider mb-3">Category</h3>
                  <div className="space-y-2">
                    {filterOptions.category.map((option) => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={filters.category === option.value}
                          onChange={() => handleFilterChange('category', option.value)}
                          className="w-4 h-4"
                          style={{ accentColor: 'var(--color-velmora-gold)' }}
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div>
                  <h3 className="text-sm tracking-wider mb-3">Material</h3>
                  <div className="space-y-2">
                    {filterOptions.material.map((option) => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="material"
                          checked={filters.material === option.value}
                          onChange={() => handleFilterChange('material', option.value)}
                          className="w-4 h-4"
                          style={{ accentColor: 'var(--color-velmora-gold)' }}
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="text-sm tracking-wider mb-3">Price</h3>
                  <div className="space-y-2">
                    {filterOptions.priceRange.map((option) => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="priceRange"
                          checked={filters.priceRange === option.value}
                          onChange={() => handleFilterChange('priceRange', option.value)}
                          className="w-4 h-4"
                          style={{ accentColor: 'var(--color-velmora-gold)' }}
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t flex gap-3" style={{ borderColor: 'var(--color-velmora-border)' }}>
                <button 
                  onClick={clearFilters}
                  className="flex-1 py-3 text-sm tracking-wider border"
                  style={{ borderColor: 'var(--color-velmora-border)' }}
                >
                  Clear
                </button>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 py-3 text-sm tracking-wider text-white"
                  style={{ backgroundColor: 'var(--color-velmora-gold)' }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}