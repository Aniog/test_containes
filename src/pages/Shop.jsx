import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

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

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  );
  const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat.charAt(0).toUpperCase() + cat.slice(1));
    }
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, sortBy]);

  const filtered = products
    .filter(p => {
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory.toLowerCase();
      const priceMatch = p.price >= selectedPrice.min && p.price <= selectedPrice.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      {/* Page header */}
      <div className="bg-velmora-obsidian py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1
            className="text-4xl md:text-5xl font-light text-velmora-cream"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {selectedCategory === 'All' ? 'All Jewelry' : selectedCategory}
          </h1>
          <p className="text-sm text-velmora-cream/50 mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Filter + Sort bar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-gold/20">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-velmora-text hover:text-velmora-gold transition-colors duration-200"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase border transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                    : 'border-velmora-gold/30 text-velmora-text hover:border-velmora-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(v => !v)}
              className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-velmora-text hover:text-velmora-gold transition-colors duration-200"
            >
              Sort: {SORT_OPTIONS.find(s => s.value === sortBy)?.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-velmora-ivory border border-velmora-gold/20 shadow-lg z-20 min-w-[180px] animate-fadeIn">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-xs tracking-[0.08em] hover:bg-velmora-blush transition-colors duration-150 ${
                      sortBy === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-text'
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
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0 space-y-8">
            {/* Category */}
            <div>
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-text mb-4">
                Category
              </h3>
              <ul className="space-y-2">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-sm transition-colors duration-200 ${
                        selectedCategory === cat
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted hover:text-velmora-text'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-text mb-4">
                Price
              </h3>
              <ul className="space-y-2">
                {PRICE_RANGES.map(range => (
                  <li key={range.label}>
                    <button
                      onClick={() => setSelectedPrice(range)}
                      className={`text-sm transition-colors duration-200 ${
                        selectedPrice.label === range.label
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted hover:text-velmora-text'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material */}
            <div>
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-text mb-4">
                Material
              </h3>
              <ul className="space-y-2">
                {['18K Gold Plated', 'Silver Tone'].map(m => (
                  <li key={m}>
                    <button className="text-sm text-velmora-muted hover:text-velmora-text transition-colors duration-200">
                      {m}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-velmora-obsidian/60 cart-overlay" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-ivory p-6 animate-slideInRight overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-velmora-text">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-5 h-5 text-velmora-muted" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-medium tracking-[0.12em] uppercase text-velmora-text mb-3">Category</h4>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                          className={`px-3 py-1.5 text-xs border transition-all duration-200 ${
                            selectedCategory === cat
                              ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                              : 'border-velmora-gold/30 text-velmora-text'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium tracking-[0.12em] uppercase text-velmora-text mb-3">Price</h4>
                    <div className="space-y-2">
                      {PRICE_RANGES.map(range => (
                        <button
                          key={range.label}
                          onClick={() => { setSelectedPrice(range); setFilterOpen(false); }}
                          className={`block text-sm transition-colors duration-200 ${
                            selectedPrice.label === range.label
                              ? 'text-velmora-gold font-medium'
                              : 'text-velmora-muted'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted text-sm">No products match your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSelectedPrice(PRICE_RANGES[0]); }}
                  className="mt-4 text-xs tracking-[0.12em] uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-200 underline underline-offset-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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
