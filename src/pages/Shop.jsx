import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
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
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category') ? capitalize(searchParams.get('category')) : 'All'
  );
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(capitalize(cat));
  }, [searchParams]);

  const filtered = products
    .filter(p => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const price = priceRanges[activePriceIdx];
      const priceMatch = p.price >= price.min && p.price <= price.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered.length, activeCategory, activePriceIdx, sortBy]);

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-divider py-12 md:py-16 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl text-obsidian font-light">All Jewelry</h1>
        <p className="font-sans text-sm text-muted mt-3">{filtered.length} pieces</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-divider">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-obsidian text-ivory border-obsidian'
                    : 'bg-transparent text-muted border-divider hover:border-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-muted border border-divider px-4 py-2"
          >
            <SlidersHorizontal size={14} />
            Filter
          </button>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-muted hidden md:block">Sort by:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="font-sans text-xs text-obsidian bg-transparent border border-divider px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden bg-ivory border border-divider p-5 mb-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-widest uppercase text-obsidian">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-muted">
                <X size={16} />
              </button>
            </div>
            <FilterSection
              title="Category"
              items={categories}
              active={activeCategory}
              onSelect={setActiveCategory}
            />
            <FilterSection
              title="Price"
              items={priceRanges.map(r => r.label)}
              active={priceRanges[activePriceIdx].label}
              onSelect={(label) => setActivePriceIdx(priceRanges.findIndex(r => r.label === label))}
            />
          </div>
        )}

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSection
              title="Category"
              items={categories}
              active={activeCategory}
              onSelect={setActiveCategory}
            />
            <FilterSection
              title="Price"
              items={priceRanges.map(r => r.label)}
              active={priceRanges[activePriceIdx].label}
              onSelect={(label) => setActivePriceIdx(priceRanges.findIndex(r => r.label === label))}
            />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted mb-4">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceIdx(0); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-all"
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

function FilterSection({ title, items, active, onSelect }) {
  return (
    <div className="mb-8">
      <h3 className="font-sans text-[10px] tracking-widest uppercase text-muted mb-4">{title}</h3>
      <div className="flex flex-col gap-2">
        {items.map(item => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className={`text-left font-sans text-sm transition-colors duration-200 ${
              active === item ? 'text-obsidian font-medium' : 'text-muted hover:text-obsidian'
            }`}
          >
            {active === item && <span className="text-gold mr-2">—</span>}
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4] mb-3">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`gold jewelry worn model [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-0.5">
            Bestseller
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <p className="font-sans text-[10px] tracking-widest uppercase text-muted mb-1">{product.category}</p>
      <Link to={`/product/${product.slug}`}>
        <h3
          id={product.titleId}
          className="font-serif text-sm md:text-base uppercase tracking-wider text-obsidian hover:text-gold transition-colors"
        >
          {product.name}
        </h3>
      </Link>
      <p id={product.descId} className="sr-only">{product.shortDescription}</p>
      <div className="flex items-center justify-between mt-1.5">
        <span className="font-sans text-sm font-medium text-obsidian">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} fill="#C9A96E" stroke="none" />
          <span className="font-sans text-[10px] text-muted">{product.rating}</span>
        </div>
      </div>
    </div>
  );
}

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}
