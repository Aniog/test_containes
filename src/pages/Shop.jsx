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
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 font-sans text-[9px] tracking-widest uppercase bg-gold text-ivory px-2 py-1">
            {product.badge}
          </span>
        )}
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'} />
          ))}
          <span className="font-sans text-[10px] text-subtle ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.titleId}`}
            className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors duration-300 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="sr-only">{product.description}</p>
        <p className="font-sans text-sm font-medium text-ink mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setCategory(cat);
  }, [searchParams]);

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => {
      if (priceRange === 'all') return true;
      const [min, max] = priceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const handleCategory = (val) => {
    setCategory(val);
    if (val === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: val });
    }
  };

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">Velmora Fine Jewelry</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink">
            {category === 'all' ? 'All Jewelry' : categories.find(c => c.value === category)?.label || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors border border-linen px-4 py-2.5"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
          </button>

          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => handleCategory(cat.value)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                  category === cat.value
                    ? 'border-gold bg-gold text-ivory'
                    : 'border-linen text-muted hover:border-gold hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative ml-auto">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-linen font-sans text-xs tracking-widest uppercase text-muted px-4 py-2.5 pr-8 focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => handleCategory(cat.value)}
                      className={`block w-full text-left font-sans text-sm transition-colors duration-300 py-1 ${
                        category === cat.value ? 'text-gold font-medium' : 'text-muted hover:text-gold'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-linen mb-8" />

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block w-full text-left font-sans text-sm transition-colors duration-300 py-1 ${
                        priceRange === range.value ? 'text-gold font-medium' : 'text-muted hover:text-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm" onClick={() => setFilterOpen(false)}>
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-xs tracking-widest uppercase text-ink">Filters</span>
                  <button onClick={() => setFilterOpen(false)} className="text-muted hover:text-ink">
                    <X size={18} strokeWidth={1.5} />
                  </button>
                </div>
                <div className="mb-8">
                  <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Category</h3>
                  <div className="space-y-3">
                    {categories.map(cat => (
                      <button
                        key={cat.value}
                        onClick={() => { handleCategory(cat.value); setFilterOpen(false); }}
                        className={`block w-full text-left font-sans text-sm py-1 ${category === cat.value ? 'text-gold font-medium' : 'text-muted'}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="w-full h-px bg-linen mb-8" />
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Price</h3>
                  <div className="space-y-3">
                    {priceRanges.map(range => (
                      <button
                        key={range.value}
                        onClick={() => { setPriceRange(range.value); setFilterOpen(false); }}
                        className={`block w-full text-left font-sans text-sm py-1 ${priceRange === range.value ? 'text-gold font-medium' : 'text-muted'}`}
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
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl font-light text-ink mb-3">No pieces found</p>
                <p className="font-sans text-sm text-muted mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); setSearchParams({}); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
