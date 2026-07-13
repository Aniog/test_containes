import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(
    categories.find(c => c.toLowerCase() === initialCategory) || 'All'
  );
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    result = result.filter(p => p.price >= selectedPrice.min && p.price <= selectedPrice.max);

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  const activeFilters = [
    selectedCategory !== 'All' && selectedCategory,
    selectedPrice.label !== 'All Prices' && selectedPrice.label,
  ].filter(Boolean);

  return (
    <div className="bg-parchment min-h-screen">
      {/* Page header */}
      <div className="pt-28 pb-16 text-center" style={{ backgroundColor: '#1A1714' }}>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: '#C9A96E' }}>
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: '#F5F0E8' }}>The Collection</h1>
        <p className="font-sans text-sm max-w-md mx-auto" style={{ color: '#C8C0B5' }}>
          18K gold plated, hypoallergenic, designed to be worn every day.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter + Sort bar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-linen">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="lg:hidden flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-ink hover:text-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Result count */}
            <p className="font-sans text-sm text-ink-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>

            {/* Active filter chips */}
            {activeFilters.map(f => (
              <span key={f} className="hidden md:flex items-center gap-1.5 font-sans text-xs text-gold border border-gold px-3 py-1">
                {f}
                <button onClick={() => {
                  if (categories.includes(f)) setSelectedCategory('All');
                  else setSelectedPrice(priceRanges[0]);
                }}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-ink hover:text-gold transition-colors"
            >
              Sort: {sortOptions.find(s => s.value === sortBy)?.label}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-cream border border-linen shadow-card-hover z-20">
                {sortOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-sans text-xs uppercase tracking-widest transition-colors ${
                      sortBy === opt.value ? 'text-gold bg-parchment' : 'text-ink-muted hover:text-gold hover:bg-parchment'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0 space-y-8">
            {/* Category */}
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink mb-4">Category</h3>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`font-sans text-sm transition-colors duration-200 ${
                        selectedCategory === cat ? 'text-gold font-semibold' : 'text-ink-muted hover:text-gold'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink mb-4">Price</h3>
              <ul className="space-y-2">
                {priceRanges.map(range => (
                  <li key={range.label}>
                    <button
                      onClick={() => setSelectedPrice(range)}
                      className={`font-sans text-sm transition-colors duration-200 ${
                        selectedPrice.label === range.label ? 'text-gold font-semibold' : 'text-ink-muted hover:text-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material */}
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink mb-4">Material</h3>
              <ul className="space-y-2">
                {['18K Gold Plated', 'Silver Tone'].map(m => (
                  <li key={m}>
                    <button className="font-sans text-sm text-ink-muted hover:text-gold transition-colors duration-200">
                      {m}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-cream overflow-y-auto">
              <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
                <h2 className="font-serif text-xl text-ink">Filters</h2>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-5 h-5 text-ink-muted" />
                </button>
              </div>
              <div className="px-6 py-8 space-y-8">
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink mb-4">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`font-sans text-xs font-semibold uppercase tracking-widest px-4 py-2 border transition-all ${
                          selectedCategory === cat ? 'border-gold bg-gold text-obsidian' : 'border-linen text-ink-muted'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink mb-4">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map(range => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPrice(range)}
                        className={`font-sans text-xs font-semibold uppercase tracking-widest px-4 py-2 border transition-all ${
                          selectedPrice.label === range.label ? 'border-gold bg-gold text-obsidian' : 'border-linen text-ink-muted'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-full bg-gold text-obsidian font-sans text-xs font-semibold uppercase tracking-widest py-4"
                >
                  View {filtered.length} Results
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-3xl text-ink mb-4">No pieces found</p>
                <p className="font-sans text-sm text-ink-muted mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSelectedPrice(priceRanges[0]); }}
                  className="font-sans text-xs font-semibold uppercase tracking-widest text-gold border-b border-gold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
