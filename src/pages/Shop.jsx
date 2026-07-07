import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 — $75', min: 50, max: 75 },
  { label: '$75 — $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: 999 },
];

const materials = ['Gold', 'Silver', 'Rose Gold'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || '';
  const [priceRange, setPriceRange] = useState(null);
  const [materialFilter, setMaterialFilter] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    if (priceRange) {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }
    if (materialFilter) {
      result = result.filter(p => p.variants.some(v => v.toLowerCase().includes(materialFilter.toLowerCase())));
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
  }, [categoryFilter, priceRange, materialFilter, sortBy]);

  const clearFilters = () => {
    setSearchParams({});
    setPriceRange(null);
    setMaterialFilter('');
    setSortBy('featured');
  };

  const hasFilters = categoryFilter || priceRange || materialFilter;

  const setCategory = (cat) => {
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <main className="pt-20 lg:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-ivory-warm py-10 lg:py-14">
        <div className="max-w-site mx-auto section-padding text-center">
          <h1 className="font-serif text-heading-2 lg:text-heading-1 text-charcoal mb-3">
            {categoryFilter ? categories.find(c => c.id === categoryFilter)?.name || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="font-sans text-body text-charcoal/50">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} crafted with care
          </p>
        </div>
      </div>

      <div className="max-w-site mx-auto section-padding py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar / Filter Toggle */}
          <aside className={`lg:w-[240px] flex-shrink-0 ${filterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/60">
                  Filters
                </h3>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-gold-600 hover:text-gold-700 font-sans"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-xs uppercase tracking-[0.1em] text-charcoal/70 mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('')}
                    className={`block text-sm font-sans transition-colors ${
                      !categoryFilter ? 'text-gold-600 font-medium' : 'text-charcoal/50 hover:text-charcoal'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block text-sm font-sans transition-colors ${
                        categoryFilter === cat.id ? 'text-gold-600 font-medium' : 'text-charcoal/50 hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-xs uppercase tracking-[0.1em] text-charcoal/70 mb-3">
                  Price
                </h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(priceRange?.label === range.label ? null : range)}
                      className={`block text-sm font-sans transition-colors ${
                        priceRange?.label === range.label ? 'text-gold-600 font-medium' : 'text-charcoal/50 hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-xs uppercase tracking-[0.1em] text-charcoal/70 mb-3">
                  Material
                </h4>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => setMaterialFilter(materialFilter === mat ? '' : mat)}
                      className={`block text-sm font-sans transition-colors ${
                        materialFilter === mat ? 'text-gold-600 font-medium' : 'text-charcoal/50 hover:text-charcoal'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort & Filter Toggle */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-ivory-dark">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-[0.1em] text-charcoal/60"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>

              {/* Active Filters */}
              {hasFilters && (
                <div className="hidden lg:flex items-center gap-2 flex-wrap">
                  {categoryFilter && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-ivory-warm text-xs font-sans text-charcoal/60">
                      {categories.find(c => c.id === categoryFilter)?.name}
                      <button onClick={() => setCategory('')}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {priceRange && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-ivory-warm text-xs font-sans text-charcoal/60">
                      {priceRange.label}
                      <button onClick={() => setPriceRange(null)}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {materialFilter && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-ivory-warm text-xs font-sans text-charcoal/60">
                      {materialFilter}
                      <button onClick={() => setMaterialFilter('')}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                </div>
              )}

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-xs uppercase tracking-[0.1em] text-charcoal/60 pr-6 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal/40 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal/40 mb-2">No pieces found</p>
                <p className="text-sm text-charcoal/30 font-sans mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline text-xs px-6 py-2.5">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
