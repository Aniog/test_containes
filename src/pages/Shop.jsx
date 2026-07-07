import { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
];

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: '100-200', label: 'Over $100' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get('category') || '';
  const { addItem } = useCart();
  const [filters, setFilters] = useState({
    category: urlCategory,
    price: '',
    material: '',
  });
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filters, sort]);

  useEffect(() => {
    setFilters((f) => ({ ...f, category: urlCategory }));
  }, [urlCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material);
    }
    if (filters.price === '0-50') {
      result = result.filter((p) => p.price <= 50);
    } else if (filters.price === '50-100') {
      result = result.filter((p) => p.price > 50 && p.price <= 100);
    } else if (filters.price === '100-200') {
      result = result.filter((p) => p.price > 100);
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

  const clearFilters = () => {
    setFilters({ category: '', price: '', material: '' });
  };

  const hasActiveFilters = filters.category || filters.price || filters.material;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-velmora-deep mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilters((f) => ({ ...f, category: c.value }))}
              className={`block text-sm transition-colors ${
                filters.category === c.value ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-deep'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-velmora-deep mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((p) => (
            <button
              key={p.value}
              onClick={() => setFilters((f) => ({ ...f, price: p.value }))}
              className={`block text-sm transition-colors ${
                filters.price === p.value ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-deep'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-wider uppercase text-velmora-rose hover:text-velmora-deep transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl lg:text-4xl tracking-wide text-velmora-deep mb-4">
            {filters.category ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1) : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="flex gap-10">
          {/* Desktop filter sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-velmora-border">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-deep"
              >
                <SlidersHorizontal size={14} />
                Filters
                {hasActiveFilters && (
                  <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
                )}
              </button>

              <p className="text-xs text-velmora-stone hidden lg:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="flex items-center gap-2 ml-auto">
                <label htmlFor="sort" className="text-xs text-velmora-stone hidden sm:block">Sort by:</label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs text-velmora-deep bg-transparent border border-velmora-border rounded-sm px-3 py-2 focus:outline-none focus:border-velmora-gold"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] bg-velmora-creme rounded-sm overflow-hidden mb-4">
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[shop-name-${product.id}] gold jewelry editorial`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p id={`shop-name-${product.id}`} className="text-xs tracking-wider uppercase font-serif text-velmora-deep leading-snug">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <div className="flex items-center">
                        <Star size={11} className="fill-velmora-gold text-velmora-gold" />
                        <span className="text-[11px] text-velmora-stone ml-1">{product.rating}</span>
                      </div>
                      <span className="text-[11px] text-velmora-stone">({product.reviewCount})</span>
                    </div>
                    <p className="text-sm font-medium text-velmora-deep mt-1">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-velmora-stone text-sm">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs tracking-wider uppercase text-velmora-gold hover:text-velmora-goldDark transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div className="absolute inset-0 bg-velmora-deep/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-velmora-ivory p-6 shadow-2xl animate-slide-in overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-lg tracking-wider">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-velmora-deep">
                <X size={20} />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}
