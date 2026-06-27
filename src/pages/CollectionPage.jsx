import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (priceRange === 'under50') {
      filtered = filtered.filter(p => p.price < 50);
    } else if (priceRange === '50to75') {
      filtered = filtered.filter(p => p.price >= 50 && p.price <= 75);
    } else if (priceRange === 'over75') {
      filtered = filtered.filter(p => p.price > 75);
    }

    // Sort
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-serif mb-2">Shop All</h1>
          <p className="text-velmora-500 text-sm">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter button */}
          <button
            className="md:hidden flex items-center gap-2 text-sm tracking-widest uppercase mb-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          {/* Sidebar filters */}
          <aside
            className={`md:w-64 flex-shrink-0 ${
              showFilters ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6 md:hidden">
                <h3 className="text-sm tracking-widest uppercase">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <h4 className="text-xs tracking-widest uppercase mb-4">Category</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedCategory === 'all' ? 'text-charcoal font-medium' : 'text-velmora-500 hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        selectedCategory === cat.id ? 'text-charcoal font-medium' : 'text-velmora-500 hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedCategory('sets')}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedCategory === 'sets' ? 'text-charcoal font-medium' : 'text-velmora-500 hover:text-charcoal'
                    }`}
                  >
                    Gift Sets
                  </button>
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h4 className="text-xs tracking-widest uppercase mb-4">Price</h4>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 - $75' },
                    { value: 'over75', label: 'Over $75' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        priceRange === option.value ? 'text-charcoal font-medium' : 'text-velmora-500 hover:text-charcoal'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h4 className="text-xs tracking-widest uppercase mb-4">Material</h4>
                <div className="space-y-2">
                  <button className="block w-full text-left text-sm py-1 text-charcoal font-medium">
                    18K Gold Plated
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort dropdown */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-300 px-4 py-2 pr-10 text-sm focus:outline-none focus:border-charcoal cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-500 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-lg mb-2">No pieces found</p>
                <p className="text-velmora-500 text-sm">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
