import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', label: 'Under $50', min: 0, max: 50 },
    { id: '50to75', label: '$50 - $75', min: 50, max: 75 },
    { id: 'over75', label: 'Over $75', min: 75, max: Infinity }
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest' }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
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
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - keep original order
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
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A]">
            {selectedCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-[#6B6B6B]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E0D8]">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm tracking-wider uppercase hover:text-[#C9A962] transition-colors"
          >
            <SlidersHorizontal size={18} />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-[#C9A962] rounded-full" />
            )}
          </button>

          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-sm tracking-wider uppercase focus:outline-none cursor-pointer"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#6B6B6B] mb-4">No products found matching your criteria.</p>
            <button 
              onClick={clearFilters}
              className="text-[#C9A962] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/30 z-50"
              onClick={() => setIsFilterOpen(false)}
            />
            <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-[#FAF7F2] z-50 shadow-xl overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:text-[#C9A962] transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="text-sm tracking-wider uppercase mb-4 text-[#6B6B6B]">Category</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === 'all'}
                        onChange={() => handleCategoryChange('all')}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm">All Categories</span>
                    </label>
                    {categories.map(cat => (
                      <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                        <input 
                          type="radio" 
                          name="category" 
                          checked={selectedCategory === cat.id}
                          onChange={() => handleCategoryChange(cat.id)}
                          className="w-4 h-4 accent-[#C9A962]"
                        />
                        <span className="text-sm capitalize">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-8">
                  <h3 className="text-sm tracking-wider uppercase mb-4 text-[#6B6B6B]">Price</h3>
                  <div className="space-y-3">
                    {priceRanges.map(range => (
                      <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                        <input 
                          type="radio" 
                          name="price" 
                          checked={priceRange === range.id}
                          onChange={() => setPriceRange(range.id)}
                          className="w-4 h-4 accent-[#C9A962]"
                        />
                        <span className="text-sm">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-[#E5E0D8]">
                  <button 
                    onClick={clearFilters}
                    className="flex-1 py-3 border border-[#1A1A1A] text-sm tracking-wider uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 py-3 bg-[#1A1A1A] text-white text-sm tracking-wider uppercase hover:bg-[#C9A962] transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}