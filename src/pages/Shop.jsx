import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { formatPrice } from '../lib/utils';
import { useCart } from '../context/CartContext';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['Gold', 'Silver'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (activeCategory) {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Price filter
    if (activePriceRange) {
      const range = priceRanges.find(r => r.label === activePriceRange);
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Material filter
    if (activeMaterial) {
      filtered = filtered.filter(p =>
        p.variants.some(v => v.name.toLowerCase() === activeMaterial.toLowerCase())
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => {
          const aNew = a.tags.includes('new-arrival') ? 1 : 0;
          const bNew = b.tags.includes('new-arrival') ? 1 : 0;
          return bNew - aNew;
        });
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [activeCategory, activePriceRange, activeMaterial, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory || activePriceRange || activeMaterial;

  return (
    <main className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="section-padding pb-8 lg:pb-12">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal-700 mb-4">
            {activeCategory
              ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="font-sans text-charcoal-400 max-w-xl">
            Discover our collection of demi-fine gold jewelry, designed for everyday elegance.
          </p>
        </div>
      </div>

      <div className="container-narrow px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-charcoal-700">
                  Filters
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-charcoal-400 hover:text-charcoal-700 underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-charcoal-500 mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => updateFilter('category', activeCategory === category.id ? '' : category.id)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activeCategory === category.id
                          ? 'bg-charcoal-700 text-cream-50'
                          : 'text-charcoal-600 hover:bg-cream-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-charcoal-500 mb-3">
                  Price
                </h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => updateFilter('price', activePriceRange === range.label ? '' : range.label)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activePriceRange === range.label
                          ? 'bg-charcoal-700 text-cream-50'
                          : 'text-charcoal-600 hover:bg-cream-200'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-charcoal-500 mb-3">
                  Material
                </h4>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => updateFilter('material', activeMaterial === material ? '' : material)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activeMaterial === material
                          ? 'bg-charcoal-700 text-cream-50'
                          : 'text-charcoal-600 hover:bg-cream-200'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-cream-200">
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 text-sm text-charcoal-600 hover:text-charcoal-700"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>

                {/* Active filters */}
                {hasActiveFilters && (
                  <div className="hidden sm:flex items-center gap-2">
                    {activeCategory && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream-200 rounded-full text-xs text-charcoal-600">
                        {categories.find(c => c.id === activeCategory)?.name}
                        <button onClick={() => updateFilter('category', '')}>
                          <X size={12} />
                        </button>
                      </span>
                    )}
                    {activePriceRange && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream-200 rounded-full text-xs text-charcoal-600">
                        {activePriceRange}
                        <button onClick={() => updateFilter('price', '')}>
                          <X size={12} />
                        </button>
                      </span>
                    )}
                    {activeMaterial && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream-200 rounded-full text-xs text-charcoal-600">
                        {activeMaterial}
                        <button onClick={() => updateFilter('material', '')}>
                          <X size={12} />
                        </button>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm text-charcoal-600 bg-transparent border-none focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal-700 mb-2">
                  No products found
                </p>
                <p className="text-charcoal-400 mb-6">
                  Try adjusting your filters or browse all jewelry.
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.slug}`} className="block">
                      {/* Image */}
                      <div className="relative aspect-[3/4] bg-cream-200 rounded-lg overflow-hidden mb-4">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-cream-400 text-sm">Product Image</span>
                        </div>
                        <div className="absolute inset-0 bg-charcoal-800/0 group-hover:bg-charcoal-800/10 transition-all duration-300" />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product, product.variants[0]);
                          }}
                          className="absolute bottom-3 left-3 right-3 bg-cream-50 text-charcoal-700 py-2.5 px-4 
                                     font-sans text-xs tracking-wider uppercase opacity-0 translate-y-2 
                                     group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300
                                     flex items-center justify-center gap-2 hover:bg-charcoal-700 hover:text-cream-50"
                        >
                          <ShoppingBag size={14} />
                          Add to Cart
                        </button>
                      </div>
                    </Link>

                    {/* Info */}
                    <Link to={`/product/${product.slug}`}>
                      <h3 className="product-name text-sm lg:text-base text-charcoal-700 mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-cream-300'}
                          />
                        ))}
                        <span className="text-xs text-charcoal-400 ml-1">
                          ({product.reviewCount})
                        </span>
                      </div>
                      <p className="font-sans text-sm font-medium text-charcoal-700">
                        {formatPrice(product.price)}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal-800/50" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-cream-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-lg font-semibold text-charcoal-700">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X size={20} className="text-charcoal-400" />
                </button>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-charcoal-500 mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        updateFilter('category', activeCategory === category.id ? '' : category.id);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activeCategory === category.id
                          ? 'bg-charcoal-700 text-cream-50'
                          : 'text-charcoal-600 hover:bg-cream-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-charcoal-500 mb-3">
                  Price
                </h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => {
                        updateFilter('price', activePriceRange === range.label ? '' : range.label);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activePriceRange === range.label
                          ? 'bg-charcoal-700 text-cream-50'
                          : 'text-charcoal-600 hover:bg-cream-200'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-charcoal-500 mb-3">
                  Material
                </h4>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => {
                        updateFilter('material', activeMaterial === material ? '' : material);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activeMaterial === material
                          ? 'bg-charcoal-700 text-cream-50'
                          : 'text-charcoal-600 hover:bg-cream-200'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={() => {
                    clearFilters();
                    setShowFilters(false);
                  }}
                  className="w-full py-3 text-sm text-charcoal-400 hover:text-charcoal-700 underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
