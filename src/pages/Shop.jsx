import { useEffect, useRef, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ShopProductCard from '../components/shop/ShopProductCard';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];


export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  };

  const filteredProducts = products
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .filter((p) => {
      if (activePriceRange === 'all') return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return max ? p.price >= min && p.price <= max : p.price >= min;
    })
    .sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price;
      if (activeSort === 'price-desc') return b.price - a.price;
      if (activeSort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, activeSort]);

  return (
    <div className="bg-velmora-linen min-h-screen">
      {/* Page header */}
      <div className="bg-velmora-obsidian pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] tracking-widest-xl uppercase text-velmora-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-linen tracking-wide">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-velmora-ash">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-velmora-obsidian border border-velmora-sand px-4 py-2.5 hover:border-velmora-obsidian transition-colors"
          >
            <SlidersHorizontal size={13} />
            Filters
          </button>

          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setParam('category', cat.value)}
                className={`text-[10px] font-medium tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat.value
                    ? 'bg-velmora-obsidian text-velmora-linen border-velmora-obsidian'
                    : 'border-velmora-sand text-velmora-stone hover:border-velmora-obsidian hover:text-velmora-obsidian'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative ml-auto">
            <select
              value={activeSort}
              onChange={(e) => setParam('sort', e.target.value)}
              className="appearance-none bg-velmora-linen border border-velmora-sand text-xs tracking-widest uppercase text-velmora-obsidian px-4 py-2.5 pr-8 focus:outline-none focus:border-velmora-obsidian cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-ash pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-[10px] font-semibold tracking-widest uppercase text-velmora-obsidian mb-4">Category</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <button
                        onClick={() => setParam('category', cat.value)}
                        className={`text-sm transition-colors duration-200 ${
                          activeCategory === cat.value
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-stone hover:text-velmora-obsidian'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-velmora-sand pt-6">
                <h3 className="text-[10px] font-semibold tracking-widest uppercase text-velmora-obsidian mb-4">Price</h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => setParam('price', range.value)}
                        className={`text-sm transition-colors duration-200 ${
                          activePriceRange === range.value
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-stone hover:text-velmora-obsidian'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-velmora-linen overflow-y-auto">
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl text-velmora-obsidian">Filters</h2>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={20} className="text-velmora-obsidian" />
                  </button>
                </div>

                <div className="mb-8">
                  <h3 className="text-[10px] font-semibold tracking-widest uppercase text-velmora-obsidian mb-4">Category</h3>
                  <ul className="space-y-3">
                    {categories.map((cat) => (
                      <li key={cat.value}>
                        <button
                          onClick={() => { setParam('category', cat.value); setFilterOpen(false); }}
                          className={`text-sm ${activeCategory === cat.value ? 'text-velmora-gold font-medium' : 'text-velmora-stone'}`}
                        >
                          {cat.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-velmora-sand pt-6">
                  <h3 className="text-[10px] font-semibold tracking-widest uppercase text-velmora-obsidian mb-4">Price</h3>
                  <ul className="space-y-3">
                    {priceRanges.map((range) => (
                      <li key={range.value}>
                        <button
                          onClick={() => { setParam('price', range.value); setFilterOpen(false); }}
                          className={`text-sm ${activePriceRange === range.value ? 'text-velmora-gold font-medium' : 'text-velmora-stone'}`}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-stone">No pieces found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-xs tracking-widest uppercase text-velmora-gold border-b border-velmora-gold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filteredProducts.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
