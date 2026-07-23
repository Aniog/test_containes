import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={10}
          style={i <= Math.round(rating) ? { color: '#C9A96E', fill: '#C9A96E' } : { color: '#D4C9B5' }}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [shop-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-velmora-obsidian text-[9px] tracking-widest uppercase font-medium px-2 py-0.5 font-sans">
            Bestseller
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 bg-velmora-charcoal/90 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-velmora-white hover:text-velmora-gold transition-colors font-sans"
          >
            <ShoppingBag size={12} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-3 pb-2">
        <p id={product.titleId} className="font-serif text-sm tracking-[0.1em] uppercase font-medium text-velmora-ink">
          {product.name}
        </p>
        <p id={product.descId} className="text-xs text-velmora-mist mt-0.5 font-sans">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-sm font-semibold text-velmora-ink">${product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = products
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .filter((p) => {
      const range = priceRanges[activePriceRange];
      return p.price >= range.min && p.price <= range.max;
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
  }, [activeCategory, activePriceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-velmora-linen min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-charcoal py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase font-medium text-velmora-gold mb-3 font-sans">
            Velmora Fine Jewelry
          </p>
          <h1 id="shop-page-title" className="font-serif text-3xl md:text-5xl font-light text-velmora-white tracking-wide">
            All Jewelry
          </h1>
          <p className="text-sm text-velmora-mist font-sans mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-velmora-stone/20">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-1.5 text-xs tracking-widest uppercase font-medium font-sans border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-velmora-gold border-velmora-gold text-velmora-obsidian'
                    : 'border-velmora-stone/30 text-velmora-mist hover:border-velmora-gold hover:text-velmora-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-velmora-ink font-sans"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-mist font-sans hidden md:block">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-sans text-velmora-ink bg-transparent border border-velmora-stone/30 px-3 py-1.5 outline-none hover:border-velmora-gold transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-4 font-sans">Category</h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-left text-sm font-sans capitalize transition-colors ${
                        activeCategory === cat ? 'text-velmora-gold font-medium' : 'text-velmora-mist hover:text-velmora-gold'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-4 font-sans">Price</h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((range, idx) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(idx)}
                      className={`text-left text-sm font-sans transition-colors ${
                        activePriceRange === idx ? 'text-velmora-gold font-medium' : 'text-velmora-mist hover:text-velmora-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-4 font-sans">Material</h3>
                <div className="flex flex-col gap-2">
                  {['All', '18K Gold Plated', 'Sterling Silver'].map((mat) => (
                    <button
                      key={mat}
                      className="text-left text-sm font-sans text-velmora-mist hover:text-velmora-gold transition-colors"
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-velmora-linen overflow-y-auto animate-slideInRight">
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl font-light text-velmora-ink">Filters</h2>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={20} className="text-velmora-mist" />
                  </button>
                </div>

                <div className="mb-8">
                  <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-4 font-sans">Category</h3>
                  <div className="flex flex-col gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                        className={`text-left text-sm font-sans capitalize ${activeCategory === cat ? 'text-velmora-gold font-medium' : 'text-velmora-mist'}`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-4 font-sans">Price</h3>
                  <div className="flex flex-col gap-3">
                    {priceRanges.map((range, idx) => (
                      <button
                        key={range.label}
                        onClick={() => { setActivePriceRange(idx); setFilterOpen(false); }}
                        className={`text-left text-sm font-sans ${activePriceRange === idx ? 'text-velmora-gold font-medium' : 'text-velmora-mist'}`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl font-light text-velmora-ink mb-3">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange(0); }}
                  className="text-xs tracking-widest uppercase text-velmora-gold font-sans border-b border-velmora-gold/40 pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
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
