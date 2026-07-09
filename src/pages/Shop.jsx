import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $120', min: 80, max: 120 },
];

const materialOptions = ['18K Gold Plated', 'Sterling Silver'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || '';
  const [priceFilter, setPriceFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (priceFilter) {
      const range = priceRanges.find((r) => r.label === priceFilter);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max);
      }
    }

    if (materialFilter) {
      result = result.filter((p) => p.material === materialFilter);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [categoryFilter, priceFilter, materialFilter, sortBy]);

  const activeFilters = [categoryFilter, priceFilter, materialFilter].filter(Boolean);

  const clearFilters = () => {
    setSearchParams({});
    setPriceFilter('');
    setMaterialFilter('');
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="section-padding py-10 md:py-14 bg-brand-light-gray">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[11px] uppercase tracking-mega-wide text-brand-gold mb-3">
            Collection
          </p>
          <h1 className="font-serif text-heading-1 text-brand-charcoal">
            {categoryFilter
              ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)
              : 'All Jewelry'}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto section-padding py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal md:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            {/* Active filters */}
            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                {categoryFilter && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-cream font-sans text-[10px] uppercase tracking-ultra-wide text-brand-charcoal">
                    {categoryFilter}
                    <button onClick={() => setSearchParams({})}>
                      <X size={10} />
                    </button>
                  </span>
                )}
                {priceFilter && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-cream font-sans text-[10px] uppercase tracking-ultra-wide text-brand-charcoal">
                    {priceFilter}
                    <button onClick={() => setPriceFilter('')}>
                      <X size={10} />
                    </button>
                  </span>
                )}
                {materialFilter && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-cream font-sans text-[10px] uppercase tracking-ultra-wide text-brand-charcoal">
                    {materialFilter}
                    <button onClick={() => setMaterialFilter('')}>
                      <X size={10} />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="font-sans text-[10px] uppercase tracking-ultra-wide text-brand-gold underline"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-brand-mid-gray/50 px-4 py-2 pr-8 font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal focus:outline-none focus:border-brand-gold cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className={`w-56 flex-shrink-0 hidden md:block`}>
            {/* Category */}
            <div className="mb-8">
              <h3 className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal mb-4">
                Category
              </h3>
              <div className="space-y-2.5">
                {['', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSearchParams(cat ? { category: cat } : {})}
                    className={`block font-sans text-sm transition-colors ${
                      categoryFilter === cat ? 'text-brand-gold font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'
                    }`}
                  >
                    {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All'}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal mb-4">
                Price
              </h3>
              <div className="space-y-2.5">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceFilter(priceFilter === range.label ? '' : range.label)}
                    className={`block font-sans text-sm transition-colors ${
                      priceFilter === range.label ? 'text-brand-gold font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h3 className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal mb-4">
                Material
              </h3>
              <div className="space-y-2.5">
                {materialOptions.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setMaterialFilter(materialFilter === mat ? '' : mat)}
                    className={`block font-sans text-sm transition-colors ${
                      materialFilter === mat ? 'text-brand-gold font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filtersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute top-0 left-0 h-full w-80 bg-white p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-lg text-brand-charcoal">Filters</h2>
                  <button onClick={() => setFiltersOpen(false)}>
                    <X size={20} className="text-brand-charcoal" />
                  </button>
                </div>

                <div className="mb-8">
                  <h3 className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal mb-4">Category</h3>
                  <div className="space-y-3">
                    {['', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSearchParams(cat ? { category: cat } : {}); setFiltersOpen(false); }}
                        className={`block font-sans text-sm ${categoryFilter === cat ? 'text-brand-gold font-medium' : 'text-brand-warm-gray'}`}
                      >
                        {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal mb-4">Price</h3>
                  <div className="space-y-3">
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setPriceFilter(priceFilter === range.label ? '' : range.label)}
                        className={`block font-sans text-sm ${priceFilter === range.label ? 'text-brand-gold font-medium' : 'text-brand-warm-gray'}`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal mb-4">Material</h3>
                  <div className="space-y-3">
                    {materialOptions.map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setMaterialFilter(materialFilter === mat ? '' : mat)}
                        className={`block font-sans text-sm ${materialFilter === mat ? 'text-brand-gold font-medium' : 'text-brand-warm-gray'}`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <p className="font-sans text-[11px] text-brand-warm-gray mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-brand-charcoal mb-2">No products found</p>
                <p className="font-sans text-sm text-brand-warm-gray mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
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
