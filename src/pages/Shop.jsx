import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const CATEGORIES = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80-200', label: '$80+' },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function filterProducts(items, category, priceRange, sort) {
  let result = [...items];

  if (category && category !== 'all') {
    result = result.filter((p) => p.category === category);
  }

  if (priceRange && priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
  }

  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

  return result;
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = filterProducts(products, category, priceRange, sort);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  const updateCategory = (val) => {
    setCategory(val);
    if (val !== 'all') setSearchParams({ category: val });
    else setSearchParams({});
    setMobileFiltersOpen(false);
  };

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-warm-mist border-b border-stone pt-24 md:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">
            {CATEGORIES.find((c) => c.value === category)?.label || 'All Jewelry'}
          </h1>
          <p className="font-inter text-xs text-bark mt-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex gap-10">

          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-inter text-[10px] uppercase tracking-[0.2em] text-bark mb-4">
                  Category
                </h3>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map((c) => (
                    <li key={c.value}>
                      <button
                        onClick={() => updateCategory(c.value)}
                        className={`font-inter text-xs transition-colors text-left w-full ${
                          category === c.value
                            ? 'text-gold font-medium'
                            : 'text-bark hover:text-ink'
                        }`}
                      >
                        {c.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-stone mb-8" />

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-inter text-[10px] uppercase tracking-[0.2em] text-bark mb-4">
                  Price
                </h3>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map((r) => (
                    <li key={r.value}>
                      <button
                        onClick={() => setPriceRange(r.value)}
                        className={`font-inter text-xs transition-colors text-left w-full ${
                          priceRange === r.value
                            ? 'text-gold font-medium'
                            : 'text-bark hover:text-ink'
                        }`}
                      >
                        {r.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-stone mb-8" />

              {/* Material */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-[0.2em] text-bark mb-4">
                  Material
                </h3>
                <ul className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver'].map((m) => (
                    <li key={m}>
                      <button className="font-inter text-xs text-bark hover:text-ink transition-colors text-left">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 font-inter text-[10px] uppercase tracking-widest text-bark hover:text-ink transition-colors"
              >
                <SlidersHorizontal size={13} />
                Filters
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <div className="flex items-center gap-3">
                <span className="font-inter text-[10px] uppercase tracking-widest text-bark hidden md:block">
                  Sort by
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="font-inter text-xs text-ink bg-transparent border border-stone px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl font-light text-bark">No pieces found</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); }}
                  className="font-inter text-[10px] uppercase tracking-widest text-gold mt-4 inline-block border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl font-light text-charcoal">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={18} className="text-bark" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-inter text-[10px] uppercase tracking-[0.2em] text-bark mb-4">Category</h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => updateCategory(c.value)}
                    className={`font-inter text-[10px] uppercase tracking-widest px-4 py-2 border transition-colors ${
                      category === c.value
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-stone text-bark'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-inter text-[10px] uppercase tracking-[0.2em] text-bark mb-4">Price</h3>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => { setPriceRange(r.value); setMobileFiltersOpen(false); }}
                    className={`font-inter text-[10px] uppercase tracking-widest px-4 py-2 border transition-colors ${
                      priceRange === r.value
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-stone text-bark'
                    }`}
                  >
                    {r.label}
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
