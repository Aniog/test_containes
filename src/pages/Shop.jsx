import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
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
    <div className="product-card group">
      <div className="relative overflow-hidden bg-cream-200 aspect-[3/4]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="product-img-primary absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="product-img-secondary absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-white font-sans text-[9px] tracking-widest uppercase px-2 py-1">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-charcoal text-cream font-sans text-[9px] tracking-widest uppercase px-2 py-1">New</span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-charcoal text-cream font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-charcoal-light transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>
      <div className="pt-4 pb-2">
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-sm tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-charcoal-muted mt-1 line-clamp-1">{product.shortDesc}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-medium text-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#b8965a" className="text-gold" />
            <span className="font-sans text-xs text-charcoal-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setActiveCategory(cat);
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
      if (activePriceRange === 'all') return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (val) => {
    setActiveCategory(val);
    if (val === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: val });
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="border-b border-divider">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10 md:py-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Velmora Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.value === activeCategory)?.label}
          </h1>
          <p className="font-sans text-sm text-charcoal-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-charcoal text-cream border-charcoal'
                    : 'bg-transparent text-charcoal border-divider hover:border-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile filter button */}
          <button
            onClick={() => setFilterOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-charcoal border border-divider px-4 py-2"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-sans text-xs text-charcoal-muted hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="font-sans text-xs text-charcoal bg-transparent border border-divider px-4 py-2 pr-8 appearance-none focus:outline-none focus:border-charcoal cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-charcoal-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setActivePriceRange(range.value)}
                      className={`block font-sans text-xs text-left w-full py-1 transition-colors duration-300 ${
                        activePriceRange === range.value ? 'text-gold' : 'text-charcoal-muted hover:text-charcoal'
                      }`}
                    >
                      {activePriceRange === range.value && <span className="mr-2 text-gold">—</span>}
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-charcoal mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => handleCategoryChange(cat.value)}
                      className={`block font-sans text-xs text-left w-full py-1 transition-colors duration-300 ${
                        activeCategory === cat.value ? 'text-gold' : 'text-charcoal-muted hover:text-charcoal'
                      }`}
                    >
                      {activeCategory === cat.value && <span className="mr-2 text-gold">—</span>}
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl font-light text-charcoal">No pieces found</p>
                <p className="font-sans text-sm text-charcoal-muted mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange('all'); setSearchParams({}); }}
                  className="mt-6 font-sans text-xs tracking-widest uppercase text-gold underline underline-offset-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-[70] flex">
          <div className="flex-1 bg-charcoal/40" onClick={() => setFilterOpen(false)} />
          <div className="w-72 bg-cream h-full overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-sans text-xs tracking-widest uppercase text-charcoal">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-charcoal">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-charcoal mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => { handleCategoryChange(cat.value); setFilterOpen(false); }}
                      className={`block font-sans text-sm text-left w-full py-1 transition-colors duration-300 ${
                        activeCategory === cat.value ? 'text-gold font-medium' : 'text-charcoal-muted'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-charcoal mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => { setActivePriceRange(range.value); setFilterOpen(false); }}
                      className={`block font-sans text-sm text-left w-full py-1 transition-colors duration-300 ${
                        activePriceRange === range.value ? 'text-gold font-medium' : 'text-charcoal-muted'
                      }`}
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
    </div>
  );
}
