import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const ranges = {
        'under-50': [0, 50],
        '50-75': [50, 75],
        '75-100': [75, 100],
        'over-100': [100, Infinity],
      };
      const [min, max] = ranges[priceRange];
      result = result.filter((p) => p.price >= min && p.price < max);
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
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <main className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">Shop All</h1>
          <p className="mt-4 text-velmora-taupe">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-velmora-sand"
          >
            <SlidersHorizontal size={18} />
            <span>Filters</span>
          </button>

          {/* Sidebar Filters */}
          <aside
            className={`lg:w-64 flex-shrink-0 ${
              isFilterOpen
                ? 'fixed inset-0 z-50 bg-velmora-cream p-6 lg:relative lg:p-0 lg:bg-transparent'
                : 'hidden lg:block'
            }`}
          >
            {isFilterOpen && (
              <div className="flex items-center justify-between mb-8 lg:hidden">
                <h2 className="font-serif text-2xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={24} />
                </button>
              </div>
            )}

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-left w-full py-2 transition-colors ${
                    selectedCategory === 'all'
                      ? 'text-velmora-gold font-medium'
                      : 'text-velmora-taupe hover:text-velmora-charcoal'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-left w-full py-2 capitalize transition-colors ${
                      selectedCategory === cat.id
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-taupe hover:text-velmora-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under-50', label: 'Under $50' },
                  { value: '50-75', label: '$50 - $75' },
                  { value: '75-100', label: '$75 - $100' },
                  { value: 'over-100', label: 'Over $100' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setPriceRange(option.value)}
                    className={`block text-left w-full py-2 transition-colors ${
                      priceRange === option.value
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-taupe hover:text-velmora-charcoal'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-taupe hover:text-velmora-gold underline"
              >
                Clear all filters
              </button>
            )}

            {isFilterOpen && (
              <div className="mt-8 lg:hidden">
                <Button onClick={() => setIsFilterOpen(false)} variant="primary" size="full">
                  Apply Filters
                </Button>
              </div>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-sand px-4 py-2 pr-10 text-sm focus:outline-none focus:border-velmora-charcoal"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-taupe"
                />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-taupe text-lg">No products found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-velmora-gold underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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