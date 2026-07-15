import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [filters, setFilters] = useState({
    category: categoryParam || null,
    price: null,
    material: null,
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    if (categoryParam) {
      const catMap = { earrings: 'Earrings', necklaces: 'Necklaces', huggies: 'Huggies' };
      setFilters((prev) => ({ ...prev, category: catMap[categoryParam] || null }));
    }
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material);
    }
    if (filters.price) {
      const priceMap = {
        'Under $50': [0, 50],
        '$50 - $75': [50, 75],
        '$75 - $100': [75, 100],
        'Over $100': [100, Infinity],
      };
      const [min, max] = priceMap[filters.price] || [0, Infinity];
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return result;
  }, [filters, sortBy]);

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <div className="bg-cream-50 pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="container-page text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-3">
            {filters.category || 'All Jewelry'}
          </h1>
          <p className="text-charcoal-500 text-sm">
            {filteredProducts.length} pieces
          </p>
        </div>
      </div>

      <div className="container-page pb-20">
        <div className="flex gap-8 lg:gap-12">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFilterOpen}
            setMobileOpen={setMobileFilterOpen}
          />

          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal-200">
              <button
                className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase font-medium text-charcoal-600"
                onClick={() => setMobileFilterOpen(true)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>
              <div className="hidden md:block text-xs text-charcoal-400">
                {filteredProducts.length} results
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider uppercase font-medium text-charcoal-600 pr-6 cursor-pointer outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal-400" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-charcoal-500">No products match your filters.</p>
                <button
                  onClick={() => setFilters({ category: null, price: null, material: null })}
                  className="text-xs text-velvet-600 underline underline-offset-4 mt-3"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
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
