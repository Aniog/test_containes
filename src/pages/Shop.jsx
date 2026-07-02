import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { cn } from '../lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSort('featured');
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.id === activePrice);
      if (range) {
        list = list.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        list.reverse();
        break;
      default:
        break;
    }

    return list;
  }, [activeCategory, activePrice, sort]);

  const hasFilters = activeCategory || activePrice;

  const filterSidebar = (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="font-sans text-xs tracking-widest-xl uppercase text-obsidian-300 mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', '')}
            className={cn(
              'block text-sm transition-colors w-full text-left py-1',
              !activeCategory ? 'text-gold-400' : 'text-obsidian-400 hover:text-cream-200'
            )}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id === activeCategory ? '' : cat.id)}
              className={cn(
                'block text-sm transition-colors w-full text-left py-1 flex items-center justify-between',
                activeCategory === cat.id ? 'text-gold-400' : 'text-obsidian-400 hover:text-cream-200'
              )}
            >
              <span>{cat.name}</span>
              <span className="text-obsidian-600 text-xs">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="font-sans text-xs tracking-widest-xl uppercase text-obsidian-300 mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter('price', range.id === activePrice ? '' : range.id)}
              className={cn(
                'block text-sm transition-colors w-full text-left py-1',
                activePrice === range.id ? 'text-gold-400' : 'text-obsidian-400 hover:text-cream-200'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h3 className="font-sans text-xs tracking-widest-xl uppercase text-obsidian-300 mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map((mat) => (
            <label key={mat} className="flex items-center gap-2 text-sm text-obsidian-400 cursor-pointer hover:text-cream-200 transition-colors py-1">
              <span className="w-4 h-4 border border-obsidian-600 rounded-sm" />
              {mat}
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-gold-400 hover:text-gold-300 tracking-wider uppercase transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 pt-8">
          <p className="section-subtitle mb-3">Our Collection</p>
          <h1 className="font-serif text-display">
            {activeCategory ? categories.find((c) => c.id === activeCategory)?.name || 'Shop' : 'Shop All'}
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-obsidian-800/30">
          <button
            className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-obsidian-300 hover:text-gold-400 transition-colors"
            onClick={() => setMobileFilters(true)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasFilters && (
              <span className="w-2 h-2 rounded-full bg-gold-500" />
            )}
          </button>

          <p className="hidden md:block text-xs text-obsidian-500 tracking-wider">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-wider uppercase text-obsidian-300 cursor-pointer pr-6 focus:outline-none hover:text-cream-200 transition-colors border-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-obsidian-950">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 text-obsidian-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {filterSidebar}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-obsidian-300 mb-4">No pieces found</p>
                <p className="text-sm text-obsidian-500 mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileFilters(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-obsidian-950 p-6 overflow-y-auto animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-cream-100">Filters</h2>
              <button
                onClick={() => setMobileFilters(false)}
                className="text-obsidian-400 hover:text-cream-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {filterSidebar}
          </div>
        </div>
      )}
    </main>
  );
}
