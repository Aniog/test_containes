import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { filterProducts, categories } from '@/data/products';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';

const priceRanges = [
  { label: 'All Prices', min: undefined, max: undefined },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: undefined },
];

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(0);
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('newest');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const urlCat = searchParams.get('category');
    if (urlCat && urlCat !== category) {
      setCategory(urlCat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    const range = priceRanges[priceRange];
    return filterProducts({
      category,
      material,
      minPrice: range.min,
      maxPrice: range.max,
      sort,
    });
  }, [category, material, priceRange, sort]);

  const activeFilterCount =
    (category !== 'all' ? 1 : 0) +
    (priceRange !== 0 ? 1 : 0) +
    (material !== 'all' ? 1 : 0);

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24 bg-surface min-h-screen">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 mb-8 md:mb-12">
        <div className="text-center py-10 md:py-16">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal">
            Shop All Jewelry
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between mb-2">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-wide font-semibold text-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs text-warm-gray font-sans">Sort:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="font-sans text-xs text-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sidebar filters */}
          <aside
            className={cn(
              'lg:w-[220px] shrink-0',
              filterOpen ? 'block' : 'hidden lg:block'
            )}
          >
            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-wide font-semibold text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={cn(
                      'block font-sans text-sm transition-colors',
                      category === 'all' ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
                    )}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={cn(
                        'block font-sans text-sm transition-colors',
                        category === cat.id ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-wide font-semibold text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(i)}
                      className={cn(
                        'block font-sans text-sm transition-colors',
                        priceRange === i ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-wide font-semibold text-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {['all', 'gold'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMaterial(m)}
                      className={cn(
                        'block font-sans text-sm transition-colors capitalize',
                        material === m ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
                      )}
                    >
                      {m === 'all' ? 'All Materials' : '18K Gold Plated'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setCategory('all');
                    setPriceRange(0);
                    setMaterial('all');
                    searchParams.delete('category');
                    setSearchParams(searchParams, { replace: true });
                  }}
                  className="flex items-center gap-1.5 font-sans text-xs text-warm-gray hover:text-charcoal transition-colors"
                >
                  <X className="w-3 h-3" />
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            {/* Desktop sort bar */}
            <div className="hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-border-light">
              <p className="font-sans text-sm text-warm-gray">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                {category !== 'all' && ` in ${categories.find((c) => c.id === category)?.name || category}`}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-warm-gray font-sans">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="font-sans text-xs text-charcoal bg-transparent border-none focus:outline-none cursor-pointer appearance-none pr-4"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-sm text-warm-gray">
                  Try adjusting your filters to discover more.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
                {filteredProducts.map((product) => (
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
