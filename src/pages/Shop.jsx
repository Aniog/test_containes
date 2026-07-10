import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

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
  { value: '75-150', label: '$75+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-sans text-[9px] tracking-button uppercase px-2 py-0.5 font-medium">
            Bestseller
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 text-parchment font-sans text-[10px] tracking-button uppercase py-3 hover:bg-gold hover:text-obsidian transition-colors duration-200"
          >
            {added ? '✓ Added' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p id={`shop-${product.titleId}`} className="font-sans text-[11px] tracking-product uppercase text-obsidian font-medium mb-1">
        {product.name}
      </p>
      <p id={`shop-${product.descId}`} className="hidden">{product.shortDescription}</p>
      <div className="flex items-center justify-between">
        <span className="font-serif text-lg text-obsidian">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} style={{ fill: '#C9A96E', color: '#C9A96E' }} />
          <span className="font-sans text-[10px] text-muted">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    setCategory(searchParams.get('category') || '');
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const filtered = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!priceRange) return true;
      const [min, max] = priceRange.split('-').map(Number);
      return max ? p.price >= min && p.price <= max : p.price >= min;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const activeFilters = [
    category && categoryOptions.find(c => c.value === category)?.label,
    priceRange && priceRanges.find(p => p.value === priceRange)?.label,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-parchment pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs tracking-button uppercase text-gold mb-3">Velmora</p>
          <h1 className="font-serif text-3xl md:text-5xl text-obsidian font-light">
            {category ? categoryOptions.find(c => c.value === category)?.label || 'All Jewelry' : 'All Jewelry'}
          </h1>
          <p className="font-sans text-sm text-muted mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="flex items-center gap-2 font-sans text-xs tracking-button uppercase text-stone hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
          </button>

          {/* Active filter pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {activeFilters.map(f => (
              <span key={f} className="flex items-center gap-1.5 bg-linen border border-sand font-sans text-xs px-3 py-1.5 text-stone">
                {f}
                <button
                  onClick={() => {
                    if (categoryOptions.find(c => c.label === f)) setCategory('');
                    if (priceRanges.find(p => p.label === f)) setPriceRange('');
                  }}
                  className="hover:text-gold"
                >
                  <X size={10} />
                </button>
              </span>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-sans text-xs text-muted hidden md:block">Sort by:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-sand font-sans text-xs text-obsidian px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
              >
                {sortOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-sans text-xs tracking-button uppercase text-obsidian mb-5">Filter</h3>

              <div className="mb-7">
                <p className="font-sans text-[10px] tracking-button uppercase text-muted mb-3">Category</p>
                <div className="flex flex-col gap-2">
                  {categoryOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setCategory(opt.value)}
                      className={`text-left font-sans text-sm transition-colors ${
                        category === opt.value ? 'text-gold font-medium' : 'text-stone hover:text-gold'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline mb-7" />

              <div className="mb-7">
                <p className="font-sans text-[10px] tracking-button uppercase text-muted mb-3">Price</p>
                <div className="flex flex-col gap-2">
                  {priceRanges.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`text-left font-sans text-sm transition-colors ${
                        priceRange === opt.value ? 'text-gold font-medium' : 'text-stone hover:text-gold'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {activeFilters.length > 0 && (
                <>
                  <div className="hairline mb-5" />
                  <button
                    onClick={() => { setCategory(''); setPriceRange(''); }}
                    className="font-sans text-xs text-muted hover:text-gold transition-colors"
                  >
                    Clear all filters
                  </button>
                </>
              )}
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-obsidian/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-parchment p-6 rounded-t-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-sans text-xs tracking-button uppercase text-obsidian">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}><X size={18} className="text-stone" /></button>
                </div>

                <div className="mb-6">
                  <p className="font-sans text-[10px] tracking-button uppercase text-muted mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setCategory(opt.value)}
                        className={`font-sans text-xs px-3 py-1.5 border transition-colors ${
                          category === opt.value ? 'border-gold bg-gold text-obsidian' : 'border-sand text-stone'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-sans text-[10px] tracking-button uppercase text-muted mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setPriceRange(opt.value)}
                        className={`font-sans text-xs px-3 py-1.5 border transition-colors ${
                          priceRange === opt.value ? 'border-gold bg-gold text-obsidian' : 'border-sand text-stone'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-full bg-gold text-obsidian font-sans text-xs tracking-button uppercase py-3"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-stone font-light mb-3">No pieces found</p>
                <p className="font-sans text-sm text-muted mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setCategory(''); setPriceRange(''); }}
                  className="font-sans text-xs tracking-button uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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
