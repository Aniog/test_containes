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
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          strokeWidth={1}
          className={s <= Math.round(rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
        />
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div ref={cardRef} className="group flex flex-col">
      <Link
        to={`/product/${product.slug}`}
        className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]"
      >
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}] [shop-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-velmora-obsidian text-velmora-ivory text-[9px] font-semibold tracking-[0.15em] uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velmora-gold text-velmora-obsidian text-[9px] font-semibold tracking-[0.15em] uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-ivory py-3.5 text-[10px] font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={2} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} />
          <span className="text-[10px] text-velmora-subtle">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-title-${product.id}`}
            className="text-xs font-medium tracking-[0.1em] uppercase text-velmora-obsidian hover:text-velmora-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-desc-${product.id}`} className="hidden text-xs text-velmora-muted">
          {product.shortDescription}
        </p>
        <p className="font-serif text-base font-light text-velmora-obsidian">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const filteredProducts = products
    .filter((p) => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (activePriceRange !== 'all') {
        const [min, max] = activePriceRange.split('-').map(Number);
        if (p.price < min || p.price > max) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price;
      if (activeSort === 'price-desc') return b.price - a.price;
      if (activeSort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const activeFiltersCount = [
    activeCategory !== 'all',
    activePriceRange !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-velmora-ivory pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Velmora Collection
          </p>
          <h1
            id="shop-page-title"
            className="font-serif text-3xl md:text-5xl font-light text-velmora-obsidian tracking-wide"
          >
            All Jewelry
          </h1>
          <p className="text-sm text-velmora-muted mt-3">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-velmora-muted hover:text-velmora-obsidian transition-colors md:hidden"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="bg-velmora-gold text-velmora-obsidian text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter('category', cat.value)}
                className={`px-4 py-2 text-[10px] font-medium tracking-[0.12em] uppercase border transition-all duration-200 ${
                  activeCategory === cat.value
                    ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory'
                    : 'border-velmora-border text-velmora-muted hover:border-velmora-obsidian hover:text-velmora-obsidian'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative ml-auto">
            <select
              value={activeSort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent border border-velmora-border text-xs font-medium tracking-[0.1em] uppercase text-velmora-muted pl-4 pr-8 py-2.5 focus:outline-none focus:border-velmora-gold cursor-pointer hover:border-velmora-obsidian transition-colors"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={12}
              strokeWidth={2}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 flex flex-col gap-8">
              {/* Price filter */}
              <div>
                <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-velmora-obsidian mb-4">
                  Price
                </h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setFilter('price', range.value)}
                      className={`text-left text-xs tracking-wide transition-colors duration-200 ${
                        activePriceRange === range.value
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted hover:text-velmora-obsidian'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category filter */}
              <div>
                <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-velmora-obsidian mb-4">
                  Category
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setFilter('category', cat.value)}
                      className={`text-left text-xs tracking-wide transition-colors duration-200 ${
                        activeCategory === cat.value
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted hover:text-velmora-obsidian'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => setSearchParams({})}
                  className="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.1em] uppercase text-velmora-muted hover:text-velmora-gold transition-colors"
                >
                  <X size={10} strokeWidth={2} />
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-velmora-obsidian/40"
                onClick={() => setFilterOpen(false)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-velmora-ivory p-6 rounded-t-2xl animate-fadeIn">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold tracking-[0.1em] uppercase text-velmora-obsidian">
                    Filters
                  </h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-velmora-muted" />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-velmora-obsidian mb-3">
                    Category
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => { setFilter('category', cat.value); setFilterOpen(false); }}
                        className={`px-4 py-2 text-[10px] font-medium tracking-[0.1em] uppercase border transition-all ${
                          activeCategory === cat.value
                            ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory'
                            : 'border-velmora-border text-velmora-muted'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-velmora-obsidian mb-3">
                    Price
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => { setFilter('price', range.value); setFilterOpen(false); }}
                        className={`px-4 py-2 text-[10px] font-medium tracking-[0.1em] uppercase border transition-all ${
                          activePriceRange === range.value
                            ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory'
                            : 'border-velmora-border text-velmora-muted'
                        }`}
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
          <div className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <p className="font-serif text-2xl font-light text-velmora-muted">No pieces found</p>
                <p className="text-xs text-velmora-subtle">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-2 text-xs font-medium tracking-widest uppercase text-velmora-gold hover:underline"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
