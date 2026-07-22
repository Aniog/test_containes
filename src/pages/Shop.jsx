import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const materials = ['18K Gold Plated', 'Sterling Silver', 'Velvet'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const toggle = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((label) => {
          const range = priceRanges.find((r) => r.label === label);
          return range && p.price >= range.min && p.price < range.max;
        })
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const activeFiltersCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          Category
        </h4>
        <ul className="space-y-2.5">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-ink-soft">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggle(cat, selectedCategories, setSelectedCategories)}
                  className="h-4 w-4 accent-ink"
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          Price
        </h4>
        <ul className="space-y-2.5">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-ink-soft">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range.label)}
                  onChange={() => toggle(range.label, selectedPrices, setSelectedPrices)}
                  className="h-4 w-4 accent-ink"
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          Material
        </h4>
        <ul className="space-y-2.5">
          {materials.map((mat) => (
            <li key={mat}>
              <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-ink-soft">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => toggle(mat, selectedMaterials, setSelectedMaterials)}
                  className="h-4 w-4 accent-ink"
                />
                {mat}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream">
      {/* Hero banner */}
      <div className="relative h-[40vh] min-h-[280px] overflow-hidden bg-ink">
        <img
          data-strk-img-id="shop-hero"
          data-strk-img="[shop-hero-title] [shop-hero-subtitle]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Shop Velmora"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-cream">
          <h1
            id="shop-hero-title"
            className="font-serif text-4xl font-medium md:text-6xl"
          >
            The Collection
          </h1>
          <p
            id="shop-hero-subtitle"
            className="mt-3 max-w-md font-sans text-sm font-light text-cream/80"
          >
            Demi-fine pieces designed for everyday luxury.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
        <div className="flex items-center justify-between border-b border-cream-dark pb-4">
          <p className="font-sans text-sm text-ink-soft">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-cream-dark px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink md:hidden"
            >
              <SlidersHorizontal size={14} />
              Filter {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none border border-cream-dark bg-transparent py-2 pl-4 pr-10 font-sans text-xs uppercase tracking-wider text-ink focus:border-ink focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden w-60 flex-shrink-0 md:block">
            <div className="sticky top-24">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-serif text-xl font-medium text-ink">Filters</h3>
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedPrices([]);
                      setSelectedMaterials([]);
                    }}
                    className="text-xs text-ink-soft underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter drawer */}
          <div
            className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity md:hidden ${
              mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside
            className={`fixed bottom-0 left-0 top-0 z-[70] w-80 max-w-[85vw] overflow-y-auto bg-cream p-6 shadow-2xl transition-transform duration-500 ease-out md:hidden ${
              mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-xl font-medium text-ink">Filters</h3>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={22} strokeWidth={1.5} className="text-ink" />
              </button>
            </div>
            <FilterContent />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-ink py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream"
            >
              Show {filtered.length} Results
            </button>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedPrices([]);
                    setSelectedMaterials([]);
                  }}
                  className="mt-4 text-sm uppercase tracking-wider text-gold-deep underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product}>
                    <img
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`${product.description} ${product.name} Velmora Collection`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </ProductCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
