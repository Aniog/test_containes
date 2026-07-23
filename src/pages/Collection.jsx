import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const categoryParam = searchParams.get('category') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState(sortParam);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setSortBy(sortParam);
  }, [sortParam]);

  const updateFilters = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedPriceRange !== 'all') {
        const [min, max] = selectedPriceRange.split('-').map(Number);
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
          return 0; // Would sort by date in real app
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: 'Under $50' },
    { value: '50-75', label: '$50 - $75' },
    { value: '75-100', label: '$75 - $100' },
    { value: '100-999', label: '$100+' },
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Page Header */}
      <div className="container-wide py-8 md:py-12 border-b border-light-gray">
        <h1
          className="text-3xl md:text-4xl text-charcoal text-center"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
        >
          {selectedCategory === 'all' ? 'All Jewelry' : 
            categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
        </h1>
        <p className="text-sm text-warm-gray text-center mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      {/* Filters & Products */}
      <div className="container-wide py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-ui text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        updateFilters('category', category.id);
                      }}
                      className={cn(
                        'block w-full text-left px-3 py-2 text-sm transition-colors',
                        selectedCategory === category.id
                          ? 'bg-gold/10 text-charcoal font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-ui text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => {
                        setSelectedPriceRange(range.value);
                        if (range.value === 'all') {
                          const newParams = new URLSearchParams(searchParams);
                          newParams.delete('price');
                          setSearchParams(newParams);
                        } else {
                          updateFilters('price', range.value);
                        }
                      }}
                      className={cn(
                        'block w-full text-left px-3 py-2 text-sm transition-colors',
                        selectedPriceRange === range.value
                          ? 'bg-gold/10 text-charcoal font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden flex items-center justify-center gap-2 w-full py-3 border border-light-gray text-xs font-medium uppercase tracking-ui text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  updateFilters('sort', e.target.value);
                }}
                className="text-sm text-charcoal bg-transparent border border-light-gray px-4 py-2 pr-8 appearance-none cursor-pointer focus:outline-none focus:border-gold"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B6560'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 8px center',
                  backgroundSize: '16px',
                }}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-warm-gray mb-4">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                    setSearchParams(new URLSearchParams());
                  }}
                  className="text-xs font-medium uppercase tracking-ui text-gold hover:text-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity',
          showFilters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-charcoal/50"
          onClick={() => setShowFilters(false)}
        />
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream overflow-y-auto transition-transform duration-300',
            showFilters ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-light-gray">
            <h2 className="text-lg font-serif text-charcoal">Filters</h2>
            <button
              onClick={() => setShowFilters(false)}
              className="p-2"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-ui text-charcoal mb-4">
                Category
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      updateFilters('category', category.id);
                      setShowFilters(false);
                    }}
                    className={cn(
                      'block w-full text-left px-3 py-2 text-sm transition-colors',
                      selectedCategory === category.id
                        ? 'bg-gold/10 text-charcoal font-medium'
                        : 'text-warm-gray hover:text-charcoal'
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-ui text-charcoal mb-4">
                Price
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => {
                      setSelectedPriceRange(range.value);
                      setShowFilters(false);
                    }}
                    className={cn(
                      'block w-full text-left px-3 py-2 text-sm transition-colors',
                      selectedPriceRange === range.value
                        ? 'bg-gold/10 text-charcoal font-medium'
                        : 'text-warm-gray hover:text-charcoal'
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
