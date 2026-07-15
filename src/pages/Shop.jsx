import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { useStrkImages } from '@/lib/useStrkImages';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

const categoryOptions = ['Earrings', 'Necklaces', 'Huggies'];
const materialOptions = ['18K Gold Plated'];
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const ref = useStrkImages([selectedCategories, selectedPrice, selectedMaterials, sort]);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategories([cat]);
  }, [searchParams]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (m) => {
    setSelectedMaterials((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedPrice(null);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPrice) {
      list = list.filter(
        (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max
      );
    }
    if (selectedMaterials.length) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
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
        break;
    }
    return list;
  }, [selectedCategories, selectedPrice, selectedMaterials, sort]);

  const hasFilters =
    selectedCategories.length || selectedPrice || selectedMaterials.length;

  const FilterPanel = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">
          Category
        </h3>
        <ul className="mt-4 space-y-3">
          {categoryOptions.map((cat) => (
            <li key={cat}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-stone">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="h-4 w-4 accent-gold"
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">Price</h3>
        <ul className="mt-4 space-y-3">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-stone">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice?.label === range.label}
                  onChange={() => setSelectedPrice(range)}
                  className="h-4 w-4 accent-gold"
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink">
          Material
        </h3>
        <ul className="mt-4 space-y-3">
          {materialOptions.map((m) => (
            <li key={m}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-stone">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m)}
                  onChange={() => toggleMaterial(m)}
                  className="h-4 w-4 accent-gold"
                />
                {m}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters ? (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-widest2 text-gold transition-colors hover:text-gold-deep"
        >
          Clear All Filters
        </button>
      ) : null}
    </div>
  );

  return (
    <div ref={ref} className="pt-20">
      {/* Header */}
      <section className="border-b border-hairline bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 md:py-20">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            The Collection
          </p>
          <h1
            id="shop-title"
            className="mt-3 font-serif text-5xl text-ink md:text-6xl"
          >
            Shop All
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Demi-fine gold jewelry, crafted to be treasured and made to be worn
            every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-60 shrink-0 md:block">
            <div className="sticky top-28">
              <div className="mb-6 flex items-center gap-2">
                <SlidersHorizontal width={16} height={16} className="text-ink" />
                <h2 className="text-[11px] uppercase tracking-widest2 text-ink">
                  Filters
                </h2>
              </div>
              {FilterPanel}
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between border-b border-hairline pb-4">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink md:hidden"
                >
                  <SlidersHorizontal width={14} height={14} />
                  Filters
                </button>
                <p className="text-[11px] uppercase tracking-widest2 text-stone">
                  {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-[11px] uppercase tracking-widest2 text-stone-light">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-hairline bg-cream px-3 py-2 text-xs text-ink focus:border-gold focus:outline-none"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="mt-2 text-sm text-stone">
                  Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 border border-ink px-8 py-3 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    sectionTitleId="shop-title"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-cream p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[11px] uppercase tracking-widest2 text-ink">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X width={20} height={20} />
              </button>
            </div>
            {FilterPanel}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 text-[11px] uppercase tracking-widest2 text-white transition-colors hover:bg-gold-deep"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
