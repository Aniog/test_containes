import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div ref={cardRef} className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-parchment font-manrope text-[9px] uppercase tracking-[0.12em] px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-obsidian/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="flex items-center gap-2 font-manrope text-xs uppercase tracking-[0.1em] text-parchment hover:text-gold transition-colors w-full justify-center"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="pt-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={10}
              className={i <= Math.round(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
            />
          ))}
          <span className="font-manrope text-[10px] text-whisper ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-title-${product.id}`}
            className="font-cormorant text-base uppercase tracking-[0.1em] text-obsidian hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-desc-${product.id}`} className="font-manrope text-xs text-whisper line-clamp-1">
          {product.shortDesc}
        </p>
        <span className="font-manrope text-sm font-medium text-obsidian">${product.price}</span>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);

  // Sync category from URL param
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = categories.find((c) => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  const filtered = products
    .filter((p) => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      if (p.price < activePriceRange.min || p.price > activePriceRange.max) return false;
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
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-linen py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-xs uppercase tracking-[0.15em] text-gold mb-3">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            {activeCategory === 'All' ? 'The Collection' : activeCategory}
          </h1>
          <p className="font-manrope text-sm text-muted mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-linen">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-[0.12em] text-muted hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-manrope text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-obsidian bg-obsidian text-parchment'
                    : 'border-linen text-muted hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 font-manrope text-xs uppercase tracking-[0.1em] text-muted hover:text-gold transition-colors"
            >
              Sort: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown size={13} strokeWidth={1.5} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-cream border border-linen shadow-[0_8px_24px_rgba(26,23,20,0.08)] z-20 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-manrope text-xs hover:bg-parchment transition-colors ${
                      sortBy === opt.value ? 'text-gold' : 'text-muted'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside
            className={`${
              filterOpen ? 'block' : 'hidden'
            } md:block w-full md:w-52 flex-shrink-0`}
          >
            {/* Mobile close */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <span className="font-manrope text-xs uppercase tracking-[0.12em] text-obsidian">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={16} strokeWidth={1.5} className="text-muted" />
              </button>
            </div>

            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-manrope text-xs uppercase tracking-[0.15em] text-muted mb-4">Category</h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-left font-manrope text-sm transition-colors ${
                      activeCategory === cat ? 'text-gold' : 'text-muted hover:text-obsidian'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-manrope text-xs uppercase tracking-[0.15em] text-muted mb-4">Price</h3>
              <div className="flex flex-col gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(range)}
                    className={`text-left font-manrope text-sm transition-colors ${
                      activePriceRange.label === range.label ? 'text-gold' : 'text-muted hover:text-obsidian'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset */}
            {(activeCategory !== 'All' || activePriceRange.label !== 'All Prices') && (
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setActivePriceRange(priceRanges[0]);
                  setSearchParams({});
                }}
                className="font-manrope text-xs uppercase tracking-[0.1em] text-whisper hover:text-gold transition-colors flex items-center gap-1.5"
              >
                <X size={11} strokeWidth={1.5} />
                Clear Filters
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-muted mb-3">No pieces found</p>
                <p className="font-manrope text-xs text-whisper">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
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
