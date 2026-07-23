import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { ALL_PRODUCTS, CATEGORIES } from '@/data/products.js';
import { ImageScope } from '@/components/StrkImage.jsx';
import ProductCard from '@/components/product/ProductCard.jsx';
import strkImgConfig from '@/strk-img-config.json';

const PRICE_FILTERS = [
  { id: 'all', label: 'All prices', test: () => true },
  { id: 'under50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50to75', label: '$50 – $75', test: (p) => p.price >= 50 && p.price <= 75 },
  { id: 'over75', label: 'Over $75', test: (p) => p.price > 75 },
];

const MATERIAL_FILTERS = [
  { id: 'all', label: 'All finishes' },
  { id: 'gold', label: '18K Gold Tone' },
  { id: 'silver', label: 'Silver Tone' },
];

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-linen py-5">
      <h3 className="text-[11px] font-medium uppercase tracking-luxe text-espresso">{title}</h3>
      <div className="mt-4 space-y-2.5">{children}</div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'All';
  const [price, setPrice] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFilters, setMobileFilters] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, headerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const setCategory = (cat) => {
    if (cat === 'All') searchParams.delete('category');
    else searchParams.set('category', cat);
    setSearchParams(searchParams, { replace: true });
  };

  const products = useMemo(() => {
    const priceTest = PRICE_FILTERS.find((f) => f.id === price).test;
    let list = ALL_PRODUCTS.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (material === 'all' || p.material === material) &&
        priceTest(p),
    );
    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        list = [...list].sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }
    return list;
  }, [category, price, material, sort]);

  const filters = (
    <>
      <FilterGroup title="Category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`block text-sm transition-colors duration-200 ${
              category === cat ? 'font-medium text-bronze-dark' : 'text-umber hover:text-espresso'
            }`}
          >
            {cat}
          </button>
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_FILTERS.map((f) => (
          <label key={f.id} className="flex cursor-pointer items-center gap-2.5 text-sm">
            <input
              type="radio"
              name="price"
              checked={price === f.id}
              onChange={() => setPrice(f.id)}
              className="h-3.5 w-3.5 accent-bronze"
            />
            <span className={price === f.id ? 'font-medium text-espresso' : 'text-umber'}>
              {f.label}
            </span>
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIAL_FILTERS.map((f) => (
          <label key={f.id} className="flex cursor-pointer items-center gap-2.5 text-sm">
            <input
              type="radio"
              name="material"
              checked={material === f.id}
              onChange={() => setMaterial(f.id)}
              className="h-3.5 w-3.5 accent-bronze"
            />
            <span className={material === f.id ? 'font-medium text-espresso' : 'text-umber'}>
              {f.label}
            </span>
          </label>
        ))}
      </FilterGroup>
    </>
  );

  return (
    <div className="pt-16 md:pt-[72px]">
      {/* Page header */}
      <div
        ref={headerRef}
        className="relative overflow-hidden border-b border-linen bg-espresso py-14 md:py-20"
        data-strk-bg-id="shop-header-bg"
        data-strk-bg="luxurious flat lay of gold jewelry collection on dark warm fabric, editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="pointer-events-none absolute inset-0 bg-espresso/70" />
        <div className="relative mx-auto max-w-7xl px-5 text-center md:px-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze-light">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-ivory md:text-5xl">
            {category === 'All' ? 'All Jewelry' : category}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-ivory/75">
            {products.length} {products.length === 1 ? 'piece' : 'pieces'} · crafted in small
            batches, finished in warm 18K gold.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-3">
          <button
            onClick={() => setMobileFilters(true)}
            className="flex items-center gap-2 border border-espresso px-5 py-2.5 text-[11px] font-medium uppercase tracking-luxe text-espresso lg:hidden"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters
          </button>
          <p className="hidden text-xs text-mink lg:block">
            Showing {products.length} {products.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              className="appearance-none border border-linen bg-ivory py-2.5 pl-4 pr-10 text-xs font-medium uppercase tracking-[0.14em] text-espresso focus:border-bronze focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-mink" />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">{filters}</div>
          </aside>

          {/* Grid */}
          <div>
            {products.length === 0 ? (
              <div className="border border-linen bg-cream/50 px-6 py-20 text-center">
                <p className="font-serif text-2xl text-espresso">No pieces match those filters</p>
                <p className="mt-2 text-sm text-mink">Try widening your price range or finish.</p>
                <button
                  onClick={() => {
                    setCategory('All');
                    setPrice('all');
                    setMaterial('all');
                  }}
                  className="mt-6 border border-espresso px-8 py-3 text-[11px] font-medium uppercase tracking-luxe text-espresso transition-all hover:bg-espresso hover:text-ivory"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <ImageScope
                className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6"
                deps={[category, price, material, sort]}
              >
                {products.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </ImageScope>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-300 lg:hidden ${
          mobileFilters ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-espresso/50" onClick={() => setMobileFilters(false)} />
        <div
          className={`absolute left-0 top-0 h-full w-[300px] overflow-y-auto bg-ivory px-6 pb-24 pt-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileFilters ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-linen pb-4">
            <span className="font-serif text-lg uppercase tracking-[0.18em] text-espresso">Filters</span>
            <button aria-label="Close filters" onClick={() => setMobileFilters(false)}>
              <X className="h-5 w-5 text-espresso" strokeWidth={1.5} />
            </button>
          </div>
          {filters}
          <button
            onClick={() => setMobileFilters(false)}
            className="mt-6 w-full bg-espresso py-4 text-[11px] font-medium uppercase tracking-luxe text-ivory"
          >
            View {products.length} {products.length === 1 ? 'Piece' : 'Pieces'}
          </button>
        </div>
      </div>
    </div>
  );
}
