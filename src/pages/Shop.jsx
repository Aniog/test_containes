import { useState, useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ProductGrid from '@/components/shop/ProductGrid';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
];

export default function Shop() {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: null,
    materials: [],
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const priceRangeMap = {
    under50: { min: 0, max: 50 },
    '50to75': { min: 50, max: 75 },
    '75to100': { min: 75, max: 100 },
    over100: { min: 100, max: Infinity },
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Price filter
    if (filters.priceRange) {
      const range = priceRangeMap[filters.priceRange];
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Material filter
    if (filters.materials.length > 0) {
      result = result.filter((p) =>
        p.variants.some((v) => filters.materials.includes(v.toLowerCase()))
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-warm-charcoal">
              All Jewelry
            </h1>
            <p className="text-sm text-warm-gray mt-1">{filteredProducts.length} pieces</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter button */}
            <button
              className="md:hidden flex items-center gap-1.5 text-xs uppercase tracking-widest text-warm-charcoal hover:text-gold transition-colors"
              onClick={() => setMobileFilterOpen(true)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs uppercase tracking-widest bg-transparent border border-beige px-3 py-2 text-warm-charcoal focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-8 md:gap-12">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFilterOpen}
            onClose={() => setMobileFilterOpen(false)}
          />

          <div className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-warm-gray">No pieces match your filters. Try a different combination.</p>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}