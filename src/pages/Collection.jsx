import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState([0, 200]);

  const categoryParam = searchParams.get('category');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
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
          return b.id.localeCompare(a.id);
        default:
          return 0;
      }
    });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h4 className="font-sans text-xs text-charcoal-800 uppercase tracking-wide mb-4">
          Category
        </h4>
        <div className="space-y-3">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block w-full text-left text-sm ${
              selectedCategory === 'all' 
                ? 'text-charcoal-800 font-medium' 
                : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block w-full text-left text-sm capitalize ${
                selectedCategory === cat.id 
                  ? 'text-charcoal-800 font-medium' 
                  : 'text-charcoal-500 hover:text-charcoal-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-sans text-xs text-charcoal-800 uppercase tracking-wide mb-4">
          Price
        </h4>
        <div className="space-y-3">
          <button
            onClick={() => setPriceRange([0, 200])}
            className={`block w-full text-left text-sm ${
              priceRange[0] === 0 && priceRange[1] === 200
                ? 'text-charcoal-800 font-medium' 
                : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            All Prices
          </button>
          <button
            onClick={() => setPriceRange([0, 50])}
            className={`block w-full text-left text-sm ${
              priceRange[0] === 0 && priceRange[1] === 50
                ? 'text-charcoal-800 font-medium' 
                : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            Under $50
          </button>
          <button
            onClick={() => setPriceRange([50, 75])}
            className={`block w-full text-left text-sm ${
              priceRange[0] === 50 && priceRange[1] === 75
                ? 'text-charcoal-800 font-medium' 
                : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            $50 - $75
          </button>
          <button
            onClick={() => setPriceRange([75, 200])}
            className={`block w-full text-left text-sm ${
              priceRange[0] === 75 && priceRange[1] === 200
                ? 'text-charcoal-800 font-medium' 
                : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            $75+
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-cream-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-4">
            Our Collection
          </h1>
          <p className="text-charcoal-600 max-w-md mx-auto">
            Discover our curated selection of demi-fine gold jewelry
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Products Area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal-200">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-charcoal-700"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>

              <p className="text-sm text-charcoal-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-charcoal-700 pr-6 py-1 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500 pointer-events-none" />
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal-600 mb-4">
                  No products found
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 200]);
                    setSearchParams({});
                  }}
                  className="text-sm text-charcoal-700 underline hover:text-charcoal-900"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-charcoal-900/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-cream-50 animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-200">
              <h2 className="font-serif text-lg text-charcoal-800">Filters</h2>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-cream-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <FilterContent />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-charcoal-200">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full btn-primary text-center"
              >
                View {filteredProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
