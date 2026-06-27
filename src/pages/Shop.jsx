import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import products from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

const allCategories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materials = ['Gold', 'Silver'];
const priceRanges = [
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $100', min: 80, max: 100 },
  { label: 'Over $100', min: 100, max: 9999 },
];

export default function Shop() {
  const { category: urlCategory } = useParams();

  const [sort, setSort] = useState('featured');
  const [filterCategory, setFilterCategory] = useState(
    urlCategory
      ? urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1)
      : ''
  );
  const [filterMaterial, setFilterMaterial] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (filterCategory) {
      result = result.filter((p) => p.category === filterCategory);
    }
    if (filterMaterial) {
      result = result.filter((p) =>
        p.variants.some((v) => v.toLowerCase() === filterMaterial.toLowerCase())
      );
    }
    if (priceRange) {
      const [minStr, maxStr] = priceRange.split('-');
      const min = Number(minStr);
      const max = Number(maxStr);
      result = result.filter((p) => p.price >= min && p.price <= max);
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
      case 'newest':
      default:
        break;
    }
    return result;
  }, [sort, filterCategory, filterMaterial, priceRange]);

  const clearFilters = () => {
    setFilterCategory('');
    setFilterMaterial('');
    setPriceRange('');
  };

  const hasFilters = filterCategory || filterMaterial || priceRange;

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-vel-deep font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`block text-sm transition-colors ${
                filterCategory === cat
                  ? 'text-vel-gold font-medium'
                  : 'text-vel-taupe hover:text-vel-deep'
              }`}
              onClick={() =>
                setFilterCategory(filterCategory === cat ? '' : cat)
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-vel-deep font-medium mb-4">
          Material
        </h3>
        <div className="flex flex-wrap gap-2">
          {materials.map((m) => (
            <button
              key={m}
              className={`px-4 py-1.5 text-xs rounded-sm border transition-all ${
                filterMaterial === m.toLowerCase()
                  ? 'border-vel-deep bg-vel-deep text-white'
                  : 'border-vel-border text-vel-taupe hover:border-vel-deep'
              }`}
              onClick={() =>
                setFilterMaterial(
                  filterMaterial === m.toLowerCase() ? '' : m.toLowerCase()
                )
              }
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-vel-deep font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((pr) => {
            const val = `${pr.min}-${pr.max}`;
            return (
              <button
                key={val}
                className={`block text-sm transition-colors ${
                  priceRange === val
                    ? 'text-vel-gold font-medium'
                    : 'text-vel-taupe hover:text-vel-deep'
                }`}
                onClick={() => setPriceRange(priceRange === val ? '' : val)}
              >
                {pr.label}
              </button>
            );
          })}
        </div>
      </div>

      {hasFilters && (
        <button
          className="text-xs text-vel-gold hover:text-vel-gold-hover transition-colors underline underline-offset-4"
          onClick={clearFilters}
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  const pageTitle = urlCategory
    ? urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1)
    : 'Shop All';

  return (
    <main className="pt-20 md:pt-24 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-vel-deep tracking-wide">
              {pageTitle}
            </h1>
            <p className="text-sm text-vel-muted mt-2">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="md:hidden flex items-center gap-2 text-sm text-vel-taupe border border-vel-border rounded-sm px-3 py-2 hover:border-vel-deep transition-colors"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <select
              className="text-sm text-vel-taupe border border-vel-border rounded-sm px-3 py-2 bg-transparent outline-none cursor-pointer hover:border-vel-deep transition-colors"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop filter sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-vel-taupe text-sm mb-4">
                  No pieces match the current filters.
                </p>
                <button
                  className="text-vel-gold text-sm underline underline-offset-4"
                  onClick={clearFilters}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-vel-surface shadow-2xl animate-[slideInRight_0.25s_ease-out] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-lg tracking-wide">Filters</span>
              <button
                className="w-8 h-8 flex items-center justify-center text-vel-taupe"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </main>
  );
}
