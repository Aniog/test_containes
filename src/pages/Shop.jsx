import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
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
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
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
      <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-luxury ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-alt-${product.img2Id}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-luxury ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-champagne text-velvet font-sans text-[9px] tracking-widest uppercase px-2 py-0.5">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velvet text-cream font-sans text-[9px] tracking-widest uppercase px-2 py-0.5">New</span>
          )}
        </div>

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-400 ease-luxury ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-velvet/90 text-cream font-sans text-xs tracking-widest2 uppercase py-3 flex items-center justify-center gap-2 hover:bg-velvet transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <span id={`shop-${product.titleId}`} className="product-name text-xs block mb-1">{product.name}</span>
      <span id={`shop-${product.descId}`} className="sr-only">{product.shortDesc}</span>
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm font-semibold text-velvet">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} fill="#C9A96E" stroke="none" />
          <span className="font-sans text-xs text-stone">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      if (p.price < activePriceRange.min || p.price > activePriceRange.max) return false;
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
    <div className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="bg-parchment py-12 md:py-16 border-b border-mink/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="section-label mb-3">Velmora Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velvet">All Jewelry</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-champagne bg-champagne text-velvet'
                    : 'border-mink/40 text-stone hover:border-champagne hover:text-champagne'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone border border-mink/40 px-4 py-2"
          >
            <SlidersHorizontal size={12} />
            Filters
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <span className="font-sans text-xs text-stone hidden md:block">{filtered.length} products</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="font-sans text-xs text-stone bg-transparent border border-mink/40 px-3 py-2 focus:outline-none focus:border-champagne cursor-pointer"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest2 uppercase text-velvet mb-4">Category</h3>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`font-sans text-xs transition-colors ${
                          activeCategory === cat ? 'text-champagne' : 'text-stone hover:text-champagne'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline pt-8">
                <h3 className="font-sans text-xs tracking-widest2 uppercase text-velvet mb-4">Price</h3>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map(range => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(range)}
                        className={`font-sans text-xs transition-colors ${
                          activePriceRange.label === range.label ? 'text-champagne' : 'text-stone hover:text-champagne'
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
            <div className="md:hidden fixed inset-0 z-40 bg-cream">
              <div className="flex items-center justify-between px-4 py-4 border-b border-mink/20">
                <span className="font-sans text-xs tracking-widest2 uppercase text-velvet">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={18} className="text-stone" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-8">
                <div>
                  <h3 className="font-sans text-xs tracking-widest2 uppercase text-velvet mb-4">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                        className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all ${
                          activeCategory === cat ? 'border-champagne bg-champagne text-velvet' : 'border-mink/40 text-stone'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-widest2 uppercase text-velvet mb-4">Price</h3>
                  <div className="flex flex-col gap-2">
                    {PRICE_RANGES.map(range => (
                      <button
                        key={range.label}
                        onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                        className={`font-sans text-xs text-left transition-colors ${
                          activePriceRange.label === range.label ? 'text-champagne' : 'text-stone'
                        }`}
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
                <p className="font-serif text-2xl italic text-stone mb-4">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                  className="btn-outline"
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
    </div>
  );
}
