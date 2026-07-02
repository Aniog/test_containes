import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
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
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-warm-white font-sans text-[9px] tracking-widest uppercase px-2 py-1">
            Bestseller
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-velmora-obsidian/90 text-velmora-warm-white font-sans text-[10px] tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 pb-2">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.titleId}`}
            className="font-serif text-sm uppercase tracking-widest text-velmora-obsidian hover:text-velmora-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm text-velmora-obsidian font-medium">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-sans text-[11px] text-velmora-ash">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const category = searchParams.get('category') || '';
  const priceRange = searchParams.get('price') || '';
  const sort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filtered = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!priceRange) return true;
      const [min, max] = priceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
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

  const activeFilters = [
    category && categoryOptions.find(o => o.value === category)?.label,
    priceRange && priceRanges.find(o => o.value === priceRange)?.label,
  ].filter(Boolean);

  return (
    <div className="bg-velmora-linen min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-mist/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
            {category ? categoryOptions.find(o => o.value === category)?.label : 'All Jewelry'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-obsidian font-light">
            {category ? categoryOptions.find(o => o.value === category)?.label : 'The Collection'}
          </h1>
          <p className="font-sans text-sm text-velmora-ash mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-ash border border-velmora-mist px-4 py-2.5 hover:border-velmora-obsidian hover:text-velmora-obsidian transition-all"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
          </button>

          {/* Active filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {activeFilters.map(f => (
              <span key={f} className="flex items-center gap-1.5 bg-velmora-gold-pale text-velmora-obsidian font-sans text-[11px] tracking-wider uppercase px-3 py-1.5">
                {f}
                <button
                  onClick={() => {
                    if (categoryOptions.find(o => o.label === f)) setFilter('category', '');
                    if (priceRanges.find(o => o.label === f)) setFilter('price', '');
                  }}
                  className="hover:text-velmora-gold transition-colors"
                >
                  <X size={10} strokeWidth={2} />
                </button>
              </span>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-sans text-xs text-velmora-ash tracking-wider hidden md:block">Sort:</span>
            <select
              value={sort}
              onChange={e => setFilter('sort', e.target.value)}
              className="font-sans text-xs text-velmora-obsidian bg-transparent border border-velmora-mist px-3 py-2 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-obsidian mb-4 font-medium">
                  Category
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {categoryOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setFilter('category', opt.value)}
                        className={`font-sans text-xs transition-colors ${
                          category === opt.value
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-ash hover:text-velmora-obsidian'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-velmora-mist/40 pt-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-obsidian mb-4 font-medium">
                  Price
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {priceRanges.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setFilter('price', opt.value)}
                        className={`font-sans text-xs transition-colors ${
                          priceRange === opt.value
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-ash hover:text-velmora-obsidian'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-velmora-linen overflow-y-auto animate-fade-in">
              <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-mist/40">
                <span className="font-sans text-xs tracking-widest uppercase text-velmora-obsidian font-medium">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={18} strokeWidth={1.5} className="text-velmora-ash" />
                </button>
              </div>
              <div className="px-6 py-8 flex flex-col gap-8">
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-obsidian mb-4 font-medium">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('category', opt.value); setFilterOpen(false); }}
                        className={`font-sans text-xs tracking-wider uppercase px-4 py-2 border transition-all ${
                          category === opt.value
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                            : 'border-velmora-mist text-velmora-ash'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-obsidian mb-4 font-medium">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('price', opt.value); setFilterOpen(false); }}
                        className={`font-sans text-xs tracking-wider uppercase px-4 py-2 border transition-all ${
                          priceRange === opt.value
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                            : 'border-velmora-mist text-velmora-ash'
                        }`}
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
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-velmora-ash font-light">No pieces found</p>
                <p className="font-sans text-sm text-velmora-mist mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-6 font-sans text-xs tracking-widest uppercase border border-velmora-gold text-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
}
