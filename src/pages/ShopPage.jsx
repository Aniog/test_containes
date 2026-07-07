import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import products, { categories, priceRanges, materials as materialOptions } from '@/data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.label === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    if (selectedMaterial) {
      result = result.filter((p) => p.variants.includes(selectedMaterial));
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
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice('');
    setSelectedMaterial('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedPrice || selectedMaterial;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase text-brand-charcoal font-sans font-semibold mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(selectedCategory === cat.id ? '' : cat.id);
                setSearchParams(selectedCategory === cat.id ? {} : { category: cat.id });
              }}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedCategory === cat.id
                  ? 'text-brand-gold'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {cat.name} <span className="text-brand-taupe/60">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase text-brand-charcoal font-sans font-semibold mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(selectedPrice === range.label ? '' : range.label)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedPrice === range.label
                  ? 'text-brand-gold'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase text-brand-charcoal font-sans font-semibold mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {materialOptions.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(selectedMaterial === mat ? '' : mat)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedMaterial === mat
                  ? 'text-brand-gold'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
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
          className="text-sm text-brand-charcoal underline underline-offset-4 decoration-brand-taupe/40 hover:decoration-brand-gold transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 lg:pt-24 min-h-screen bg-brand-ivory">
      {/* Page header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 lg:pt-12 pb-6">
        <h1 className="font-serif text-3xl lg:text-5xl text-brand-charcoal font-light">
          {selectedCategory
            ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
            : 'All Jewelry'}
        </h1>
        <p className="text-brand-warm-gray text-sm mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <hr className="hairline-divider mb-6" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-20">
        <div className="flex gap-10">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-[200px] flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort & filter bar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-brand-charcoal font-sans"
              >
                <SlidersHorizontal size={16} strokeWidth={1.5} />
                Filters
                {hasActiveFilters && (
                  <span className="w-5 h-5 bg-brand-gold text-brand-ivory text-[10px] rounded-full flex items-center justify-center">
                    !
                  </span>
                )}
              </button>

              {/* Active filters pills - desktop */}
              {hasActiveFilters && (
                <div className="hidden lg:flex items-center gap-2 flex-wrap">
                  {selectedCategory && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-cream text-xs text-brand-charcoal font-sans">
                      {categories.find((c) => c.id === selectedCategory)?.name}
                      <button onClick={() => { setSelectedCategory(''); setSearchParams({}); }}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {selectedPrice && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-cream text-xs text-brand-charcoal font-sans">
                      {selectedPrice}
                      <button onClick={() => setSelectedPrice('')}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {selectedMaterial && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-cream text-xs text-brand-charcoal font-sans">
                      {selectedMaterial}
                      <button onClick={() => setSelectedMaterial('')}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Sort dropdown */}
              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-brand-warm-gray font-sans pr-6 cursor-pointer focus:outline-none border-b border-transparent hover:border-brand-taupe/30 transition-colors pb-0.5"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-warm-gray pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-brand-warm-gray mb-6">
                  Try adjusting your filters to discover more.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-brand-charcoal text-brand-ivory text-sm tracking-[0.1em] uppercase font-sans hover:bg-brand-charcoal/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-[300px] z-50 bg-brand-ivory shadow-xl overflow-y-auto lg:hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-xl text-brand-charcoal">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)} className="text-brand-charcoal">
                  <X size={22} />
                </button>
              </div>
              <FilterContent />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
