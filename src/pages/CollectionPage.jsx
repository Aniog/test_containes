import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';

const CollectionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  // Get initial filter values from URL
  const initialCategory = searchParams.get('category') || '';
  const initialMaterial = searchParams.get('material') || '';
  const initialMinPrice = parseInt(searchParams.get('minPrice')) || 0;
  const initialMaxPrice = parseInt(searchParams.get('maxPrice')) || 200;
  const initialSort = searchParams.get('sort') || 'featured';

  const [filters, setFilters] = useState({
    category: initialCategory,
    material: initialMaterial,
    minPrice: initialMinPrice,
    maxPrice: initialMaxPrice,
    sort: initialSort,
  });

  useEffect(() => {
    // Update URL params when filters change
    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    if (filters.material) params.set('material', filters.material);
    if (filters.minPrice > 0) params.set('minPrice', filters.minPrice.toString());
    if (filters.maxPrice < 200) params.set('maxPrice', filters.maxPrice.toString());
    if (filters.sort !== 'featured') params.set('sort', filters.sort);
    
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  // Filter products
  let filteredProducts = products.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.material && product.material !== filters.material) return false;
    if (product.price < filters.minPrice) return false;
    if (product.price > filters.maxPrice) return false;
    return true;
  });

  // Sort products
  switch (filters.sort) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Featured - no change
      break;
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      material: '',
      minPrice: 0,
      maxPrice: 200,
      sort: 'featured',
    });
  };

  const hasActiveFilters = filters.category || filters.material || filters.minPrice > 0 || filters.maxPrice < 200;

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide text-charcoal uppercase mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.id}
                onChange={() => setFilters({ ...filters, category: cat.id })}
                className="w-4 h-4 accent-gold"
              />
              <span className="text-sm text-warmgray group-hover:text-charcoal transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={filters.category === ''}
              onChange={() => setFilters({ ...filters, category: '' })}
              className="w-4 h-4 accent-gold"
            />
            <span className="text-sm text-warmgray group-hover:text-charcoal transition-colors">
              All
            </span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide text-charcoal uppercase mb-4">
          Price
        </h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="200"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value) })}
            className="w-full accent-gold"
          />
          <div className="flex justify-between text-sm text-warmgray">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide text-charcoal uppercase mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {['18K Gold Plated', '18K Rose Gold Plated', 'Sterling Silver'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={filters.material === mat}
                onChange={() => setFilters({ ...filters, material: mat })}
                className="w-4 h-4 accent-gold"
              />
              <span className="text-sm text-warmgray group-hover:text-charcoal transition-colors">
                {mat}
              </span>
            </label>
          ))}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="material"
              checked={filters.material === ''}
              onChange={() => setFilters({ ...filters, material: '' })}
              className="w-4 h-4 accent-gold"
            />
            <span className="text-sm text-warmgray group-hover:text-charcoal transition-colors">
              All
            </span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal text-center">
            Our Collection
          </h1>
          <p className="text-warmgray text-center mt-2 max-w-md mx-auto">
            Timeless demi-fine pieces designed to be treasured
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          {/* Mobile filter button */}
          <button
            onClick={() => setShowFilters(true)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Results count */}
          <p className="text-sm text-warmgray hidden md:block">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>

          {/* Sort dropdown */}
          <select
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            className="bg-transparent border border-sand px-4 py-2 text-sm text-charcoal focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Best Rating</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block col-span-1">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-sans text-xs tracking-ultra-wide text-charcoal uppercase">
                  Filters
                </h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-gold hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <FilterSidebar />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="text-warmgray mb-4">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-gold hover:underline text-sm"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden transition-all duration-300',
          showFilters ? 'visible' : 'invisible'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-charcoal/50 transition-opacity duration-300',
            showFilters ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setShowFilters(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-80 max-w-full bg-cream transform transition-transform duration-300 overflow-y-auto',
            showFilters ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-charcoal">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 -mr-2 text-charcoal hover:text-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <FilterSidebar />

            <div className="mt-8 space-y-3">
              {hasActiveFilters && (
                <button
                  onClick={() => {
                    clearFilters();
                    setShowFilters(false);
                  }}
                  className="w-full py-3 border border-sand text-sm text-charcoal hover:border-charcoal transition-colors"
                >
                  Clear All Filters
                </button>
              )}
              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-3 bg-charcoal text-ivory text-sm hover:bg-espresso transition-colors"
              >
                View Results ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollectionPage;
