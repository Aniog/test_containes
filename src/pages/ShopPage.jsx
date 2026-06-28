import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activePrice !== 'all') {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= (max || Infinity));
    }

    if (activeMaterial !== 'all') {
      result = result.filter(p => p.material === activeMaterial);
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, sort]);

  const hasFilters = activeCategory !== 'all' || activePrice !== 'all' || activeMaterial !== 'all';

  const clearFilters = () => {
    setSearchParams({});
  };

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? 'p-6' : ''}>
      {mobile && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-xl">Filters</h3>
          <button onClick={() => setMobileFilters(false)} className="p-2">
            <X size={20} />
          </button>
        </div>
      )}

      {/* Category */}
      <div className="mb-8">
        <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-velmora-charcoal mb-4">
          Category
        </h4>
        <div className="space-y-2.5">
          <button
            onClick={() => setFilter('category', 'all')}
            className={`block text-sm transition-colors ${
              activeCategory === 'all' ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-velmora-charcoal mb-4">
          Price
        </h4>
        <div className="space-y-2.5">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '0-50', label: 'Under $50' },
            { value: '50-80', label: '$50 – $80' },
            { value: '80-999', label: '$80 & Above' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilter('price', opt.value)}
              className={`block text-sm transition-colors ${
                activePrice === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-velmora-charcoal mb-4">
          Material
        </h4>
        <div className="space-y-2.5">
          {[
            { value: 'all', label: 'All Materials' },
            { value: 'gold', label: '18K Gold Plated' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilter('material', opt.value)}
              className={`block text-sm transition-colors ${
                activeMaterial === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <nav className="flex items-center gap-2 text-xs text-velmora-muted mb-6">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">Shop</span>
        </nav>

        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal">
              {activeCategory !== 'all'
                ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
                : 'All Jewelry'}
            </h1>
            <p className="text-sm text-velmora-muted mt-2">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <button
              onClick={() => setMobileFilters(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-velmora-charcoal"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent text-sm text-velmora-charcoal pr-8 pl-2 py-2 border border-velmora-border focus:outline-none focus:border-velmora-gold cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active filters */}
        {hasFilters && (
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            {activeCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-velmora-warm text-xs text-velmora-charcoal border border-velmora-border">
                {categories.find(c => c.id === activeCategory)?.name}
                <button onClick={() => setFilter('category', 'all')}>
                  <X size={12} className="text-velmora-muted" />
                </button>
              </span>
            )}
            {activePrice !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-velmora-warm text-xs text-velmora-charcoal border border-velmora-border">
                {activePrice === '0-50' ? 'Under $50' : activePrice === '50-80' ? '$50 – $80' : '$80 & Above'}
                <button onClick={() => setFilter('price', 'all')}>
                  <X size={12} className="text-velmora-muted" />
                </button>
              </span>
            )}
            <button onClick={clearFilters} className="text-xs text-velmora-gold underline">
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="flex gap-10 lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-velmora-muted mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="px-8 py-3 border border-velmora-charcoal text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-charcoal hover:text-white transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilters(false)} />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-velmora-cream shadow-2xl overflow-y-auto animate-slide-in-left">
            <FilterSidebar mobile />
            <div className="p-6 pt-0">
              <button
                onClick={() => setMobileFilters(false)}
                className="w-full py-3.5 bg-velmora-charcoal text-white text-xs tracking-[0.15em] uppercase font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
