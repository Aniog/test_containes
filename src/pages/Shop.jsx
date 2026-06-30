import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedSort, setSelectedSort] = useState('featured');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    // Category filter
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }

    // Price filter
    if (selectedPrice !== null) {
      const range = priceRanges[selectedPrice];
      if (product.price < range.min || product.price >= range.max) {
        return false;
      }
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSort) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleCategoryChange = (category) => {
    const newCategory = selectedCategory === category ? '' : category;
    setSelectedCategory(newCategory);
    if (newCategory) {
      setSearchParams({ category: newCategory });
    } else {
      setSearchParams({});
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedPrice !== null;

  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      {/* Header */}
      <div className="max-w-content mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center">
          <h1 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4">
            Shop Our Collection
          </h1>
          <p className="font-sans text-warm-gray max-w-xl mx-auto">
            Discover our curated selection of demi-fine jewelry, crafted with 18K gold plating for everyday luxury.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="max-w-content mx-auto px-6 lg:px-12 mb-8">
        <div className="flex items-center justify-between py-4 border-y border-border">
          {/* Left: Filter Toggle (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 font-sans text-sm text-charcoal"
          >
            <SlidersHorizontal size={18} strokeWidth={1.5} />
            Filter
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-gold rounded-full" />
            )}
          </button>

          {/* Center: Active Filters */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="font-sans text-sm text-warm-gray">
              {sortedProducts.length} products
            </span>
            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="font-sans text-sm text-gold hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Right: Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 font-sans text-sm text-charcoal"
            >
              Sort by: <span className="uppercase">{sortOptions.find(o => o.value === selectedSort)?.label}</span>
              <ChevronDown size={16} strokeWidth={1.5} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSortOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 bg-surface shadow-hover z-50 rounded py-2 min-w-[200px]">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelectedSort(option.value);
                        setIsSortOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left font-sans text-sm hover:bg-divider transition-colors ${
                        selectedSort === option.value ? 'text-gold' : 'text-charcoal'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="flex gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              {/* Categories */}
              <div className="mb-10">
                <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                        selectedCategory === category.id
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {category.name}
                      <span className="text-muted-gray ml-2">
                        ({products.filter(p => p.category === category.id).length})
                      </span>
                    </button>
                  ))}
                  <button
                    onClick={() => handleCategoryChange('sets')}
                    className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                      selectedCategory === 'sets'
                        ? 'text-gold font-medium'
                        : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    Gift Sets
                    <span className="text-muted-gray ml-2">
                      ({products.filter(p => p.category === 'sets').length})
                    </span>
                  </button>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-10">
                <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  {priceRanges.map((range, index) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPrice(selectedPrice === index ? null : index)}
                      className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                        selectedPrice === index
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
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-4">No products found</p>
                <p className="font-sans text-warm-gray mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-overlay z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-surface z-50 lg:hidden overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl text-charcoal">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block w-full text-left font-sans text-sm py-2 transition-colors ${
                        selectedCategory === category.id
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                  <button
                    onClick={() => handleCategoryChange('sets')}
                    className={`block w-full text-left font-sans text-sm py-2 transition-colors ${
                      selectedCategory === 'sets'
                        ? 'text-gold font-medium'
                        : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    Gift Sets
                  </button>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  {priceRanges.map((range, index) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPrice(selectedPrice === index ? null : index)}
                      className={`block w-full text-left font-sans text-sm py-2 transition-colors ${
                        selectedPrice === index
                          ? 'text-gold font-medium'
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-border">
                <button
                  onClick={handleClearFilters}
                  className="btn-secondary flex-1"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="btn-primary flex-1"
                >
                  Show {sortedProducts.length} Results
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
