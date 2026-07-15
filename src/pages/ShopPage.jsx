import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-gold fill-gold' : 'text-warm-border'}`}
        />
      ))}
    </div>
  );
}

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
];

export default function ShopPage() {
  const { category } = useParams();
  const containerRef = useRef(null);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = products
    .filter((p) => !category || category === 'all' || p.category === category)
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'name-asc': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered.length, category]);

  const formatPrice = (price) => `$${price.toFixed(0)}`;

  const categoryNames = {
    earrings: 'Earrings',
    necklaces: 'Necklaces',
    huggies: 'Huggies',
    sets: 'Sets',
  };

  const pageTitle = category && categoryNames[category] ? categoryNames[category] : 'All Jewelry';

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-ink">{pageTitle}</h1>
            <p className="text-[11px] text-taupe uppercase tracking-[0.12em] mt-1">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <button
              className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-taupe hover:text-ink transition-colors"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.12em] text-taupe hidden sm:inline">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-[11px] uppercase tracking-[0.1em] text-ink bg-transparent border border-warm-border px-3 py-2 focus:outline-none focus:border-gold transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.15em] text-ink mb-3">Category</h3>
                <div className="space-y-2">
                  {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => {
                    const catName = cat === 'all' ? 'All' : (categoryNames[cat] || cat);
                    const isActive = !category && cat === 'all' || category === cat;
                    return (
                      <Link
                        key={cat}
                        to={cat === 'all' ? '/shop' : `/shop/${cat}`}
                        className={`block text-[12px] transition-colors ${
                          isActive ? 'text-ink font-medium' : 'text-taupe hover:text-ink'
                        }`}
                      >
                        {catName}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.15em] text-ink mb-3">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Under $50', min: 0, max: 50 },
                    { label: '$50 – $75', min: 50, max: 75 },
                    { label: '$75 – $100', min: 75, max: 100 },
                    { label: 'Over $100', min: 100, max: 200 },
                  ].map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange([range.min, range.max])}
                      className={`block text-[12px] transition-colors w-full text-left ${
                        priceRange[0] === range.min && priceRange[1] === range.max
                          ? 'text-ink font-medium'
                          : 'text-taupe hover:text-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                  <button
                    onClick={() => setPriceRange([0, 200])}
                    className="text-[10px] text-taupe/60 hover:text-taupe transition-colors mt-1"
                  >
                    Clear filter
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          <div
            className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
              filterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-ink/30" onClick={() => setFilterOpen(false)} />
            <div className={`absolute top-0 left-0 h-full w-72 bg-cream p-6 shadow-xl transition-transform duration-300 ${
              filterOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[11px] uppercase tracking-[0.15em] text-ink">Filters</h3>
                <button onClick={() => setFilterOpen(false)} className="text-taupe hover:text-ink">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.12em] text-ink mb-3">Category</h4>
                  {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => {
                    const catName = cat === 'all' ? 'All' : (categoryNames[cat] || cat);
                    const isActive = !category && cat === 'all' || category === cat;
                    return (
                      <Link
                        key={cat}
                        to={cat === 'all' ? '/shop' : `/shop/${cat}`}
                        onClick={() => setFilterOpen(false)}
                        className={`block text-[12px] py-1.5 transition-colors ${
                          isActive ? 'text-ink font-medium' : 'text-taupe hover:text-ink'
                        }`}
                      >
                        {catName}
                      </Link>
                    );
                  })}
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.12em] text-ink mb-3">Price</h4>
                  {[
                    { label: 'Under $50', min: 0, max: 50 },
                    { label: '$50 – $75', min: 50, max: 75 },
                    { label: '$75 – $100', min: 75, max: 100 },
                    { label: 'Over $100', min: 100, max: 200 },
                  ].map((range) => (
                    <button
                      key={range.label}
                      onClick={() => { setPriceRange([range.min, range.max]); setFilterOpen(false); }}
                      className={`block text-[12px] py-1.5 transition-colors w-full text-left ${
                        priceRange[0] === range.min && priceRange[1] === range.max
                          ? 'text-ink font-medium' : 'text-taupe hover:text-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-taupe font-serif text-lg">No pieces found in this range.</p>
                <button
                  onClick={() => setPriceRange([0, 200])}
                  className="mt-4 text-gold text-[11px] uppercase tracking-[0.2em] hover:text-gold-hover transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="group">
                    <div className="relative aspect-[4/5] bg-warm-light overflow-hidden">
                      <img
                        data-strk-img-id={`shop-${p.id}`}
                        data-strk-img={`[shop-name-${p.id}] gold jewelry`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 px-0.5">
                      <h3 id={`shop-name-${p.id}`} className="text-product-name text-ink truncate">{p.name}</h3>
                      <StarRating rating={p.rating} />
                      <p className="font-serif italic text-base text-ink mt-1">{formatPrice(p.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}