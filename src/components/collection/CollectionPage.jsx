import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const categoryFilter = searchParams.get('category') || '';
  const priceFilter = searchParams.get('price') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Filter by price
    if (priceFilter) {
      switch (priceFilter) {
        case 'under-50':
          result = result.filter(p => p.price < 50);
          break;
        case '50-75':
          result = result.filter(p => p.price >= 50 && p.price <= 75);
          break;
        case 'over-75':
          result = result.filter(p => p.price > 75);
          break;
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(result);
  }, [categoryFilter, priceFilter, sortBy]);

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

  const hasActiveFilters = categoryFilter || priceFilter;

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="relative bg-velvet-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-sans font-semibold tracking-ultra-wide text-champagne uppercase mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-obsidian mb-4">
            Shop All Jewelry
          </h1>
          <p className="text-velvet-600 font-sans max-w-xl mx-auto">
            Discover our complete collection of demi-fine gold jewelry, crafted for everyday elegance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-serif text-lg font-semibold text-obsidian mb-6">
                Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-xs font-sans font-semibold tracking-ultra-wide text-velvet-600 uppercase mb-4">
                  Category
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={!categoryFilter}
                      onChange={() => updateFilter('category', '')}
                      className="w-4 h-4 accent-champagne"
                    />
                    <span className="text-sm text-velvet-700 group-hover:text-obsidian transition-colors">
                      All Products
                    </span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="w-4 h-4 accent-champagne"
                      />
                      <span className="text-sm text-velvet-700 group-hover:text-obsidian transition-colors capitalize">
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-xs font-sans font-semibold tracking-ultra-wide text-velvet-600 uppercase mb-4">
                  Price
                </h4>
                <div className="space-y-3">
                  {[
                    { value: '', label: 'All Prices' },
                    { value: 'under-50', label: 'Under $50' },
                    { value: '50-75', label: '$50 - $75' },
                    { value: 'over-75', label: 'Over $75' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={priceFilter === option.value}
                        onChange={() => updateFilter('price', option.value)}
                        className="w-4 h-4 accent-champagne"
                      />
                      <span className="text-sm text-velvet-700 group-hover:text-obsidian transition-colors">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-velvet-600 hover:text-champagne underline transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm font-sans text-velvet-700 hover:text-obsidian transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-champagne text-obsidian text-xs rounded-full flex items-center justify-center">
                 !
                </span>
              )}
            </button>

            {/* Mobile Sort */}
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 text-sm font-sans text-velvet-700"
              >
                Sort: <span className="font-medium">{sortOptions.find(o => o.value === sortBy)?.label}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-cream shadow-lg rounded border border-velvet-200 py-2 min-w-[180px] z-20">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateFilter('sort', option.value);
                        setIsSortOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm ${
                        sortBy === option.value ? 'text-champagne font-medium' : 'text-velvet-700 hover:bg-velvet-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count & Sort (Desktop) */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-velvet-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 text-sm font-sans text-velvet-700"
                >
                  Sort: <span className="font-medium">{sortOptions.find(o => o.value === sortBy)?.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-cream shadow-lg rounded border border-velvet-200 py-2 min-w-[180px] z-20">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          updateFilter('sort', option.value);
                          setIsSortOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm ${
                          sortBy === option.value ? 'text-champagne font-medium' : 'text-velvet-700 hover:bg-velvet-50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Active Filters (Mobile) */}
            {hasActiveFilters && (
              <div className="lg:hidden flex flex-wrap gap-2 mb-4">
                {categoryFilter && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-velvet-100 rounded-full text-xs font-sans">
                    {categories.find(c => c.id === categoryFilter)?.name}
                    <button onClick={() => updateFilter('category', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {priceFilter && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-velvet-100 rounded-full text-xs font-sans">
                    {priceFilter.replace('-', ' ')}
                    <button onClick={() => updateFilter('price', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velvet-600 mb-4">
                  No products found
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-champagne hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-obsidian/40 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 bg-cream z-50 lg:hidden shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-xs font-sans font-semibold tracking-ultra-wide text-velvet-600 uppercase mb-4">
                  Category
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={!categoryFilter}
                      onChange={() => updateFilter('category', '')}
                      className="w-4 h-4 accent-champagne"
                    />
                    <span className="text-sm text-velvet-700">All Products</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={categoryFilter === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="w-4 h-4 accent-champagne"
                      />
                      <span className="text-sm text-velvet-700 capitalize">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-xs font-sans font-semibold tracking-ultra-wide text-velvet-600 uppercase mb-4">
                  Price
                </h4>
                <div className="space-y-3">
                  {[
                    { value: '', label: 'All Prices' },
                    { value: 'under-50', label: 'Under $50' },
                    { value: '50-75', label: '$50 - $75' },
                    { value: 'over-75', label: 'Over $75' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={priceFilter === option.value}
                        onChange={() => updateFilter('price', option.value)}
                        className="w-4 h-4 accent-champagne"
                      />
                      <span className="text-sm text-velvet-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-velvet-200 sticky bottom-0 bg-cream">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full btn-accent"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
