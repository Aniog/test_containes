import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

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

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
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
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-${product.img2Id}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
        />
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 text-cream font-manrope text-[11px] font-semibold tracking-[0.12em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>
      <h3
        id={`shop-title-${product.id}`}
        className="font-cormorant text-sm font-medium tracking-widest2 uppercase text-ink group-hover:text-gold transition-colors duration-300"
      >
        {product.name}
      </h3>
      <p id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
      <div className="flex items-center justify-between mt-1.5">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              style={{
                color: i < Math.floor(product.rating) ? '#C9A96E' : '#EDE8DF',
                fill: i < Math.floor(product.rating) ? '#C9A96E' : '#EDE8DF',
              }}
            />
          ))}
          <span className="font-manrope text-[11px] text-mist ml-1">({product.reviewCount})</span>
        </div>
        <span className="font-manrope text-sm font-medium text-ink">${product.price}</span>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, sort]);

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => {
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

  const handleCategoryChange = (val) => {
    setCategory(val);
    if (val !== 'all') setSearchParams({ category: val });
    else setSearchParams({});
  };

  const FilterSidebar = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-manrope text-xs font-semibold tracking-[0.15em] uppercase text-ink mb-4">Category</h3>
        <div className="flex flex-col gap-2">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`text-left font-manrope text-sm transition-colors duration-300 ${
                category === cat.value ? 'text-gold font-medium' : 'text-mist hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-manrope text-xs font-semibold tracking-[0.15em] uppercase text-ink mb-4">Price</h3>
        <div className="flex flex-col gap-2">
          {priceRanges.map(range => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`text-left font-manrope text-sm transition-colors duration-300 ${
                priceRange === range.value ? 'text-gold font-medium' : 'text-mist hover:text-ink'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-manrope text-xs font-semibold tracking-[0.15em] uppercase text-ink mb-4">Material</h3>
        <div className="flex flex-col gap-2">
          {['18K Gold Plated', 'Silver Tone'].map(m => (
            <label key={m} className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="accent-gold" />
              <span className="font-manrope text-sm text-mist group-hover:text-ink transition-colors duration-300">{m}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14">
          <p className="font-manrope text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            {category === 'all' ? 'All Jewelry' : categories.find(c => c.value === category)?.label || 'Shop'}
          </h1>
          <p className="font-manrope text-sm text-mist mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-manrope text-xs font-medium tracking-[0.1em] uppercase text-ink border border-linen px-4 py-2.5"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="font-manrope text-xs text-ink bg-transparent border border-linen px-4 py-2.5 pr-8 appearance-none focus:outline-none focus:border-gold"
            >
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-mist pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 md:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-8">
              <div className="flex items-center gap-3">
                <span className="font-manrope text-xs text-mist">Sort by:</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                    className="font-manrope text-xs text-ink bg-transparent border border-linen px-4 py-2 pr-8 appearance-none focus:outline-none focus:border-gold"
                  >
                    {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-mist pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef}>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-cormorant text-2xl text-mist mb-4">No pieces found</p>
                  <button
                    onClick={() => { setCategory('all'); setPriceRange('all'); }}
                    className="font-manrope text-xs text-gold hover:text-gold-dark transition-colors duration-300"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {filtered.map(product => (
                    <ShopProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-obsidian/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-cream rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-cormorant text-xl font-medium text-ink">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-mist hover:text-ink">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <FilterSidebar />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 bg-gold text-cream font-manrope text-xs font-semibold tracking-[0.12em] uppercase py-4"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}
