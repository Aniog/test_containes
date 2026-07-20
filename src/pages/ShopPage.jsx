import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import products, { categories, priceRanges } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedMaterial) {
      result = result.filter((p) => p.variants.includes(selectedMaterial));
    }

    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max
      );
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
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedPrice(null);
    setSelectedMaterial(null);
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedPrice || selectedMaterial;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-charcoal mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat
                  ? 'text-charcoal font-medium'
                  : 'text-taupe hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-charcoal mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() =>
                setSelectedPrice(
                  selectedPrice?.label === range.label ? null : range
                )
              }
              className={`block text-sm transition-colors ${
                selectedPrice?.label === range.label
                  ? 'text-charcoal font-medium'
                  : 'text-taupe hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-charcoal mb-4">Material</h4>
        <div className="space-y-2">
          {['Gold Tone', 'Silver Tone'].map((mat) => (
            <button
              key={mat}
              onClick={() =>
                setSelectedMaterial(selectedMaterial === mat ? null : mat)
              }
              className={`block text-sm transition-colors ${
                selectedMaterial === mat
                  ? 'text-charcoal font-medium'
                  : 'text-taupe hover:text-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-rose underline hover:text-charcoal transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="section-padding pt-28 pb-20">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">Curated</p>
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal">Shop All Jewelry</h1>
      </div>

      <div className="flex gap-10 max-w-6xl mx-auto">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-48 flex-shrink-0">
          <FilterContent />
        </aside>

        {/* Mobile filter toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm text-charcoal border border-sand px-4 py-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-gold" />
            )}
          </button>
        </div>

        {/* Mobile filter drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-charcoal/30"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream shadow-2xl p-6 overflow-y-auto animate-slide-in-right">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-lg">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterContent />
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
            <p className="text-sm text-taupe">{filtered.length} products</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-transparent border-b border-sand py-1 px-2 text-charcoal focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-taupe text-sm mb-4">No products match your filters.</p>
              <button onClick={clearFilters} className="btn-outline text-xs">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
