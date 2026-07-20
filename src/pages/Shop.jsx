import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/lib/data';
import FilterSidebar from '@/components/collection/FilterSidebar';
import ProductGrid from '@/components/collection/ProductGrid';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [filters, setFilters] = useState({
    categories: categoryParam ? [categoryParam] : [],
    materials: [],
    priceRange: null,
  });
  const [sort, setSort] = useState('featured');
  const [mobileFilters, setMobileFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Material filter
    if (filters.materials.length > 0) {
      result = result.filter((p) => filters.materials.includes(p.material));
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default: // featured - keep original order
        break;
    }

    return result;
  }, [filters, sort]);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 md:py-14">
        <h1 className="serif-heading text-3xl md:text-4xl text-espresso mb-3">
          Shop All
        </h1>
        <p className="text-umber text-sm max-w-lg">
          Explore our full collection of demi-fine gold jewelry. Each piece is crafted to be
          treasured.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28">
        {/* Mobile filter button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setMobileFilters(true)}
            className="inline-flex items-center gap-2 btn-outline text-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
            {(filters.categories.length > 0 ||
              filters.materials.length > 0 ||
              filters.priceRange) && (
              <span className="w-5 h-5 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center">
                {filters.categories.length + filters.materials.length + (filters.priceRange ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        <div className="flex gap-10">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFilters}
            setMobileOpen={setMobileFilters}
          />
          <ProductGrid products={filteredProducts} sort={sort} setSort={setSort} />
        </div>
      </div>
    </div>
  );
}
