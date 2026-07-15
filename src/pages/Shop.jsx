import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      ref={cardRef}
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] [shop-desc-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />
        <span id={`shop-title-${product.id}`} className="sr-only">{product.name}</span>
        <span id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-obsidian text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold text-obsidian font-sans text-[9px] tracking-widest uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className={`w-full flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase py-3.5 transition-all duration-300 ${
              added ? 'bg-gold text-obsidian' : 'bg-obsidian/90 text-ivory hover:bg-obsidian'
            }`}
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p className="font-serif text-sm uppercase tracking-widest text-obsidian mb-1 group-hover:text-gold transition-colors">
        {product.name}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm text-obsidian">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} fill="#C9A96E" stroke="none" />
          <span className="font-sans text-xs text-mist">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = products
    .filter((p) => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      if (activePriceRange) {
        if (p.price < activePriceRange.min || p.price > activePriceRange.max) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-stone/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-obsidian">
            All Jewelry
          </h1>
          <p className="font-sans text-sm text-mist mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-stone/15">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-gold bg-gold text-obsidian'
                    : 'border-stone/25 text-stone hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter button */}
          <button
            onClick={() => setFilterOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone border border-stone/25 px-4 py-2 hover:border-gold hover:text-gold transition-all"
          >
            <SlidersHorizontal size={12} />
            Filter
          </button>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors"
            >
              Sort: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown size={12} strokeWidth={1.5} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-cream border border-stone/15 shadow-lg z-20 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-sans text-xs tracking-wide hover:bg-linen transition-colors ${
                      sortBy === opt.value ? 'text-gold' : 'text-stone'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">
                  Category
                </h3>
                <ul className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`font-sans text-sm transition-colors ${
                          activeCategory === cat
                            ? 'text-gold font-medium'
                            : 'text-stone hover:text-gold'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 pt-6 border-t border-stone/15">
                <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">
                  Price
                </h3>
                <ul className="flex flex-col gap-2">
                  {priceRanges.map((range) => (
                    <li key={range.label}>
                      <button
                        onClick={() =>
                          setActivePriceRange(
                            activePriceRange?.label === range.label ? null : range
                          )
                        }
                        className={`font-sans text-sm transition-colors ${
                          activePriceRange?.label === range.label
                            ? 'text-gold font-medium'
                            : 'text-stone hover:text-gold'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {(activeCategory !== 'All' || activePriceRange) && (
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(null); }}
                  className="font-sans text-xs tracking-widest uppercase text-mist hover:text-gold transition-colors border-b border-mist/30 hover:border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <p className="font-serif text-2xl text-stone/60">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(null); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
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
            className="fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-cream rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-sans text-xs tracking-widest uppercase text-obsidian">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={18} strokeWidth={1.5} className="text-stone" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-sans text-xs tracking-wide px-4 py-2 border transition-all ${
                      activeCategory === cat
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-stone/25 text-stone'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6 pt-5 border-t border-stone/15">
              <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">Price</h3>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() =>
                      setActivePriceRange(
                        activePriceRange?.label === range.label ? null : range
                      )
                    }
                    className={`font-sans text-xs tracking-wide px-4 py-2 border transition-all ${
                      activePriceRange?.label === range.label
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-stone/25 text-stone'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 mt-2"
            >
              View {filtered.length} Results
            </button>
          </div>
        </>
      )}
    </div>
  );
}
