import { useState, useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/shared/ProductCard';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
  { id: 'over-100', label: '$100+', min: 100, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest' },
];

export default function Collection() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  
  const currentCategory = categories.find(c => c.id === selectedCategory);
  
  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Filter by price
    const priceRange = priceRanges.find(p => p.id === selectedPrice);
    if (priceRange && priceRange.id !== 'all') {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
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
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order, but bestsellers first
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }
    
    return result;
  }, [selectedCategory, selectedPrice, sortBy]);
  
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };
  
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <section className="bg-cream-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-3">Our Collection</p>
          <h1 className="section-title">
            {currentCategory?.name || 'All Jewelry'}
          </h1>
          <p className="mt-4 text-charcoal-600 max-w-xl mx-auto">
            Discover our curated selection of demi-fine jewelry pieces, 
            designed to elevate everyday moments.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm text-charcoal-700"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm text-charcoal-700 pr-6 cursor-pointer focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-charcoal-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-600 mb-4 font-medium">
                  Category
                </h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleCategoryChange(cat.id)}
                        className={cn(
                          'flex items-center justify-between w-full py-1.5 text-sm transition-colors',
                          selectedCategory === cat.id
                            ? 'text-gold-600 font-medium'
                            : 'text-charcoal-600 hover:text-charcoal-900'
                        )}
                      >
                        {cat.name}
                        <span className="text-charcoal-400 text-xs">({cat.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Price Range */}
              <div>
                <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-600 mb-4 font-medium">
                  Price
                </h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.id}>
                      <button
                        onClick={() => setSelectedPrice(range.id)}
                        className={cn(
                          'w-full text-left py-1.5 text-sm transition-colors',
                          selectedPrice === range.id
                            ? 'text-gold-600 font-medium'
                            : 'text-charcoal-600 hover:text-charcoal-900'
                        )}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Header - Desktop */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-charcoal-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              
              {/* Sort Dropdown */}
              <div className="relative">
                <label className="text-xs text-charcoal-500 mr-2">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-charcoal-700 pr-6 cursor-pointer focus:outline-none border-b border-charcoal-300 pb-0.5"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 text-charcoal-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
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
                <p className="text-charcoal-600 mb-4">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPrice('all');
                  }}
                  className="text-gold-600 hover:text-gold-700 underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal-900/50 z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-cream-50 z-50 shadow-2xl lg:hidden animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-charcoal-200">
              <h2 className="font-serif text-lg">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 -mr-2 text-charcoal-500 hover:text-charcoal-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-8 overflow-y-auto h-[calc(100%-64px)]">
              {/* Categories */}
              <div>
                <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-600 mb-4 font-medium">
                  Category
                </h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleCategoryChange(cat.id)}
                        className={cn(
                          'flex items-center justify-between w-full py-2 text-sm transition-colors',
                          selectedCategory === cat.id
                            ? 'text-gold-600 font-medium'
                            : 'text-charcoal-600 hover:text-charcoal-900'
                        )}
                      >
                        {cat.name}
                        <span className="text-charcoal-400 text-xs">({cat.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Price Range */}
              <div>
                <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-600 mb-4 font-medium">
                  Price
                </h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.id}>
                      <button
                        onClick={() => setSelectedPrice(range.id)}
                        className={cn(
                          'w-full text-left py-2 text-sm transition-colors',
                          selectedPrice === range.id
                            ? 'text-gold-600 font-medium'
                            : 'text-charcoal-600 hover:text-charcoal-900'
                        )}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-charcoal-200 bg-cream-50">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-3 bg-gold-500 text-white text-sm tracking-ultra-wide uppercase font-medium rounded"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
