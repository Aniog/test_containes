import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
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
  }, [activeCategory, activeSort]);

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="section-title">Shop All</h1>
          <p className="mt-3 text-sm font-sans text-charcoal-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-700 mb-4">Category</h3>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => updateParams('category', cat.id)}
                        className={`text-sm font-sans transition-colors ${
                          activeCategory === cat.id
                            ? 'text-charcoal-900 underline underline-offset-4'
                            : 'text-charcoal-500 hover:text-charcoal-700'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-700 mb-4">Price</h3>
                <ul className="space-y-3">
                  {['Under $50', '$50 – $75', '$75 – $100', 'Over $100'].map((range) => (
                    <li key={range}>
                      <button className="text-sm font-sans text-charcoal-500 hover:text-charcoal-700 transition-colors">
                        {range}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-700 mb-4">Material</h3>
                <ul className="space-y-3">
                  {['18K Gold Plated', 'Crystal'].map((mat) => (
                    <li key={mat}>
                      <button className="text-sm font-sans text-charcoal-500 hover:text-charcoal-700 transition-colors">
                        {mat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs font-sans uppercase tracking-[0.1em] text-charcoal-700"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              <div className="hidden md:block" />

              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.1em] text-charcoal-700"
                >
                  Sort: {sortOptions.find((s) => s.value === activeSort)?.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-8 z-20 bg-cream-50 border border-warm-200 shadow-lg p-2 min-w-[180px]">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { updateParams('sort', opt.value); setSortOpen(false); }}
                        className={`block w-full text-left px-3 py-2 text-xs font-sans transition-colors ${
                          activeSort === opt.value
                            ? 'text-charcoal-900 bg-warm-100'
                            : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-warm-50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-500">No products found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-xs font-sans uppercase tracking-[0.15em] underline text-charcoal-700"
                >
                  Clear filters
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

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-cream-50 rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-charcoal-600" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-700 mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateParams('category', cat.id)}
                      className={`px-4 py-2 text-xs font-sans border transition-all ${
                        activeCategory === cat.id
                          ? 'border-charcoal-900 bg-charcoal-900 text-cream-50'
                          : 'border-warm-300 text-charcoal-600'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-700 mb-3">Price</h4>
                <div className="flex flex-wrap gap-2">
                  {['Under $50', '$50–$75', '$75–$100', 'Over $100'].map((range) => (
                    <button
                      key={range}
                      className="px-4 py-2 text-xs font-sans border border-warm-300 text-charcoal-600"
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sort dropdown overlay close */}
      {sortOpen && (
        <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
      )}
    </div>
  );
}