import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
    { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
    { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
    { id: 'over-100', label: 'Over $100', min: 100, max: Infinity }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    const range = priceRanges.find(r => r.id === priceRange);
    if (range) {
      result = result.filter(p => p.price >= range.min && p.price < range.max);
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
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-medium mb-4">Category</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'all'}
              onChange={() => handleCategoryChange('all')}
              className="w-4 h-4 accent-[var(--color-accent)]"
            />
            <span className="text-sm">All Jewelry</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => handleCategoryChange(cat.id)}
                className="w-4 h-4 accent-[var(--color-accent)]"
              />
              <span className="text-sm capitalize">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-medium mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={priceRange === range.id}
                onChange={() => setPriceRange(range.id)}
                className="w-4 h-4 accent-[var(--color-accent)]"
              />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-[var(--color-accent)] hover:underline"
        >
          Clear all filters
        </button>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-[var(--color-secondary)] pt-[72px]">
      <div className="container-main py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-serif text-4xl md:text-5xl">
            {selectedCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-4 text-[var(--color-muted)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-[var(--color-border)]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
              )}
            </button>
          </div>

          {/* Mobile Filter Overlay */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div 
                className="absolute inset-0 bg-black/40"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="absolute right-0 top-0 h-full w-[300px] bg-[var(--color-secondary)] p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="heading-serif text-xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full btn-primary mt-8"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 border border-[var(--color-border)] bg-white text-sm focus:outline-none focus:border-[var(--color-accent)] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[var(--color-muted)] mb-4">No products found</p>
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