import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';

function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get filter values from URL
  const currentCategory = searchParams.get('category') || '';
  const currentPriceRange = searchParams.get('price') || '';
  const currentSort = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (currentCategory) {
      result = result.filter(p => p.category === currentCategory);
    }

    // Price filter
    if (currentPriceRange) {
      const range = priceRanges.find(r => r.id === currentPriceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (currentSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      case 'featured':
      default:
        break;
    }

    return result;
  }, [currentCategory, currentPriceRange, currentSort]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const activeFiltersCount = [currentCategory, currentPriceRange].filter(Boolean).length;

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-serif text-sm tracking-widest uppercase mb-4">Category</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={!currentCategory}
              onChange={() => updateFilter('category', '')}
              className="w-4 h-4 accent-primary"
            />
            <span className="text-sm text-secondary group-hover:text-primary transition-colors">
              All Categories
            </span>
          </label>
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={currentCategory === cat.id}
                onChange={() => updateFilter('category', cat.id)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                {cat.name} ({cat.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-serif text-sm tracking-widest uppercase mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map(range => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={currentPriceRange === range.id}
                onChange={() => updateFilter('price', range.id)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="w-full"
        >
          Clear All Filters
        </Button>
      )}
    </>
  );

  return (
    <main className="pt-24 lg:pt-32 pb-16">
      <div className="container">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-primary">
            {currentCategory ? categories.find(c => c.id === currentCategory)?.name : 'All Products'}
          </h1>
          <p className="mt-2 text-secondary">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-primary"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-primary text-text-light text-xs">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Results Bar */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-secondary">
                Showing {filteredProducts.length} results
              </span>
              
              <div className="relative">
                <select
                  value={currentSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent border border-border px-4 py-2 pr-10 text-sm focus:outline-none focus:border-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-secondary mb-4">No products found matching your criteria.</p>
                <Button variant="secondary" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-primary/30"
          onClick={() => setIsFilterOpen(false)}
        />
        <div className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl transition-transform duration-300 ${
          isFilterOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl tracking-widest">Filters</h2>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ShopPage;