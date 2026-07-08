import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '', label: 'Any Price' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-velmora-black/90 text-velmora-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-velmora-black transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="pt-4">
        <StarRating rating={product.rating} count={product.reviewCount} />
        <Link to={`/product/${product.slug}`} className="block mt-2">
          <h3 id={product.titleId} className="font-serif text-sm tracking-widest2 uppercase text-velmora-black hover:text-velmora-gold transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <p className="font-sans text-sm font-medium text-velmora-black mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value); else next.delete(key);
    setSearchParams(next);
  };

  const filteredProducts = products
    .filter(p => !activeCategory || p.category === activeCategory)
    .filter(p => {
      if (!activePriceRange) return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price;
      if (activeSort === 'price-desc') return b.price - a.price;
      if (activeSort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, activeSort]);

  const activeLabel = categoryOptions.find(c => c.value === activeCategory)?.label || 'All Jewelry';

  return (
    <div className="min-h-screen bg-velmora-ivory pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-velmora-gold-light bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-2">Velmora Collection</p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-velmora-black">{activeLabel}</h1>
          <p className="font-sans text-xs text-velmora-stone mt-2">{filteredProducts.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-gold-light">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-stone hover:text-velmora-black transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categoryOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setParam('category', opt.value)}
                className={`font-sans text-[10px] tracking-widest uppercase px-4 py-1.5 border transition-colors ${
                  activeCategory === opt.value
                    ? 'bg-velmora-black text-velmora-ivory border-velmora-black'
                    : 'border-velmora-sand text-velmora-stone hover:border-velmora-black hover:text-velmora-black'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative flex items-center gap-2">
            <span className="font-sans text-[10px] tracking-widest uppercase text-velmora-stone hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={activeSort}
                onChange={e => setParam('sort', e.target.value)}
                className="appearance-none bg-transparent font-sans text-xs text-velmora-black border border-velmora-sand px-3 py-1.5 pr-7 focus:outline-none focus:border-velmora-black cursor-pointer"
              >
                {sortOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-velmora-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="space-y-8">
              {/* Price filter */}
              <div>
                <h3 className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setParam('price', opt.value)}
                      className={`block w-full text-left font-sans text-xs py-1 transition-colors ${
                        activePriceRange === opt.value
                          ? 'text-velmora-black font-medium'
                          : 'text-velmora-stone hover:text-velmora-black'
                      }`}
                    >
                      {activePriceRange === opt.value && <span className="text-velmora-gold mr-1">✦</span>}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active filters */}
              {(activeCategory || activePriceRange) && (
                <div>
                  <h3 className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-4">Active Filters</h3>
                  <div className="space-y-2">
                    {activeCategory && (
                      <button
                        onClick={() => setParam('category', '')}
                        className="flex items-center gap-1.5 font-sans text-xs text-velmora-stone hover:text-velmora-black transition-colors"
                      >
                        <X size={10} /> {categoryOptions.find(c => c.value === activeCategory)?.label}
                      </button>
                    )}
                    {activePriceRange && (
                      <button
                        onClick={() => setParam('price', '')}
                        className="flex items-center gap-1.5 font-sans text-xs text-velmora-stone hover:text-velmora-black transition-colors"
                      >
                        <X size={10} /> {priceRanges.find(p => p.value === activePriceRange)?.label}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-velmora-ivory p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <span className="font-sans text-xs tracking-widest uppercase text-velmora-black">Filters</span>
                <button onClick={() => setFilterOpen(false)}><X size={18} strokeWidth={1.5} /></button>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-4">Category</h3>
                  <div className="space-y-3">
                    {categoryOptions.map(opt => (
                      <button key={opt.value} onClick={() => { setParam('category', opt.value); setFilterOpen(false); }}
                        className={`block font-sans text-sm ${activeCategory === opt.value ? 'text-velmora-black font-medium' : 'text-velmora-stone'}`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-4">Price</h3>
                  <div className="space-y-3">
                    {priceRanges.map(opt => (
                      <button key={opt.value} onClick={() => { setParam('price', opt.value); setFilterOpen(false); }}
                        className={`block font-sans text-sm ${activePriceRange === opt.value ? 'text-velmora-black font-medium' : 'text-velmora-stone'}`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl italic text-velmora-stone">No pieces found</p>
                <button onClick={() => setSearchParams({})} className="mt-4 font-sans text-xs tracking-widest uppercase text-velmora-stone hover:text-velmora-black transition-colors underline">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
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
