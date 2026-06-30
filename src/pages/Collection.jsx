import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 – $60' },
  { value: '60-100', label: '$60 – $100' },
  { value: '100+', label: '$100+' },
];

const materials = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold-plated', label: 'Gold Plated' },
  { value: 'silver-plated', label: 'Silver Plated' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activePrice, setActivePrice] = useState('all');
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.find((c) => c.value === cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice !== 'all') {
      result = result.filter((p) => {
        if (activePrice === '0-40') return p.price < 40;
        if (activePrice === '40-60') return p.price >= 40 && p.price <= 60;
        if (activePrice === '60-100') return p.price > 60 && p.price <= 100;
        if (activePrice === '100+') return p.price > 100;
        return true;
      });
    }

    if (activeMaterial !== 'all') {
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
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  const activeFiltersCount = [
    activeCategory !== 'all',
    activePrice !== 'all',
    activeMaterial !== 'all',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setActiveCategory('all');
    setActivePrice('all');
    setActiveMaterial('all');
    setSearchParams({});
  };

  const activeSortLabel = sortOptions.find((s) => s.value === sortBy)?.label;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs tracking-ultra uppercase text-gold mb-2">Browse</p>
            <h1 className="font-serif text-3xl md:text-4xl font-light">
              {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.value === activeCategory)?.label}
            </h1>
            <p className="mt-1 text-sm text-stone">{filtered.length} pieces</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-2.5 border border-divider text-xs tracking-wider uppercase hover:border-charcoal transition-colors"
              >
                Sort: {activeSortLabel}
                <ChevronDown size={14} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-1 w-48 bg-cream border border-divider shadow-lg z-50 py-1">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-xs hover:bg-warm transition-colors ${
                          sortBy === opt.value ? 'font-medium' : 'text-stone'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 px-4 py-2.5 border border-divider text-xs tracking-wider uppercase"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs tracking-widest uppercase font-medium">Filters</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-[11px] text-stone underline hover:text-gold transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-6">
                <p className="text-[11px] tracking-widest uppercase text-stone mb-2">Category</p>
                <div className="space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => {
                        setActiveCategory(cat.value);
                        if (cat.value === 'all') {
                          setSearchParams({});
                        } else {
                          setSearchParams({ category: cat.value });
                        }
                      }}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        activeCategory === cat.value ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-[11px] tracking-widest uppercase text-stone mb-2">Price</p>
                <div className="space-y-1.5">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setActivePrice(range.value)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        activePrice === range.value ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="text-[11px] tracking-widest uppercase text-stone mb-2">Material</p>
                <div className="space-y-1.5">
                  {materials.map((mat) => (
                    <button
                      key={mat.value}
                      onClick={() => setActiveMaterial(mat.value)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        activeMaterial === mat.value ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-sm text-gold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-charcoal/40" onClick={() => setFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-cream shadow-xl animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-divider">
              <h3 className="text-xs tracking-widest uppercase font-medium">Filters</h3>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X size={20} />
              </button>
            </div>
            <div className="p-5 space-y-6">
              <div>
                <p className="text-[11px] tracking-widest uppercase text-stone mb-2">Category</p>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => {
                        setActiveCategory(cat.value);
                        if (cat.value === 'all') setSearchParams({});
                        else setSearchParams({ category: cat.value });
                      }}
                      className={`block w-full text-left text-sm py-1 ${
                        activeCategory === cat.value ? 'font-medium' : 'text-stone'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] tracking-widest uppercase text-stone mb-2">Price</p>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setActivePrice(range.value)}
                      className={`block w-full text-left text-sm py-1 ${
                        activePrice === range.value ? 'font-medium' : 'text-stone'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] tracking-widest uppercase text-stone mb-2">Material</p>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat.value}
                      onClick={() => setActiveMaterial(mat.value)}
                      className={`block w-full text-left text-sm py-1 ${
                        activeMaterial === mat.value ? 'font-medium' : 'text-stone'
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-divider">
              <button
                onClick={() => { clearFilters(); setFiltersOpen(false); }}
                className="w-full py-3 border border-charcoal text-xs tracking-widest uppercase font-medium"
              >
                Clear All
              </button>
              <button
                onClick={() => setFiltersOpen(false)}
                className="w-full mt-3 py-3 bg-charcoal text-cream text-xs tracking-widest uppercase font-medium"
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
