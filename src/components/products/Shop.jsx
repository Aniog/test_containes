import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: searchParams.get('price') || 'all',
    material: searchParams.get('material') || 'all',
    sort: 'featured',
  });

  const categories = [
    { id: 'all', name: 'All Jewelry' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Sets' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under50', name: 'Under $50' },
    { id: '50to75', name: '$50 - $75' },
    { id: 'over75', name: 'Over $75' },
  ];

  const materials = [
    { id: 'all', name: 'All Materials' },
    { id: '18K Gold Plated', name: '18K Gold Plated' },
    { id: 'Sterling Silver', name: 'Sterling Silver' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price filter
    if (filters.price !== 'all') {
      result = result.filter((p) => {
        if (filters.price === 'under50') return p.price < 50;
        if (filters.price === '50to75') return p.price >= 50 && p.price <= 75;
        if (filters.price === 'over75') return p.price > 75;
        return true;
      });
    }

    // Material filter
    if (filters.material !== 'all') {
      result = result.filter((p) => p.material === filters.material);
    }

    // Sort
    switch (filters.sort) {
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
  }, [filters]);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Update URL params
    const params = new URLSearchParams();
    if (newFilters.category !== 'all') params.set('category', newFilters.category);
    if (newFilters.price !== 'all') params.set('price', newFilters.price);
    if (newFilters.material !== 'all') params.set('material', newFilters.material);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      price: 'all',
      material: 'all',
      sort: 'featured',
    });
    setSearchParams({});
  };

  const hasActiveFilters = 
    filters.category !== 'all' || 
    filters.price !== 'all' || 
    filters.material !== 'all';

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h4 className="font-serif text-lg mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.id}
                onChange={() => handleFilterChange('category', cat.id)}
                className="w-4 h-4 accent-charcoal"
              />
              <span className="text-sm font-sans">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-serif text-lg mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={filters.price === range.id}
                onChange={() => handleFilterChange('price', range.id)}
                className="w-4 h-4 accent-charcoal"
              />
              <span className="text-sm font-sans">{range.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-serif text-lg mb-3">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={filters.material === mat.id}
                onChange={() => handleFilterChange('material', mat.id)}
                className="w-4 h-4 accent-charcoal"
              />
              <span className="text-sm font-sans">{mat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-velmora-taupe hover:text-charcoal underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-cream pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl">Shop All</h1>
          <p className="mt-3 text-velmora-taupe font-sans">
            {filteredProducts.length} pieces
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-velmora-sand"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-sans">Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-velmora-gold rounded-full" />
            )}
          </button>

          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-charcoal/50"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-80 bg-cream p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <select
                  value={filters.sort}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 border border-velmora-sand bg-cream text-sm font-sans cursor-pointer focus:outline-none focus:border-velmora-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
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
                <p className="font-serif text-xl mb-4">No products found</p>
                <p className="text-velmora-taupe mb-6">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}