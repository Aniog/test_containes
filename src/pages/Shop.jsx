import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ShopGrid from '@/components/shop/ShopGrid';
import products from '@/data/products';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: 'all',
    material: 'all',
  });
  const [sort, setSort] = useState('featured');
  const [mobileFilters, setMobileFilters] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setFilters((f) => ({ ...f, category: cat }));
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.price === 'under-50') {
      result = result.filter((p) => p.price < 50);
    } else if (filters.price === '50-100') {
      result = result.filter((p) => p.price >= 50 && p.price <= 100);
    } else if (filters.price === 'over-100') {
      result = result.filter((p) => p.price > 100);
    }
    if (filters.material === 'crystal') {
      result = result.filter((p) => p.material.toLowerCase().includes('crystal'));
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
  }, [filters, sort]);

  const categoryLabel = filters.category === 'all' ? 'All Jewelry' : filters.category.charAt(0).toUpperCase() + filters.category.slice(1);

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-2">{categoryLabel}</h1>
          <p className="text-sm text-charcoal-400">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop filters */}
          <div className="hidden md:block">
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Mobile filters overlay */}
          {mobileFilters && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFilters(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto animate-slide-in-right">
                <FilterSidebar filters={filters} onFilterChange={setFilters} onClose={() => setMobileFilters(false)} />
              </div>
            </div>
          )}

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFilters(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal-600"
              >
                <SlidersHorizontal size={13} />
                Filters
              </button>

              <div className="flex items-center gap-8 ml-auto">
                <span className="hidden md:block text-xs text-charcoal-400">{filtered.length} results</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent text-xs tracking-widest uppercase text-charcoal-600 pr-6 cursor-pointer focus:outline-none"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <ShopGrid products={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;