import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' }
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-100', label: '$75 - $100' },
  { value: 'over-100', label: 'Over $100' }
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
        <div className="relative aspect-[4/5] bg-velmora-beige overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-cream text-velmora-charcoal text-sm font-medium transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-charcoal ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </span>
          </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm tracking-product uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'
              }`}
            />
          ))}
        </div>
        <p className="mt-1 text-sm font-medium">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categoryParam = searchParams.get('category');
  const sortParam = searchParams.get('sort') || 'featured';
  const priceParam = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (categoryParam && categoryParam !== 'all') {
      result = result.filter(p => p.category === categoryParam);
    }

    // Filter by price
    if (priceParam && priceParam !== 'all') {
      result = result.filter(p => {
        switch (priceParam) {
          case 'under-50': return p.price < 50;
          case '50-75': return p.price >= 50 && p.price <= 75;
          case '75-100': return p.price >= 75 && p.price <= 100;
          case 'over-100': return p.price > 100;
          default: return true;
        }
      });
    }

    // Sort
    switch (sortParam) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [categoryParam, sortParam, priceParam]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = categoryParam || priceParam !== 'all' || sortParam !== 'featured';

  return (
    <div className="pt-20">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl">
            {categoryParam ? categories.find(c => c.id === categoryParam)?.name || 'Shop' : 'Shop All'}
          </h1>
          <p className="mt-2 text-velmora-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', '')}
                    className={`block text-left text-sm py-1 transition-colors ${
                      !categoryParam ? 'text-velmora-gold' : 'text-velmora-gray hover:text-velmora-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block text-left text-sm py-1 transition-colors ${
                        categoryParam === cat.id ? 'text-velmora-gold' : 'text-velmora-gray hover:text-velmora-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-medium mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className={`block text-left text-sm py-1 transition-colors ${
                        priceParam === range.value ? 'text-velmora-gold' : 'text-velmora-gray hover:text-velmora-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort & Mobile Filter Toggle */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-border">
              <button
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-velmora-gray">Sort by:</span>
                <select
                  value={sortParam}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="text-sm border-none bg-transparent focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-velmora-gray">No products found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-velmora-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {isMobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-velmora-charcoal/50 z-50"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-velmora-cream z-50 p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => { updateFilter('category', ''); }}
                  className={`block text-left text-sm py-2 w-full ${
                    !categoryParam ? 'text-velmora-gold' : 'text-velmora-gray'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={`block text-left text-sm py-2 w-full ${
                      categoryParam === cat.id ? 'text-velmora-gold' : 'text-velmora-gray'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => updateFilter('price', range.value)}
                    className={`block text-left text-sm py-2 w-full ${
                      priceParam === range.value ? 'text-velmora-gold' : 'text-velmora-gray'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex-1 py-3 border border-velmora-border"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="flex-1 py-3 bg-velmora-gold text-velmora-charcoal font-medium"
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}