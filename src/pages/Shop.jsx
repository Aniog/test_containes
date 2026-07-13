import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => {
      const range = PRICE_RANGES[priceRange];
      return p.price >= range.min && p.price <= range.max;
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

  const handleCategory = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="bg-velmora-linen min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-velmora-obsidian py-14 md:py-20 text-center">
        <p className="text-xs tracking-widest uppercase font-medium text-velmora-gold mb-3">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-ivory tracking-wide">
          The Collection
        </h1>
        <div className="w-10 h-px bg-velmora-gold mx-auto mt-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`text-[10px] tracking-widest uppercase font-medium px-4 py-2 border transition-all duration-200 capitalize ${
                  category === cat
                    ? 'bg-velmora-obsidian text-velmora-ivory border-velmora-obsidian'
                    : 'bg-transparent text-velmora-mist border-velmora-stone/30 hover:border-velmora-ink hover:text-velmora-ink'
                }`}
              >
                {cat === 'all' ? 'All Jewelry' : cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFiltersOpen(v => !v)}
            className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-velmora-ink border border-velmora-stone/30 px-4 py-2"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <span className="text-xs text-velmora-mist hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-velmora-stone/30 text-xs tracking-widest uppercase font-medium text-velmora-ink px-4 py-2 pr-8 focus:outline-none focus:border-velmora-gold cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-mist pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile filters panel */}
        {filtersOpen && (
          <div className="md:hidden bg-velmora-cream border border-velmora-stone/20 p-5 mb-6 animate-slideDown">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs tracking-widest uppercase font-medium text-velmora-ink">Filters</span>
              <button onClick={() => setFiltersOpen(false)} className="text-velmora-mist hover:text-velmora-ink">
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mb-5">
              <p className="text-[10px] tracking-widest uppercase font-medium text-velmora-mist mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { handleCategory(cat); setFiltersOpen(false); }}
                    className={`text-[10px] tracking-widest uppercase font-medium px-3 py-1.5 border transition-all duration-200 capitalize ${
                      category === cat
                        ? 'bg-velmora-obsidian text-velmora-ivory border-velmora-obsidian'
                        : 'bg-transparent text-velmora-mist border-velmora-stone/30'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-widest uppercase font-medium text-velmora-mist mb-3">Price</p>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, idx) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(idx)}
                    className={`text-left text-xs transition-colors duration-200 ${
                      priceRange === idx ? 'text-velmora-gold font-medium' : 'text-velmora-mist hover:text-velmora-ink'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <p className="text-[10px] tracking-widest uppercase font-semibold text-velmora-ink mb-4">Category</p>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategory(cat)}
                      className={`text-left text-xs transition-colors duration-200 capitalize py-1 ${
                        category === cat
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-mist hover:text-velmora-ink'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline mb-8 pt-8">
                <p className="text-[10px] tracking-widest uppercase font-semibold text-velmora-ink mb-4">Price</p>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, idx) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(idx)}
                      className={`text-left text-xs transition-colors duration-200 py-1 ${
                        priceRange === idx ? 'text-velmora-gold font-medium' : 'text-velmora-mist hover:text-velmora-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline pt-8">
                <p className="text-[10px] tracking-widest uppercase font-semibold text-velmora-ink mb-4">Material</p>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(mat => (
                    <button
                      key={mat}
                      className="text-left text-xs text-velmora-mist hover:text-velmora-ink transition-colors duration-200 py-1"
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-velmora-ink mb-3">No pieces found</p>
                <p className="text-xs text-velmora-mist mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { handleCategory('all'); setPriceRange(0); }}
                  className="text-xs tracking-widest uppercase text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => addItem(product, 'gold', 1)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4] mb-3">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {product.badge && (
          <div className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-ivory text-[9px] tracking-widest uppercase font-medium px-2.5 py-1">
            {product.badge}
          </div>
        )}

        <button
          onClick={(e) => { e.preventDefault(); onAddToCart(); }}
          className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 text-velmora-ivory text-[10px] tracking-widest uppercase font-medium py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>

      <Link to={`/product/${product.slug}`}>
        <h3
          id={product.titleId}
          className="font-serif text-sm font-medium tracking-[0.12em] uppercase text-velmora-ink hover:text-velmora-gold transition-colors duration-200 leading-tight"
        >
          {product.name}
        </h3>
      </Link>
      <p id={product.descId} className="text-xs text-velmora-mist mt-1">{product.shortDescription}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm font-medium text-velmora-ink">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} fill="#C9A96E" className="text-velmora-gold" />
          <span className="text-[10px] text-velmora-mist">{product.rating}</span>
        </div>
      </div>
    </div>
  );
}
