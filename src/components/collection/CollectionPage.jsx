import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { Star } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <Link
      to={`/products/${product.slug}`}
      className="product-card group block"
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-cream-50 text-xs tracking-wider uppercase text-charcoal-700">
          {product.badge}
        </span>
      )}

      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden bg-warm-100">
        <img
          src={product.images.primary}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <img
          src={product.images.secondary}
          alt={`${product.name} alternate`}
          className="product-image-secondary w-full h-full object-cover"
        />
      </div>

      {/* Quick Add */}
      <button
        onClick={handleQuickAdd}
        className="quick-add flex items-center justify-center gap-2"
      >
        <ShoppingBag className="w-4 h-4" />
        Add to Bag
      </button>

      {/* Info */}
      <div className="pt-4 pb-2">
        <h3 className="text-product-name text-sm mb-1">{product.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
            <span className="text-xs text-charcoal-500">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
        <p className="font-serif text-lg">${product.price}</p>
      </div>
    </Link>
  );
}

function FilterSidebar({ filters, setFilters, isOpen, setIsOpen }) {
  const filterOptions = {
    category: [
      { value: 'all', label: 'All Jewelry' },
      { value: 'earrings', label: 'Earrings' },
      { value: 'necklaces', label: 'Necklaces' },
      { value: 'huggies', label: 'Huggies' },
      { value: 'sets', label: 'Gift Sets' },
    ],
    price: [
      { value: 'all', label: 'All Prices' },
      { value: 'under-50', label: 'Under $50' },
      { value: '50-75', label: '$50 - $75' },
      { value: '75-100', label: '$75 - $100' },
      { value: 'over-100', label: 'Over $100' },
    ],
    material: [
      { value: 'all', label: 'All Materials' },
      { value: 'gold', label: 'Gold Plated' },
      { value: 'silver', label: 'Silver Plated' },
      { value: 'rose-gold', label: 'Rose Gold' },
    ],
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal-900/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-auto w-80 lg:w-64 bg-cream-50 lg:bg-transparent transform transition-transform duration-300 lg:transform-none overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 lg:p-0">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <h2 className="font-serif text-xl">Filters</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-500 mb-4">
              Category
            </h3>
            <div className="space-y-3">
              {filterOptions.category.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category"
                    value={option.value}
                    checked={filters.category === option.value}
                    onChange={(e) =>
                      setFilters({ ...filters, category: e.target.value })
                    }
                    className="w-4 h-4 accent-charcoal-800"
                  />
                  <span className="text-sm text-charcoal-700 group-hover:text-charcoal-900 transition-colors">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-500 mb-4">
              Price
            </h3>
            <div className="space-y-3">
              {filterOptions.price.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="price"
                    value={option.value}
                    checked={filters.price === option.value}
                    onChange={(e) =>
                      setFilters({ ...filters, price: e.target.value })
                    }
                    className="w-4 h-4 accent-charcoal-800"
                  />
                  <span className="text-sm text-charcoal-700 group-hover:text-charcoal-900 transition-colors">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div className="mb-8">
            <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-500 mb-4">
              Finish
            </h3>
            <div className="space-y-3">
              {filterOptions.material.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="material"
                    value={option.value}
                    checked={filters.material === option.value}
                    onChange={(e) =>
                      setFilters({ ...filters, material: e.target.value })
                    }
                    className="w-4 h-4 accent-charcoal-800"
                  />
                  <span className="text-sm text-charcoal-700 group-hover:text-charcoal-900 transition-colors">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() =>
              setFilters({ category: 'all', price: 'all', material: 'all' })
            }
            className="text-sm text-charcoal-500 hover:text-charcoal-800 underline transition-colors"
          >
            Clear all filters
          </button>
        </div>
      </aside>
    </>
  );
}

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: 'all',
    material: 'all',
  });

  // Apply filters
  useEffect(() => {
    let result = [...products];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price filter
    if (filters.price !== 'all') {
      switch (filters.price) {
        case 'under-50':
          result = result.filter((p) => p.price < 50);
          break;
        case '50-75':
          result = result.filter((p) => p.price >= 50 && p.price <= 75);
          break;
        case '75-100':
          result = result.filter((p) => p.price >= 75 && p.price <= 100);
          break;
        case 'over-100':
          result = result.filter((p) => p.price > 100);
          break;
      }
    }

    // Material filter (simplified - matching variant)
    if (filters.material !== 'all') {
      result = result.filter((p) =>
        p.variants.some((v) =>
          v.toLowerCase().includes(filters.material.replace('-', ' '))
        )
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.reverse();
        break;
    }

    setFilteredProducts(result);
  }, [filters, sortBy]);

  // Get page title
  const getPageTitle = () => {
    if (filters.category !== 'all') {
      const category = categories.find((c) => c.id === filters.category);
      return category ? category.name : 'Shop';
    }
    return 'All Jewelry';
  };

  return (
    <main className="pt-16 sm:pt-20">
      {/* Header */}
      <div className="bg-warm-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-ultra-wide uppercase text-gold-600 mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-800">
            {getPageTitle()}
          </h1>
          <p className="text-charcoal-500 mt-3">
            {filteredProducts.length} pieces
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-16 sm:top-20 z-20 bg-cream-50 border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-charcoal-600"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Spacer for desktop */}
            <div className="hidden lg:block" />

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-charcoal-500 hidden sm:block">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm text-charcoal-700 border-none focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
          />

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-charcoal-500 mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() =>
                    setFilters({ category: 'all', price: 'all', material: 'all' })
                  }
                  className="text-sm text-charcoal-700 underline hover:text-gold-600"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}