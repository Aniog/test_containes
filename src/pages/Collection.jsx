import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function Collection() {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial);
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const activeFilters = [selectedCategory, selectedMaterial, priceRange].filter(f => f !== 'all').length;

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-charcoal-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-charcoal-400 mb-6">
            <Link to="/" className="hover:text-charcoal-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal-700">Shop</span>
          </nav>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 tracking-wide">
            All Jewelry
          </h1>
          <p className="text-sm text-charcoal-500 mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs tracking-widest uppercase text-charcoal-900 mb-4">Filters</h3>

              {/* Category */}
              <div className="mb-6">
                <p className="text-sm font-medium text-charcoal-700 mb-3">Category</p>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`text-sm ${selectedCategory === 'all' ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'} transition-colors`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-sm capitalize ${selectedCategory === cat.id ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'} transition-colors`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div className="mb-6">
                <p className="text-sm font-medium text-charcoal-700 mb-3">Material</p>
                <ul className="space-y-2">
                  {['all', 'gold', 'silver'].map(m => (
                    <li key={m}>
                      <button
                        onClick={() => setSelectedMaterial(m)}
                        className={`text-sm capitalize ${selectedMaterial === m ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'} transition-colors`}
                      >
                        {m === 'all' ? 'All' : `${m} tone`}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <p className="text-sm font-medium text-charcoal-700 mb-3">Price</p>
                <ul className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-', label: 'Over $100' },
                  ].map(range => (
                    <li key={range.value}>
                      <button
                        onClick={() => setPriceRange(range.value)}
                        className={`text-sm ${priceRange === range.value ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'} transition-colors`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm text-charcoal-700"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilters > 0 && (
                <span className="w-5 h-5 bg-charcoal-900 text-velmora-50 text-xs rounded-full flex items-center justify-center">
                  {activeFilters}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-velmora-50 animate-fade-in">
              <div className="flex items-center justify-between px-6 py-4 border-b border-charcoal-200">
                <h3 className="font-serif text-xl text-charcoal-900">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} aria-label="Close filters">
                  <X className="w-5 h-5 text-charcoal-700" />
                </button>
              </div>
              <div className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-60px)]">
                {/* Category */}
                <div>
                  <p className="text-sm font-medium text-charcoal-700 mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-4 py-2 text-xs tracking-wider uppercase border ${selectedCategory === 'all' ? 'border-charcoal-900 bg-charcoal-900 text-velmora-50' : 'border-charcoal-300 text-charcoal-600'}`}
                    >
                      All
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 text-xs tracking-wider uppercase border capitalize ${selectedCategory === cat.id ? 'border-charcoal-900 bg-charcoal-900 text-velmora-50' : 'border-charcoal-300 text-charcoal-600'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div>
                  <p className="text-sm font-medium text-charcoal-700 mb-3">Material</p>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'gold', 'silver'].map(m => (
                      <button
                        key={m}
                        onClick={() => setSelectedMaterial(m)}
                        className={`px-4 py-2 text-xs tracking-wider uppercase border capitalize ${selectedMaterial === m ? 'border-charcoal-900 bg-charcoal-900 text-velmora-50' : 'border-charcoal-300 text-charcoal-600'}`}
                      >
                        {m === 'all' ? 'All' : `${m} tone`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <p className="text-sm font-medium text-charcoal-700 mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: '0-50', label: 'Under $50' },
                      { value: '50-100', label: '$50 - $100' },
                      { value: '100-', label: 'Over $100' },
                    ].map(range => (
                      <button
                        key={range.value}
                        onClick={() => setPriceRange(range.value)}
                        className={`px-4 py-2 text-xs tracking-wider uppercase border ${priceRange === range.value ? 'border-charcoal-900 bg-charcoal-900 text-velmora-50' : 'border-charcoal-300 text-charcoal-600'}`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full btn-primary mt-4"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-charcoal-500 hidden sm:block">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative ml-auto sm:ml-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-charcoal-700 pr-8 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
                <ChevronDown className="w-4 h-4 text-charcoal-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal-600 mb-2">No pieces found</p>
                <p className="text-sm text-charcoal-400">Try adjusting your filters</p>
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
    </main>
  );
}
