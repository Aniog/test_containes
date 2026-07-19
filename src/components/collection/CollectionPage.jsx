import { useEffect, useRef, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    material: 'all',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters((prev) => ({ ...prev, category }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price filter
    if (filters.priceRange === 'under50') {
      result = result.filter((p) => p.price < 50);
    } else if (filters.priceRange === '50to100') {
      result = result.filter((p) => p.price >= 50 && p.price <= 100);
    } else if (filters.priceRange === 'over100') {
      result = result.filter((p) => p.price > 100);
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [filters, sortBy]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ category: 'all', priceRange: 'all', material: 'all' });
  };

  const hasActiveFilters = filters.category !== 'all' || filters.priceRange !== 'all' || filters.material !== 'all';

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="velmora-serif text-3xl sm:text-4xl text-[var(--velmora-dark)] mb-2">
            {filters.category !== 'all'
              ? categories.find((c) => c.id === filters.category)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-sm text-[var(--velmora-text-muted)]">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm font-medium tracking-wide mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={filters.category === 'all'}
                      onChange={() => updateFilter('category', 'all')}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm text-[var(--velmora-text-muted)]">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="accent-[var(--velmora-accent)]"
                      />
                      <span className="text-sm text-[var(--velmora-text-muted)]">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm font-medium tracking-wide mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 - $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === option.value}
                        onChange={() => updateFilter('priceRange', option.value)}
                        className="accent-[var(--velmora-accent)]"
                      />
                      <span className="text-sm text-[var(--velmora-text-muted)]">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-sm font-medium tracking-wide mb-4">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Materials' },
                    { value: 'gold', label: '18K Gold Plated' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={filters.material === option.value}
                        onChange={() => updateFilter('material', option.value)}
                        className="accent-[var(--velmora-accent)]"
                      />
                      <span className="text-sm text-[var(--velmora-text-muted)]">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest uppercase text-[var(--velmora-accent)] hover:text-[var(--velmora-accent-hover)] transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm pr-6 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Mobile filter drawer */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-[var(--velmora-surface)] p-6 pt-16 overflow-y-auto">
                <button
                  onClick={() => setShowFilters(false)}
                  className="absolute top-4 right-4 p-2"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide mb-4">Category</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category-mobile"
                          checked={filters.category === 'all'}
                          onChange={() => updateFilter('category', 'all')}
                          className="accent-[var(--velmora-accent)]"
                        />
                        <span className="text-sm text-[var(--velmora-text-muted)]">All</span>
                      </label>
                      {categories.map((cat) => (
                        <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="category-mobile"
                            checked={filters.category === cat.id}
                            onChange={() => updateFilter('category', cat.id)}
                            className="accent-[var(--velmora-accent)]"
                          />
                          <span className="text-sm text-[var(--velmora-text-muted)]">{cat.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium tracking-wide mb-4">Price</h3>
                    <div className="space-y-2">
                      {[
                        { value: 'all', label: 'All Prices' },
                        { value: 'under50', label: 'Under $50' },
                        { value: '50to100', label: '$50 - $100' },
                        { value: 'over100', label: 'Over $100' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="price-mobile"
                            checked={filters.priceRange === option.value}
                            onChange={() => updateFilter('priceRange', option.value)}
                            className="accent-[var(--velmora-accent)]"
                          />
                          <span className="text-sm text-[var(--velmora-text-muted)]">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <button
                      onClick={() => {
                        clearFilters();
                        setShowFilters(false);
                      }}
                      className="text-xs tracking-widest uppercase text-[var(--velmora-accent)]"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div ref={containerRef} className="flex-1">
            {/* Sort dropdown - desktop */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-[var(--velmora-text-muted)]">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm pr-6 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="velmora-serif text-xl text-[var(--velmora-text-muted)] mb-2">No products found</p>
                <p className="text-sm text-[var(--velmora-text-light)] mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="velmora-btn-outline inline-flex">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-[var(--velmora-bg-alt)] mb-3 overflow-hidden">
          <div
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            data-strk-bg-id={`collection-${product.id}`}
            data-strk-bg={`[${product.id}-desc] [${product.id}-title] collection`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-[var(--velmora-dark)] text-white text-[10px] tracking-widest uppercase px-3 py-1.5">
              {product.badge}
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product, 'gold');
              }}
              className="w-full velmora-btn-primary text-xs py-2.5"
            >
              Quick Add
            </button>
          </div>
        </div>
        <h3 className="velmora-product-name text-xs sm:text-sm text-[var(--velmora-dark)] mb-1 group-hover:text-[var(--velmora-accent)] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="w-3 h-3 fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
            <span className="text-xs text-[var(--velmora-text-muted)] ml-1">{product.rating}</span>
          </div>
          <span className="text-sm font-medium">${product.price}</span>
        </div>
      </Link>
    </div>
  );
};

export default CollectionPage;
