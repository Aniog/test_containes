import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ProductGrid from '@/components/shop/ProductGrid';

const priceRanges = {
  'All Prices': { min: 0, max: Infinity },
  'Under $50': { min: 0, max: 50 },
  '$50 – $100': { min: 50, max: 100 },
  'Over $100': { min: 100, max: Infinity },
};

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Best Rating'];

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [filters, setFilters] = useState({
    category: categoryParam,
    material: 'All',
    price: 'All Prices',
  });
  const [sort, setSort] = useState('Featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filters, sort]);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, category: categoryParam }));
  }, [categoryParam]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category !== 'All') {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.material !== 'All') {
      result = result.filter((p) => p.material === filters.material);
    }
    const range = priceRanges[filters.price];
    if (range) {
      result = result.filter((p) => p.price >= range.min && p.price <= range.max);
    }

    switch (sort) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Best Rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters, sort]);

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-8 md:pt-32">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-velmora-muted mb-3">Explore</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-black">
            {filters.category === 'All' ? 'Shop All' : filters.category}
          </h1>
          <div className="w-12 h-px bg-velmora-gold/60 mx-auto mt-5" />
          <p className="mt-4 text-sm text-velmora-muted">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-10">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFilterOpen}
            setMobileOpen={setMobileFilterOpen}
          />

          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-sand/40">
              <button
                className="lg:hidden flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-velmora-muted hover:text-velmora-black transition-colors"
                onClick={() => setMobileFilterOpen(true)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>

              <div className="hidden lg:block" />

              <div className="relative group">
                <button className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-velmora-muted hover:text-velmora-black transition-colors">
                  Sort: {sort}
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-velmora-sand/40 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSort(opt)}
                      className={`block w-full text-left px-4 py-2.5 text-xs hover:bg-velmora-sand/30 transition-colors ${
                        sort === opt ? 'text-velmora-gold font-medium' : 'text-velmora-muted'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <ProductGrid products={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
}
