import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group cursor-pointer">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-linen aspect-[3/4]">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="bg-obsidian text-cream font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-gold text-obsidian font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
                New
              </span>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
            <button
              onClick={(e) => { e.preventDefault(); addItem(product); }}
              className="w-full bg-obsidian/90 backdrop-blur-sm text-cream font-manrope text-xs tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag size={13} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p id={`shop-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-wider text-obsidian leading-tight">
              {product.name}
            </p>
            <p id={`shop-${product.descId}`} className="font-manrope text-xs text-ink-muted mt-0.5">
              {product.shortDescription}
            </p>
          </div>
          <p className="font-manrope text-sm font-medium text-obsidian flex-shrink-0">${product.price}</p>
        </div>
        <div className="flex items-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'} className={i < Math.floor(product.rating) ? 'text-gold' : 'text-sand'} />
          ))}
          <span className="font-manrope text-[10px] text-ink-muted ml-1">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory) return false;
      const range = PRICE_RANGES[activePriceRange];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="min-h-screen bg-parchment">
      <Nav />
      <CartDrawer />

      <main className="pt-20 md:pt-24">
        {/* Page header */}
        <div className="bg-linen border-b border-sand py-12 md:py-16 text-center">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-3">
            All Jewelry
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 pb-5 border-b border-sand">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-ink-muted hover:text-obsidian transition-colors border border-sand px-4 py-2"
              >
                <SlidersHorizontal size={13} />
                Filters
              </button>
              <p className="font-manrope text-xs text-ink-muted">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-sand font-manrope text-xs text-ink-muted px-4 py-2 pr-8 focus:outline-none focus:border-obsidian cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
            </div>
          </div>

          <div className="flex gap-10">
            {/* Sidebar filters — desktop */}
            <aside className="hidden md:block w-52 flex-shrink-0">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-xs tracking-widest uppercase text-obsidian mb-4">Category</h3>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-left font-manrope text-sm transition-colors ${
                        activeCategory === cat
                          ? 'text-obsidian font-medium'
                          : 'text-ink-muted hover:text-obsidian'
                      }`}
                    >
                      {cat === 'All' ? 'All Jewelry' : cat}
                      {activeCategory === cat && (
                        <span className="ml-2 inline-block w-1 h-1 rounded-full bg-gold align-middle" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="border-t border-sand pt-6">
                <h3 className="font-manrope text-xs tracking-widest uppercase text-obsidian mb-4">Price</h3>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`text-left font-manrope text-sm transition-colors ${
                        activePriceRange === i
                          ? 'text-obsidian font-medium'
                          : 'text-ink-muted hover:text-obsidian'
                      }`}
                    >
                      {range.label}
                      {activePriceRange === i && (
                        <span className="ml-2 inline-block w-1 h-1 rounded-full bg-gold align-middle" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden fixed inset-0 z-40 bg-parchment overflow-y-auto">
                <div className="flex items-center justify-between px-4 py-4 border-b border-sand">
                  <span className="font-cormorant text-xl text-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={20} className="text-ink-muted" />
                  </button>
                </div>
                <div className="px-6 py-6">
                  <div className="mb-8">
                    <h3 className="font-manrope text-xs tracking-widest uppercase text-obsidian mb-4">Category</h3>
                    <div className="flex flex-col gap-3">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                          className={`text-left font-manrope text-sm ${activeCategory === cat ? 'text-obsidian font-medium' : 'text-ink-muted'}`}
                        >
                          {cat === 'All' ? 'All Jewelry' : cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-sand pt-6">
                    <h3 className="font-manrope text-xs tracking-widest uppercase text-obsidian mb-4">Price</h3>
                    <div className="flex flex-col gap-3">
                      {PRICE_RANGES.map((range, i) => (
                        <button
                          key={range.label}
                          onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                          className={`text-left font-manrope text-sm ${activePriceRange === i ? 'text-obsidian font-medium' : 'text-ink-muted'}`}
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
            <div ref={containerRef} className="flex-1 min-w-0">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-cormorant text-2xl text-ink-muted">No pieces found</p>
                  <button
                    onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                    className="mt-4 font-manrope text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map(product => (
                    <ShopProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
