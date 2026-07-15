import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();

  const [hoveredId, setHoveredId] = useState(null);

  // Filters
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    material: 'all',
    priceRange: [0, 150],
    sort: 'featured',
  });

  // Update URL when category changes
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({ ...prev, category }));
    }
  }, [searchParams]);

  // Filter products
  const filteredProducts = products.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sort) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id.localeCompare(a.id);
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category' && value !== 'all') {
      setSearchParams({ category: value });
    } else if (key === 'category' && value === 'all') {
      setSearchParams({});
    }
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="font-serif text-lg text-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleFilterChange('category', 'all')}
            className={cn(
              'block w-full text-left font-sans text-sm py-1 transition-colors',
              filters.category === 'all' ? 'text-gold' : 'text-charcoal/70 hover:text-charcoal'
            )}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange('category', cat.id)}
              className={cn(
                'block w-full text-left font-sans text-sm py-1 transition-colors capitalize',
                filters.category === cat.id ? 'text-gold' : 'text-charcoal/70 hover:text-charcoal'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="font-serif text-lg text-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { label: 'All Prices', range: [0, 150] },
            { label: 'Under $40', range: [0, 40] },
            { label: '$40 - $60', range: [40, 60] },
            { label: '$60 - $100', range: [60, 100] },
            { label: '$100+', range: [100, 150] },
          ].map(option => (
            <button
              key={option.label}
              onClick={() => handleFilterChange('priceRange', option.range)}
              className={cn(
                'block w-full text-left font-sans text-sm py-1 transition-colors',
                JSON.stringify(filters.priceRange) === JSON.stringify(option.range)
                  ? 'text-gold'
                  : 'text-charcoal/70 hover:text-charcoal'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-cream border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
            {filters.category === 'all' ? 'Shop All' : categories.find(c => c.id === filters.category)?.name || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-taupe">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Desktop Filters */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden mb-6">
            <Button
              variant="secondary"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-charcoal/50"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-ivory p-6 animate-slideIn overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl text-charcoal">Filters</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 text-charcoal/60 hover:text-charcoal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
                <div className="mt-8 pt-8 border-t border-sand">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    Show {sortedProducts.length} Results
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Products grid */}
          <div className="lg:col-span-3">
            {/* Sort dropdown */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <select
                  value={filters.sort}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                  className="appearance-none bg-transparent border border-sand rounded px-4 py-2 pr-10 font-sans text-sm text-charcoal focus:outline-none focus:border-gold cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/50 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal mb-4">No products found</p>
                <p className="font-sans text-sm text-taupe mb-6">
                  Try adjusting your filters
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setFilters({ category: 'all', material: 'all', priceRange: [0, 150], sort: 'featured' });
                    setSearchParams({});
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sortedProducts.map(product => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-square bg-cream rounded-lg overflow-hidden mb-3">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <img
                          src={product.hoverImage}
                          alt={`${product.name} hover`}
                          className={cn(
                            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                            hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                      </Link>
                      <button
                        onClick={() => addItem(product)}
                        className={cn(
                          'absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center transition-all duration-300 hover:bg-goldDark',
                          hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        )}
                        aria-label="Add to cart"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="font-serif text-xs text-charcoal tracking-wide uppercase text-center mb-1 group-hover:text-gold transition-colors">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'w-3 h-3',
                            i < Math.floor(product.rating)
                              ? 'text-gold fill-gold'
                              : 'text-sand'
                          )}
                        />
                      ))}
                      <span className="font-sans text-xs text-taupe ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    <p className="font-sans text-sm font-medium text-charcoal text-center">
                      ${product.price}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
