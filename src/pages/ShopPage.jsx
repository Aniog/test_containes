import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-200', label: '$75+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          fill={i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF'}
          stroke={i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF'}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-cream font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
            Bestseller
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={e => { e.preventDefault(); addItem(product); }}
            className="w-full bg-obsidian/90 text-cream font-manrope text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 id={`shop-${product.titleId}`} className="product-name text-sm">{product.name}</h3>
          <span className="font-cormorant text-base font-medium text-ink flex-shrink-0">${product.price}</span>
        </div>
        <p id={`shop-${product.descId}`} className="font-manrope text-xs text-ink-faint mb-2 line-clamp-1">{product.shortDescription}</p>
        <StarRating rating={product.rating} />
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setCategory(cat);
  }, [searchParams]);

  const filtered = products.filter(p => {
    if (category && p.category !== category) return false;
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      if (max && (p.price < min || p.price > max)) return false;
      if (!max && p.price < min) return false;
    }
    return true;
  }).sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'rating') return b.rating - a.rating;
    return 0;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, sort]);

  const handleCategory = (val) => {
    setCategory(val);
    if (val) setSearchParams({ category: val });
    else setSearchParams({});
  };

  const FilterPanel = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-manrope text-xs tracking-widest uppercase text-ink mb-4">Category</h3>
        <ul className="flex flex-col gap-2">
          {categoryOptions.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => handleCategory(opt.value)}
                className={`font-manrope text-sm transition-colors ${
                  category === opt.value ? 'text-gold font-medium' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-manrope text-xs tracking-widest uppercase text-ink mb-4">Price</h3>
        <ul className="flex flex-col gap-2">
          {priceRanges.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => setPriceRange(opt.value)}
                className={`font-manrope text-sm transition-colors ${
                  priceRange === opt.value ? 'text-gold font-medium' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-cream min-h-screen">
      {/* Page header */}
      <div className="bg-parchment border-b border-linen pt-24 md:pt-28 pb-10">
        <div className="section-container">
          <p className="section-label mb-3">Velmora Fine Jewelry</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            {category ? categoryOptions.find(c => c.value === category)?.label || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="font-manrope text-sm text-ink-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="section-container py-10">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0 pt-1">
            <FilterPanel />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-linen">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-ink-muted hover:text-ink transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>

              <div className="flex items-center gap-3 ml-auto">
                <span className="font-manrope text-xs text-ink-faint hidden md:block">Sort by:</span>
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="font-manrope text-xs text-ink bg-transparent border border-linen px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.length > 0 ? (
                filtered.map(p => <ProductCard key={p.id} product={p} />)
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-cormorant text-2xl text-ink-muted font-light">No pieces found</p>
                  <button onClick={() => { setCategory(''); setPriceRange(''); setSearchParams({}); }} className="btn-outline mt-6">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-obsidian/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 rounded-t-2xl p-6 animate-fadeIn max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl text-ink">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-ink-muted hover:text-ink">
                <X size={18} />
              </button>
            </div>
            <FilterPanel />
            <button onClick={() => setMobileFiltersOpen(false)} className="btn-primary w-full text-center mt-8">
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}
