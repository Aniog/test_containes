import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';
import ProductCard from '@/components/product/ProductCard';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50-75', label: '$50 – $75', test: (p) => p.price >= 50 && p.price <= 75 },
  { id: 'over-75', label: 'Over $75', test: (p) => p.price > 75 },
];

const materials = ['18K Gold Plated'];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const pageRef = useReveal();

  const activeCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    setFiltersOpen(false);
  }, [activeCategory]);

  const setCategory = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: cat }, { replace: true });
    }
  };

  const toggle = (list, setList, value) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (selectedPrices.length) {
      result = result.filter((p) => priceRanges.some((r) => selectedPrices.includes(r.id) && r.test(p)));
    }
    if (selectedMaterials.length) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }
    switch (sort) {
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
  }, [activeCategory, selectedPrices, selectedMaterials, sort]);

  const clearAll = () => {
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setCategory('All');
  };

  const hasFilters = selectedPrices.length > 0 || selectedMaterials.length > 0 || activeCategory !== 'All';

  const filterPanel = (
    <div className="space-y-9">
      <div>
        <h3 className="text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-gold">
          Category
        </h3>
        <ul className="mt-4 space-y-2.5">
          {['All', ...categories].map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => setCategory(cat)}
                className={`font-sans text-sm transition-colors duration-300 ${
                  activeCategory === cat ? 'text-gold' : 'text-sand hover:text-ivory'
                }`}
              >
                {cat === 'All' ? 'All Jewelry' : cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-umber pt-8">
        <h3 className="text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-gold">
          Price
        </h3>
        <ul className="mt-4 space-y-3">
          {priceRanges.map((range) => (
            <li key={range.id}>
              <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-sand transition-colors hover:text-ivory">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range.id)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, range.id)}
                  className="h-3.5 w-3.5 appearance-none border border-umber bg-transparent transition-colors checked:border-gold checked:bg-gold"
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-umber pt-8">
        <h3 className="text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-gold">
          Material
        </h3>
        <ul className="mt-4 space-y-3">
          {materials.map((mat) => (
            <li key={mat}>
              <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-sand transition-colors hover:text-ivory">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => toggle(selectedMaterials, setSelectedMaterials, mat)}
                  className="h-3.5 w-3.5 appearance-none border border-umber bg-transparent transition-colors checked:border-gold checked:bg-gold"
                />
                {mat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="border-b border-gold/50 pb-1 text-[10px] font-sans uppercase tracking-[0.22em] text-gold transition-colors hover:text-goldlight"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={pageRef} className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-10 md:pt-32">
      <header className="reveal max-w-2xl">
        <p className="text-[11px] font-sans font-medium uppercase tracking-[0.28em] text-gold">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-ivory md:text-5xl">
          {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-sand">
          Demi-fine pieces in warm 18K gold — designed in our atelier, made to be lived in.
        </p>
      </header>

      <div className="mt-10 flex items-center justify-between border-y border-umber py-4">
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="flex items-center gap-2 text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-ivory transition-colors hover:text-gold lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
        <p className="hidden font-sans text-xs uppercase tracking-[0.18em] text-sand lg:block">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
            className="appearance-none border border-umber bg-noir py-2.5 pl-4 pr-10 font-sans text-xs uppercase tracking-[0.14em] text-ivory transition-colors focus:border-gold focus:outline-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gold" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28">{filterPanel}</div>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center border border-umber py-24 text-center">
              <p className="font-serif text-2xl text-ivory">No pieces match your filters</p>
              <p className="mt-2 font-sans text-sm text-sand">Try widening your selection.</p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 border border-gold/60 px-8 py-3 text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-noir"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${filtersOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!filtersOpen}
      >
        <div
          onClick={() => setFiltersOpen(false)}
          className={`absolute inset-0 bg-noir/70 backdrop-blur-sm transition-opacity duration-500 ${
            filtersOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-full max-w-xs flex-col border-r border-umber bg-onyx transition-transform duration-500 ease-out ${
            filtersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          role="dialog"
          aria-label="Product filters"
        >
          <div className="flex items-center justify-between border-b border-umber px-6 py-5">
            <h2 className="font-serif text-lg uppercase tracking-[0.25em] text-ivory">Filters</h2>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
              className="p-1.5 text-sand transition-colors hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-8">{filterPanel}</div>
          <div className="border-t border-umber px-6 py-5">
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="w-full bg-gold py-3.5 text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-noir transition-colors hover:bg-goldlight"
            >
              View {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
