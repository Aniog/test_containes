import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS, formatPrice, getCategoryLabel } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { FilterSidebar } from '@/components/shop/FilterSidebar';
import { Sheet, SheetHeader, SheetBody } from '@/components/ui/Sheet';
import { cn } from '@/lib/utils';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function matchesFilters(product, filters) {
  if (filters.category.length > 0 && !filters.category.includes(product.category)) {
    return false;
  }
  if (filters.material.length > 0 && !filters.material.includes(product.material)) {
    return false;
  }
  if (
    filters.price.length > 0 &&
    !filters.price.some((range) => product.price >= range.min && product.price <= range.max)
  ) {
    return false;
  }
  return true;
}

function sortProducts(products, sort) {
  switch (sort) {
    case 'price-asc':
      return [...products].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...products].sort((a, b) => b.price - a.price);
    case 'rating':
      return [...products].sort((a, b) => b.rating - a.rating);
    default:
      return products;
  }
}

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [filters, setFilters] = useState({
    category: categoryParam ? [categoryParam] : [],
    material: [],
    price: [],
  });
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      setFilters((f) => ({ ...f, category: [categoryParam] }));
    }
  }, [categoryParam]);

  const filtered = useMemo(
    () => sortProducts(PRODUCTS.filter((p) => matchesFilters(p, filters)), sort),
    [filters, sort]
  );

  const activeFilterCount =
    filters.category.length + filters.material.length + filters.price.length;

  return (
    <div className="animate-fade-in">
      <div className="border-b border-velmora-base/10 bg-velmora-cream px-4 pb-12 pt-28 text-center sm:px-6 lg:px-8">
        <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.28em] text-velmora-gold">
          {categoryParam ? getCategoryLabel(categoryParam) : 'All Jewelry'}
        </span>
        <h1 className="font-serif text-4xl text-velmora-base sm:text-5xl lg:text-6xl">
          {categoryParam ? getCategoryLabel(categoryParam) : 'The Collection'}
        </h1>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 pb-6">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-velmora-gold text-[10px] text-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-velmora-taupe sm:inline">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 border border-velmora-base/15 bg-transparent px-3 font-sans text-xs uppercase tracking-widest text-velmora-base focus:border-velmora-gold focus:outline-none"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <div className="hidden lg:block">
            <FilterSidebar filters={filters} onChange={setFilters} />
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="font-serif text-2xl text-velmora-base">No pieces found</p>
              <p className="mt-2 text-sm text-velmora-taupe">
                Try adjusting your filters to discover more jewelry.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Sheet open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)}>
        <SheetHeader onClose={() => setMobileFiltersOpen(false)}>
          <h2 className="font-serif text-xl uppercase tracking-widest text-velmora-base">
            Filters
          </h2>
        </SheetHeader>
        <SheetBody className="py-6">
          <FilterSidebar
            filters={filters}
            onChange={(newFilters) => {
              setFilters(newFilters);
              setMobileFiltersOpen(false);
            }}
          />
        </SheetBody>
      </Sheet>
    </div>
  );
}
