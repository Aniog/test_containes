import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          <img
            data-strk-img-id={`shop-alt-${product.imgId2}`}
            data-strk-img={`[shop-title-${product.id}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {product.tags.includes('bestseller') && (
            <span className="absolute top-3 left-3 bg-gold text-obsidian text-[9px] tracking-widest uppercase font-bold px-2 py-1">
              Bestseller
            </span>
          )}

          <button
            onClick={handleAdd}
            className={`absolute bottom-0 left-0 right-0 bg-obsidian text-ivory text-[10px] tracking-widest uppercase font-semibold py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag size={12} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        <p id={`shop-title-${product.id}`} className="text-xs tracking-widest uppercase font-semibold text-obsidian mb-1">
          {product.name}
        </p>
        <p id={`shop-desc-${product.id}`} className="text-xs text-taupe mb-2">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} className="text-gold" fill="#C9A96E" />
            <span className="text-[10px] text-taupe">{product.rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const category = searchParams.get('category') || '';
  const priceRange = searchParams.get('price') || '';
  const sort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  // Filter and sort products
  const filtered = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!priceRange) return true;
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
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const activeFilters = [
    category && { key: 'category', label: categoryOptions.find(c => c.value === category)?.label },
    priceRange && { key: 'price', label: priceRanges.find(p => p.value === priceRange)?.label },
  ].filter(Boolean);

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-ivory-dark pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gold text-xs tracking-ultra-wide uppercase font-medium mb-3">
            {category ? categoryOptions.find(c => c.value === category)?.label : 'All Jewelry'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-obsidian mb-4">
            {category ? categoryOptions.find(c => c.value === category)?.label : 'The Collection'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/20">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-taupe hover:text-obsidian transition-colors md:hidden"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <span className="text-xs text-taupe hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Active filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {activeFilters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key, '')}
                className="flex items-center gap-1 text-[10px] tracking-widest uppercase bg-blush text-obsidian px-3 py-1.5 hover:bg-gold/20 transition-colors"
              >
                {f.label}
                <X size={10} />
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setFilter('sort', e.target.value)}
            className="text-xs tracking-wide text-taupe bg-transparent border border-taupe-light px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            {sortOptions.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs tracking-widest uppercase font-semibold text-obsidian mb-5">
                Filter
              </h3>

              {/* Category */}
              <div className="mb-8">
                <p className="text-[10px] tracking-widest uppercase text-taupe font-medium mb-3">
                  Category
                </p>
                <div className="flex flex-col gap-2">
                  {categoryOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFilter('category', opt.value)}
                      className={`text-left text-sm transition-colors ${
                        category === opt.value
                          ? 'text-obsidian font-semibold'
                          : 'text-taupe hover:text-obsidian'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <p className="text-[10px] tracking-widest uppercase text-taupe font-medium mb-3">
                  Price
                </p>
                <div className="flex flex-col gap-2">
                  {priceRanges.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFilter('price', opt.value)}
                      className={`text-left text-sm transition-colors ${
                        priceRange === opt.value
                          ? 'text-obsidian font-semibold'
                          : 'text-taupe hover:text-obsidian'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-obsidian/50" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-ivory p-6 rounded-t-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm tracking-widest uppercase font-semibold text-obsidian">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}><X size={18} className="text-taupe" /></button>
                </div>
                <div className="mb-6">
                  <p className="text-[10px] tracking-widest uppercase text-taupe font-medium mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('category', opt.value); setFilterOpen(false); }}
                        className={`px-4 py-2 text-xs border transition-colors ${
                          category === opt.value
                            ? 'bg-obsidian text-ivory border-obsidian'
                            : 'border-taupe-light text-taupe hover:border-obsidian'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-taupe font-medium mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('price', opt.value); setFilterOpen(false); }}
                        className={`px-4 py-2 text-xs border transition-colors ${
                          priceRange === opt.value
                            ? 'bg-obsidian text-ivory border-obsidian'
                            : 'border-taupe-light text-taupe hover:border-obsidian'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-taupe mb-4">No pieces found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
                >
                  Clear all filters
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
