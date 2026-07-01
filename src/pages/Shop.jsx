import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
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
      <div className="relative overflow-hidden bg-velmora-stone aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] worn jewelry model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-velmora-obsidian text-white text-[9px] uppercase tracking-widest font-sans px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velmora-gold text-velmora-obsidian text-[9px] uppercase tracking-widest font-sans px-2 py-1">
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
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-sans font-semibold py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={13} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <h3
        id={`shop-${product.titleId}`}
        className="font-serif text-sm uppercase tracking-widest text-velmora-ink group-hover:text-velmora-gold transition-colors mb-1"
      >
        {product.name}
      </h3>
      <p id={`shop-${product.descId}`} className="text-xs text-velmora-muted font-sans mb-2">
        {product.shortDescription}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm font-semibold text-velmora-ink">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={11} className="text-velmora-gold fill-velmora-gold" />
          <span className="text-xs text-velmora-muted font-sans">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setActiveCategory(cat);
  }, [searchParams]);

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

  const filteredProducts = products
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .filter((p) => {
      if (activePriceRange === 'all') return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const activeLabel = categories.find((c) => c.value === activeCategory)?.label || 'All Jewelry';

  return (
    <div className="bg-velmora-cream min-h-screen">
      {/* Page header */}
      <div className="bg-velmora-stone border-b border-velmora-border pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs uppercase tracking-widest-xl font-sans text-velmora-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-ink">
            {activeLabel}
          </h1>
          <p className="text-sm text-velmora-muted font-sans mt-3">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-velmora-muted border border-velmora-border px-4 py-2.5 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`text-xs uppercase tracking-widest font-sans px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat.value
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian font-semibold'
                    : 'border-velmora-border text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs uppercase tracking-widest font-sans text-velmora-muted border border-velmora-border bg-transparent px-4 py-2.5 focus:outline-none focus:border-velmora-gold cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-velmora-ink mb-4">
                  Category
                </h3>
                <ul className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <button
                        onClick={() => handleCategoryChange(cat.value)}
                        className={`text-sm font-sans transition-colors ${
                          activeCategory === cat.value
                            ? 'text-velmora-gold font-semibold'
                            : 'text-velmora-muted hover:text-velmora-gold'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="divider mb-8" />

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-velmora-ink mb-4">
                  Price
                </h3>
                <ul className="flex flex-col gap-2">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => setActivePriceRange(range.value)}
                        className={`text-sm font-sans transition-colors ${
                          activePriceRange === range.value
                            ? 'text-velmora-gold font-semibold'
                            : 'text-velmora-muted hover:text-velmora-gold'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="divider mb-8" />

              {/* Material filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-velmora-ink mb-4">
                  Material
                </h3>
                <ul className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Silver Tone'].map((mat) => (
                    <li key={mat}>
                      <button className="text-sm font-sans text-velmora-muted hover:text-velmora-gold transition-colors">
                        {mat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <>
              <div
                className="fixed inset-0 bg-velmora-obsidian/50 z-40 md:hidden"
                onClick={() => setFilterOpen(false)}
              />
              <div className="fixed bottom-0 left-0 right-0 bg-velmora-surface z-50 md:hidden rounded-t-2xl p-6 animate-fadeIn">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg font-light text-velmora-ink">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={20} className="text-velmora-muted" />
                  </button>
                </div>
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest font-sans font-semibold text-velmora-ink mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => { handleCategoryChange(cat.value); setFilterOpen(false); }}
                        className={`text-xs uppercase tracking-widest font-sans px-3 py-2 border transition-all ${
                          activeCategory === cat.value
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                            : 'border-velmora-border text-velmora-muted'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-sans font-semibold text-velmora-ink mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => { setActivePriceRange(range.value); setFilterOpen(false); }}
                        className={`text-xs uppercase tracking-widest font-sans px-3 py-2 border transition-all ${
                          activePriceRange === range.value
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                            : 'border-velmora-border text-velmora-muted'
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

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-muted mb-4">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange('all'); setSearchParams({}); }}
                  className="text-xs uppercase tracking-widest text-velmora-gold hover:underline font-sans"
                >
                  Clear filters
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
