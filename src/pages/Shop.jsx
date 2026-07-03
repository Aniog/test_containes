import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  // Get filter values from URL
  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const collectionFilter = searchParams.get('collection') || 'all';

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      // Category filter
      if (categoryFilter !== 'all' && product.category !== categoryFilter) {
        return false;
      }
      // Price filter
      if (priceFilter !== 'all') {
        const [min, max] = priceFilter.split('-').map(Number);
        if (max && (product.price < min || product.price > max)) {
          return false;
        }
        if (!max && product.price < min) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        case 'bestselling':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    setSearchParams(params);
  };

  const handlePriceChange = (price) => {
    const params = new URLSearchParams(searchParams);
    if (price === 'all') {
      params.delete('price');
    } else {
      params.set('price', price);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const hasActiveFilters = categoryFilter !== 'all' || priceFilter !== 'all' || collectionFilter !== 'all';

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-24 pb-16">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#3D3833] mb-4">
            Shop Our Collection
          </h1>
          <p className="text-[#9A8E82] max-w-lg mx-auto">
            Discover our curated selection of demi-fine gold jewelry, 
            designed for everyday elegance.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-4 mb-8 border-y border-[#E8E2D9]">
          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center gap-2 text-sm font-sans text-[#3D3833]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Results Count */}
          <p className="text-sm text-[#9A8E82]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-[#3D3833] pr-6 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="bestselling">Bestselling</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A8E82] pointer-events-none" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#3D3833] mb-4 uppercase tracking-wider">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      categoryFilter === 'all'
                        ? 'text-[#C9A66B] font-medium'
                        : 'text-[#9A8E82] hover:text-[#3D3833]'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors capitalize ${
                        categoryFilter === cat.id
                          ? 'text-[#C9A66B] font-medium'
                          : 'text-[#9A8E82] hover:text-[#3D3833]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#3D3833] mb-4 uppercase tracking-wider">
                  Price
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-40', label: 'Under $40' },
                    { value: '40-60', label: '$40 - $60' },
                    { value: '60-100', label: '$60 - $100' },
                    { value: '100-', label: '$100+' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => handlePriceChange(option.value)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        priceFilter === option.value
                          ? 'text-[#C9A66B] font-medium'
                          : 'text-[#9A8E82] hover:text-[#3D3833]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#9A8E82] hover:text-[#C9A66B] transition-colors underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-[#3D3833] mb-4">
                  No products found
                </p>
                <p className="text-[#9A8E82] mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-[#2A2520]/40"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-[#FAF7F2] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[#E8E2D9]">
              <h2 className="font-serif text-xl text-[#3D3833]">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-[#9A8E82] hover:text-[#3D3833]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#3D3833] mb-4 uppercase tracking-wider">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      categoryFilter === 'all'
                        ? 'text-[#C9A66B] font-medium'
                        : 'text-[#9A8E82] hover:text-[#3D3833]'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors capitalize ${
                        categoryFilter === cat.id
                          ? 'text-[#C9A66B] font-medium'
                          : 'text-[#9A8E82] hover:text-[#3D3833]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#3D3833] mb-4 uppercase tracking-wider">
                  Price
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-40', label: 'Under $40' },
                    { value: '40-60', label: '$40 - $60' },
                    { value: '60-100', label: '$60 - $100' },
                    { value: '100-', label: '$100+' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => handlePriceChange(option.value)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        priceFilter === option.value
                          ? 'text-[#C9A66B] font-medium'
                          : 'text-[#9A8E82] hover:text-[#3D3833]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#9A8E82] hover:text-[#C9A66B] transition-colors underline"
                >
                  Clear all filters
                </button>
              )}
            </div>

            <div className="p-6 border-t border-[#E8E2D9]">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="btn-gold w-full"
              >
                View {filteredProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
