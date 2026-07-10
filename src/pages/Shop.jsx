import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = [
  { id: 'all', name: 'All Jewelry' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Sets' }
];

const priceRanges = [
  { id: 'all', min: 0, max: Infinity, name: 'All Prices' },
  { id: 'under-50', min: 0, max: 50, name: 'Under $50' },
  { id: '50-75', min: 50, max: 75, name: '$50 - $75' },
  { id: '75-100', min: 75, max: 100, name: '$75 - $100' },
  { id: 'over-100', min: 100, max: Infinity, name: 'Over $100' }
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'newest', name: 'Newest' }
];

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-creamDark">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 'gold', 1);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-cream/95 backdrop-blur text-velmora-charcoal font-sans text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-gold hover:text-white ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            QUICK ADD
          </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal group-hover:text-velmora-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-gray-light'
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-velmora-gold font-sans text-sm">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const currentCategory = searchParams.get('category') || 'all';
  const currentPriceRange = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Filter by price
    if (currentPriceRange !== 'all') {
      const range = priceRanges.find(r => r.id === currentPriceRange);
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price <= range.max);
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  }, [currentCategory, currentPriceRange, sortBy]);

  const handleCategoryChange = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId === 'all') {
      params.delete('category');
    } else {
      params.set('category', categoryId);
    }
    setSearchParams(params);
  };

  const handlePriceChange = (priceId) => {
    const params = new URLSearchParams(searchParams);
    if (priceId === 'all') {
      params.delete('price');
    } else {
      params.set('price', priceId);
    }
    setSearchParams(params);
  };

  const FilterContent = () => (
    <>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`block w-full text-left py-2 text-sm transition-colors duration-300 ${
                currentCategory === category.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-charcoal/60 hover:text-velmora-gold'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => handlePriceChange(range.id)}
              className={`block w-full text-left py-2 text-sm transition-colors duration-300 ${
                currentPriceRange === range.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-charcoal/60 hover:text-velmora-gold'
              }`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-velmora-cream">
      {/* Header */}
      <div className="bg-velmora-creamDark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl text-velmora-charcoal">
            {currentCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === currentCategory)?.name}
          </h1>
          <p className="mt-4 text-velmora-charcoal/60 max-w-md mx-auto">
            Discover our collection of premium demi-fine jewelry, crafted to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-6 py-3 border border-velmora-charcoal/20 text-velmora-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              FILTERS
            </button>
          </div>

          {/* Mobile Filters Drawer */}
          {isMobileFiltersOpen && (
            <>
              <div
                className="fixed inset-0 bg-velmora-charcoal/50 backdrop-blur-sm z-50 lg:hidden"
                onClick={() => setIsMobileFiltersOpen(false)}
              />
              <div className="fixed top-0 left-0 h-full w-80 bg-velmora-cream shadow-soft-lg z-50 lg:hidden overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-xl text-velmora-charcoal">Filters</h2>
                    <button
                      onClick={() => setIsMobileFiltersOpen(false)}
                      className="p-2"
                      aria-label="Close filters"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <FilterContent />
                  <button
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="w-full mt-8 py-4 bg-velmora-gold text-white"
                  >
                    APPLY FILTERS
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort & Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-velmora-charcoal/60">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 border border-velmora-charcoal/20 text-velmora-charcoal text-sm bg-transparent focus:outline-none focus:border-velmora-gold"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-charcoal/60 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-velmora-charcoal/60">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    handleCategoryChange('all');
                    handlePriceChange('all');
                  }}
                  className="mt-4 text-velmora-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}