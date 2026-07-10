import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A-Z' },
  { value: 'rating', label: 'Top Rated' },
];

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const { addToCart } = useCart();

  const categoryFilter = searchParams.get('category') || '';
  const priceMin = searchParams.get('min') || '';
  const priceMax = searchParams.get('max') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Price filter
    if (priceMin) {
      result = result.filter(p => p.price >= parseInt(priceMin));
    }
    if (priceMax) {
      result = result.filter(p => p.price <= parseInt(priceMax));
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [categoryFilter, priceMin, priceMax, sortBy]);

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

  const hasActiveFilters = categoryFilter || priceMin || priceMax;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-champagne-500 text-champagne-500' : 'text-charcoal-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-20 bg-ivory-100">
      {/* Header */}
      <div className="bg-charcoal-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-3">
            Our Collection
          </h1>
          <p className="font-sans text-charcoal-600 max-w-xl mx-auto">
            Discover demi-fine jewelry designed to be treasured. 
            Each piece is crafted with care and made to last.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-charcoal-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2 mb-8">
                <button
                  onClick={() => updateFilter('category', '')}
                  className={`block w-full text-left py-1.5 font-sans text-sm transition-colors ${
                    !categoryFilter ? 'text-charcoal-900 font-medium' : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={`block w-full text-left py-1.5 font-sans text-sm transition-colors flex items-center justify-between ${
                      categoryFilter === cat.id ? 'text-charcoal-900 font-medium' : 'text-charcoal-600 hover:text-charcoal-900'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-charcoal-400">({cat.count})</span>
                  </button>
                ))}
              </div>

              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-charcoal-900 mb-4">
                Price
              </h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceMin}
                    onChange={(e) => updateFilter('min', e.target.value)}
                    className="w-full px-3 py-2 border border-charcoal-200 rounded text-sm font-sans focus:outline-none focus:border-charcoal-900"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceMax}
                    onChange={(e) => updateFilter('max', e.target.value)}
                    className="w-full px-3 py-2 border border-charcoal-200 rounded text-sm font-sans focus:outline-none focus:border-charcoal-900"
                  />
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-6 font-sans text-sm text-charcoal-500 hover:text-charcoal-900 underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-champagne-200">
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 font-sans text-sm text-charcoal-700"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {hasActiveFilters && (
                    <span className="w-5 h-5 bg-charcoal-900 text-ivory-100 rounded-full text-xs flex items-center justify-center">
                      !
                    </span>
                  )}
                </button>
                <p className="font-sans text-sm text-charcoal-500">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 font-sans text-sm text-charcoal-700"
                >
                  Sort by: <span className="font-medium">{sortOptions.find(o => o.value === sortBy)?.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded shadow-lg border border-champagne-100 py-1 z-10">
                    {sortOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          updateFilter('sort', option.value);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 font-sans text-sm transition-colors ${
                          sortBy === option.value ? 'bg-champagne-50 text-charcoal-900 font-medium' : 'text-charcoal-600 hover:bg-champagne-50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4] bg-champagne-50 rounded overflow-hidden mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-2 left-2 bg-charcoal-900 text-ivory-100 px-2 py-0.5 text-xs font-sans uppercase tracking-wide">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="absolute bottom-0 left-0 right-0 bg-charcoal-900/90 backdrop-blur-sm text-ivory-100 py-3 font-sans text-xs uppercase tracking-wide opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        Quick Add
                      </button>
                    </div>
                    {/* Info */}
                    <div className="flex items-center gap-1 mb-1">
                      {renderStars(product.rating)}
                    </div>
                    <h3 className="product-name text-xs mb-0.5">{product.name}</h3>
                    <p className="product-price text-sm">${product.price}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal-700 mb-2">No products found</p>
                <p className="font-sans text-sm text-charcoal-500 mb-4">
                  Try adjusting your filters or browse our full collection.
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-ivory-100 z-50 lg:hidden animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-champagne-200">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-charcoal-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2 mb-8">
                <button
                  onClick={() => { updateFilter('category', ''); setMobileFiltersOpen(false); }}
                  className={`block w-full text-left py-1.5 font-sans text-sm ${
                    !categoryFilter ? 'text-charcoal-900 font-medium' : 'text-charcoal-600'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { updateFilter('category', cat.id); setMobileFiltersOpen(false); }}
                    className={`block w-full text-left py-1.5 font-sans text-sm flex items-center justify-between ${
                      categoryFilter === cat.id ? 'text-charcoal-900 font-medium' : 'text-charcoal-600'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-charcoal-400">({cat.count})</span>
                  </button>
                ))}
              </div>

              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-charcoal-900 mb-4">
                Price
              </h3>
              <div className="flex gap-2 mb-6">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceMin}
                  onChange={(e) => updateFilter('min', e.target.value)}
                  className="w-full px-3 py-2 border border-charcoal-200 rounded text-sm font-sans focus:outline-none focus:border-charcoal-900"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={priceMax}
                  onChange={(e) => updateFilter('max', e.target.value)}
                  className="w-full px-3 py-2 border border-charcoal-200 rounded text-sm font-sans focus:outline-none focus:border-charcoal-900"
                />
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-sm text-charcoal-500 hover:text-charcoal-900 underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
