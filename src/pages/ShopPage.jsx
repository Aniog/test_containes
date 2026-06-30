import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { products, categories } from '../data/products';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 49.99 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-plus', label: '$75+', min: 75.01, max: Infinity },
];

const materials = [
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Sterling Silver' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState('featured');

  const toggleFilter = (arr, setArr, id) => {
    setArr((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const hasFilters = selectedCategories.length > 0 || selectedPrices.length > 0 || selectedMaterials.length > 0;

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      const ranges = selectedPrices.map((id) => priceRanges.find((r) => r.id === id));
      result = result.filter((p) =>
        ranges.some((r) => p.price >= r.min && p.price <= r.max)
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-label text-charcoal-800 mb-4">Category</h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleFilter(selectedCategories, setSelectedCategories, cat.id)}
                className="w-4 h-4 border-charcoal-300 text-brand focus:ring-brand cursor-pointer accent-[#C9A84C]"
              />
              <span className="text-sm text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-label text-charcoal-800 mb-4">Price</h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedPrices.includes(range.id)}
                onChange={() => toggleFilter(selectedPrices, setSelectedPrices, range.id)}
                className="w-4 h-4 border-charcoal-300 text-brand focus:ring-brand cursor-pointer accent-[#C9A84C]"
              />
              <span className="text-sm text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-label text-charcoal-800 mb-4">Material</h3>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <label
              key={mat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat.id)}
                onChange={() => toggleFilter(selectedMaterials, setSelectedMaterials, mat.id)}
                className="w-4 h-4 border-charcoal-300 text-brand focus:ring-brand cursor-pointer accent-[#C9A84C]"
              />
              <span className="text-sm text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                {mat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-xs text-charcoal-500 hover:text-charcoal-800 underline transition-colors bg-transparent border-none"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 lg:pt-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto section-padding py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-label text-brand mb-3">Our Collection</p>
          <h1 className="heading-serif text-3xl lg:text-4xl text-charcoal-800">
            Shop All Jewelry
          </h1>
          <div className="w-12 h-[1px] bg-brand mx-auto mt-5" />
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal-100">
              <p className="text-sm text-charcoal-400">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="flex items-center gap-4">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-charcoal-600 hover:text-charcoal-800 transition-colors bg-transparent border-none"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent text-sm text-charcoal-600 border-none focus:outline-none cursor-pointer pr-6"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filters panel */}
            {showFilters && (
              <div className="lg:hidden mb-6 p-5 bg-cream-100 border border-cream-300/50 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-label text-charcoal-800">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-1 text-charcoal-400 bg-transparent border-none"
                  >
                    <X size={16} />
                  </button>
                </div>
                <FilterContent />
              </div>
            )}

            {/* Active filters */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((id) => {
                  const cat = categories.find((c) => c.id === id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggleFilter(selectedCategories, setSelectedCategories, id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-charcoal-700 bg-cream-100 border border-cream-300 hover:bg-cream-200 transition-colors"
                    >
                      {cat?.name}
                      <X size={12} />
                    </button>
                  );
                })}
                {selectedPrices.map((id) => {
                  const range = priceRanges.find((r) => r.id === id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggleFilter(selectedPrices, setSelectedPrices, id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-charcoal-700 bg-cream-100 border border-cream-300 hover:bg-cream-200 transition-colors"
                    >
                      {range?.label}
                      <X size={12} />
                    </button>
                  );
                })}
                {selectedMaterials.map((id) => {
                  const mat = materials.find((m) => m.id === id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggleFilter(selectedMaterials, setSelectedMaterials, id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-charcoal-700 bg-cream-100 border border-cream-300 hover:bg-cream-200 transition-colors"
                    >
                      {mat?.label}
                      <X size={12} />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Product Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-500 mb-2">No pieces found</p>
                <p className="text-sm text-charcoal-400 mb-6">Try adjusting your filters.</p>
                <button onClick={clearAll} className="btn-outline text-xs">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
