import { useState, useMemo } from 'react';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

const categories = [
  { value: 'all', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'sets', label: 'Gift Sets' },
];

export default function ShopPage() {
  const [sort, setSort] = useState('featured');
  const [category, setCategory] = useState('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== 'all') list = list.filter((p) => p.category === category);
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [category, sort]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-base tracking-wide text-deepbrown mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => { setCategory(c.value); setMobileFilterOpen(false); }}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                category === c.value ? 'text-gold font-medium' : 'text-mocha/60 hover:text-mocha'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-base tracking-wide text-deepbrown mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'featured', label: 'All Prices' },
            { value: 'price-asc', label: '$30 – $60' },
            { value: 'price-desc', label: '$60 – $100+' },
          ].map((p) => (
            <button
              key={p.value}
              onClick={() => { setSort(p.value); setMobileFilterOpen(false); }}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                sort === p.value ? 'text-gold font-medium' : 'text-mocha/60 hover:text-mocha'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-base tracking-wide text-deepbrown mb-4">Material</h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver'].map((m) => (
            <button
              key={m}
              className="block w-full text-left font-sans text-sm text-mocha/60 hover:text-mocha transition-colors"
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 md:py-16 text-center">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">Shop All</p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deepbrown leading-tight">The Collection</h1>
        <p className="font-sans text-sm text-mocha/60 mt-4 max-w-md mx-auto">
          Explore our full range of demi-fine jewelry. Each piece crafted in 18K gold plate for everyday elegance.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-20 md:pb-28">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand/30">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-mocha hover:text-deepbrown transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>
              <span className="hidden md:block font-sans text-xs text-mocha/60">{filtered.length} products</span>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs text-mocha/60 hidden md:inline">Sort by</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent font-sans text-xs tracking-wider uppercase text-deepbrown pr-6 py-1 cursor-pointer focus:outline-none"
                  >
                    {sortOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-mocha pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-deepbrown mb-2">No products found</p>
                <p className="font-sans text-sm text-mocha/60">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[70] md:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deepbrown/40" onClick={() => setMobileFilterOpen(false)} />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-warmwhite rounded-t-2xl shadow-2xl transition-transform duration-400 p-6 pt-8 ${
            mobileFilterOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-lg tracking-wide text-deepbrown">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)} className="p-2 text-mocha">
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </main>
  );
}
