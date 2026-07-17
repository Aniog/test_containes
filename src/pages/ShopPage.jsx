import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

const CATEGORIES = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const PRICE_RANGES = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={10} className={i <= Math.round(rating) ? 'text-champagne fill-champagne' : 'text-blush'} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group bg-cream">
      <div className="relative overflow-hidden aspect-[3/4] bg-parchment">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-hover-${product.img2Id}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-champagne text-velvet font-sans text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velvet text-ivory font-sans text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold">New</span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-velvet/90">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full flex items-center justify-center gap-2 py-3 font-sans text-xs uppercase tracking-widest text-ivory hover:text-champagne transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>
      <div className="pt-4 pb-5 px-1">
        <p id={`shop-${product.titleId}`} className="product-name text-xs text-velvet mb-1">{product.name}</p>
        <p id={`shop-${product.descId}`} className="font-sans text-xs text-stone mb-2 line-clamp-1">{product.shortDesc}</p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm font-semibold text-velvet">${product.price}</span>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('featured');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setCategory(searchParams.get('category') || '');
  }, [searchParams]);

  // Filter + sort products
  const filtered = PRODUCTS.filter(p => {
    if (category && p.category !== category) return false;
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      if (p.price < min || p.price > max) return false;
    }
    return true;
  }).sort((a, b) => {
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

  const clearFilters = () => {
    setCategory('');
    setPriceRange('');
    setSearchParams({});
  };

  const hasFilters = category || priceRange;

  return (
    <div className="bg-parchment min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-blush py-12 md:py-16 text-center">
        <p className="font-sans text-xs uppercase tracking-widest3 text-champagne mb-3 font-medium">
          {category ? CATEGORIES.find(c => c.value === category)?.label : 'All Jewelry'}
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-light text-velvet">
          {category ? CATEGORIES.find(c => c.value === category)?.label : 'Shop All'}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velvet border border-blush px-4 py-2 hover:border-champagne transition-colors"
            >
              <SlidersHorizontal size={13} />
              Filters
            </button>
            <span className="font-sans text-xs text-stone">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 font-sans text-xs text-champagne hover:text-gold transition-colors"
              >
                <X size={11} /> Clear
              </button>
            )}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="font-sans text-xs text-velvet bg-ivory border border-blush px-3 py-2 outline-none focus:border-champagne transition-colors cursor-pointer"
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters — desktop always visible, mobile drawer */}
          <aside className={`${filterOpen ? 'block' : 'hidden'} md:block w-full md:w-52 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-velvet mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  {CATEGORIES.map(c => (
                    <li key={c.value}>
                      <button
                        onClick={() => { setCategory(c.value); setSearchParams(c.value ? { category: c.value } : {}); }}
                        className={`font-sans text-sm transition-colors ${
                          category === c.value ? 'text-champagne font-medium' : 'text-stone hover:text-velvet'
                        }`}
                      >
                        {c.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-blush" />

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-velvet mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map(r => (
                    <li key={r.value}>
                      <button
                        onClick={() => setPriceRange(r.value)}
                        className={`font-sans text-sm transition-colors ${
                          priceRange === r.value ? 'text-champagne font-medium' : 'text-stone hover:text-velvet'
                        }`}
                      >
                        {r.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-blush" />

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-velvet mb-4">
                  Material
                </h3>
                <ul className="space-y-2">
                  {['All', '18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="font-sans text-sm text-stone hover:text-velvet transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-stone mb-4">No pieces found</p>
                <button onClick={clearFilters} className="font-sans text-xs uppercase tracking-widest text-champagne hover:text-gold transition-colors">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <Link key={product.id} to={`/product/${product.slug}`}>
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
