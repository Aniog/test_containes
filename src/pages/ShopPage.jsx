import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 49.99 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 75.01, max: Infinity },
];

const materials = ['Gold', 'Silver'];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setFilter = (key, value) => {
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

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max);
      }
    }

    if (activeMaterial) {
      result = result.filter((p) =>
        p.variants.some((v) => v.toLowerCase() === activeMaterial.toLowerCase())
      );
    }

    switch (sortBy) {
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
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  const hasActiveFilters = activeCategory || activePrice || activeMaterial;

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? 'p-4' : ''}>
      {mobile && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-lg tracking-ultra-wide uppercase text-charcoal-800">
            Filters
          </h3>
          <button
            onClick={() => setFiltersOpen(false)}
            className="p-1 text-charcoal-700 bg-transparent"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xs tracking-ultra-wide uppercase font-medium text-charcoal-800 mb-3">
          Category
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', '')}
            className={`block text-sm transition-colors bg-transparent border-none p-0 rounded-none text-left ${
              !activeCategory ? 'text-gold-600 font-medium' : 'text-charcoal-700/70 hover:text-charcoal-800'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id === activeCategory ? '' : cat.id)}
              className={`block text-sm transition-colors bg-transparent border-none p-0 rounded-none text-left ${
                activeCategory === cat.id ? 'text-gold-600 font-medium' : 'text-charcoal-700/70 hover:text-charcoal-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="text-xs tracking-ultra-wide uppercase font-medium text-charcoal-800 mb-3">
          Price
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('price', '')}
            className={`block text-sm transition-colors bg-transparent border-none p-0 rounded-none text-left ${
              !activePrice ? 'text-gold-600 font-medium' : 'text-charcoal-700/70 hover:text-charcoal-800'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setFilter('price', range.label === activePrice ? '' : range.label)}
              className={`block text-sm transition-colors bg-transparent border-none p-0 rounded-none text-left ${
                activePrice === range.label ? 'text-gold-600 font-medium' : 'text-charcoal-700/70 hover:text-charcoal-800'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="text-xs tracking-ultra-wide uppercase font-medium text-charcoal-800 mb-3">
          Material
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('material', '')}
            className={`block text-sm transition-colors bg-transparent border-none p-0 rounded-none text-left ${
              !activeMaterial ? 'text-gold-600 font-medium' : 'text-charcoal-700/70 hover:text-charcoal-800'
            }`}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setFilter('material', mat === activeMaterial ? '' : mat)}
              className={`block text-sm transition-colors bg-transparent border-none p-0 rounded-none text-left ${
                activeMaterial === mat ? 'text-gold-600 font-medium' : 'text-charcoal-700/70 hover:text-charcoal-800'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-wider uppercase text-charcoal-700/50 hover:text-charcoal-800 underline transition-colors bg-transparent border-none p-0"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-warm-50 py-10 md:py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold-600 text-xs tracking-mega-wide uppercase mb-2 font-medium">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-800 font-light">
            {activeCategory
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal-800 hover:text-gold-600 transition-colors md:hidden bg-transparent border-none p-0"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-sm text-charcoal-700/60 hidden sm:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-cream-400 text-sm text-charcoal-800 px-4 py-2 pr-8 focus:outline-none focus:border-gold-500 rounded-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-charcoal-700 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-800 mb-2">No pieces found</p>
                <p className="text-sm text-charcoal-700/60 mb-4">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-ultra-wide uppercase text-gold-600 border-b border-gold-600 pb-1 bg-transparent border-t-0 border-l-0 border-r-0"
                >
                  Clear Filters
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

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[90] md:hidden">
          <div
            className="absolute inset-0 bg-charcoal-900/50"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-72 bg-cream-50 shadow-2xl overflow-y-auto animate-slide-in-right">
            <FilterSidebar mobile />
          </div>
        </div>
      )}
    </div>
  );
}
