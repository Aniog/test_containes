import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';

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

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`gold jewelry ${product.category} close-up warm editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-obsidian font-sans text-[9px] uppercase tracking-[0.1em] font-semibold px-2 py-0.5">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-warm-white font-sans text-[9px] uppercase tracking-[0.1em] font-semibold px-2 py-0.5">New</span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-warm-white font-sans text-[10px] uppercase tracking-[0.12em] font-medium py-3.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={13} /> Quick Add
          </button>
        </div>
      </div>
      <div className="pt-4 pb-2">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size={11} />
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.titleId}`}
            className="font-serif text-sm uppercase tracking-[0.12em] text-obsidian hover:text-gold transition-colors leading-snug"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
        <p className="font-sans text-sm font-medium text-obsidian mt-1.5">${product.price}</p>
      </div>
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
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

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
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, sort]);

  const activeFilters = [
    category && categoryOptions.find(c => c.value === category)?.label,
    priceRange && priceRanges.find(p => p.value === priceRange)?.label,
  ].filter(Boolean);

  return (
    <div className="bg-ivory min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-cream border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-2">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-obsidian tracking-wide">
            {category ? categoryOptions.find(c => c.value === category)?.label || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="font-sans text-sm text-stone mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-5 border-b border-gold/10">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.1em] text-obsidian border border-gold/20 px-4 py-2.5 hover:border-gold transition-colors"
            >
              <SlidersHorizontal size={13} />
              Filters
              {activeFilters.length > 0 && (
                <span className="bg-gold text-obsidian text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFilters.length}
                </span>
              )}
            </button>

            {/* Active filter pills */}
            {activeFilters.map(f => (
              <span key={f} className="flex items-center gap-1.5 bg-cream border border-gold/20 font-sans text-xs text-obsidian px-3 py-1.5">
                {f}
                <button
                  onClick={() => {
                    if (categoryOptions.find(c => c.label === f)) setFilter('category', '');
                    if (priceRanges.find(p => p.label === f)) setFilter('price', '');
                  }}
                  className="text-stone hover:text-obsidian"
                >
                  <X size={11} />
                </button>
              </span>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent border border-gold/20 font-sans text-xs uppercase tracking-[0.1em] text-obsidian px-4 py-2.5 pr-8 hover:border-gold transition-colors cursor-pointer outline-none"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          {filterOpen && (
            <aside className="w-56 flex-shrink-0 animate-fadeIn">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-xs uppercase tracking-[0.12em] font-semibold text-obsidian">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} className="text-stone hover:text-obsidian">
                    <X size={14} />
                  </button>
                </div>

                {/* Category filter */}
                <div className="mb-7">
                  <h4 className="font-sans text-[10px] uppercase tracking-[0.12em] text-stone mb-3">Category</h4>
                  <div className="flex flex-col gap-2">
                    {categoryOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setFilter('category', opt.value)}
                        className={`text-left font-sans text-sm transition-colors ${
                          category === opt.value ? 'text-gold font-medium' : 'text-obsidian/70 hover:text-gold'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price filter */}
                <div className="mb-7">
                  <h4 className="font-sans text-[10px] uppercase tracking-[0.12em] text-stone mb-3">Price</h4>
                  <div className="flex flex-col gap-2">
                    {priceRanges.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setFilter('price', opt.value)}
                        className={`text-left font-sans text-sm transition-colors ${
                          priceRange === opt.value ? 'text-gold font-medium' : 'text-obsidian/70 hover:text-gold'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear all */}
                {activeFilters.length > 0 && (
                  <button
                    onClick={() => setSearchParams({})}
                    className="font-sans text-xs uppercase tracking-[0.1em] text-stone hover:text-gold transition-colors border-b border-stone/30 hover:border-gold pb-0.5"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </aside>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-obsidian/50 mb-3">No pieces found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-sans text-xs uppercase tracking-[0.1em] text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-4 md:gap-6 ${filterOpen ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
