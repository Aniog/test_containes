import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/home/ProductCard';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const CATEGORIES = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const MATERIALS = [
  { value: '', label: 'All' },
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
];

const PRICE_RANGES = [
  { value: '', label: 'All' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: 'over-100', label: 'Over $100' },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const [material, setMaterial] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory, material, priceRange, sort]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      if (activeCategory === 'huggies') {
        result = result.filter((p) => p.name.toLowerCase().includes('huggie'));
      } else {
        result = result.filter((p) => p.category === activeCategory);
      }
    }

    if (priceRange === 'under-50') result = result.filter((p) => p.price < 50);
    if (priceRange === '50-100') result = result.filter((p) => p.price >= 50 && p.price <= 100);
    if (priceRange === 'over-100') result = result.filter((p) => p.price > 100);

    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, priceRange, sort]);

  const updateCategory = (value) => {
    if (value) {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setSearchParams({});
    setMaterial('');
    setPriceRange('');
    setSort('featured');
  };

  const hasActiveFilters = activeCategory || material || priceRange;

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Clear */}
      {hasActiveFilters && (
        <button onClick={clearFilters} className="text-xs text-velmora-gold font-sans tracking-wider uppercase flex items-center gap-1 hover:text-velmora-gold-dark transition-colors">
          <X className="w-3 h-3" /> Clear All Filters
        </button>
      )}

      {/* Category */}
      <div>
        <h4 className="text-[11px] font-sans tracking-widest uppercase text-velmora-espresso mb-4">Category</h4>
        <div className="flex flex-col gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => updateCategory(cat.value)}
              className={`text-left text-sm transition-colors ${activeCategory === cat.value ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray hover:text-velmora-espresso'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[11px] font-sans tracking-widest uppercase text-velmora-espresso mb-4">Price</h4>
        <div className="flex flex-col gap-2.5">
          {PRICE_RANGES.map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`text-left text-sm transition-colors ${priceRange === range.value ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray hover:text-velmora-espresso'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[11px] font-sans tracking-widest uppercase text-velmora-espresso mb-4">Material</h4>
        <div className="flex flex-col gap-2.5">
          {MATERIALS.map((mat) => (
            <button
              key={mat.value}
              onClick={() => setMaterial(mat.value)}
              className={`text-left text-sm transition-colors ${material === mat.value ? 'text-velmora-gold font-medium' : 'text-velmora-warm-gray hover:text-velmora-espresso'}`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-espresso mb-3">
          {activeCategory ? CATEGORIES.find((c) => c.value === activeCategory)?.label : 'Shop All'}
        </h1>
        <p className="text-sm text-velmora-warm-gray">{filteredProducts.length} pieces</p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-[200px] flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-stone/50">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs text-velmora-espresso font-sans tracking-wider uppercase"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-[11px] text-velmora-muted font-sans tracking-wider uppercase hidden md:inline">Sort by</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-velmora-stone px-3 py-2 pr-8 text-xs text-velmora-espresso font-sans tracking-wider uppercase rounded-sm cursor-pointer focus:outline-none focus:border-velmora-gold transition-colors"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-velmora-warm-gray pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-warm-gray text-sm mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">Clear Filters</button>
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

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[100] md:hidden" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-[300px] bg-velmora-cream z-[110] md:hidden animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone">
              <h3 className="font-serif text-lg tracking-wider text-velmora-espresso">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-velmora-warm-gray" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterContent />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
