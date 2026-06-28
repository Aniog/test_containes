import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const MATERIALS = ['Gold', 'Silver'];
const PRICE_RANGES = [
  { id: 'any', label: 'Any price', min: 0, max: Infinity },
  { id: '0-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: '80-plus', label: '$80 and up', min: 80, max: Infinity },
];
const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
];

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCollection = searchParams.get('collection');

  const [category, setCategory] = useState(() => {
    if (!initialCollection) return 'All';
    const match = CATEGORIES.find(
      (c) => c.toLowerCase() === initialCollection.toLowerCase()
    );
    return match || 'All';
  });
  const [materials, setMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState('any');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Keep URL in sync with category
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (category === 'All') {
      next.delete('collection');
    } else {
      next.set('collection', category.toLowerCase());
    }
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== 'All') {
      list = list.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (materials.length > 0) {
      list = list.filter((p) => p.variants.some((v) => materials.includes(v)));
    }
    const range = PRICE_RANGES.find((r) => r.id === priceRange);
    if (range) {
      list = list.filter((p) => p.price >= range.min && p.price <= range.max);
    }
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
        list.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
    }
    return list;
  }, [category, materials, priceRange, sort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  const toggleMaterial = (m) =>
    setMaterials((curr) =>
      curr.includes(m) ? curr.filter((x) => x !== m) : [...curr, m]
    );

  const Sidebar = (
    <div className="space-y-10">
      <div>
        <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-ink mb-5">Category</h3>
        <ul className="space-y-3">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                onClick={() => setCategory(c)}
                className={`text-sm transition-colors ${
                  category === c
                    ? 'text-velmora-ink border-b border-velmora-ink'
                    : 'text-velmora-muted hover:text-velmora-ink'
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-ink mb-5">Price</h3>
        <ul className="space-y-3">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  className="accent-velmora-gold"
                  checked={priceRange === r.id}
                  onChange={() => setPriceRange(r.id)}
                />
                <span
                  className={
                    priceRange === r.id ? 'text-velmora-ink' : 'text-velmora-muted'
                  }
                >
                  {r.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-ink mb-5">Material</h3>
        <ul className="space-y-3">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-velmora-gold"
                  checked={materials.includes(m)}
                  onChange={() => toggleMaterial(m)}
                />
                <span
                  className={
                    materials.includes(m) ? 'text-velmora-ink' : 'text-velmora-muted'
                  }
                >
                  {m}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-velmora-cream pt-24 md:pt-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-10 pb-6 border-b border-velmora-line">
        <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-3">
          The Collection
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-light text-velmora-ink">
          {category === 'All' ? 'All Jewelry' : category}
        </h1>
        <p className="mt-3 text-velmora-muted max-w-xl">
          Demi-fine, 18K gold-plated, made to be worn every day.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Sidebar — desktop */}
        <aside className="hidden md:block md:col-span-3 lg:col-span-2 pr-6">
          {Sidebar}
        </aside>

        {/* Main */}
        <div className="md:col-span-9 lg:col-span-10">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-velmora-muted">{filtered.length} pieces</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.25em] border border-velmora-line px-4 py-2"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
              <label className="flex items-center gap-3 text-xs uppercase tracking-[0.25em]">
                <span className="hidden sm:inline text-velmora-muted">Sort</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-velmora-line py-2 px-3 text-velmora-ink focus:outline-none focus:border-velmora-ink"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-velmora-ink">No pieces match those filters.</p>
              <button
                onClick={() => {
                  setCategory('All');
                  setMaterials([]);
                  setPriceRange('any');
                }}
                className="mt-6 text-xs uppercase tracking-[0.3em] border-b border-velmora-ink pb-1"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6 md:gap-y-12">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div
          className="fixed inset-0 z-[80] bg-velmora-ink/50 md:hidden"
          onClick={() => setMobileFiltersOpen(false)}
        >
          <div
            className="absolute bottom-0 left-0 right-0 bg-velmora-cream p-6 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {Sidebar}
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-velmora-ink text-velmora-cream py-4 text-xs uppercase tracking-[0.25em]"
            >
              Show {filtered.length} pieces
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
