import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const categories = [
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

function applyFilters(items, { category, priceRange, sort }) {
  let result = [...items];

  if (category && category !== 'all') {
    result = result.filter((p) => p.category === category);
  }

  if (priceRange && priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    result = result.filter((p) => p.price >= min && p.price <= max);
  }

  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

  return result;
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = applyFilters(products, { category, priceRange, sort });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  const handleCategory = (val) => {
    setCategory(val);
    if (val !== 'all') setSearchParams({ category: val });
    else setSearchParams({});
  };

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">
            {filtered.length} pieces
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            {category === 'all'
              ? 'All Jewelry'
              : categories.find((c) => c.value === category)?.label || 'Shop'}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-stone hover:text-obsidian transition-colors border border-linen px-4 py-2.5 md:hidden"
          >
            <SlidersHorizontal size={13} />
            Filters
          </button>

          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategory(cat.value)}
                className={`font-manrope text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                  category === cat.value
                    ? 'border-obsidian bg-obsidian text-ivory'
                    : 'border-linen text-stone hover:border-stone'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative ml-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-linen font-manrope text-xs tracking-wider text-stone px-4 py-2.5 pr-8 focus:outline-none focus:border-stone cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="font-manrope text-xs tracking-widest uppercase text-stone mb-4">Category</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <button
                        onClick={() => handleCategory(cat.value)}
                        className={`font-manrope text-xs transition-colors ${
                          category === cat.value ? 'text-obsidian font-500' : 'text-mist hover:text-obsidian'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-linen pt-6">
                <h3 className="font-manrope text-xs tracking-widest uppercase text-stone mb-4">Price</h3>
                <ul className="space-y-2">
                  {priceRanges.map((r) => (
                    <li key={r.value}>
                      <button
                        onClick={() => setPriceRange(r.value)}
                        className={`font-manrope text-xs transition-colors ${
                          priceRange === r.value ? 'text-obsidian font-500' : 'text-mist hover:text-obsidian'
                        }`}
                      >
                        {r.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-obsidian/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-parchment p-6 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-manrope text-xs tracking-widest uppercase text-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}><X size={16} className="text-stone" /></button>
                </div>
                <div className="mb-6">
                  <h3 className="font-manrope text-xs tracking-widest uppercase text-stone mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => { handleCategory(cat.value); setFilterOpen(false); }}
                        className={`font-manrope text-xs tracking-wider uppercase px-3 py-1.5 border transition-colors ${
                          category === cat.value ? 'border-obsidian bg-obsidian text-ivory' : 'border-linen text-stone'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-manrope text-xs tracking-widest uppercase text-stone mb-3">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((r) => (
                      <button
                        key={r.value}
                        onClick={() => { setPriceRange(r.value); setFilterOpen(false); }}
                        className={`font-manrope text-xs tracking-wider uppercase px-3 py-1.5 border transition-colors ${
                          priceRange === r.value ? 'border-obsidian bg-obsidian text-ivory' : 'border-linen text-stone'
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-stone">No pieces found</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); }}
                  className="mt-4 font-manrope text-xs tracking-widest uppercase text-gold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
