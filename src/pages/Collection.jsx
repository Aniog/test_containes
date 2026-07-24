import { useState, useMemo } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import FilterSidebar from '../components/collection/FilterSidebar';

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'name-asc', label: 'Name: A–Z' },
];

export default function Collection() {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all',
    material: 'all',
  });
  const [sort, setSort] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const priceRanges = {
    all: { min: 0, max: Infinity },
    under50: { min: 0, max: 50 },
    '50to80': { min: 50, max: 80 },
    over80: { min: 80, max: Infinity },
  };

  const filtered = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price filter
    const range = priceRanges[filters.price] || priceRanges.all;
    result = result.filter((p) => p.price >= range.min && p.price < range.max);

    // Material filter
    if (filters.material !== 'all') {
      result = result.filter((p) =>
        p.material.toLowerCase().includes(filters.material.toLowerCase())
      );
    }

    // Sort
    switch (sort) {
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
  }, [filters, sort]);

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            All Jewelry
          </h1>
          <p className="mt-2 text-warm-gray text-sm">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isMobileOpen={mobileFilterOpen}
            closeMobile={() => setMobileFilterOpen(false)}
          />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm text-charcoal/70 hover:text-charcoal transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <div className="hidden md:block" />

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-charcoal/70 pr-6 py-1 cursor-pointer border-b border-border-light hover:border-charcoal/30 focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-charcoal/50 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-gray font-serif text-lg">No pieces match your filters</p>
                <button
                  onClick={() =>
                    setFilters({ category: 'all', price: 'all', material: 'all' })
                  }
                  className="mt-4 text-sm tracking-[0.1em] uppercase text-gold hover:text-gold-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}