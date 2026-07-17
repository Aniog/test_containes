import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

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

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 150]);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange[0] > 0 || priceRange[1] < 150;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category.id}
                onChange={() => handleCategoryChange(category.id)}
                className="sr-only"
              />
              <span
                className={cn(
                  'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200',
                  selectedCategory === category.id
                    ? 'border-gold bg-gold'
                    : 'border-champagne group-hover:border-gold-light'
                )}
              >
                {selectedCategory === category.id && (
                  <span className="w-2 h-2 rounded-full bg-white" />
                )}
              </span>
              <span className={cn(
                'text-sm transition-colors',
                selectedCategory === category.id ? 'text-charcoal' : 'text-stone group-hover:text-charcoal'
              )}>
                {category.name}
              </span>
              <span className="text-xs text-mist ml-auto">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-4">Price</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="150"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="flex-1 accent-gold"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-stone">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}{priceRange[1] >= 150 ? '+' : ''}</span>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-gold hover:text-gold-dark transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-ivory pt-20">
      {/* Header */}
      <div className="bg-cream py-12 md:py-16">
        <div className="container-narrow">
          <h1 className="heading-h1 text-charcoal mb-4">Our Collection</h1>
          <p className="text-stone max-w-2xl">
            Discover our curated selection of demi-fine gold jewelry. Each piece is crafted with intention, designed to become a treasured part of your story.
          </p>
        </div>
      </div>

      <div className="container-narrow py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-champagne">
          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-stone hover:text-charcoal transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 rounded-full bg-gold text-charcoal text-xs flex items-center justify-center">
                  {(selectedCategory !== 'all' ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 150 ? 1 : 0)}
                </span>
              )}
            </button>

            {/* Desktop Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="hidden lg:flex items-center gap-2 text-sm text-stone hover:text-charcoal transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>

            <span className="text-sm text-stone">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-stone pr-6 py-1 cursor-pointer hover:text-charcoal transition-colors focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="w-4 h-4 text-stone absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside
            className={cn(
              'hidden lg:block w-64 flex-shrink-0',
              showFilters ? 'block' : 'hidden'
            )}
          >
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-stone mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-gold hover:text-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          mobileFiltersOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute right-0 top-0 bottom-0 w-full max-w-sm bg-ivory p-6 overflow-y-auto',
            'transform transition-transform duration-300 ease-silk',
            mobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-xl text-charcoal">Filters</h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2 -mr-2 text-stone hover:text-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterContent />
          <div className="mt-8 pt-8 border-t border-champagne">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full py-3 bg-gold text-charcoal font-medium hover:bg-gold-light transition-colors"
            >
              Show {filteredProducts.length} Products
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
