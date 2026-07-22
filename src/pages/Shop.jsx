import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const categories = [
  { value: 'all', label: 'All Pieces' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="bg-warm-white border-b border-stone py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-xs uppercase tracking-ultra-wide text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-ink">
            All Pieces
          </h1>
          <p className="font-inter text-sm text-taupe mt-4">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-stone">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-ink hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`font-inter text-[11px] uppercase tracking-widest px-4 py-2 border transition-colors duration-200 ${
                  selectedCategory === cat.value
                    ? 'bg-gold border-gold text-white'
                    : 'border-stone text-taupe hover:border-gold hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-inter text-[11px] uppercase tracking-widest text-taupe hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent font-inter text-[11px] uppercase tracking-widest text-ink pr-6 pl-1 py-1 border-b border-stone focus:outline-none focus:border-gold cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSection
                title="Price"
                options={priceRanges}
                selected={selectedPrice}
                onChange={setSelectedPrice}
              />
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="absolute inset-0 bg-charcoal/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-ivory p-6 rounded-t-lg animate-fadeIn">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-cormorant text-xl font-light text-ink">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-taupe" />
                  </button>
                </div>
                <div className="mb-6">
                  <p className="font-inter text-[11px] uppercase tracking-widest text-taupe mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => { setSelectedCategory(cat.value); setFilterOpen(false); }}
                        className={`font-inter text-[11px] uppercase tracking-widest px-3 py-2 border transition-colors ${
                          selectedCategory === cat.value
                            ? 'bg-gold border-gold text-white'
                            : 'border-stone text-taupe'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                <FilterSection
                  title="Price"
                  options={priceRanges}
                  selected={selectedPrice}
                  onChange={(v) => { setSelectedPrice(v); setFilterOpen(false); }}
                />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl font-light text-ink mb-3">No pieces found</p>
                <p className="font-inter text-sm text-taupe">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
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

function FilterSection({ title, options, selected, onChange }) {
  return (
    <div className="mb-8">
      <h4 className="font-inter text-[11px] uppercase tracking-widest text-taupe mb-4">{title}</h4>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`text-left font-inter text-xs transition-colors duration-200 ${
              selected === opt.value ? 'text-gold font-medium' : 'text-taupe hover:text-ink'
            }`}
          >
            {selected === opt.value && <span className="mr-2">✦</span>}
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
