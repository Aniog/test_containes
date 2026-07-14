import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $100', min: 60, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

function CollectionPage() {
  const { category } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(
    category && category !== 'all' ? [category] : []
  );
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  
  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }
    
    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      result = result.filter(p => {
        return selectedPriceRanges.some(range => {
          const rangeObj = priceRanges.find(r => r.label === range);
          return rangeObj && p.price >= rangeObj.min && p.price < rangeObj.max;
        });
      });
    }
    
    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order with bestsellers first
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }
    
    return result;
  }, [selectedCategories, selectedPriceRanges, sortBy]);
  
  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    );
  };
  
  const togglePriceRange = (range) => {
    setSelectedPriceRanges(prev =>
      prev.includes(range)
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
  };
  
  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRanges.length > 0;
  
  const currentCategory = categories.find(c => c.id === category);
  const pageTitle = currentCategory ? currentCategory.name : category === 'all' ? 'All Jewelry' : 'Shop';
  
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
            {pageTitle}
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            {currentCategory?.description || 'Discover our complete collection of demi-fine jewelry'}
          </p>
        </div>
      </section>
      
      {/* Filters & Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden flex items-center justify-center gap-2 py-3 border border-border hover:border-accent transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="ml-1 px-2 py-0.5 bg-accent text-white text-xs rounded-full">
                {selectedCategories.length + selectedPriceRanges.length}
              </span>
            )}
          </button>
          
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-serif text-lg mb-6">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        className="w-4 h-4 border-border text-accent focus:ring-accent cursor-pointer"
                      />
                      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-4">Price</h4>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedPriceRanges.includes(range.label)}
                        onChange={() => togglePriceRange(range.label)}
                        className="w-4 h-4 border-border text-accent focus:ring-accent cursor-pointer"
                      />
                      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:text-accent-hover transition-colors underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort & Results Count */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <p className="text-sm text-text-secondary">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              <div className="flex items-center gap-3">
                <label className="text-sm text-text-secondary hidden sm:inline">Sort by:</label>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-border px-4 py-2 pr-10 text-sm cursor-pointer hover:border-accent transition-colors focus:outline-none focus:border-accent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" />
                </div>
              </div>
            </div>
            
            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((cat) => {
                  const catObj = categories.find(c => c.id === cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-sm hover:bg-border transition-colors"
                    >
                      {catObj?.name}
                      <X className="w-3 h-3" />
                    </button>
                  );
                })}
                {selectedPriceRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => togglePriceRange(range)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-sm hover:bg-border transition-colors"
                  >
                    {range}
                    <X className="w-3 h-3" />
                  </button>
                ))}
              </div>
            )}
            
            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-text-secondary mb-4">No products match your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-accent hover:text-accent-hover transition-colors underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-background shadow-xl animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-serif text-lg">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        className="w-4 h-4 border-border text-accent focus:ring-accent cursor-pointer"
                      />
                      <span className="text-sm text-text-secondary">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-4">Price</h4>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedPriceRanges.includes(range.label)}
                        onChange={() => togglePriceRange(range.label)}
                        className="w-4 h-4 border-border text-accent focus:ring-accent cursor-pointer"
                      />
                      <span className="text-sm text-text-secondary">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full py-3 bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
                >
                  Show {filteredProducts.length} Results
                </button>
                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      clearFilters();
                      setShowFilters(false);
                    }}
                    className="w-full py-3 border border-border text-text-primary font-medium hover:border-accent hover:text-accent transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default CollectionPage;
