import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';

export default function Shop() {
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
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-sm uppercase tracking-wider text-velmora-black mb-4">
          Category
        </h3>
        <div className="space-y-3">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`
              block text-left text-sm transition-colors
              ${selectedCategory === 'all'
                ? 'text-velmora-gold font-medium'
                : 'text-velmora-gray hover:text-velmora-black'
              }
            `}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`
                block text-left text-sm transition-colors capitalize
                ${selectedCategory === cat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-gray hover:text-velmora-black'
                }
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm uppercase tracking-wider text-velmora-black mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setPriceRange(range.id)}
              className={`
                block text-left text-sm transition-colors
                ${priceRange === range.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-gray hover:text-velmora-black'
                }
              `}
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
          className="text-sm text-velmora-gold hover:text-velmora-gold-hover transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-velmora-light py-12">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-black text-center">
            Shop All
          </h1>
          <p className="mt-4 text-velmora-gray text-center max-w-md mx-auto">
            Discover our complete collection of premium demi-fine jewelry.
          </p>
        </div>
      </div>

      <div className="container py-section-mobile lg:py-section">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm uppercase tracking-wider text-velmora-black"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-velmora-gold rounded-full" />
              )}
            </button>
          </div>

          {/* Mobile Filter Overlay */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-velmora-black/30"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-80 max-w-full bg-velmora-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl text-velmora-black">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 text-velmora-gray"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
                <div className="mt-8">
                  <Button
                    size="full"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Results Count */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-border">
              <p className="text-sm text-velmora-gray">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 pl-0 py-1 text-sm text-velmora-black border-none focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-gray pointer-events-none" />
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
                <p className="text-velmora-gray mb-4">
                  No products found matching your criteria.
                </p>
                <Button variant="secondary" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}