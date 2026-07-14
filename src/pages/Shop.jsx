import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['All', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-sand aspect-product">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] [shop-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] [shop-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-cream font-sans text-[9px] tracking-widest uppercase px-2 py-1">
            Bestseller
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full bg-velmora-obsidian/90 text-velmora-cream font-sans text-[10px] tracking-widest uppercase py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300"
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 pb-2">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.titleId}`}
            className="font-serif text-sm uppercase tracking-widest text-velmora-text-primary hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="font-sans text-xs text-velmora-text-muted mt-1 hidden">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-600 text-velmora-text-primary">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="font-sans text-xs text-velmora-text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== 'All') {
      list = list.filter(p => p.category === selectedCategory);
    }
    const range = PRICE_RANGES[selectedPrice];
    list = list.filter(p => p.price >= range.min && p.price <= range.max);
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCategory, selectedPrice, sortBy]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  return (
    <div className="bg-velmora-linen min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-2">Velmora</p>
          <h1 id="shop-page-title" className="font-serif text-4xl md:text-5xl font-light text-velmora-text-primary">
            All Jewelry
          </h1>
          <p className="font-sans text-sm text-velmora-text-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-text-primary font-600 mb-4">Category</h3>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`font-sans text-sm transition-colors ${
                          selectedCategory === cat
                            ? 'text-velmora-gold font-600'
                            : 'text-velmora-text-secondary hover:text-velmora-gold'
                        }`}
                      >
                        {cat === 'All' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline pt-6 mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-text-primary font-600 mb-4">Price</h3>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setSelectedPrice(i)}
                        className={`font-sans text-sm transition-colors ${
                          selectedPrice === i
                            ? 'text-velmora-gold font-600'
                            : 'text-velmora-text-secondary hover:text-velmora-gold'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline pt-6">
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-text-primary font-600 mb-4">Material</h3>
                <ul className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                    <li key={m}>
                      <button className="font-sans text-sm text-velmora-text-secondary hover:text-velmora-gold transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-sand">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-text-secondary hover:text-velmora-gold transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <div className="relative flex items-center gap-2">
                <span className="font-sans text-xs text-velmora-text-muted hidden sm:block">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent font-sans text-xs tracking-wide text-velmora-text-primary pr-6 pl-1 py-1 border-b border-velmora-sand focus:outline-none focus:border-velmora-gold cursor-pointer"
                  >
                    {SORT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden bg-velmora-cream border border-velmora-sand p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-xs tracking-widest uppercase font-600 text-velmora-text-primary">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-4 h-4 text-velmora-text-muted" />
                  </button>
                </div>
                <div className="mb-5">
                  <p className="font-sans text-xs tracking-widest uppercase text-velmora-text-muted mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setFilterOpen(false); }}
                        className={`font-sans text-xs px-3 py-1.5 border transition-colors ${
                          selectedCategory === cat
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                            : 'border-velmora-sand text-velmora-text-secondary'
                        }`}
                      >
                        {cat === 'All' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-velmora-text-muted mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setSelectedPrice(i); setFilterOpen(false); }}
                        className={`font-sans text-xs px-3 py-1.5 border transition-colors ${
                          selectedPrice === i
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                            : 'border-velmora-sand text-velmora-text-secondary'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            <div ref={containerRef}>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-velmora-text-muted mb-4">No pieces found</p>
                  <button
                    onClick={() => { setSelectedCategory('All'); setSelectedPrice(0); }}
                    className="font-sans text-xs tracking-widest uppercase border border-velmora-obsidian text-velmora-obsidian px-6 py-3 hover:bg-velmora-obsidian hover:text-velmora-cream transition-all"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map(product => (
                    <ShopProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
