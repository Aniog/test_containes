import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products, categories, priceRanges } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activePriceRange, setActivePriceRange] = useState(null);
  const [activeMaterial, setActiveMaterial] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activePriceRange) {
      result = result.filter(
        (p) => p.price >= activePriceRange.min && p.price < activePriceRange.max
      );
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
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
  }, [activeCategory, activePriceRange, activeMaterial, sortBy]);

  const materials = [...new Set(products.map((p) => p.material))];

  const activeFilters = [];
  if (activeCategory) activeFilters.push({ label: activeCategory, clear: () => setActiveCategory('') });
  if (activePriceRange) activeFilters.push({ label: activePriceRange.label, clear: () => setActivePriceRange(null) });
  if (activeMaterial) activeFilters.push({ label: activeMaterial, clear: () => setActiveMaterial('') });

  const clearAll = () => {
    setActiveCategory('');
    setActivePriceRange(null);
    setActiveMaterial('');
    setSearchParams({});
  };

  const handleCategoryClick = (catId) => {
    setActiveCategory((prev) => (prev === catId ? '' : catId));
    setSearchParams(catId ? { category: catId } : {});
  };

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? '' : 'w-56 flex-shrink-0'}`}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-widest-xl font-sans font-medium text-charcoal-200 mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => { setActiveCategory(''); setSearchParams({}); }}
            className={`block text-sm transition-colors ${
              !activeCategory ? 'text-gold-600 font-medium' : 'text-charcoal-100 hover:text-charcoal-400'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'text-gold-600 font-medium'
                  : 'text-charcoal-100 hover:text-charcoal-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-widest-xl font-sans font-medium text-charcoal-200 mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() =>
                setActivePriceRange((prev) =>
                  prev?.label === range.label ? null : range
                )
              }
              className={`block text-sm transition-colors ${
                activePriceRange?.label === range.label
                  ? 'text-gold-600 font-medium'
                  : 'text-charcoal-100 hover:text-charcoal-400'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-widest-xl font-sans font-medium text-charcoal-200 mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setActiveMaterial((prev) => (prev === m ? '' : m))}
              className={`block text-sm transition-colors ${
                activeMaterial === m
                  ? 'text-gold-600 font-medium'
                  : 'text-charcoal-100 hover:text-charcoal-400'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 bg-cream-50 min-h-screen">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto section-padding py-8 md:py-12">
        <div className="text-center mb-2">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-400 tracking-wide mb-2">
            {activeCategory
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'Shop All'}
          </h1>
          <p className="text-sm text-charcoal-50">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto section-padding pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-cream-200 pb-4">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest-xl font-sans font-medium text-charcoal-200"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Active filters on desktop */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap">
            {activeFilters.length > 0 ? (
              <>
                {activeFilters.map((f) => (
                  <button
                    key={f.label}
                    onClick={f.clear}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-cream-200 text-xs text-charcoal-200 hover:bg-cream-300 transition-colors"
                  >
                    {f.label}
                    <X className="w-3 h-3" />
                  </button>
                ))}
                <button
                  onClick={clearAll}
                  className="text-xs text-charcoal-50 hover:text-charcoal-400 underline ml-1"
                >
                  Clear all
                </button>
              </>
            ) : (
              <span className="text-xs text-charcoal-50">All products</span>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs uppercase tracking-widest-xl font-sans font-medium text-charcoal-200 pr-7 pl-1 py-1 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-charcoal-100 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-200 mb-2">No pieces found</p>
                <p className="text-sm text-charcoal-50 mb-6">Try adjusting your filters</p>
                <button onClick={clearAll} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal-500/40 backdrop-blur-sm"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-full bg-cream-50 shadow-2xl animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
              <h2 className="font-serif text-lg tracking-wider text-charcoal-400">Filters</h2>
              <button onClick={() => setShowMobileFilters(false)} className="p-2 -mr-2">
                <X className="w-5 h-5 text-charcoal-100" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar mobile />
              <button
                onClick={() => setShowMobileFilters(false)}
                className="btn-primary w-full text-center mt-6"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
