import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

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
  { value: 'rating', label: 'Top Rated' },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [category, priceRange, sort]);

  const activeFilters = [
    category !== 'all' && categoryOptions.find((c) => c.value === category)?.label,
    priceRange !== 'all' && priceRanges.find((p) => p.value === priceRange)?.label,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="border-b border-stone-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            All Jewelry
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Left: filter toggle + active filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-espresso border border-stone-light px-4 py-2.5 hover:border-espresso transition-colors duration-300"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>

            {activeFilters.map((f) => (
              <span
                key={f}
                className="flex items-center gap-1.5 font-inter text-xs text-espresso bg-ivory-dark px-3 py-2"
              >
                {f}
                <button
                  onClick={() => {
                    if (categoryOptions.find((c) => c.label === f)) setCategory('all');
                    if (priceRanges.find((p) => p.label === f)) setPriceRange('all');
                  }}
                  className="text-stone hover:text-espresso"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          {/* Right: sort + count */}
          <div className="flex items-center gap-4">
            <span className="font-inter text-xs text-stone hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none font-inter text-xs uppercase tracking-widest text-espresso border border-stone-light px-4 py-2.5 pr-8 bg-ivory focus:outline-none focus:border-espresso cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter panel */}
        {filtersOpen && (
          <div className="border border-stone-light bg-ivory-dark p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Category */}
            <div>
              <h4 className="font-inter text-xs uppercase tracking-widest text-stone mb-4">Category</h4>
              <div className="flex flex-col gap-2.5">
                {categoryOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCategory(opt.value)}
                    className={`text-left font-inter text-xs transition-colors duration-200 ${
                      category === opt.value
                        ? 'text-espresso font-medium'
                        : 'text-stone hover:text-espresso'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h4 className="font-inter text-xs uppercase tracking-widest text-stone mb-4">Price</h4>
              <div className="flex flex-col gap-2.5">
                {priceRanges.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setPriceRange(opt.value)}
                    className={`text-left font-inter text-xs transition-colors duration-200 ${
                      priceRange === opt.value
                        ? 'text-espresso font-medium'
                        : 'text-stone hover:text-espresso'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-cormorant text-2xl text-espresso mb-3">No pieces found</p>
            <p className="font-inter text-xs text-stone">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
