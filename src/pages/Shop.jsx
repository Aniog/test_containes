import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const categories = [
  { id: 'all', name: 'All Jewelry' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Sets' },
];

const priceRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
  { id: '50-75', name: '$50 - $75', min: 50, max: 75 },
  { id: '75-100', name: '$75 - $100', min: 75, max: 100 },
  { id: 'over-100', name: 'Over $100', min: 100, max: Infinity },
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
        <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden mb-4">
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className={cn(
              'absolute bottom-4 left-4 right-4 bg-velmora-cream text-velmora-charcoal py-3 text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2',
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 className="product-name text-xs mb-1 group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
            />
          ))}
        </div>
        <span className="text-xs text-velmora-warm-gray">({product.reviews})</span>
      </div>
      <p className="text-sm mt-1">${product.price}</p>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedPrice = searchParams.get('price') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    const priceRange = priceRanges.find(p => p.id === selectedPrice);
    if (priceRange) {
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
        result.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== 'all' || sortBy !== 'featured';

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">Shop All</h1>
          <p className="text-velmora-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-widest"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={cn(
                        'block text-left text-sm py-1 transition-colors',
                        selectedCategory === cat.id
                          ? 'text-velmora-gold'
                          : 'text-velmora-warm-gray hover:text-velmora-charcoal'
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => updateFilter('price', range.id)}
                      className={cn(
                        'block text-left text-sm py-1 transition-colors',
                        selectedPrice === range.id
                          ? 'text-velmora-gold'
                          : 'text-velmora-warm-gray hover:text-velmora-charcoal'
                      )}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-warm-gray hover:text-velmora-gold underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="border border-velmora-border px-4 py-2 text-sm bg-transparent focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
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
                <p className="text-velmora-warm-gray mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-sm underline hover:text-velmora-gold"
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
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-velmora-cream shadow-xl p-6 overflow-y-auto animate-slide-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-widest mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      updateFilter('category', cat.id);
                      setIsFilterOpen(false);
                    }}
                    className={cn(
                      'block text-left text-sm py-1 transition-colors w-full',
                      selectedCategory === cat.id
                        ? 'text-velmora-gold'
                        : 'text-velmora-warm-gray'
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-widest mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => {
                      updateFilter('price', range.id);
                      setIsFilterOpen(false);
                    }}
                    className={cn(
                      'block text-left text-sm py-1 transition-colors w-full',
                      selectedPrice === range.id
                        ? 'text-velmora-gold'
                        : 'text-velmora-warm-gray'
                    )}
                  >
                    {range.name}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={() => {
                  clearFilters();
                  setIsFilterOpen(false);
                }}
                className="w-full py-3 border border-velmora-charcoal text-sm uppercase tracking-widest"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}