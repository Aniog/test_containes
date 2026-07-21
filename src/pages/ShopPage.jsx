import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-gold text-[9px] tracking-[0.15em] uppercase font-medium px-2.5 py-1">
            Bestseller
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 py-3 px-4 flex items-center justify-center transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="text-[10px] tracking-[0.18em] uppercase font-medium text-velmora-text-light hover:text-velmora-gold transition-colors duration-200"
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4">
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={9} className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'} strokeWidth={1} />
          ))}
          <span className="text-[10px] text-velmora-mist ml-1">({product.reviewCount})</span>
        </div>
        <p id={`shop-${product.descId}`} className="hidden">{product.shortDescription}</p>
        <Link to={`/product/${product.slug}`}>
          <h3 id={`shop-${product.titleId}`} className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-obsidian hover:text-velmora-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-medium text-velmora-obsidian mt-1.5">${product.price}</p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = categories.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  const filtered = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory.toLowerCase())
    .filter(p => p.price >= activePriceRange.min && p.price <= activePriceRange.max)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-velmora-linen min-h-screen pt-20">

      {/* Page header */}
      <div className="bg-velmora-obsidian py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold font-medium mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-text-light tracking-wide">
            The Collection
          </h1>
          <p className="text-sm text-velmora-mist font-light mt-3">
            {products.length} pieces of demi-fine gold jewelry
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-stone/20">

          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                    : 'border-velmora-stone/30 text-velmora-obsidian hover:border-velmora-gold hover:text-velmora-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-velmora-obsidian"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>

          {/* Right: count + sort */}
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-xs text-velmora-mist hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
            </span>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(v => !v)}
                className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase font-medium text-velmora-obsidian border border-velmora-stone/30 px-4 py-2 hover:border-velmora-gold transition-colors duration-200"
              >
                Sort: {sortOptions.find(s => s.value === sortBy)?.label}
                <ChevronDown size={12} strokeWidth={1.5} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-velmora-linen border border-velmora-stone/20 shadow-[0_8px_30px_rgba(0,0,0,0.1)] z-20 min-w-[180px]">
                  {sortOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wide font-light hover:bg-velmora-cream transition-colors duration-200 ${sortBy === opt.value ? 'text-velmora-gold' : 'text-velmora-obsidian'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden bg-velmora-cream border border-velmora-stone/20 p-5 mb-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs tracking-widest uppercase font-medium text-velmora-obsidian">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={14} strokeWidth={1.5} className="text-velmora-mist" />
              </button>
            </div>

            <div className="mb-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-velmora-mist mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 text-[10px] tracking-[0.12em] uppercase font-medium border transition-all duration-200 ${
                      activeCategory === cat
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone/30 text-velmora-obsidian'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-velmora-mist mb-3">Price</p>
              <div className="flex flex-col gap-2">
                {priceRanges.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(range)}
                    className={`text-left text-xs font-light transition-colors duration-200 ${activePriceRange.label === range.label ? 'text-velmora-gold' : 'text-velmora-obsidian hover:text-velmora-gold'}`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-10">

          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-velmora-obsidian mb-4">Category</p>
                <div className="flex flex-col gap-2.5">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left text-xs font-light transition-colors duration-200 ${activeCategory === cat ? 'text-velmora-gold font-medium' : 'text-velmora-obsidian hover:text-velmora-gold'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-velmora-stone/20 pt-6">
                <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-velmora-obsidian mb-4">Price</p>
                <div className="flex flex-col gap-2.5">
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`text-left text-xs font-light transition-colors duration-200 ${activePriceRange.label === range.label ? 'text-velmora-gold font-medium' : 'text-velmora-obsidian hover:text-velmora-gold'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-obsidian font-light mb-3">No pieces found</p>
                <p className="text-sm text-velmora-mist font-light mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(priceRanges[0]); }}
                  className="text-xs tracking-widest uppercase text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
