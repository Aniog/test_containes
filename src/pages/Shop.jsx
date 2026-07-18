import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { PRODUCTS, CATEGORIES, formatPrice } from '@/data/products';
import { ProductCard } from '@/components/shared/ProductCard';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const MATERIALS = ['Gold Plated', 'Sterling Silver', 'Stainless Steel'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useImageLoader([searchParams.toString()]);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && Object.values(CATEGORIES).includes(category)) {
      setSelectedCategories([category]);
    }
  }, [searchParams]);

  const toggle = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some(
          (rangeIndex) => {
            const range = PRICE_RANGES[Number(rangeIndex)];
            return p.price >= range.min && p.price <= range.max;
          },
        ),
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        selectedMaterials.some((m) =>
          p.materials.toLowerCase().includes(m.toLowerCase()),
        ),
      );
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const FilterPanel = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-24'}>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink">
          Filters
        </h3>
        <button
          type="button"
          onClick={clearFilters}
          className="text-xs text-ink-muted underline underline-offset-2 hover:text-ink"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-ink">
            Category
          </h4>
          <div className="space-y-2">
            {Object.entries(CATEGORIES).map(([label, value]) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-2 text-sm text-ink-muted hover:text-ink"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-gold"
                  checked={selectedCategories.includes(value)}
                  onChange={() => toggle(value, selectedCategories, setSelectedCategories)}
                />
                {label.charAt(0) + label.slice(1).toLowerCase()}
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-hairline pt-6">
          <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-ink">
            Price
          </h4>
          <div className="space-y-2">
            {PRICE_RANGES.map((range, index) => (
              <label
                key={range.label}
                className="flex cursor-pointer items-center gap-2 text-sm text-ink-muted hover:text-ink"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-gold"
                  checked={selectedPrices.includes(String(index))}
                  onChange={() => toggle(String(index), selectedPrices, setSelectedPrices)}
                />
                {range.label}
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-hairline pt-6">
          <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-ink">
            Material
          </h4>
          <div className="space-y-2">
            {MATERIALS.map((material) => (
              <label
                key={material}
                className="flex cursor-pointer items-center gap-2 text-sm text-ink-muted hover:text-ink"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-gold"
                  checked={selectedMaterials.includes(material)}
                  onChange={() => toggle(material, selectedMaterials, setSelectedMaterials)}
                />
                {material}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main ref={containerRef} className="min-h-screen bg-cream pb-16 md:pb-24">
      <div className="border-b border-hairline bg-cream pt-24 pb-8 md:pt-28 md:pb-10">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Discover
          </p>
          <h1 className="mt-2 font-serif text-4xl text-ink md:text-5xl">
            Shop All Jewelry
          </h1>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] gap-8 px-4 pt-8 md:px-8 lg:px-12">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <FilterPanel />
        </aside>

        {/* Product grid */}
        <section className="flex-1">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-ink-muted">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 border border-hairline px-4 py-2 text-xs font-medium uppercase tracking-widest text-ink lg:hidden"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="hidden text-xs text-ink-muted sm:inline">
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-hairline bg-paper px-3 py-2 text-xs uppercase tracking-wider text-ink outline-none focus:border-gold"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="border border-hairline bg-paper py-20 text-center">
              <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 border-b border-ink pb-1 text-xs font-medium uppercase tracking-widest text-ink"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 animate-slideInRight overflow-y-auto bg-paper p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-ink">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-ink"
              >
                <X size={20} />
              </button>
            </div>
            <FilterPanel mobile />
          </div>
        </div>
      )}
    </main>
  );
}
