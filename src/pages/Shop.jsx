import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

const Shop = () => {
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
    { id: 'over-75', label: 'Over $75', min: 75, max: Infinity }
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest' }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const range = priceRanges.find(r => r.id === priceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
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
      case 'newest':
        result.reverse();
        break;
      default:
        // featured - keep original order
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
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-ivory py-12">
        <div className="container-main">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal text-center">
            Shop All
          </h1>
          <p className="font-sans text-warm-gray text-center mt-2">
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>
      </div>

      <div className="container-main py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center gap-2 font-sans text-sm text-charcoal"
          >
            <SlidersHorizontal size={18} />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-gold rounded-full" />
            )}
          </button>

          {/* Sidebar Filters */}
          <aside
            className={`lg:w-64 flex-shrink-0 ${
              isFilterOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="lg:sticky lg:top-28">
              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 font-sans text-sm text-warm-gray hover:text-gold mb-6"
                >
                  <X size={14} />
                  Clear all filters
                </button>
              )}

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-charcoal mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block font-sans text-sm text-left w-full py-1 transition-colors ${
                      selectedCategory === 'all'
                        ? 'text-gold font-medium'
                        : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block font-sans text-sm text-left w-full py-1 transition-colors capitalize ${
                        selectedCategory === category.id
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`block font-sans text-sm text-left w-full py-1 transition-colors ${
                        priceRange === range.id
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="font-sans text-sm text-warm-gray">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-border rounded-sm px-4 py-2 pr-8 font-sans text-sm text-charcoal focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  strokeWidth={1.5}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none"
                />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal mb-2">
                  No products found
                </p>
                <p className="font-sans text-warm-gray mb-4">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;