import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, X, ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products, categories } from '@/data/products';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const { addToCart, isLoading } = useCart();

  // Filter states
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: [0, 150],
    sortBy: 'featured',
  });

  // Update URL when category changes
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({ ...prev, category }));
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      if (filters.category && product.category !== filters.category) return false;
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
      return true;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.isNew ? 1 : -1;
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.isBestseller ? 1 : -1;
      }
    });

  const handleCategoryChange = (category) => {
    const newFilters = { ...filters, category };
    setFilters(newFilters);
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: [0, 150],
      sortBy: 'featured',
    });
    setSearchParams({});
  };

  const hasActiveFilters = filters.category || filters.priceRange[0] > 0 || filters.priceRange[1] < 150;

  return (
    <div className="pt-20 md:pt-22">
      {/* Hero Banner */}
      <section className="relative h-48 md:h-64 bg-espresso overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
            alt="Collection"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="font-serif text-ivory text-section mb-2">
              {filters.category 
                ? categories.find(c => c.id === filters.category)?.name || 'Shop'
                : 'All Jewelry'}
            </h1>
            <p className="text-ivory/70">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-main py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-medium text-velvet mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleCategoryChange('')}
                      className={`text-sm w-full text-left py-1 transition-colors ${
                        !filters.category ? 'text-champagne font-medium' : 'text-mocha hover:text-velvet'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`text-sm w-full text-left py-1 capitalize transition-colors ${
                          filters.category === cat.id ? 'text-champagne font-medium' : 'text-mocha hover:text-velvet'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium text-velvet mb-4">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({ 
                      ...prev, 
                      priceRange: [prev.priceRange[0], parseInt(e.target.value)] 
                    }))}
                    className="w-full accent-champagne"
                  />
                  <div className="flex justify-between text-sm text-taupe">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-taupe hover:text-velvet transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-linen">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-mocha"
              >
                <Filter className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-2 h-2 bg-champagne rounded-full" />
                )}
              </button>

              {/* Results count */}
              <p className="text-sm text-taupe hidden lg:block">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </p>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-taupe">Sort by:</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                  className="text-sm text-velvet bg-transparent border-none focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velvet mb-4">No products found</p>
                <p className="text-taupe mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className="group block"
                    onMouseEnter={() => setIsHovered(product.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4] bg-cream rounded overflow-hidden mb-4">
                      <img
                        src={product.images[0].primary}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                          isHovered === product.id && product.images[0].secondary ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      {product.images[0].secondary && (
                        <img
                          src={product.images[0].secondary}
                          alt={`${product.name} alternate`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            isHovered === product.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      )}

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="bg-velvet text-ivory text-xs px-2 py-1 tracking-wider">
                            NEW
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="bg-champagne text-velvet text-xs px-2 py-1 tracking-wider">
                            BESTSELLER
                          </span>
                        )}
                      </div>

                      {/* Quick Add */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product, product.variants[0]);
                        }}
                        className={`absolute bottom-0 left-0 right-0 py-3 bg-velvet/90 text-ivory text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 hover:bg-velvet ${
                          isHovered === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                        }`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Quick Add
                      </button>
                    </div>

                    {/* Info */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'star-filled fill-current'
                                : 'star-empty'
                            }`}
                          />
                        ))}
                      </div>
                      <h3 className="font-serif text-product text-velvet">
                        {product.name}
                      </h3>
                      <p className="text-mocha">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-velvet/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-ivory overflow-y-auto animate-slide-up">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-velvet">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 text-mocha hover:text-velvet"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-medium text-velvet mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => {
                        handleCategoryChange('');
                        setIsFilterOpen(false);
                      }}
                      className={`text-sm w-full text-left py-2 capitalize ${
                        !filters.category ? 'text-champagne font-medium' : 'text-mocha'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          handleCategoryChange(cat.id);
                          setIsFilterOpen(false);
                        }}
                        className={`text-sm w-full text-left py-2 capitalize ${
                          filters.category === cat.id ? 'text-champagne font-medium' : 'text-mocha'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="font-medium text-velvet mb-4">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters(prev => ({ 
                    ...prev, 
                    priceRange: [prev.priceRange[0], parseInt(e.target.value)] 
                  }))}
                  className="w-full accent-champagne"
                />
                <div className="flex justify-between text-sm text-taupe mt-2">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={() => {
                    clearFilters();
                    setIsFilterOpen(false);
                  }}
                  className="btn-outline w-full"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
