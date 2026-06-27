import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filteredProducts = products
    .filter(p => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
      if (selectedPrices.length > 0) {
        const inRange = selectedPrices.some(range => p.price >= range.min && p.price < range.max);
        if (!inRange) return false;
      }
      return true;
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
  }, [filteredProducts.length, selectedCategories, selectedPrices, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const togglePrice = (range) => {
    setSelectedPrices(prev =>
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
  };

  const hasFilters = selectedCategories.length > 0 || selectedPrices.length > 0;

  return (
    <div className="min-h-screen bg-[#f7f3ee] pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-[#f0ebe4] border-b border-[#e8e0d6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#c9a96e] mb-2">
            Velmora
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-[#2c2825]">
            All Jewelry
          </h1>
          <p className="font-sans text-sm text-[#7a6f66] mt-2">
            {filteredProducts.length} pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 gap-4">
          {/* Filter toggle (mobile) + active filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs tracking-[0.1em] uppercase text-[#2c2825] border border-[#e8e0d6] px-4 py-2 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-200 md:hidden"            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters {hasFilters && `(${selectedCategories.length + selectedPrices.length})`}
            </button>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 font-sans text-xs text-[#a89e95] hover:text-[#c9a96e] transition-colors duration-200"
              >
                <X size={12} strokeWidth={1.5} />
                Clear all
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative ml-auto">
            <button
              onClick={() => setSortOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs tracking-[0.1em] uppercase text-[#2c2825] border border-[#e8e0d6] px-4 py-2 hover:border-[#c9a96e] transition-all duration-200"
            >
              Sort: {SORT_OPTIONS.find(o => o.value === sortBy)?.label}
              <ChevronDown size={12} strokeWidth={1.5} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-[#fdfaf6] border border-[#e8e0d6] shadow-[0_8px_24px_rgba(26,23,20,0.08)] z-20 min-w-[180px]">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-sans text-xs hover:bg-[#f0ebe4] transition-colors duration-150 ${
                      sortBy === opt.value ? 'text-[#c9a96e]' : 'text-[#2c2825]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8 md:gap-10">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              selectedPrices={selectedPrices}
              onToggleCategory={toggleCategory}
              onTogglePrice={togglePrice}
              onClear={clearFilters}
            />
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="absolute inset-0 bg-[#1a1714]/50" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#fdfaf6] p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
          <span className="font-sans text-xs tracking-[0.15em] uppercase text-[#2c2825] font-semibold">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-[#7a6f66]" />
                  </button>
                </div>
                <FilterSidebar
                  selectedCategories={selectedCategories}
                  selectedPrices={selectedPrices}
                  onToggleCategory={toggleCategory}
                  onTogglePrice={togglePrice}
                  onClear={clearFilters}
                />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl italic text-[#7a6f66] mb-3">No pieces found</p>
                <p className="font-sans text-sm text-[#a89e95] mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs tracking-[0.12em] uppercase text-[#c9a96e] border border-[#c9a96e] px-6 py-2.5 hover:bg-[#c9a96e] hover:text-[#1a1714] transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
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
    </div>
  );
}

function FilterSidebar({ selectedCategories, selectedPrices, onToggleCategory, onTogglePrice, onClear }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-[#2c2825] font-semibold mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {CATEGORIES.map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => onToggleCategory(cat)}
                className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  selectedCategories.includes(cat)
                    ? 'bg-[#c9a96e] border-[#c9a96e]'
                    : 'border-[#d4ccc4] group-hover:border-[#c9a96e]'
                }`}
              >
                {selectedCategories.includes(cat) && (
                  <span className="text-[#1a1714] text-[10px] font-bold">✓</span>
                )}
              </div>
              <span
                onClick={() => onToggleCategory(cat)}
                className={`font-sans text-sm capitalize transition-colors duration-200 ${
                  selectedCategories.includes(cat) ? 'text-[#2c2825] font-500' : 'text-[#7a6f66] group-hover:text-[#2c2825]'
                }`}
              >
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-[#2c2825] font-semibold mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {PRICE_RANGES.map(range => (
            <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => onTogglePrice(range)}
                className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  selectedPrices.includes(range)
                    ? 'bg-[#c9a96e] border-[#c9a96e]'
                    : 'border-[#d4ccc4] group-hover:border-[#c9a96e]'
                }`}
              >
                {selectedPrices.includes(range) && (
                  <span className="text-[#1a1714] text-[10px] font-bold">✓</span>
                )}
              </div>
              <span
                onClick={() => onTogglePrice(range)}
                className={`font-sans text-sm transition-colors duration-200 ${
                  selectedPrices.includes(range) ? 'text-[#2c2825] font-500' : 'text-[#7a6f66] group-hover:text-[#2c2825]'
                }`}
              >
                {range.label}
              </span>
            </label>
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
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-[#f0ebe4] aspect-[3/4]">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-[#1a1714] text-[#c9a96e] font-sans text-[10px] tracking-[0.1em] uppercase px-2 py-1">
            {product.badge}
          </span>
        )}

        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        <img
          data-strk-img-id={`shop-hover-${product.imgId}`}
          data-strk-img={`[shop-${product.id}-title] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        <div className={`absolute bottom-0 left-0 right-0 bg-[#1a1714]/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className="flex items-center gap-2 text-[#c9a96e] font-sans text-[11px] tracking-[0.12em] uppercase hover:text-[#e8d5b0] transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="mt-3 md:mt-4">
        <p id={`shop-${product.id}-title`} className="font-sans text-[11px] md:text-xs tracking-[0.12em] uppercase text-[#2c2825] font-semibold leading-tight">
          {product.name}
        </p>
        <p id={`shop-${product.id}-desc`} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-[#d4ccc4]'} />
          ))}
          <span className="font-sans text-[10px] text-[#a89e95] ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="font-serif text-base text-[#2c2825]">${product.price}</span>
          {product.originalPrice && (
            <span className="font-sans text-xs text-[#a89e95] line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
