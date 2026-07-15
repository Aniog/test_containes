import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') ? [searchParams.get('category')] : [],
    price: [],
    material: [],
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters((prev) => ({ ...prev, category: [category] }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    if (filters.price.length > 0) {
      result = result.filter((p) => {
        return filters.price.some((range) => {
          if (range === 'under-50') return p.price < 50;
          if (range === '50-75') return p.price >= 50 && p.price <= 75;
          if (range === '75-plus') return p.price > 75;
          return false;
        });
      });
    }

    if (filters.material.length > 0) {
      result = result.filter((p) => filters.material.includes(p.material));
    }

    switch (sortBy) {
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
  }, [filters, sortBy]);

  return (
    <div className="bg-ivory min-h-screen pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.16em] text-gold font-medium mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-base">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-56 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              isMobileOpen={mobileFiltersOpen}
              onCloseMobile={() => setMobileFiltersOpen(false)}
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-linen">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-medium text-base"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>
              <span className="hidden lg:block text-sm text-muted">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? 's' : ''}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.12em] text-muted hidden sm:inline">
                  Sort by
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-linen px-3 py-2 text-sm text-base focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-base mb-3">
                  No products match your filters
                </p>
                <p className="text-muted text-sm mb-6">
                  Try adjusting your selections to find your perfect piece.
                </p>
                <button
                  type="button"
                  onClick={() => setFilters({ category: [], price: [], material: [] })}
                  className="bg-base text-ivory px-6 py-3 text-xs uppercase tracking-[0.16em] font-medium hover:bg-base-soft transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
