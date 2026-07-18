import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => p.price >= PRICE_RANGES[priceRange].min && p.price <= PRICE_RANGES[priceRange].max)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const handleCategory = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-gold/15 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-obsidian tracking-wide">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-warm-gray mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-gold/15">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`font-inter text-[10px] tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-200 ${
                  category === cat
                    ? 'bg-obsidian text-ivory border-obsidian'
                    : 'border-gold/30 text-charcoal hover:border-gold hover:text-gold'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs tracking-[0.1em] uppercase text-charcoal"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-gold/30 text-charcoal font-inter text-xs tracking-[0.08em] px-4 py-2 pr-8 outline-none cursor-pointer hover:border-gold transition-colors"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category */}
              <div className="mb-8">
                <h3 className="font-inter text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-4">
                  Category
                </h3>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategory(cat)}
                      className={`text-left font-inter text-xs transition-colors duration-200 ${
                        category === cat ? 'text-gold' : 'text-charcoal hover:text-gold'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 pt-6 border-t border-gold/15">
                <h3 className="font-inter text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-4">
                  Price
                </h3>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(i)}
                      className={`text-left font-inter text-xs transition-colors duration-200 ${
                        priceRange === i ? 'text-gold' : 'text-charcoal hover:text-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-ivory animate-fadeIn">
              <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
                <span className="font-cormorant text-lg tracking-widest2 text-obsidian">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={20} strokeWidth={1.5} className="text-charcoal" />
                </button>
              </div>
              <div className="px-6 py-6">
                <h3 className="font-inter text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-4">Category</h3>
                <div className="flex flex-col gap-3 mb-8">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { handleCategory(cat); setFilterOpen(false); }}
                      className={`text-left font-inter text-sm ${category === cat ? 'text-gold' : 'text-charcoal'}`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
                <h3 className="font-inter text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-4">Price</h3>
                <div className="flex flex-col gap-3">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => { setPriceRange(i); setFilterOpen(false); }}
                      className={`text-left font-inter text-sm ${priceRange === i ? 'text-gold' : 'text-charcoal'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-charcoal mb-2">No pieces found</p>
                <p className="font-inter text-xs text-warm-gray">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
