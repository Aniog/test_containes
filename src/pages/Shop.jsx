import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Bestselling', 'Newest'];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';

  const [filters, setFilters] = useState({
    category: categoryParam,
    price: '',
    material: '',
  });
  const [sort, setSort] = useState('Featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [filters, sort]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilters(prev => ({ ...prev, category: categoryParam }));
  }, [categoryParam]);

  let filtered = [...products];

  if (filters.category) {
    filtered = filtered.filter(p => p.category === filters.category);
  }
  if (filters.material === 'gold') {
    filtered = filtered.filter(p => p.variants.includes('Gold'));
  }
  if (filters.material === 'silver') {
    filtered = filtered.filter(p => p.variants.includes('Silver'));
  }

  // Price range filter
  if (filters.price === 'under50') {
    filtered = filtered.filter(p => p.price < 50);
  } else if (filters.price === '50to100') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 100);
  } else if (filters.price === 'over100') {
    filtered = filtered.filter(p => p.price > 100);
  }

  // Sort
  if (sort === 'Price: Low to High') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'Price: High to Low') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'Bestselling') {
    filtered.sort((a, b) => b.reviews - a.reviews);
  }

  const clearFilters = () => setFilters({ category: '', price: '', material: '' });

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-espresso mb-3">Category</h4>
        <div className="space-y-2">
          {['Earrings', 'Necklaces', 'Huggies', 'Sets'].map(cat => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() => setFilters(prev => ({ ...prev, category: prev.category === cat ? '' : cat }))}
                className="accent-gold w-3.5 h-3.5"
              />
              <span className="text-sm text-taupe group-hover:text-espresso transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-espresso mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 – $100' },
            { value: 'over100', label: 'Over $100' },
          ].map(opt => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={filters.price === opt.value}
                onChange={() => setFilters(prev => ({ ...prev, price: prev.price === opt.value ? '' : opt.value }))}
                className="accent-gold w-3.5 h-3.5"
              />
              <span className="text-sm text-taupe group-hover:text-espresso transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-espresso mb-3">Material</h4>
        <div className="space-y-2">
          {[
            { value: 'gold', label: 'Gold Tone' },
            { value: 'silver', label: 'Silver Tone' },
          ].map(opt => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={filters.material === opt.value}
                onChange={() => setFilters(prev => ({ ...prev, material: prev.material === opt.value ? '' : opt.value }))}
                className="accent-gold w-3.5 h-3.5"
              />
              <span className="text-sm text-taupe group-hover:text-espresso transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button onClick={clearFilters} className="text-xs text-taupe underline hover:text-espresso transition-colors">
        Clear all filters
      </button>
    </div>
  );

  return (
    <main ref={ref} className="pt-20 lg:pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-2xl md:text-3xl text-espresso tracking-wide">
            {filters.category || 'Shop All'}
          </h1>
          <p className="text-sm text-taupe mt-2">{filtered.length} products</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Sort + mobile filter toggle */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-espresso"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-xs text-taupe uppercase tracking-widest hidden sm:inline">Sort by</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs uppercase tracking-widest text-espresso bg-transparent border border-hairline px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline mt-4">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-widest uppercase">Filter</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-espresso hover:text-gold">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </main>
  );
}
