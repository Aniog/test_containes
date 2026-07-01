import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const categoryOptions = [
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

function filterProducts(products, category, priceRange, sort) {
  let result = [...products];

  if (category && category !== 'all') {
    result = result.filter(p => p.category === category);
  }

  if (priceRange && priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    result = result.filter(p => p.price >= min && p.price <= max);
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
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = filterProducts(products, category, priceRange, sort);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const updateCategory = (val) => {
    setCategory(val);
    if (val !== 'all') setSearchParams({ category: val });
    else setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24" ref={containerRef}>
      {/* Page header */}
      <div className="bg-ivory border-b border-mist py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velvet">
            {category === 'all' ? 'All Jewelry' : categoryOptions.find(c => c.value === category)?.label || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-stone mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-bark border border-mist px-4 py-2.5 hover:border-gold hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categoryOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => updateCategory(opt.value)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                  category === opt.value
                    ? 'bg-gold text-cream border-gold'
                    : 'border-mist text-stone hover:border-gold hover:text-gold'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative ml-auto">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-mist font-sans text-xs tracking-widest uppercase text-bark px-4 py-2.5 pr-8 focus:outline-none focus:border-gold cursor-pointer hover:border-gold transition-colors"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">
                  Price
                </h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`text-left font-sans text-sm transition-colors duration-200 ${
                        priceRange === opt.value ? 'text-gold font-medium' : 'text-stone hover:text-velvet'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline mb-8" />

              {/* Material filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">
                  Material
                </h3>
                <div className="flex flex-col gap-2">
                  {['Gold Tone', 'Silver Tone', 'Rose Gold'].map(m => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="accent-gold" />
                      <span className="font-sans text-sm text-stone group-hover:text-velvet transition-colors">
                        {m}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-cream animate-fade-in">
              <div className="flex items-center justify-between px-6 py-5 border-b border-mist">
                <span className="font-serif text-lg text-velvet">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={20} strokeWidth={1.5} className="text-stone" />
                </button>
              </div>
              <div className="px-6 py-6 overflow-y-auto">
                <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">Category</h3>
                <div className="flex flex-col gap-3 mb-8">
                  {categoryOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { updateCategory(opt.value); setFilterOpen(false); }}
                      className={`text-left font-sans text-sm ${category === opt.value ? 'text-gold font-medium' : 'text-stone'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <div className="hairline mb-8" />
                <h3 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">Price</h3>
                <div className="flex flex-col gap-3">
                  {priceRanges.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setPriceRange(opt.value); setFilterOpen(false); }}
                      className={`text-left font-sans text-sm ${priceRange === opt.value ? 'text-gold font-medium' : 'text-stone'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-stone">No pieces found</p>
                <p className="font-sans text-sm text-stone/60 mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); }}
                  className="mt-6 font-sans text-xs tracking-widest uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-cream transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
