import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
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
    <div className="group">
      <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold text-ivory font-sans text-[10px] uppercase tracking-widest px-2 py-1 font-semibold">
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-dusk text-ivory py-3 font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3
          id={`shop-title-${product.id}`}
          className="font-serif text-sm uppercase tracking-widest text-dusk hover:text-gold transition-colors leading-tight mb-1"
        >
          {product.name}
        </h3>
      </Link>
      <p id={`shop-desc-${product.id}`} className="sr-only">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm font-semibold text-dusk">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={11} style={{ fill: 'rgb(201,169,110)', color: 'rgb(201,169,110)' }} />
          <span className="font-sans text-xs text-umber">{product.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      const range = PRICE_RANGES[activePriceRange];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const FilterSidebar = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-dusk font-semibold mb-4">Category</h3>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setFilterOpen(false);
              }}
              className={`text-left font-sans text-sm capitalize transition-colors ${
                activeCategory === cat ? 'text-gold font-semibold' : 'text-umber hover:text-dusk'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-stone" />

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-dusk font-semibold mb-4">Price</h3>
        <div className="flex flex-col gap-2">
          {PRICE_RANGES.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setActivePriceRange(i)}
              className={`text-left font-sans text-sm transition-colors ${
                activePriceRange === i ? 'text-gold font-semibold' : 'text-umber hover:text-dusk'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-stone" />

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-dusk font-semibold mb-4">Material</h3>
        <div className="flex flex-col gap-2">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
            <button key={m} className="text-left font-sans text-sm text-umber hover:text-dusk transition-colors">
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-parchment border-b border-stone pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3 font-medium">Velmora Fine Jewelry</p>
          <h1 className="font-serif text-5xl md:text-6xl text-dusk font-light">The Collection</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-dusk font-semibold"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filters
            </button>
            <span className="font-sans text-xs text-umber">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="hidden md:block font-sans text-xs uppercase tracking-widest text-umber">Sort by</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="font-sans text-xs text-dusk bg-transparent border border-stone px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter overlay */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 bg-ivory p-8 overflow-y-auto md:hidden">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-serif text-2xl text-dusk">Filters</h2>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={20} strokeWidth={1.5} className="text-dusk" />
                </button>
              </div>
              <FilterSidebar />
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-dusk font-light mb-3">No pieces found</p>
                <p className="font-sans text-sm text-umber">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
