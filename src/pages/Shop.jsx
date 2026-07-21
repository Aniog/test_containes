import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { fetchProducts } from '../api/products.js';
import ProductCard from '../components/ProductCard.jsx';

const categories = [
  { label: 'All', value: '' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
  { label: 'Sets', value: 'sets' },
];

const priceRanges = [
  { label: 'All Prices', value: '' },
  { label: 'Under $50', value: '0-50' },
  { label: '$50 - $70', value: '50-70' },
  { label: '$70 - $100', value: '70-100' },
  { label: 'Over $100', value: '100-999' },
];

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Name: A-Z', value: 'name_asc' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    setStatus('loading');
    fetchProducts({ category: activeCategory || undefined })
      .then((rows) => {
        setProducts(rows);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, [activeCategory]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activePrice) {
      const [min, max] = activePrice.split('-').map(Number);
      list = list.filter((p) => {
        const price = p.data?.price ?? p.price;
        return price >= min && price <= max;
      });
    }

    switch (activeSort) {
      case 'price_asc':
        list.sort((a, b) => (a.data?.price ?? a.price) - (b.data?.price ?? b.price));
        break;
      case 'price_desc':
        list.sort((a, b) => (b.data?.price ?? b.price) - (a.data?.price ?? a.price));
        break;
      case 'name_asc':
        list.sort((a, b) => (a.data?.name ?? a.name).localeCompare(b.data?.name ?? b.name));
        break;
      default:
        break;
    }

    return list;
  }, [products, activePrice, activeSort]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">
          Category
        </h4>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => updateParam('category', cat.value)}
              className={`text-left font-sans text-sm transition-colors ${
                activeCategory === cat.value
                  ? 'text-charcoal font-medium'
                  : 'text-stone hover:text-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-stone mb-4">
          Price
        </h4>
        <div className="flex flex-col gap-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateParam('price', range.value)}
              className={`text-left font-sans text-sm transition-colors ${
                activePrice === range.value
                  ? 'text-charcoal font-medium'
                  : 'text-stone hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="section-padding py-8 md:py-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-light">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-xs tracking-widest uppercase text-stone">
                  Filters
                </h3>
                {(activeCategory || activePrice) && (
                  <button
                    onClick={clearFilters}
                    className="font-sans text-xs text-gold hover:text-charcoal transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-charcoal border border-border px-4 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filters
            </button>
            <div className="relative">
              <select
                value={activeSort}
                onChange={(e) => updateParam('sort', e.target.value)}
                className="appearance-none bg-transparent border border-border font-sans text-xs tracking-wider uppercase text-charcoal px-4 py-2 pr-8 focus:outline-none focus:border-gold"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>

          {mobileFiltersOpen && (
            <div className="md:hidden bg-cream border border-border p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-sans text-xs tracking-widest uppercase text-stone">
                  Filters
                </h3>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
              <FilterContent />
              {(activeCategory || activePrice) && (
                <button
                  onClick={clearFilters}
                  className="mt-6 font-sans text-xs text-gold hover:text-charcoal transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden md:flex items-center justify-between mb-6">
              <p className="font-sans text-sm text-stone">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => updateParam('sort', e.target.value)}
                  className="appearance-none bg-transparent border border-border font-sans text-xs tracking-wider uppercase text-charcoal px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none" strokeWidth={1.5} />
              </div>
            </div>

            {status === 'loading' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-border mb-4" />
                    <div className="h-4 bg-border w-2/3 mb-2" />
                    <div className="h-3 bg-border w-1/3" />
                  </div>
                ))}
              </div>
            )}

            {status === 'ready' && filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone mb-2">No products found</p>
                <p className="font-sans text-sm text-stone-light">Try adjusting your filters.</p>
              </div>
            )}

            {status === 'ready' && filtered.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
