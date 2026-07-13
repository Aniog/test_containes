import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categoryOptions = [
  { id: 'all', label: 'All Jewelry' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: '0-50', label: 'Under $50' },
  { id: '50-75', label: '$50 – $75' },
  { id: '75-150', label: '$75+' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (activePriceRange !== 'all') {
        const [min, max] = activePriceRange.split('-').map(Number);
        if (max && (p.price < min || p.price > max)) return false;
        if (!max && p.price < min) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="min-h-screen bg-velmora-cream page-enter">
      {/* Page header */}
      <div className="bg-velmora-linen border-b border-velmora-sand pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-text-primary">
            {activeCategory === 'all'
              ? 'All Jewelry'
              : categoryOptions.find(c => c.id === activeCategory)?.label || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-velmora-text-muted mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14" ref={containerRef}>
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterSidebar
              activeCategory={activeCategory}
              activePriceRange={activePriceRange}
              onCategoryChange={handleCategoryChange}
              onPriceChange={setActivePriceRange}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-velmora-sand">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-velmora-text-secondary hover:text-velmora-gold transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>

              {/* Category pills — desktop */}
              <div className="hidden lg:flex items-center gap-2 flex-wrap">
                {categoryOptions.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`font-sans text-[10px] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-200 ${
                      activeCategory === cat.id
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone/30 text-velmora-text-muted hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-xs tracking-[0.1em] text-velmora-text-secondary pr-6 pl-0 py-1 border-0 border-b border-velmora-stone/30 focus:outline-none focus:border-velmora-gold cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-text-muted pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-text-secondary mb-4">No pieces found</p>
                <button
                  onClick={() => { handleCategoryChange('all'); setActivePriceRange('all'); }}
                  className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-gold border-b border-velmora-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filtered.map(product => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => addItem(product)}
                  />
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
            className="fixed inset-0 bg-velmora-obsidian/40 z-50 backdrop-blur-sm"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-velmora-cream z-50 rounded-t-2xl p-6 animate-fadeIn max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-text-primary font-medium">
                Filter
              </span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5 text-velmora-text-muted" />
              </button>
            </div>
            <FilterSidebar
              activeCategory={activeCategory}
              activePriceRange={activePriceRange}
              onCategoryChange={(cat) => { handleCategoryChange(cat); setFilterOpen(false); }}
              onPriceChange={(range) => { setActivePriceRange(range); setFilterOpen(false); }}
            />
          </div>
        </>
      )}
    </div>
  );
}

function FilterSidebar({ activeCategory, activePriceRange, onCategoryChange, onPriceChange }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-velmora-text-muted mb-4 font-medium">
          Category
        </p>
        <div className="flex flex-col gap-2.5">
          {categoryOptions.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`text-left font-sans text-sm transition-colors duration-200 ${
                activeCategory === cat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-text-secondary hover:text-velmora-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-velmora-sand pt-6">
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-velmora-text-muted mb-4 font-medium">
          Price
        </p>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map(range => (
            <button
              key={range.id}
              onClick={() => onPriceChange(range.id)}
              className={`text-left font-sans text-sm transition-colors duration-200 ${
                activePriceRange === range.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-text-secondary hover:text-velmora-gold'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-velmora-linen aspect-portrait mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
          />

          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.tags.includes('new') && (
              <span className="bg-velmora-obsidian text-velmora-cream font-sans text-[9px] tracking-[0.15em] uppercase px-2 py-1">
                New
              </span>
            )}
            {product.tags.includes('bestseller') && (
              <span className="bg-velmora-gold text-velmora-obsidian font-sans text-[9px] tracking-[0.15em] uppercase px-2 py-1">
                Bestseller
              </span>
            )}
          </div>

          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 text-velmora-cream font-sans text-[10px] tracking-[0.2em] uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag className="w-3 h-3" />
            Add to Cart
          </button>
        </div>
      </Link>

      <div>
        <p
          id={`shop-${product.id}-title`}
          className="font-serif text-sm tracking-[0.12em] uppercase text-velmora-text-primary mb-1"
        >
          {product.name}
        </p>
        <p id={`shop-${product.id}-desc`} className="sr-only">{product.shortDescription}</p>

        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
            />
          ))}
          <span className="font-sans text-[10px] text-velmora-text-muted ml-1">({product.reviewCount})</span>
        </div>

        <p className="font-serif text-base text-velmora-text-primary">${product.price}</p>
      </div>
    </div>
  );
}
