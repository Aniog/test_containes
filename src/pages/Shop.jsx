import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
  { label: 'Sets', value: 'sets' },
];

const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50', value: 'under50' },
  { label: '$50 – $70', value: '50to70' },
  { label: 'Over $70', value: 'over70' },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'priceAsc' },
  { label: 'Price: High to Low', value: 'priceDesc' },
  { label: 'Top Rated', value: 'rating' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePrice, setActivePrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (activePrice === 'under50') {
      list = list.filter((p) => p.price < 50);
    } else if (activePrice === '50to70') {
      list = list.filter((p) => p.price >= 50 && p.price <= 70);
    } else if (activePrice === 'over70') {
      list = list.filter((p) => p.price > 70);
    }

    if (sortBy === 'priceAsc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [activeCategory, activePrice, sortBy]);

  const FilterContent = () => (
    <>
      <div className="mb-8">
        <h4 className="text-xs font-medium tracking-widest uppercase text-lightgray mb-4">Category</h4>
        <div className="flex flex-col gap-2.5">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setActiveCategory(c.value)}
              className={`text-left text-sm transition-colors ${
                activeCategory === c.value ? 'text-charcoal font-medium' : 'text-warmgray hover:text-charcoal'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-medium tracking-widest uppercase text-lightgray mb-4">Price</h4>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map((p) => (
            <button
              key={p.value}
              onClick={() => setActivePrice(p.value)}
              className={`text-left text-sm transition-colors ${
                activePrice === p.value ? 'text-charcoal font-medium' : 'text-warmgray hover:text-charcoal'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 md:py-10">
        <h1 className="font-serif text-3xl md:text-4xl mb-2">Shop All</h1>
        <p className="text-sm text-warmgray mb-8">{filtered.length} products</p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filter Overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-charcoal/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-72 bg-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                    <X size={20} />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm font-medium tracking-wide"
              >
                <SlidersHorizontal size={16} strokeWidth={1.5} />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-lightgray hidden sm:inline">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm bg-transparent border hairline px-3 py-2 outline-none focus:border-charcoal transition-colors"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warmgray">No products match your filters.</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePrice('all'); }}
                  className="mt-4 text-sm tracking-widest uppercase text-gold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
