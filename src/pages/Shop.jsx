import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80-200', label: '$80+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          style={s <= Math.round(rating) ? { color: '#c49a45', fill: '#c49a45' } : { color: '#d6c5b0', fill: 'none' }}
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
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velvet-100 aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-cream font-sans text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <div className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full flex items-center justify-center gap-2 py-3 text-cream font-sans text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={12} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="pt-3 pb-2">
        <p className="font-sans text-xs text-stone mb-1">{product.material}</p>
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-sm md:text-base text-obsidian tracking-wide hover:text-gold transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <StarRating rating={product.rating} />
          <p className="font-serif text-sm text-obsidian">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const handleCategoryChange = (val) => {
    setCategory(val);
    if (val === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: val });
    }
  };

  const filtered = products
    .filter((p) => category === 'all' || p.category === category)
    .filter((p) => {
      if (priceRange === 'all') return true;
      const [min, max] = priceRange.split('-').map(Number);
      return max ? p.price >= min && p.price <= max : p.price >= min;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">Category</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.value}>
              <button
                onClick={() => { handleCategoryChange(cat.value); setMobileFiltersOpen(false); }}
                className={`font-sans text-sm transition-colors w-full text-left py-1 ${
                  category === cat.value ? 'text-gold font-medium' : 'text-mink hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr className="divider" />

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">Price</h3>
        <ul className="space-y-2">
          {priceRanges.map((range) => (
            <li key={range.value}>
              <button
                onClick={() => { setPriceRange(range.value); setMobileFiltersOpen(false); }}
                className={`font-sans text-sm transition-colors w-full text-left py-1 ${
                  priceRange === range.value ? 'text-gold font-medium' : 'text-mink hover:text-gold'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr className="divider" />

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">Material</h3>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" defaultChecked className="accent-gold" />
          <span className="font-sans text-sm text-mink">18K Gold Plated</span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-parchment border-b border-velvet-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            {category === 'all' ? 'All Jewelry' : categories.find((c) => c.value === category)?.label}
          </h1>
          <p className="font-sans text-sm text-stone mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-mink border border-velvet-300 px-4 py-2.5"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="font-sans text-xs text-mink bg-transparent border border-velvet-300 px-3 py-2.5 focus:outline-none focus:border-gold"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-10 md:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Products */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="font-sans text-sm text-stone">{filtered.length} results</p>
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-stone">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="font-sans text-xs text-mink bg-transparent border border-velvet-300 px-3 py-2 focus:outline-none focus:border-gold"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-mink mb-4">No pieces found</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); setSearchParams({}); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-obsidian/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 z-50 bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-obsidian">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-stone hover:text-obsidian">
                <X size={20} />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  );
}
