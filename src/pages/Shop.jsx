import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-velvet font-manrope text-[9px] tracking-[0.12em] uppercase px-2 py-0.5">
            Bestseller
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-velvet/90 text-cream font-manrope text-[10px] tracking-[0.15em] uppercase py-3 flex items-center justify-center gap-2 hover:bg-velvet transition-colors"
          >
            <ShoppingBag size={12} />
            Quick Add
          </button>
        </div>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3
          id={product.titleId}
          className="font-cormorant text-base uppercase tracking-[0.1em] text-ink hover:text-gold transition-colors leading-tight mb-1"
        >
          {product.name}
        </h3>
      </Link>
      <p id={product.descId} className="font-manrope text-xs text-muted mb-2">
        {product.shortDescription}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-manrope text-sm font-medium text-ink">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={11} className="text-gold fill-gold" />
          <span className="font-manrope text-[10px] text-muted">{product.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setActiveCategory(cat);
  }, [searchParams]);

  const filtered = products
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .filter((p) => {
      const range = priceRanges[activePriceRange];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-stone/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-2">
            {activeCategory === 'all' ? 'All Pieces' : activeCategory}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            {activeCategory === 'all' ? 'The Collection' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-manrope text-sm text-muted mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-muted mb-4">
                  Category
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-left font-manrope text-sm capitalize transition-colors ${
                        activeCategory === cat
                          ? 'text-gold font-medium'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-stone/30 mb-8" />

              <div className="mb-8">
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-muted mb-4">
                  Price
                </h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`text-left font-manrope text-sm transition-colors ${
                        activePriceRange === i
                          ? 'text-gold font-medium'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-stone/30 mb-8" />

              <div>
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-muted mb-4">
                  Material
                </h3>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver'].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-stone group-hover:border-gold transition-colors" />
                      <span className="font-manrope text-sm text-muted group-hover:text-ink transition-colors">
                        {m}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone/20">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-[0.1em] uppercase text-muted hover:text-ink transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filter
              </button>

              {/* Active filters */}
              <div className="hidden md:flex items-center gap-2">
                {activeCategory !== 'all' && (
                  <span className="flex items-center gap-1 bg-linen border border-stone/30 font-manrope text-xs px-3 py-1 text-muted capitalize">
                    {activeCategory}
                    <button onClick={() => handleCategoryChange('all')} className="ml-1 hover:text-ink">
                      <X size={11} />
                    </button>
                  </span>
                )}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="font-manrope text-xs text-muted hidden md:block">Sort:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent font-manrope text-xs text-ink pr-6 pl-1 py-1 border-b border-stone/40 focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-ink mb-3">No pieces found</p>
                <p className="font-manrope text-sm text-muted mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => { handleCategoryChange('all'); setActivePriceRange(0); }}
                  className="font-manrope text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-dark transition-colors border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div
            className="fixed inset-0 bg-velvet/40 z-50"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-parchment z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-cormorant text-xl text-ink">Filters</h3>
              <button onClick={() => setFilterOpen(false)}>
                <X size={20} className="text-muted" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-manrope text-xs tracking-[0.15em] uppercase text-muted mb-3">Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                    className={`font-manrope text-xs capitalize px-4 py-2 border transition-colors ${
                      activeCategory === cat
                        ? 'border-gold bg-gold text-velvet'
                        : 'border-stone text-muted hover:border-ink'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-manrope text-xs tracking-[0.15em] uppercase text-muted mb-3">Price</h4>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                    className={`font-manrope text-xs px-4 py-2 border transition-colors ${
                      activePriceRange === i
                        ? 'border-gold bg-gold text-velvet'
                        : 'border-stone text-muted hover:border-ink'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
