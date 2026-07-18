import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import FilterSidebar from '@/components/collection/FilterSidebar';
import ProductCard from '@/components/collection/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || null,
    priceRange: null,
    material: null,
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filters, sortBy]);

  // Filter products
  let filtered = [...products];

  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category);
  }

  if (filters.priceRange !== null) {
    const ranges = [
      { min: 0, max: 50 },
      { min: 50, max: 75 },
      { min: 75, max: 999 },
    ];
    const range = ranges[filters.priceRange];
    filtered = filtered.filter((p) => p.price >= range.min && p.price <= range.max);
  }

  if (filters.material) {
    filtered = filtered.filter((p) => p.variants.includes(filters.material));
  }

  // Sort
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text tracking-wide">
          {filters.category ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1) : 'All Jewelry'}
        </h1>
        <p className="text-velmora-muted mt-2 text-sm">{filtered.length} piece{filtered.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex gap-8">
          {/* Desktop filter sidebar */}
          <div className="hidden md:block flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              products={products}
              mobileOpen={false}
              setMobileOpen={() => {}}
            />
          </div>

          {/* Mobile filter button */}
          <div className="md:hidden fixed bottom-6 right-6 z-30">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="bg-velmora-dark text-white p-3 shadow-soft flex items-center gap-2"
            >
              <SlidersHorizontal size={18} />
              <span className="text-xs tracking-widest uppercase">Filters</span>
            </button>
          </div>

          {/* Mobile filter sidebar - hidden on desktop */}
          <div className="md:hidden">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              products={products}
              mobileOpen={mobileFiltersOpen}
              setMobileOpen={setMobileFiltersOpen}
            />
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-border">
              <p className="text-sm text-velmora-muted">{filtered.length} results</p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-velmora-text pr-6 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-text mb-2">No pieces found</p>
                <p className="text-sm text-velmora-muted">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
