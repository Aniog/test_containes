import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';

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
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-stone aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-velmora-obsidian text-white font-sans text-[9px] tracking-widest uppercase px-2 py-1">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velmora-gold text-velmora-obsidian font-sans text-[9px] tracking-widest uppercase px-2 py-1">New</span>
          )}
        </div>

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-velmora-obsidian/90 text-white font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} size={10} />
          <span className="font-sans text-[10px] text-velmora-subtle">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={`shop-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-velmora-ink hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p id={`shop-desc-${product.id}`} className="hidden">{product.shortDescription}</p>
        <p className="font-sans text-sm text-velmora-ink">${product.price}</p>
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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

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

  const setFilter = (key, value) => {
    if (key === 'category') {
      setCategory(value);
      if (value !== 'all') setSearchParams({ category: value });
      else setSearchParams({});
    }
    if (key === 'price') setPriceRange(value);
  };

  return (
    <div className="bg-velmora-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-stone border-b border-velmora-linen py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-ink">All Jewelry</h1>
          <div className="w-10 h-px bg-velmora-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-linen">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-ink transition-colors md:hidden"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <span className="font-sans text-xs text-velmora-subtle hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-sans text-xs text-velmora-muted hidden md:block">Sort:</label>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="font-sans text-xs text-velmora-ink bg-transparent border border-velmora-linen px-3 py-2 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-ink mb-4">Category</h3>
                <ul className="space-y-2">
                  {categories.map(cat => (
                    <li key={cat.value}>
                      <button
                        onClick={() => setFilter('category', cat.value)}
                        className={`font-sans text-sm transition-colors ${category === cat.value ? 'text-velmora-ink font-medium' : 'text-velmora-muted hover:text-velmora-ink'}`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-ink mb-4">Price</h3>
                <ul className="space-y-2">
                  {priceRanges.map(range => (
                    <li key={range.value}>
                      <button
                        onClick={() => setFilter('price', range.value)}
                        className={`font-sans text-sm transition-colors ${priceRange === range.value ? 'text-velmora-ink font-medium' : 'text-velmora-muted hover:text-velmora-ink'}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-velmora-obsidian/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-velmora-cream p-6 rounded-t-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl font-light text-velmora-ink">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}><X size={20} className="text-velmora-muted" /></button>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-ink mb-3">Category</h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(cat => (
                        <button
                          key={cat.value}
                          onClick={() => { setFilter('category', cat.value); setFilterOpen(false); }}
                          className={`font-sans text-xs tracking-wider uppercase px-4 py-2 border transition-colors ${category === cat.value ? 'border-velmora-ink bg-velmora-ink text-white' : 'border-velmora-linen text-velmora-muted'}`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-ink mb-3">Price</h4>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map(range => (
                        <button
                          key={range.value}
                          onClick={() => { setFilter('price', range.value); setFilterOpen(false); }}
                          className={`font-sans text-xs tracking-wider uppercase px-4 py-2 border transition-colors ${priceRange === range.value ? 'border-velmora-ink bg-velmora-ink text-white' : 'border-velmora-linen text-velmora-muted'}`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-velmora-muted">No products found</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); setSearchParams({}); }}
                  className="font-sans text-xs tracking-widest uppercase text-velmora-gold mt-4 inline-block hover:text-velmora-gold-dark transition-colors"
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
