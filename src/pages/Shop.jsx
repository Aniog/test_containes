import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import products from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ProductGrid from '@/components/shop/ProductGrid';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: '',
    price: '',
  });
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleFilterChange = (key, value) => {
    if (key === 'clear') {
      setFilters({ category: '', material: '', price: '' });
      setSearchParams({});
    } else {
      setFilters((prev) => {
        const next = { ...prev, [key]: value };
        if (key === 'category' && value) {
          setSearchParams({ category: value });
        } else if (key === 'category' && !value) {
          setSearchParams({});
        }
        return next;
      });
    }
    setMobileFiltersOpen(false);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material);
    }
    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
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

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="py-10 md:py-14 text-center">
          <h1 className="serif-heading text-2xl md:text-3xl text-espresso">
            {filters.category
              ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1)
              : 'Shop All'}
          </h1>
          <p className="text-sm text-taupe mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Sort bar + mobile filter toggle */}
        <div className="flex items-center justify-between pb-6 border-b border-warm-sand mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-espresso"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <div className="hidden lg:block w-52" />

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-sm text-espresso pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-taupe" />
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-10 pb-20">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            mobileOpen={mobileFiltersOpen}
            onMobileClose={() => setMobileFiltersOpen(false)}
          />
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
