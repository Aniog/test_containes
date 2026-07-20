import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/product/ProductCard';
import { CATEGORIES, MATERIALS, PRODUCTS } from '@/data/products';
import { cn } from '@/lib/utils';
import { SlidersHorizontal, X } from 'lucide-react';

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to high' },
  { id: 'price-desc', label: 'Price: High to low' },
  { id: 'rating', label: 'Top rated' },
];

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function CollectionHero({ category, containerRef }) {
  const label = category
    ? CATEGORIES.find((c) => c.id === category)?.label
    : 'All Jewelry';
  return (
    <div
      ref={containerRef}
      className="relative h-[44vh] min-h-[320px] w-full overflow-hidden bg-espresso"
    >
      <div
        data-strk-bg-id={`collection-hero-${category || 'all'}`}
        data-strk-bg={`editorial flat lay of ${label ? label.toLowerCase() : 'gold jewelry'} on linen, soft warm light, premium still life, wide composition`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/10 to-espresso/60" />
      <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col items-center justify-end px-5 pb-10 pt-24 text-center text-bone sm:px-8 lg:px-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-bone/85">
          Velmora
        </p>
        <h1 className="mt-3 font-serif text-5xl font-light tracking-tight sm:text-6xl">
          {label}
        </h1>
        <p className="mt-3 max-w-md text-sm text-bone/85">
          {category
            ? `A considered edit of our ${label.toLowerCase()}, hand-finished in 18K gold plate.`
            : 'Demi-fine jewelry, hand-finished in 18K gold plate. Made to be worn — and treasured — for years.'}
        </p>
      </div>
    </div>
  );
}

function FilterPanel({
  category,
  setCategory,
  priceMax,
  setPriceMax,
  materials,
  setMaterials,
  onClose,
}) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso">
          Category
        </h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <button
              onClick={() => setCategory(null)}
              className={cn(
                'text-sm transition-colors duration-300',
                !category
                  ? 'text-espresso underline underline-offset-4'
                  : 'text-mink hover:text-espresso'
              )}
            >
              All jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => setCategory(c.id)}
                className={cn(
                  'text-sm transition-colors duration-300',
                  category === c.id
                    ? 'text-espresso underline underline-offset-4'
                    : 'text-mink hover:text-espresso'
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso">
          Price
        </h3>
        <div className="mt-4">
          <input
            type="range"
            min="20"
            max="120"
            step="5"
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full accent-espresso"
            aria-label="Maximum price"
          />
          <div className="mt-1 flex items-center justify-between text-[11px] text-mink">
            <span>$20</span>
            <span className="font-medium text-espresso">Up to ${priceMax}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso">
          Material
        </h3>
        <ul className="mt-4 space-y-2.5">
          {MATERIALS.map((m) => {
            const checked = materials.includes(m.id);
            return (
              <li key={m.id}>
                <label className="flex cursor-pointer items-center gap-3 text-sm text-mink hover:text-espresso">
                  <span
                    className={cn(
                      'flex h-4 w-4 items-center justify-center border transition-colors duration-200',
                      checked ? 'border-espresso bg-espresso text-bone' : 'border-sand'
                    )}
                  >
                    {checked && (
                      <svg
                        viewBox="0 0 12 12"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 6.5l2.5 2.5L10 3.5" />
                      </svg>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() =>
                      setMaterials((prev) =>
                        prev.includes(m.id)
                          ? prev.filter((x) => x !== m.id)
                          : [...prev, m.id]
                      )
                    }
                  />
                  {m.label}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="border border-espresso px-5 py-3 text-[10px] font-medium uppercase tracking-[0.24em] text-espresso hover:bg-espresso hover:text-bone"
        >
          Apply filters
        </button>
      )}
    </div>
  );
}

export default function Shop() {
  const { category: routeCategory } = useParams();
  useDocumentTitle(
    routeCategory
      ? `${CATEGORIES.find((c) => c.id === routeCategory)?.label || 'Shop'} · Velmora`
      : 'Shop · Velmora'
  );

  const [category, setCategory] = useState(routeCategory || null);
  const [priceMax, setPriceMax] = useState(120);
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState('featured');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setCategory(routeCategory || null);
  }, [routeCategory]);

  // Populate the collection hero background image via the stock image system.
  useEffect(() => {
    const container = heroRef.current;
    if (!container) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, container);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [routeCategory]);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (category) list = list.filter((p) => p.category === category);
    list = list.filter((p) => p.price <= priceMax);
    if (materials.length) list = list.filter((p) => materials.includes(p.material));

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
  }, [category, priceMax, materials, sort]);

  return (
    <div>
      <CollectionHero category={routeCategory} containerRef={heroRef} />

      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sand py-5">
          <button
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-espresso md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.25} />
            Filter
          </button>
          <div className="text-[11px] text-mink">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </div>
          <div className="flex items-center gap-3">
            <label
              htmlFor="sort"
              className="hidden text-[10px] uppercase tracking-[0.24em] text-mink sm:inline"
            >
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-sand bg-bone px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-espresso focus:border-espresso focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-12 md:gap-12 md:py-14">
          <aside className="hidden md:col-span-3 md:block">
            <div className="sticky top-28">
              <FilterPanel
                category={category}
                setCategory={setCategory}
                priceMax={priceMax}
                setPriceMax={setPriceMax}
                materials={materials}
                setMaterials={setMaterials}
              />
            </div>
          </aside>

          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-16 text-center">
                <p className="font-serif text-2xl text-espresso">
                  Nothing here, yet.
                </p>
                <p className="mt-2 text-sm text-mink">
                  Try widening your filters — or check back soon.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-x-8">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 z-[100] flex md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="relative ml-auto flex h-full w-[88%] max-w-sm flex-col bg-bone px-6 py-6">
            <div className="flex items-center justify-between border-b border-sand pb-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso">
                Filter
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close filters"
                className="p-1 text-mink hover:text-espresso"
              >
                <X className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-6">
              <FilterPanel
                category={category}
                setCategory={setCategory}
                priceMax={priceMax}
                setPriceMax={setPriceMax}
                materials={materials}
                setMaterials={setMaterials}
                onClose={() => setDrawerOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
