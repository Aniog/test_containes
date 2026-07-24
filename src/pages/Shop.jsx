import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (activePriceRange) {
      const [min, max] = activePriceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
    }

    switch (activeSort) {
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
  }, [activeCategory, activePriceRange, activeSort]);

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasFilters = activeCategory || activePriceRange;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[11px] tracking-widest uppercase font-semibold text-velvet-900 mb-4">
          Category
        </h4>
        <div className="space-y-3">
          <button
            onClick={() => updateFilter('category', '')}
            className={`block text-sm transition-colors ${!activeCategory ? 'text-gold-600 font-medium' : 'text-velvet-600 hover:text-velvet-900'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => updateFilter('category', cat.slug)}
              className={`block text-sm transition-colors ${activeCategory === cat.slug ? 'text-gold-600 font-medium' : 'text-velvet-600 hover:text-velvet-900'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[11px] tracking-widest uppercase font-semibold text-velvet-900 mb-4">
          Price
        </h4>
        <div className="space-y-3">
          {priceRanges.map((range) => {
            const val = `${range.min}-${range.max === Infinity ? '' : range.max}`;
            return (
              <button
                key={val}
                onClick={() =>
                  updateFilter('price', activePriceRange === val ? '' : val)
                }
                className={`block text-sm transition-colors ${activePriceRange === val ? 'text-gold-600 font-medium' : 'text-velvet-600 hover:text-velvet-900'}`}
              >
                {range.label}
              </button>
            );
          })}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-[11px] tracking-wider uppercase text-velvet-500 hover:text-velvet-700 underline underline-offset-4"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium mb-3">
            {activeCategory || 'All Pieces'}
          </p>
          <h1 className="font-serif text-3xl lg:text-4xl text-velvet-900 font-light">
            Shop the Collection
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-velvet-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter & Sort
          </button>

          <div className="hidden lg:block">
            <p className="text-sm text-velvet-500">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm text-velvet-700"
            >
              Sort: {sortOptions.find((s) => s.value === activeSort)?.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-velvet-100 shadow-lg z-20 py-2">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        updateFilter('sort', opt.value);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${activeSort === opt.value ? 'text-gold-600 font-medium' : 'text-velvet-700 hover:bg-velvet-50'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-500">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-gold-600 text-sm underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link
                      to={`/product/${product.slug}`}
                      className="block relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-gold-200/70 via-velvet-100 to-velvet-200/50 transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-0' : 'opacity-100'}`} />
                      <div className={`absolute inset-0 bg-gradient-to-br from-gold-300/60 via-gold-100/50 to-velvet-300/40 transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`} />

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            color: product.colors[0],
                          });
                        }}
                        className={`absolute bottom-0 left-0 right-0 py-3 bg-velvet-900/90 backdrop-blur-sm text-white text-xs tracking-wider uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 ${hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </Link>

                    <Link to={`/product/${product.slug}`} className="block">
                      <h3 className="font-serif text-[11px] tracking-[0.15em] text-velvet-800 mb-1 truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-velvet-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] text-velvet-500">({product.reviews})</span>
                      </div>
                      <p className="text-sm font-medium text-velvet-900">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-cream animate-slide-in-right flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-velvet-100">
              <h3 className="font-serif text-lg tracking-wide text-velvet-900">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-velvet-500 hover:text-velvet-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
