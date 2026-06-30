import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '', label: 'All Prices' },
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
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, 'Gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-portrait bg-cream overflow-hidden mb-4">
        <img
          data-strk-img-id={`shop-${product.imgIds.main}`}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-velvet text-ivory font-manrope text-[9px] tracking-[0.12em] uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold text-velvet font-manrope text-[9px] tracking-[0.12em] uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={handleAdd}
            className="w-full bg-velvet text-ivory font-manrope text-[10px] tracking-[0.14em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-velvet transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p id={product.titleId} className="font-cormorant text-sm uppercase tracking-[0.12em] text-velvet group-hover:text-gold transition-colors duration-200 mb-1.5">
        {product.name}
      </p>
      <p id={product.descId} className="sr-only">{product.shortDescription}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'} />
          ))}
          <span className="font-manrope text-[10px] text-text-tertiary ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-cormorant text-base text-velvet">${product.price}</p>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
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

  const activeFilterCount = [activeCategory, activePriceRange].filter(Boolean).length;

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-cream border-b border-linen pt-24 md:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gold mb-3">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-velvet">
            {activeCategory
              ? categoryOptions.find(c => c.value === activeCategory)?.label || 'Shop'
              : 'All Jewelry'
            }
          </h1>
          <p className="font-manrope text-sm text-text-secondary mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-linen">
          {/* Filter toggle (mobile) + category pills (desktop) */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-manrope text-[11px] tracking-[0.12em] uppercase text-text-secondary border border-linen px-4 py-2.5 hover:border-gold hover:text-gold transition-all duration-200"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>

            {/* Desktop category pills */}
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {categoryOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setFilter('category', opt.value)}
                  className={`font-manrope text-[10px] tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-200 ${
                    activeCategory === opt.value
                      ? 'border-velvet bg-velvet text-ivory'
                      : 'border-linen text-text-secondary hover:border-gold hover:text-gold'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={activeSort}
              onChange={e => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent border border-linen font-manrope text-[11px] tracking-[0.1em] uppercase text-text-secondary px-4 py-2.5 pr-8 focus:outline-none focus:border-gold hover:border-gold transition-colors duration-200 cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} strokeWidth={1.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Price filter */}
              <div>
                <h3 className="font-manrope text-[10px] tracking-[0.18em] uppercase text-text-secondary mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFilter('price', opt.value)}
                      className={`block w-full text-left font-manrope text-xs transition-colors duration-200 py-1 ${
                        activePriceRange === opt.value
                          ? 'text-gold'
                          : 'text-text-secondary hover:text-velvet'
                      }`}
                    >
                      {activePriceRange === opt.value && <span className="mr-2">→</span>}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="font-manrope text-[10px] tracking-[0.18em] uppercase text-text-secondary mb-4">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <button
                      key={m}
                      className="block w-full text-left font-manrope text-xs text-text-secondary hover:text-velvet transition-colors duration-200 py-1"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {activeFilterCount > 0 && (
                <button
                  onClick={() => setSearchParams({})}
                  className="flex items-center gap-1.5 font-manrope text-[10px] tracking-[0.12em] uppercase text-text-tertiary hover:text-gold transition-colors duration-200"
                >
                  <X size={11} strokeWidth={1.5} />
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-ivory animate-fadeInFast">
              <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
                <span className="font-manrope text-xs tracking-[0.14em] uppercase text-velvet">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={18} strokeWidth={1.5} className="text-text-secondary" />
                </button>
              </div>
              <div className="px-6 py-8 space-y-8">
                <div>
                  <h3 className="font-manrope text-[10px] tracking-[0.18em] uppercase text-text-secondary mb-4">Category</h3>
                  <div className="space-y-3">
                    {categoryOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('category', opt.value); setFilterOpen(false); }}
                        className={`block font-manrope text-sm ${activeCategory === opt.value ? 'text-gold' : 'text-text-secondary'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-manrope text-[10px] tracking-[0.18em] uppercase text-text-secondary mb-4">Price</h3>
                  <div className="space-y-3">
                    {priceRanges.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('price', opt.value); setFilterOpen(false); }}
                        className={`block font-manrope text-sm ${activePriceRange === opt.value ? 'text-gold' : 'text-text-secondary'}`}
                      >
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
                <p className="font-cormorant text-3xl text-text-secondary font-light mb-3">No pieces found</p>
                <p className="font-manrope text-sm text-text-tertiary mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-manrope text-[11px] tracking-[0.14em] uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-velvet transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
