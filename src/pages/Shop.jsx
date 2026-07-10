import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} size={10} className={s <= Math.round(rating) ? 'text-gold fill-gold' : 'text-ivory-300'} strokeWidth={1} />
    ))}
  </div>
);

const ShopProductCard = ({ product }) => {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-ivory-200 aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span id={`shop-${product.titleId}`} className="sr-only">{product.name}</span>
        <span id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</span>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 bg-velvet-900/90 py-3 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="font-sans text-[10px] tracking-widest2 uppercase text-ivory-100 hover:text-gold transition-colors"
          >
            Add to Cart
          </button>
        </div>

        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-gold text-velvet-900 px-2 py-0.5 font-sans text-[9px] tracking-widest uppercase font-semibold">
            Bestseller
          </div>
        )}
      </Link>
      <div className="pt-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[10px] text-stone-warm">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-sm font-medium tracking-widest uppercase text-velvet-900 hover:text-gold transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-sm font-medium text-velvet-900 mt-1">${product.price}</p>
      </div>
    </div>
  );
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = products
    .filter((p) => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const priceRange = PRICE_RANGES[activePriceRange];
      const priceMatch = p.price >= priceRange.min && p.price < priceRange.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat !== 'All') {
      setSearchParams({ category: cat.toLowerCase() });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-ivory-100 pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-ivory-200 py-10 md:py-14 px-4 md:px-8 lg:px-16 border-b border-ivory-300">
        <div className="max-w-screen-xl mx-auto">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">Velmora</p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-velvet-900">The Collection</h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 font-sans text-xs tracking-widest uppercase border transition-colors ${
                  activeCategory === cat
                    ? 'bg-velvet-900 text-ivory-100 border-velvet-900'
                    : 'bg-transparent text-velvet-700 border-ivory-300 hover:border-velvet-900 hover:text-velvet-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velvet-900 border border-ivory-300 px-4 py-2"
          >
            <SlidersHorizontal size={12} />
            Filter
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <span className="font-sans text-xs text-stone-warm hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
            </span>
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-ivory-100 border border-ivory-300 font-sans text-xs tracking-widest uppercase text-velvet-900 px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-warm pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden bg-ivory-200 border border-ivory-300 p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-widest uppercase text-velvet-900 font-medium">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-stone-warm hover:text-velvet-900">
                <X size={14} />
              </button>
            </div>

            <div className="mb-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-warm mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                    className={`px-3 py-1.5 font-sans text-xs tracking-widest uppercase border transition-colors ${
                      activeCategory === cat
                        ? 'bg-velvet-900 text-ivory-100 border-velvet-900'
                        : 'bg-transparent text-velvet-700 border-ivory-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-warm mb-2">Price</p>
              <div className="flex flex-col gap-1.5">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(i)}
                    className={`text-left font-sans text-xs text-velvet-700 hover:text-velvet-900 transition-colors ${
                      activePriceRange === i ? 'text-velvet-900 font-medium' : ''
                    }`}
                  >
                    {activePriceRange === i && <span className="text-gold mr-1">›</span>}
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="mb-8">
              <p className="font-sans text-[10px] tracking-widest3 uppercase text-stone-warm mb-4">Category</p>
              <ul className="flex flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`font-sans text-xs text-left w-full transition-colors ${
                        activeCategory === cat
                          ? 'text-velvet-900 font-medium'
                          : 'text-velvet-700 hover:text-velvet-900'
                      }`}
                    >
                      {activeCategory === cat && <span className="text-gold mr-1.5">›</span>}
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hairline mb-8" />

            <div>
              <p className="font-sans text-[10px] tracking-widest3 uppercase text-stone-warm mb-4">Price</p>
              <ul className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <li key={range.label}>
                    <button
                      onClick={() => setActivePriceRange(i)}
                      className={`font-sans text-xs text-left w-full transition-colors ${
                        activePriceRange === i
                          ? 'text-velvet-900 font-medium'
                          : 'text-velvet-700 hover:text-velvet-900'
                      }`}
                    >
                      {activePriceRange === i && <span className="text-gold mr-1.5">›</span>}
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                <p className="font-serif text-2xl font-light text-velvet-700">No products found</p>
                <p className="font-sans text-sm text-stone-warm">Try adjusting your filters.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                  className="font-sans text-xs tracking-widest2 uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
