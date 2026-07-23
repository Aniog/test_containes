import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products, categories } from '@/data/products';

const CollectionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const { addToCart } = useCart();

  // Get filter state from URL
  const categoryFilter = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';
  const priceRange = searchParams.get('price') || 'all';
  const materialFilter = searchParams.get('material') || 'all';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    // Material filter
    if (materialFilter !== 'all') {
      result = result.filter(p => p.material.toLowerCase().includes(materialFilter.toLowerCase()));
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
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [categoryFilter, sortBy, priceRange, materialFilter]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const activeFiltersCount = [categoryFilter, priceRange, materialFilter].filter(
    v => v !== 'all'
  ).length;

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-warmstone-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-cream-50">
            Our Collection
          </h1>
          <p className="mt-4 text-cream-200/80 max-w-xl mx-auto">
            Discover timeless elegance with our curated selection of demi-fine jewelry
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-16 md:top-20 z-30 bg-cream-100/95 backdrop-blur-md border-b border-warmstone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-warmstone-300 text-warmstone-700 text-sm font-medium hover:bg-warmstone-50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-warmstone-900 text-cream-50 text-xs rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Results Count */}
            <p className="text-sm text-warmstone-600 hidden md:block">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-warmstone-600 hidden md:block">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent border border-warmstone-300 px-4 py-2 pr-10 text-sm font-medium text-warmstone-700 hover:border-warmstone-900 transition-colors cursor-pointer"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warmstone-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              categories={categories}
              categoryFilter={categoryFilter}
              priceRange={priceRange}
              materialFilter={materialFilter}
              updateFilter={updateFilter}
              clearFilters={clearFilters}
              activeFiltersCount={activeFiltersCount}
            />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warmstone-700">
                  No products found
                </p>
                <p className="mt-2 text-warmstone-500">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-gold-600 hover:text-gold-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <MobileFilterDrawer
          categories={categories}
          categoryFilter={categoryFilter}
          priceRange={priceRange}
          materialFilter={materialFilter}
          updateFilter={updateFilter}
          clearFilters={clearFilters}
          onClose={() => setIsMobileFilterOpen(false)}
        />
      )}
    </div>
  );
};

// Filter Sidebar Component
const FilterSidebar = ({
  categories,
  categoryFilter,
  priceRange,
  materialFilter,
  updateFilter,
  clearFilters,
  activeFiltersCount,
}) => {
  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-100', label: '$60 - $100' },
    { value: '100-', label: '$100+' },
  ];

  const materialOptions = [
    { value: 'all', label: 'All Materials' },
    { value: 'gold', label: '18K Gold Plated' },
    { value: 'silver', label: 'Sterling Silver' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg text-warmstone-900">Filters</h3>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-gold-600 hover:text-gold-700"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="text-sm font-semibold text-warmstone-900 mb-3">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={categoryFilter === 'all'}
              onChange={() => updateFilter('category', 'all')}
              className="w-4 h-4 border-warmstone-300 text-warmstone-900 focus:ring-gold-500"
            />
            <span className="text-sm text-warmstone-700 group-hover:text-warmstone-900">
              All Products
            </span>
            <span className="text-xs text-warmstone-400 ml-auto">
              ({products.length})
            </span>
          </label>
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={categoryFilter === cat.id}
                onChange={() => updateFilter('category', cat.id)}
                className="w-4 h-4 border-warmstone-300 text-warmstone-900 focus:ring-gold-500"
              />
              <span className="text-sm text-warmstone-700 group-hover:text-warmstone-900">
                {cat.name}
              </span>
              <span className="text-xs text-warmstone-400 ml-auto">
                ({cat.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h4 className="text-sm font-semibold text-warmstone-900 mb-3">Price</h4>
        <div className="space-y-2">
          {priceOptions.map(option => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={priceRange === option.value}
                onChange={() => updateFilter('price', option.value)}
                className="w-4 h-4 border-warmstone-300 text-warmstone-900 focus:ring-gold-500"
              />
              <span className="text-sm text-warmstone-700 group-hover:text-warmstone-900">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <h4 className="text-sm font-semibold text-warmstone-900 mb-3">Material</h4>
        <div className="space-y-2">
          {materialOptions.map(option => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={materialFilter === option.value}
                onChange={() => updateFilter('material', option.value)}
                className="w-4 h-4 border-warmstone-300 text-warmstone-900 focus:ring-gold-500"
              />
              <span className="text-sm text-warmstone-700 group-hover:text-warmstone-900">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile Filter Drawer
const MobileFilterDrawer = ({
  categories,
  categoryFilter,
  priceRange,
  materialFilter,
  updateFilter,
  clearFilters,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-warmstone-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-cream-50 overflow-y-auto">
        <div className="sticky top-0 bg-cream-50 flex items-center justify-between p-4 border-b border-warmstone-200">
          <h3 className="font-serif text-lg text-warmstone-900">Filters</h3>
          <button
            onClick={onClose}
            className="p-2 text-warmstone-600 hover:text-warmstone-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <FilterSidebar
            categories={categories}
            categoryFilter={categoryFilter}
            priceRange={priceRange}
            materialFilter={materialFilter}
            updateFilter={updateFilter}
            clearFilters={clearFilters}
            activeFiltersCount={0}
          />
        </div>
        <div className="sticky bottom-0 p-4 bg-cream-50 border-t border-warmstone-200">
          <button
            onClick={onClose}
            className="w-full py-3 bg-warmstone-900 text-cream-50 font-medium"
          >
            Show {filteredProducts?.length || 0} Results
          </button>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, onAddToCart, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-warmstone-100 overflow-hidden mb-4">
          {/* Default Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered && product.hoverImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />

          {/* Hover Image */}
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-warmstone-900 text-cream-50 text-xs font-medium uppercase tracking-wide">
              {product.badge}
            </span>
          )}

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className={`absolute bottom-0 left-0 right-0 py-3 bg-warmstone-900/90 text-cream-50 text-sm font-medium tracking-wide transform transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-sm text-warmstone-900">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-xs text-warmstone-500">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="mt-1 font-serif text-warmstone-700">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

// Make filteredProducts accessible in MobileFilterDrawer
const filteredProducts = products;

export default CollectionPage;
