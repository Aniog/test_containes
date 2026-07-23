import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
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
  { value: '75-120', label: '$75 – $120' },
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
      <div className="relative overflow-hidden bg-velmora-sand aspect-[3/4] mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [shop-heading]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] uppercase tracking-widest-md px-2.5 py-1">
            {product.badge}
          </span>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-cream font-manrope text-[10px] uppercase tracking-widest-md py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p
        id={product.titleId}
        className="font-cormorant text-base uppercase tracking-widest-sm text-velmora-obsidian group-hover:text-velmora-gold-muted transition-colors"
      >
        {product.name}
      </p>
      <p id={product.descId} className="font-manrope text-xs text-velmora-text-muted mt-0.5">
        {product.shortDescription}
      </p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-manrope text-sm font-medium text-velmora-text-dark">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} fill="#C9A96E" stroke="none" />
          <span className="font-manrope text-[10px] text-velmora-text-muted">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all' || !value) next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  };

  const filteredProducts = products
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .filter((p) => {
      if (activePriceRange === 'all') return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price;
      if (activeSort === 'price-desc') return b.price - a.price;
      if (activeSort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, activeSort]);

  return (
    <div ref={containerRef} className="bg-velmora-linen min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <p className="font-manrope text-[10px] uppercase tracking-widest-xl text-velmora-gold mb-3">
            Velmora Collection
          </p>
          <h1
            id="shop-heading"
            className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian"
          >
            {activeCategory === 'all'
              ? 'All Jewelry'
              : categories.find((c) => c.value === activeCategory)?.label || 'Shop'}
          </h1>
          <p className="font-manrope text-xs text-velmora-text-muted mt-3">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-widest-md text-velmora-text-mid border border-velmora-sand px-4 py-2.5 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter('category', cat.value)}
                className={`font-manrope text-[10px] uppercase tracking-widest-md px-4 py-2 border transition-colors ${
                  activeCategory === cat.value
                    ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-cream'
                    : 'border-velmora-sand text-velmora-text-mid hover:border-velmora-gold hover:text-velmora-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative ml-auto">
            <select
              value={activeSort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent border border-velmora-sand font-manrope text-xs uppercase tracking-widest-sm text-velmora-text-mid px-4 py-2.5 pr-8 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={12}
              strokeWidth={1.5}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-text-muted pointer-events-none"
            />
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden bg-velmora-cream border border-velmora-sand p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-manrope text-xs uppercase tracking-widest-md text-velmora-obsidian">
                Filters
              </span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={16} strokeWidth={1.5} className="text-velmora-text-muted" />
              </button>
            </div>

            <div className="mb-4">
              <p className="font-manrope text-[10px] uppercase tracking-widest-md text-velmora-text-muted mb-2">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setFilter('category', cat.value)}
                    className={`font-manrope text-[10px] uppercase tracking-widest-sm px-3 py-1.5 border transition-colors ${
                      activeCategory === cat.value
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-cream'
                        : 'border-velmora-sand text-velmora-text-mid'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-manrope text-[10px] uppercase tracking-widest-md text-velmora-text-muted mb-2">
                Price
              </p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setFilter('price', range.value)}
                    className={`font-manrope text-[10px] uppercase tracking-widest-sm px-3 py-1.5 border transition-colors ${
                      activePriceRange === range.value
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-cream'
                        : 'border-velmora-sand text-velmora-text-mid'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <p className="font-manrope text-[10px] uppercase tracking-widest-md text-velmora-text-muted mb-3">
                  Price
                </p>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setFilter('price', range.value)}
                      className={`text-left font-manrope text-xs transition-colors ${
                        activePriceRange === range.value
                          ? 'text-velmora-gold'
                          : 'text-velmora-text-mid hover:text-velmora-gold'
                      }`}
                    >
                      {activePriceRange === range.value && (
                        <span className="mr-1.5">✦</span>
                      )}
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-velmora-sand mb-8" />

              <div>
                <p className="font-manrope text-[10px] uppercase tracking-widest-md text-velmora-text-muted mb-3">
                  Material
                </p>
                <div className="flex flex-col gap-2">
                  {['Gold Tone', 'Silver Tone'].map((m) => (
                    <button
                      key={m}
                      className="text-left font-manrope text-xs text-velmora-text-mid hover:text-velmora-gold transition-colors"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-text-mid mb-4">
                  No pieces found
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-manrope text-xs uppercase tracking-widest-md text-velmora-gold border border-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
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
