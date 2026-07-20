import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/Badge';

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

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className={`w-3 h-3 ${i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-border'}`} />
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <div className="absolute top-3 left-3">
              <Badge variant="gold">{product.badge}</Badge>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full bg-charcoal text-ivory font-inter text-xs tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-charcoal-mid transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Quick Add
            </button>
          </div>
        </div>
      </Link>
      <p id={`shop-${product.descId}`} className="sr-only">{product.shortDesc}</p>
      <Link to={`/product/${product.slug}`}>
        <h3 id={`shop-${product.titleId}`} className="font-cormorant font-medium text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors mb-1.5">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center justify-between">
        <span className="font-inter text-sm font-medium text-charcoal">${product.price}</span>
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="font-inter text-xs text-taupe-light">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (category !== 'all') result = result.filter(p => p.category === category);
    const range = PRICE_RANGES[priceRange];
    result = result.filter(p => p.price >= range.min && p.price <= range.max);
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [category, priceRange, sort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="bg-ivory min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">Velmora</p>
          <h1 className="font-cormorant font-light text-4xl md:text-6xl text-charcoal">
            {category === 'all' ? 'All Jewelry' : category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <div className="w-10 h-px bg-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-border">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFiltersOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-charcoal border border-border px-4 py-2.5 hover:border-charcoal transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
            <span className="font-inter text-xs text-taupe-light">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-border px-4 py-2.5 pr-8 font-inter text-xs tracking-widest uppercase text-charcoal focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-taupe pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop always visible, mobile toggle */}
          <aside className={`${filtersOpen ? 'block' : 'hidden'} md:block w-full md:w-52 flex-shrink-0`}>
            {/* Mobile close */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <span className="font-inter text-xs tracking-widest uppercase text-charcoal">Filters</span>
              <button onClick={() => setFiltersOpen(false)}>
                <X className="w-4 h-4 text-taupe" />
              </button>
            </div>

            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-inter text-xs tracking-widest uppercase text-charcoal mb-4">Category</h3>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-left font-inter text-sm transition-colors ${
                      category === cat ? 'text-charcoal font-medium' : 'text-taupe hover:text-charcoal'
                    }`}
                  >
                    {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    {category === cat && <span className="ml-2 text-gold">—</span>}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-border mb-8" />

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-inter text-xs tracking-widest uppercase text-charcoal mb-4">Price</h3>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(i)}
                    className={`text-left font-inter text-sm transition-colors ${
                      priceRange === i ? 'text-charcoal font-medium' : 'text-taupe hover:text-charcoal'
                    }`}
                  >
                    {range.label}
                    {priceRange === i && <span className="ml-2 text-gold">—</span>}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-border mb-8" />

            {/* Material filter */}
            <div>
              <h3 className="font-inter text-xs tracking-widest uppercase text-charcoal mb-4">Material</h3>
              <div className="flex flex-col gap-2">
                {['All', '18K Gold Plated', 'Silver Tone'].map(m => (
                  <button
                    key={m}
                    className="text-left font-inter text-sm text-taupe hover:text-charcoal transition-colors"
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-cormorant text-2xl text-charcoal mb-3">No pieces found</p>
                <p className="font-inter text-sm text-taupe mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange(0); }}
                  className="font-inter text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors"
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
