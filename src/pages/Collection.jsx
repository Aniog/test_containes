import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/sections/ProductCard';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 150]);

  // Get category from URL
  const urlCategory = searchParams.get('category');

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategories([urlCategory]);
    }
  }, [urlCategory]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id.localeCompare(a.id);
        default:
          return b.bestseller ? 1 : -1;
      }
    });

  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 150]);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 150;

  return (
    <main className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="section-title text-3xl md:text-4xl mb-4">Shop All</h1>
          <p className="text-taupe">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar
                categories={categories}
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
              {/* Mobile filter button */}
              <button
                className="lg:hidden flex items-center gap-2 text-sm font-medium text-charcoal"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <Filter className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-5 h-5 bg-gold text-espresso text-xs rounded-full flex items-center justify-center">
                    {selectedCategories.length + (priceRange[0] > 0 || priceRange[1] < 150 ? 1 : 0)}
                  </span>
                )}
              </button>

              {/* Active filters */}
              <div className="hidden lg:flex items-center gap-2 flex-wrap">
                {selectedCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream text-sm text-charcoal rounded-sm hover:bg-sand transition-colors"
                  >
                    {categories.find(c => c.id === cat)?.name}
                    <X className="w-3 h-3" />
                  </button>
                ))}
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-taupe hover:text-charcoal transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 text-sm text-charcoal cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe pointer-events-none" />
              </div>
            </div>

            {/* Products grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-charcoal mb-4">No products found</p>
                <p className="text-taupe mb-6">Try adjusting your filters</p>
                <Button variant="secondary" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-espresso/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-ivory overflow-y-auto animate-slide-in-right">
            <div className="sticky top-0 bg-ivory border-b border-sand px-6 py-4 flex items-center justify-between">
              <h2 className="font-medium text-charcoal">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-taupe hover:text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <FilterSidebar
                categories={categories}
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
            <div className="sticky bottom-0 bg-ivory border-t border-sand p-6">
              <Button
                size="full"
                onClick={() => setMobileFiltersOpen(false)}
              >
                View {filteredProducts.length} Products
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function FilterSidebar({
  categories,
  selectedCategories,
  toggleCategory,
  priceRange,
  setPriceRange,
  onClear,
  hasActiveFilters,
}) {
  return (
    <div className="space-y-8">
      {/* Clear filters */}
      {hasActiveFilters && (
        <button
          onClick={onClear}
          className="text-sm text-taupe hover:text-charcoal transition-colors"
        >
          Clear all filters
        </button>
      )}

      {/* Category filter */}
      <div>
        <h3 className="font-medium text-charcoal mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
                className="sr-only"
              />
              <div
                className={cn(
                  'w-5 h-5 border rounded-sm flex items-center justify-center transition-colors',
                  selectedCategories.includes(category.id)
                    ? 'bg-gold border-gold'
                    : 'border-sand group-hover:border-taupe'
                )}
              >
                {selectedCategories.includes(category.id) && (
                  <svg className="w-3 h-3 text-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-charcoal group-hover:text-gold transition-colors">
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="font-medium text-charcoal mb-4">Price</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-taupe">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="150"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-gold"
          />
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              max="150"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
              className="w-full h-10 px-3 border border-sand rounded-sm text-sm text-charcoal focus:outline-none focus:border-gold"
              placeholder="Min"
            />
            <input
              type="number"
              min="0"
              max="150"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 150])}
              className="w-full h-10 px-3 border border-sand rounded-sm text-sm text-charcoal focus:outline-none focus:border-gold"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
