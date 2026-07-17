import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import products, { categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

const materialOptions = [
  { value: 'gold', label: '18K Gold Plated' },
  { value: 'silver', label: 'Silver Tone' },
];

const priceRanges = [
  { value: 'under-50', label: 'Under $50', filter: (p) => p.price < 50 },
  { value: '50-100', label: '$50 – $100', filter: (p) => p.price >= 50 && p.price <= 100 },
  { value: 'over-100', label: 'Over $100', filter: (p) => p.price > 100 },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activeSort = searchParams.get('sort') || 'featured';
  const activeMaterials = searchParams.getAll('material');
  const activePrice = searchParams.get('price') || '';

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const toggleMaterial = (value) => {
    const next = new URLSearchParams(searchParams);
    const current = next.getAll('material');
    next.delete('material');
    if (current.includes(value)) {
      current.filter((v) => v !== value).forEach((v) => next.append('material', v));
    } else {
      [...current, value].forEach((v) => next.append('material', v));
    }
    setSearchParams(next);
  };

  let filtered = products;

  if (activeCategory) {
    filtered = filtered.filter((p) => p.category === activeCategory || p.category === activeCategory);
  }

  if (activeMaterials.length > 0) {
    filtered = filtered.filter((p) => p.colors.some((c) => activeMaterials.includes(c)));
  }

  if (activePrice) {
    const range = priceRanges.find((r) => r.value === activePrice);
    if (range) filtered = filtered.filter(range.filter);
  }

  // Sort
  const sorted = [...filtered];
  switch (activeSort) {
    case 'price-low':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const clearAll = () => setSearchParams({});

  const hasFilters = activeCategory || activeMaterials.length > 0 || activePrice;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-serif text-xs tracking-widest uppercase text-espresso mb-4">Category</h3>
        <div className="space-y-3">
          <button
            onClick={() => updateParam('category', '')}
            className={`block text-sm transition-colors ${
              !activeCategory ? 'text-espresso font-medium' : 'text-warm hover:text-espresso'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateParam('category', cat.slug)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.slug ? 'text-espresso font-medium' : 'text-warm hover:text-espresso'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-serif text-xs tracking-widest uppercase text-espresso mb-4">Material</h3>
        <div className="space-y-3">
          {materialOptions.map((mat) => (
            <label key={mat.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={activeMaterials.includes(mat.value)}
                onChange={() => toggleMaterial(mat.value)}
                className="w-3.5 h-3.5 border-cream-200 text-gold focus:ring-gold cursor-pointer"
              />
              <span className="text-sm text-warm">{mat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-serif text-xs tracking-widest uppercase text-espresso mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateParam('price', activePrice === range.value ? '' : range.value)}
              className={`block text-sm transition-colors ${
                activePrice === range.value ? 'text-espresso font-medium' : 'text-warm hover:text-espresso'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-xs text-gold underline hover:text-gold-500 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl lg:text-4xl tracking-widest uppercase text-espresso">
              Shop All
            </h1>
            <p className="text-sm text-warm mt-2">{sorted.length} pieces</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFilters(true)}
              className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-super text-warm hover:text-espresso transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
              {hasFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={activeSort}
                onChange={(e) => updateParam('sort', e.target.value)}
                className="appearance-none bg-transparent text-xs uppercase tracking-super text-warm hover:text-espresso transition-colors pr-5 py-1 cursor-pointer focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-warm pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {sorted.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm text-sm">No products match your filters.</p>
                <button onClick={clearAll} className="mt-3 text-gold text-xs underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {sorted.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div className="fixed inset-0 bg-espresso/40 z-[80] lg:hidden" onClick={() => setMobileFilters(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-[90] lg:hidden px-6 py-8 rounded-t-2xl shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-widest uppercase">Filters</h3>
              <button onClick={() => setMobileFilters(false)}>
                <X className="w-5 h-5 text-warm" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFilters(false)}
              className="w-full mt-8 bg-espresso text-cream py-3 text-xs uppercase tracking-super font-medium"
            >
              Show {sorted.length} results
            </button>
          </div>
        </>
      )}
    </div>
  );
}
