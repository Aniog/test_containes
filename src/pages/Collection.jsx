import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products.js';
import { useImageLoader } from '@/hooks/useImageLoader.js';
import ProductCard from '@/components/ProductCard.jsx';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $120', min: 80, max: 120 },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  );
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const containerRef = useImageLoader([
    selectedCategories.join(','),
    selectedPrice?.label,
    sort,
  ]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max,
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
  }, [selectedCategories, selectedPrice, sort]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice(null);
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs font-medium uppercase tracking-brand text-foreground">
          Category
        </h4>
        <ul className="mt-4 space-y-3">
          {categories.map((cat) => (
            <li key={cat} className="flex items-center gap-3">
              <button
                onClick={() => toggleCategory(cat)}
                className={`flex h-4 w-4 items-center justify-center rounded-sm border ${selectedCategories.includes(cat) ? 'border-foreground bg-foreground' : 'border-subtle'}`}
                aria-checked={selectedCategories.includes(cat)}
                role="checkbox"
              >
                {selectedCategories.includes(cat) && (
                  <span className="block h-1.5 w-1.5 bg-background" />
                )}
              </button>
              <span className="text-sm capitalize text-muted">{cat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-medium uppercase tracking-brand text-foreground">
          Price
        </h4>
        <ul className="mt-4 space-y-3">
          {priceRanges.map((range) => (
            <li key={range.label} className="flex items-center gap-3">
              <button
                onClick={() =>
                  setSelectedPrice(
                    selectedPrice?.label === range.label ? null : range,
                  )
                }
                className={`flex h-4 w-4 items-center justify-center rounded-full border ${selectedPrice?.label === range.label ? 'border-accent bg-accent' : 'border-subtle'}`}
                aria-checked={selectedPrice?.label === range.label}
                role="radio"
              >
                {selectedPrice?.label === range.label && (
                  <span className="block h-1.5 w-1.5 rounded-full bg-background" />
                )}
              </button>
              <span className="text-sm text-muted">{range.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-medium uppercase tracking-brand text-foreground">
          Material
        </h4>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li>18K Gold Plated</li>
          <li>Nickel-Free Brass</li>
          <li>Hypoallergenic</li>
        </ul>
      </div>

      <button
        onClick={clearFilters}
        className="text-xs uppercase tracking-brand text-accent hover:text-accent-hover transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-background py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-brand text-accent">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop sidebar */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <FilterContent />
          </aside>

          {/* Mobile filter drawer */}
          <div
            className={`fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity lg:hidden ${mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside
            className={`fixed left-0 top-0 z-50 h-full w-4/5 max-w-xs overflow-y-auto bg-background p-6 shadow-2xl transition-transform duration-300 lg:hidden ${mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-xl text-foreground">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={22} className="text-muted" />
              </button>
            </div>
            <FilterContent />
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between border-b border-subtle pb-4">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-xs uppercase tracking-brand text-foreground lg:hidden"
              >
                <SlidersHorizontal size={16} /> Filters
              </button>
              <p className="hidden text-sm text-muted lg:block">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="sort"
                  className="hidden text-xs uppercase tracking-brand text-muted sm:block"
                >
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-subtle bg-transparent px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-foreground">
                  No pieces match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-accent underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
                {filtered.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
