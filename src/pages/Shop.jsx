import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS } from '@/data/products.js';
import ProductCard from '@/components/ui/ProductCard.jsx';

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $120', min: 80, max: 120 },
];

const CATEGORIES = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const MATERIALS = [
  { id: 'gold-plated', label: '18K Gold Plated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const initialCategory = searchParams.get('category') || '';
  const initialPrice = searchParams.get('price') || '';
  const initialSort = searchParams.get('sort') || 'featured';

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  );
  const [selectedPrice, setSelectedPrice] = useState(initialPrice);
  const [sort, setSort] = useState(initialSort);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length === 1) params.set('category', selectedCategories[0]);
    if (selectedPrice) params.set('price', selectedPrice);
    if (sort !== 'featured') params.set('sort', sort);
    setSearchParams(params, { replace: true });
  }, [selectedCategories, selectedPrice, sort, setSearchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrice) {
      const range = PRICE_RANGES.find((r) => r.label === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max);
      }
    }

    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategories, selectedPrice, sort]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice('');
    setSort('featured');
  };

  const activeFiltersCount =
    selectedCategories.length + (selectedPrice ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs uppercase tracking-widest text-gold">Category</h4>
        <div className="mt-4 space-y-3">
          {CATEGORIES.map((cat) => (
            <label key={cat.id} className="flex cursor-pointer items-center gap-3 text-sm text-ink">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="h-4 w-4 accent-gold"
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-widest text-gold">Price</h4>
        <div className="mt-4 space-y-3">
          {PRICE_RANGES.map((range) => (
            <label key={range.label} className="flex cursor-pointer items-center gap-3 text-sm text-ink">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === range.label}
                onChange={() => setSelectedPrice(range.label)}
                className="h-4 w-4 accent-gold"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-widest text-gold">Material</h4>
        <div className="mt-4 space-y-3">
          {MATERIALS.map((mat) => (
            <label key={mat.id} className="flex cursor-pointer items-center gap-3 text-sm text-ink">
              <input
                type="checkbox"
                checked
                readOnly
                className="h-4 w-4 accent-gold"
              />
              {mat.label}
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          className="text-xs uppercase tracking-widest text-stone underline transition hover:text-ink"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-cream pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-widest text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Desktop Sidebar */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-28 border border-warm-gray bg-white p-6">
              <h3 className="font-serif text-xl text-ink">Filters</h3>
              <div className="mt-6">
                <FilterContent />
              </div>
            </div>
          </aside>

          {/* Mobile filter toggle + sort */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-warm-gray bg-white px-4 py-2 text-xs uppercase tracking-widest text-ink"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 rounded-full bg-gold px-1.5 py-0.5 text-[9px] text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-warm-gray bg-white px-3 py-2 text-xs uppercase tracking-widest text-ink focus:border-gold focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-ink/40"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-80 bg-cream p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-ink">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={22} />
                  </button>
                </div>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="text-sm text-stone">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-warm-gray bg-white px-3 py-2 text-xs uppercase tracking-widest text-ink focus:border-gold focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="border border-warm-gray bg-white py-20 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-widest text-gold underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    query={`[product-${product.id}-title]`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
