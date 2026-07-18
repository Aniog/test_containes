import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, sortOptions } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ProductCard from '@/components/home/ProductCard';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: '',
    price: '',
  });
  const [sort, setSort] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filters, sort]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.material) {
      result = result.filter((p) => p.colors.includes(filters.material));
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
      case 'newest':
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [filters, sort]);

  return (
    <div ref={containerRef} className="pt-28 pb-20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-velvet-900 tracking-wide">
            {filters.category
              ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1)
              : 'All Jewelry'}
          </h1>
          <p className="mt-3 text-velvet-500 text-sm tracking-wide">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter + sort bar */}
        <div className="md:hidden flex items-center justify-between mb-6 pb-4 border-b border-velvet-200">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 text-xs tracking-wider uppercase text-velvet-600"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none text-xs tracking-wider uppercase text-velvet-600 bg-transparent pr-6 focus:outline-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velvet-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFilterOpen}
            setMobileOpen={setMobileFilterOpen}
          />

          {/* Main content */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-8 pb-4 border-b border-velvet-200">
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none text-xs tracking-wider uppercase text-velvet-500 bg-transparent pr-6 focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velvet-400 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-400 text-sm">No products match your filters.</p>
                <button
                  onClick={() => setFilters({ category: '', material: '', price: '' })}
                  className="mt-4 text-xs tracking-wider uppercase text-velvet-600 hover:text-velvet-900 underline underline-offset-4 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}