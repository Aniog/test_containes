import { useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { products, categories, formatPrice } from '@/data/products';
import ImageLoader from '@/components/ImageLoader';
import ProductCard from '@/components/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 49.99 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $120', min: 80, max: 120 },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Collection() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = category || searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || '';
  const sort = searchParams.get('sort') || 'featured';

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory && activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max);
      }
    }
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [activeCategory, activePrice, sort]);

  const Filters = ({ mobile = false }) => (
    <div className={cn('space-y-8', mobile && 'p-6')}>  
      <div>
        <p className="text-xs uppercase tracking-extra-wide text-espresso font-medium mb-4">Category</p>
        <div className="space-y-2">
          <label className="flex items-center gap-3 text-sm text-taupe cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={activeCategory === 'all'}
              onChange={() => updateParam('category', '')}
              className="accent-gold"
            />
            <span className="group-hover:text-espresso transition-colors">All Jewelry</span>
          </label>
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 text-sm text-taupe cursor-pointer group capitalize">
              <input
                type="radio"
                name="category"
                checked={activeCategory === cat}
                onChange={() => updateParam('category', cat)}
                className="accent-gold"
              />
              <span className="group-hover:text-espresso transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-extra-wide text-espresso font-medium mb-4">Price</p>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-3 text-sm text-taupe cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={activePrice === range.label}
                onChange={() => updateParam('price', range.label)}
                className="accent-gold"
              />
              <span className="group-hover:text-espresso transition-colors">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-extra-wide text-espresso font-medium mb-4">Material</p>
        <div className="space-y-2">
          {['18k-gold-plated', 'gold-vermeil', 'sterling-silver'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 text-sm text-taupe cursor-pointer group capitalize">
              <input type="checkbox" disabled className="accent-gold opacity-40" />
              <span className="group-hover:text-espresso transition-colors">{mat.replace(/-/g, ' ')}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <ImageLoader deps={[activeCategory, activePrice, sort]}>
      <main className="pt-20 lg:pt-24 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-extra-wide text-gold mb-2">Shop</p>
            <h1 className="font-serif text-4xl lg:text-5xl text-espresso capitalize">
              {activeCategory === 'all' ? 'All Jewelry' : activeCategory}
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28 border border-hairline bg-linen p-6">
                <p className="font-serif text-xl text-espresso mb-6">Filters</p>
                <Filters />
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-hairline">
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-extra-wide text-espresso"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                </button>
                <p className="hidden sm:block text-sm text-taupe">
                  {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="flex items-center gap-3">
                  <label htmlFor="sort" className="text-xs uppercase tracking-extra-wide text-taupe hidden sm:block">
                    Sort
                  </label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => updateParam('sort', e.target.value)}
                    className="bg-transparent border border-hairline text-sm text-espresso px-3 py-2 outline-none focus:border-gold"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-espresso mb-2">No pieces found</p>
                  <p className="text-taupe">Try adjusting your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {mobileFiltersOpen && (
          <>
            <div
              className="fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm"
              onClick={() => setMobileFiltersOpen(false)}
              aria-hidden="true"
            />
            <div className="fixed top-0 left-0 z-50 h-full w-80 bg-cream shadow-lift overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-hairline">
                <p className="font-serif text-xl text-espresso">Filters</p>
                <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                  <X size={20} />
                </button>
              </div>
              <Filters mobile />
            </div>
          </>
        )}
      </main>
    </ImageLoader>
  );
}
