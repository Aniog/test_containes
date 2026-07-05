import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import products, { categories } from '@/data/products';

export default function ShopPage() {
  const { category } = useParams();
  const activeCategory = category || null;

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 120 });
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.variants.includes(selectedMaterial));
    }
    result = result.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max);

    switch (sortBy) {
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
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }
    return result;
  }, [selectedCategory, priceRange, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange({ min: 0, max: 120 });
    setSelectedMaterial(null);
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory || selectedMaterial || priceRange.min > 0 || priceRange.max < 120;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-serif text-sm tracking-wider text-oxford mb-3">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`block text-sm transition-colors ${
              !selectedCategory ? 'text-bronze font-medium' : 'text-mocha hover:text-oxford'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat ? 'text-bronze font-medium' : 'text-mocha hover:text-oxford'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-serif text-sm tracking-wider text-oxford mb-3">Price Range</h4>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <label className="text-[10px] text-taupe uppercase tracking-wider">Min</label>
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) => setPriceRange((p) => ({ ...p, min: Number(e.target.value) }))}
              className="w-full mt-1 px-3 py-2 text-sm border border-sand rounded-sm bg-cream text-oxford focus:outline-none focus:border-bronze"
            />
          </div>
          <span className="text-taupe mt-4">&mdash;</span>
          <div className="flex-1">
            <label className="text-[10px] text-taupe uppercase tracking-wider">Max</label>
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) => setPriceRange((p) => ({ ...p, max: Number(e.target.value) }))}
              className="w-full mt-1 px-3 py-2 text-sm border border-sand rounded-sm bg-cream text-oxford focus:outline-none focus:border-bronze"
            />
          </div>
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-serif text-sm tracking-wider text-oxford mb-3">Finish</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial(null)}
            className={`block text-sm transition-colors ${
              !selectedMaterial ? 'text-bronze font-medium' : 'text-mocha hover:text-oxford'
            }`}
          >
            All Finishes
          </button>
          {['Gold', 'Silver'].map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMaterial(m)}
              className={`block text-sm transition-colors ${
                selectedMaterial === m ? 'text-bronze font-medium' : 'text-mocha hover:text-oxford'
              }`}
            >
              {m === 'Gold' ? 'Warm Gold' : 'Sterling Silver'}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs font-medium text-bronze underline underline-offset-4 hover:text-bronze-dark transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Page header */}
        <div className="py-8 lg:py-12 text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-taupe mb-2">Shop</p>
          <h1 className="font-serif text-3xl lg:text-4xl text-oxford">
            {selectedCategory || 'All Jewelry'}
          </h1>
          <div className="mt-3 w-[60px] h-[1px] bg-gold/40 mx-auto" />
          <p className="mt-3 text-sm text-mocha/60">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop filter sidebar */}
          <aside className="hidden lg:block w-[200px] flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand/50">
              <button
                className="lg:hidden inline-flex items-center gap-2 text-sm font-medium text-mocha hover:text-oxford transition-colors"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                )}
              </button>
              <div className="hidden lg:block" />
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pr-8 pl-3 py-2 text-sm text-mocha bg-transparent border border-sand rounded-sm focus:outline-none focus:border-bronze cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-taupe pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-mocha">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-sm font-medium text-bronze underline underline-offset-4 hover:text-bronze-dark transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-oxford/30 backdrop-blur-sm"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-cream rounded-t-xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-lg tracking-wider text-oxford">Filters</h3>
            <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-mocha">
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterContent />
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-8 w-full py-3 bg-oxford text-cream text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-oxford-light transition-colors"
          >
            Show {filtered.length} Results
          </button>
        </div>
      </div>
    </div>
  );
}
