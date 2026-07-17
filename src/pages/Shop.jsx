import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ui';
import { cn } from '@/lib/utils';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: '',
    material: '',
  });

  const activeCategory = searchParams.get('category') || '';

  useEffect(() => {
    if (activeCategory) {
      setFilters((prev) => ({ ...prev, category: activeCategory }));
    }
  }, [activeCategory]);

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        if (product.price < min || product.price > max) return false;
      } else {
        if (product.price < min) return false;
      }
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return a.id.localeCompare(b.id);
      case 'bestselling':
        return (b.reviewCount || 0) - (a.reviewCount || 0);
      default:
        return 0;
    }
  });

  const handleCategoryChange = (category) => {
    const newCategory = filters.category === category ? '' : category;
    setFilters((prev) => ({ ...prev, category: newCategory }));
    if (newCategory) {
      setSearchParams({ category: newCategory });
    } else {
      setSearchParams({});
    }
  };

  const handleClearFilters = () => {
    setFilters({ category: '', priceRange: '', material: '' });
    setSearchParams({});
  };

  const hasActiveFilters = filters.category || filters.priceRange || filters.material;

  const priceRanges = [
    { label: 'Under $40', value: '0-40' },
    { label: '$40 - $60', value: '40-60' },
    { label: '$60 - $80', value: '60-80' },
    { label: '$80 - $100', value: '80-100' },
    { label: '$100+', value: '100-999' },
  ];

  return (
    <main className="pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-warm-cream py-12 md:py-16">
        <div className="container-main text-center">
          <h1 className="section-title mb-4">Shop All</h1>
          <p className="text-taupe font-light max-w-2xl mx-auto">
            Discover our complete collection of demi-fine jewelry, crafted with 18K gold plating 
            and hypoallergenic materials for everyday elegance.
          </p>
        </div>
      </div>

      <div className="container-main py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-light-gray">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-extra-wide"
          >
            <SlidersHorizontal size={18} />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </button>

          {/* Desktop Filter Pills */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-sm text-taupe uppercase tracking-extra-wide mr-2">Filter:</span>
            <button
              onClick={handleClearFilters}
              className={cn(
                'px-4 py-2 text-sm transition-all',
                !filters.category && !filters.priceRange
                  ? 'bg-gold text-white'
                  : 'bg-warm-cream text-charcoal hover:bg-light-gray'
              )}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  'px-4 py-2 text-sm transition-all',
                  filters.category === cat.id
                    ? 'bg-gold text-white'
                    : 'bg-warm-cream text-charcoal hover:bg-light-gray'
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-light-gray px-4 py-2 pr-10 text-sm uppercase tracking-extra-wide cursor-pointer hover:border-gold transition-colors focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="bestselling">Bestselling</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe pointer-events-none"
            />
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-taupe mb-6">
          Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal mb-4">No products found</p>
            <p className="text-taupe mb-6">Try adjusting your filters or browse all products.</p>
            <button
              onClick={handleClearFilters}
              className="text-gold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filters Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setShowFilters(false)}>
          <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm animate-fade-in" />
          <div
            className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream animate-slide-in-right overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-light-gray sticky top-0 bg-cream">
              <span className="font-serif text-xl uppercase tracking-extra-wide">Filters</span>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-warm-cream transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-sans text-sm uppercase tracking-extra-wide mb-4 text-gold">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={filters.category === cat.id}
                        onChange={() => handleCategoryChange(cat.id)}
                        className="w-5 h-5 border border-light-gray rounded-none appearance-none cursor-pointer checked:bg-gold checked:border-gold relative
                          after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-white after:opacity-0 checked:after:opacity-100"
                      />
                      <span className="text-charcoal group-hover:text-gold transition-colors">
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-sans text-sm uppercase tracking-extra-wide mb-4 text-gold">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label
                      key={range.value}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === range.value}
                        onChange={() =>
                          setFilters((prev) => ({
                            ...prev,
                            priceRange: prev.priceRange === range.value ? '' : range.value,
                          }))
                        }
                        className="w-5 h-5 border border-light-gray rounded-full appearance-none cursor-pointer checked:border-gold relative
                          after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-gold after:rounded-full after:opacity-0 checked:after:opacity-100"
                      />
                      <span className="text-charcoal group-hover:text-gold transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="w-full py-3 border border-charcoal text-charcoal text-sm uppercase tracking-extra-wide hover:bg-charcoal hover:text-white transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>

            {/* Apply Button */}
            <div className="sticky bottom-0 p-6 bg-cream border-t border-light-gray">
              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-4 bg-gold text-white text-sm uppercase tracking-extra-wide hover:bg-gold-dark transition-colors"
              >
                Show {sortedProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
