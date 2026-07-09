import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setCategory(cat);
  }, [searchParams]);

  const filtered = products
    .filter(p => {
      const catMatch = category === 'all' || p.category === category;
      const range = PRICE_RANGES[priceRange];
      const priceMatch = p.price >= range.min && p.price <= range.max;
      return catMatch && priceMatch;
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

  const setCategory_ = (cat) => {
    setCategory(cat);
    setSearchParams(cat !== 'all' ? { category: cat } : {});
  };

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink">
            All Jewelry
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-linen">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-sans text-xs font-medium tracking-widest uppercase text-ink border border-linen px-4 py-2.5 hover:border-ink transition-colors duration-200"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filter
            </button>
            <span className="font-sans text-xs text-mist">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-linen font-sans text-xs text-ink px-4 py-2.5 pr-8 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} strokeWidth={1.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-mist pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar
              category={category}
              setCategory={setCategory_}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-obsidian/40" onClick={() => setSidebarOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-xs font-medium tracking-widest uppercase text-ink">Filters</span>
                  <button onClick={() => setSidebarOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-mist" />
                  </button>
                </div>
                <FilterSidebar
                  category={category}
                  setCategory={(c) => { setCategory_(c); setSidebarOpen(false); }}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-mist mb-3">No pieces found</p>
                <p className="font-sans text-sm text-whisper">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => addItem(product)}
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

function FilterSidebar({ category, setCategory, priceRange, setPriceRange }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-ink mb-4">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat.toLowerCase())}
              className={`block w-full text-left font-sans text-sm transition-colors duration-200 py-1 ${
                category === cat.toLowerCase()
                  ? 'text-gold font-medium'
                  : 'text-mist hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-ink mb-4">Price</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range, i) => (
            <button
              key={i}
              onClick={() => setPriceRange(i)}
              className={`block w-full text-left font-sans text-sm transition-colors duration-200 py-1 ${
                priceRange === i
                  ? 'text-gold font-medium'
                  : 'text-mist hover:text-ink'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-ink mb-4">Material</h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Gold Vermeil'].map(m => (
            <label key={m} className="flex items-center gap-2 cursor-pointer group">
              <div className="w-3.5 h-3.5 border border-linen group-hover:border-gold transition-colors duration-200 flex-shrink-0" />
              <span className="font-sans text-sm text-mist group-hover:text-ink transition-colors duration-200">{m}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card group cursor-pointer">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
          <img
            className="product-img-primary absolute inset-0 w-full h-full object-cover"
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
          />
          <img
            className="product-img-secondary absolute inset-0 w-full h-full object-cover"
            data-strk-img-id={`shop-${product.imgId2}`}
            data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
          />
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); onAddToCart(); }}
              className="w-full bg-obsidian/90 text-cream font-sans text-[10px] font-medium tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <h3 id={`shop-${product.titleId}`} className="font-sans text-[11px] font-medium tracking-product uppercase text-ink hover:text-gold transition-colors duration-300 mb-1">
        <Link to={`/product/${product.slug}`}>{product.name}</Link>
      </h3>
      <p id={`shop-${product.descId}`} className="font-sans text-[11px] text-mist leading-snug mb-2 line-clamp-2">{product.shortDescription}</p>
      <div className="flex items-center gap-1 mb-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'} />
        ))}
        <span className="font-sans text-[10px] text-mist ml-1">({product.reviewCount})</span>
      </div>
      <p className="font-serif text-base font-light text-ink">${product.price}</p>
    </div>
  );
}
