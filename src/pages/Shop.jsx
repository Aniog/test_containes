import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';
import { cn, formatPrice } from '@/lib/utils';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: 999 },
];

const materials = [
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Best Selling', value: 'bestselling' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPriceRange) {
      result = result.filter(
        (p) => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestselling':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPriceRange, selectedMaterials, sortBy]);

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRange || selectedMaterials.length > 0;

  const FilterSidebar = ({ className = '' }) => (
    <div className={cn('space-y-8', className)}>
      {/* Categories */}
      <div>
        <h3 className="font-sans text-xs font-bold uppercase tracking-ultra-wide text-espresso-900 mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="w-4 h-4 rounded border-brand-300 text-brand-500 focus:ring-brand-500 accent-brand-500"
              />
              <span className="text-sm text-espresso-700 group-hover:text-espresso-900 transition-colors font-sans">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs font-bold uppercase tracking-ultra-wide text-espresso-900 mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange?.label === range.label}
                onChange={() =>
                  setSelectedPriceRange(
                    selectedPriceRange?.label === range.label ? null : range
                  )
                }
                className="w-4 h-4 border-brand-300 text-brand-500 focus:ring-brand-500 accent-brand-500"
              />
              <span className="text-sm text-espresso-700 group-hover:text-espresso-900 transition-colors font-sans">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs font-bold uppercase tracking-ultra-wide text-espresso-900 mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label
              key={mat.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat.value)}
                onChange={() => toggleMaterial(mat.value)}
                className="w-4 h-4 rounded border-brand-300 text-brand-500 focus:ring-brand-500 accent-brand-500"
              />
              <span className="text-sm text-espresso-700 group-hover:text-espresso-900 transition-colors font-sans">
                {mat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-brand-600 hover:text-brand-700 font-sans font-semibold uppercase tracking-wider transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-50 pt-20 md:pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-mega-wide text-brand-500 mb-3">
          Our Collection
        </p>
        <h1 className="heading-display">Shop All Jewelry</h1>
        <p className="body-text mt-3 max-w-lg mx-auto">
          Discover our curated selection of demi-fine gold jewelry — designed to be worn, loved, and treasured.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-200">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-espresso-800 hover:text-espresso-950 transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-brand-500 rounded-full" />
              )}
            </button>
            <span className="text-sm text-warm-600 font-sans">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-warm-500 font-sans hidden sm:block">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-brand-200 rounded-sm px-4 py-2 pr-8 text-sm font-sans text-espresso-800 focus:outline-none focus:border-brand-500 cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-espresso-600 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main layout */}
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso-800 mb-2">No products found</p>
                <p className="text-sm text-warm-600 mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
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
          <div
            className="absolute inset-0 bg-espresso-950/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-brand-50 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-200">
              <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-espresso-900">
                Filters
              </h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-espresso-600 hover:text-espresso-950 transition-colors"
                aria-label="Close filters"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterSidebar />
            </div>
            <div className="px-6 py-4 border-t border-brand-200">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-primary w-full text-sm"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
