import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(
    categories.find((c) => c.toLowerCase() === initialCategory) || 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory.toLowerCase());
    }
    list = list.filter((p) => p.price >= activePriceRange.min && p.price <= activePriceRange.max);
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, activePriceRange, sortBy]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  const FilterSidebar = () => (
    <aside className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-4">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-sm transition-colors text-left w-full ${
                  activeCategory === cat
                    ? 'text-gold font-medium'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="divider-gold" />

      {/* Price */}
      <div>
        <h3 className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-4">
          Price
        </h3>
        <ul className="flex flex-col gap-2">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <button
                onClick={() => setActivePriceRange(range)}
                className={`font-inter text-sm transition-colors text-left w-full ${
                  activePriceRange.label === range.label
                    ? 'text-gold font-medium'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="divider-gold" />

      {/* Material */}
      <div>
        <h3 className="font-inter text-[10px] uppercase tracking-widest text-warm-gray mb-4">
          Material
        </h3>
        <ul className="flex flex-col gap-2">
          {['18K Gold Plated', 'Sterling Silver'].map((mat) => (
            <li key={mat}>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 accent-gold"
                  defaultChecked={mat === '18K Gold Plated'}
                />
                <span className="font-inter text-sm text-charcoal group-hover:text-gold transition-colors">
                  {mat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );

  return (
    <div className="bg-ivory min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-cream border-b border-gold/15 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
            Velmora
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-obsidian">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-warm-gray mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-charcoal border border-gold/30 px-4 py-2.5 hover:border-gold transition-colors"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-inter text-xs uppercase tracking-widest text-charcoal border border-gold/30 px-4 py-2.5 pr-8 focus:outline-none focus:border-gold"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Product grid */}
          <div className="flex-1" ref={containerRef}>
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="font-inter text-xs text-warm-gray">
                {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent font-inter text-xs uppercase tracking-widest text-charcoal border border-gold/30 px-4 py-2.5 pr-8 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-warm-gray">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(priceRanges[0]); }}
                  className="mt-4 font-inter text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    imageSlot={
                      <>
                        <img
                          data-strk-img-id={product.imgId}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
                        />
                        <img
                          data-strk-img-id={product.img2Id}
                          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${product.name} alternate view`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
                        />
                      </>
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-obsidian/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-72 bg-ivory px-6 py-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="font-cormorant text-xl uppercase tracking-widest text-obsidian">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-warm-gray hover:text-obsidian">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  );
}
