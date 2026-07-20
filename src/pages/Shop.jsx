import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={10} className={s <= Math.round(rating) ? 'text-gold fill-gold' : 'text-stone'} strokeWidth={1} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product, product.variants[0]); }}
            className="w-full bg-obsidian/90 text-cream font-inter text-xs tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>
      <p className="font-inter text-[10px] tracking-widest uppercase text-mist mb-1">{product.category}</p>
      <Link to={`/product/${product.slug}`}>
        <h3 id={`shop-${product.titleId}`} className="font-cormorant text-base font-medium tracking-widest uppercase text-ink hover:text-gold transition-colors duration-200 leading-tight mb-1">
          {product.name}
        </h3>
      </Link>
      <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
      <div className="flex items-center justify-between">
        <StarRating rating={product.rating} />
        <span className="font-inter text-sm font-medium text-ink">${product.price}</span>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'All');
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter((p) => activeCategory === 'All' || p.category === activeCategory)
    .filter((p) => p.price >= activePriceRange.min && p.price <= activePriceRange.max)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-parchment min-h-screen">
      {/* Page header */}
      <div className="bg-linen border-b border-stone/30 pt-28 md:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-ink">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-inter text-sm text-mist mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(true)}
            className="md:hidden flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-mist border border-stone/60 px-4 py-2.5 hover:border-gold hover:text-gold transition-colors duration-200"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
          </button>

          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'border-gold bg-gold text-obsidian'
                    : 'border-stone/60 text-mist hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-inter text-xs tracking-widest uppercase text-mist bg-transparent border border-stone/60 px-4 py-2.5 focus:outline-none focus:border-gold transition-colors duration-200 cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="font-inter text-xs tracking-widest uppercase text-ink mb-4">Category</h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left font-inter text-xs transition-colors duration-200 py-1 ${
                        activeCategory === cat ? 'text-gold' : 'text-mist hover:text-gold'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-stone/40 mb-8" />

              <div className="mb-8">
                <h3 className="font-inter text-xs tracking-widest uppercase text-ink mb-4">Price</h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`text-left font-inter text-xs transition-colors duration-200 py-1 ${
                        activePriceRange.label === range.label ? 'text-gold' : 'text-mist hover:text-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-cormorant text-3xl text-mist mb-3">No pieces found</p>
                <p className="font-inter text-xs text-mist/70">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
          <div className="fixed inset-0 bg-obsidian/40 z-50" onClick={() => setFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-parchment z-50 rounded-t-2xl p-8 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl font-medium text-ink">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-mist hover:text-ink">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mb-6">
              <h3 className="font-inter text-xs tracking-widest uppercase text-ink mb-4">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                    className={`font-inter text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
                      activeCategory === cat ? 'border-gold bg-gold text-obsidian' : 'border-stone/60 text-mist'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-inter text-xs tracking-widest uppercase text-ink mb-4">Price</h3>
              <div className="flex flex-col gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                    className={`text-left font-inter text-xs py-2 transition-colors duration-200 ${
                      activePriceRange.label === range.label ? 'text-gold' : 'text-mist'
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
