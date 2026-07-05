import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import products, { categories, materials } from '@/data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const activeSubcategory = searchParams.get('subcategory') || '';
  const activeMaterial = searchParams.get('material') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeSubcategory) {
      result = result.filter((p) => p.subcategory === activeSubcategory);
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }
    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }

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
        result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activeSubcategory, activeMaterial, maxPrice, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearAll = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const hasFilters = activeCategory || activeSubcategory || activeMaterial || maxPrice;

  const subcategories = useMemo(() => {
    if (!activeCategory) return [];
    const subs = new Set(
      products.filter((p) => p.category === activeCategory).map((p) => p.subcategory)
    );
    return [...subs];
  }, [activeCategory]);

  useEffect(() => {
    setMobileFiltersOpen(false);
  }, [activeCategory, activeSubcategory, activeMaterial, maxPrice]);

  const filterContent = (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h4 className="text-[10px] tracking-[0.12em] uppercase text-cream-300/40 mb-4">Category</h4>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => updateFilter('category', '')}
            className={`text-left text-sm tracking-[0.04em] transition-colors ${
              !activeCategory ? 'text-gold' : 'text-cream-300/50 hover:text-cream-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', activeCategory === cat ? '' : cat)}
              className={`text-left text-sm tracking-[0.04em] transition-colors ${
                activeCategory === cat ? 'text-gold' : 'text-cream-300/50 hover:text-cream-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory */}
      {subcategories.length > 0 && (
        <div>
          <h4 className="text-[10px] tracking-[0.12em] uppercase text-cream-300/40 mb-4">Style</h4>
          <div className="flex flex-col gap-2">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => updateFilter('subcategory', activeSubcategory === sub ? '' : sub)}
                className={`text-left text-sm tracking-[0.04em] transition-colors ${
                  activeSubcategory === sub ? 'text-gold' : 'text-cream-300/50 hover:text-cream-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Material */}
      <div>
        <h4 className="text-[10px] tracking-[0.12em] uppercase text-cream-300/40 mb-4">Material</h4>
        <div className="flex flex-col gap-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', activeMaterial === mat ? '' : mat)}
              className={`text-left text-sm tracking-[0.04em] transition-colors ${
                activeMaterial === mat ? 'text-gold' : 'text-cream-300/50 hover:text-cream-200'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[10px] tracking-[0.12em] uppercase text-cream-300/40 mb-4">Max Price</h4>
        <div className="flex flex-col gap-2">
          {['50', '75', '100'].map((price) => (
            <button
              key={price}
              onClick={() => updateFilter('maxPrice', maxPrice === price ? '' : price)}
              className={`text-left text-sm tracking-[0.04em] transition-colors ${
                maxPrice === price ? 'text-gold' : 'text-cream-300/50 hover:text-cream-200'
              }`}
            >
              Under ${price}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-xs text-cream-300/40 hover:text-cream-200 tracking-[0.06em] uppercase transition-colors text-left"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">Shop All</p>
          <h1 className="serif-heading text-3xl md:text-4xl text-cream-100">
            {activeCategory || 'All Jewelry'}
          </h1>
          {activeSubcategory && (
            <p className="text-cream-300/50 text-sm mt-2">{activeSubcategory}</p>
          )}
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">{filterContent}</div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-xs text-cream-300/60 hover:text-cream-200 tracking-[0.06em] uppercase transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                  {hasFilters && (
                    <span className="bg-gold text-espresso text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                      !
                    </span>
                  )}
                </button>
                <span className="text-xs text-cream-300/40">{filteredProducts.length} products</span>
              </div>

              {/* Sort */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 text-xs text-cream-300/60 hover:text-cream-200 tracking-[0.06em] uppercase transition-colors"
                >
                  Sort: {sortBy === 'featured' ? 'Featured' : sortBy === 'price-asc' ? 'Price: Low' : sortBy === 'price-desc' ? 'Price: High' : sortBy === 'rating' ? 'Rating' : 'Newest'}
                  <ChevronDown className={`w-3 h-3 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                {sortOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 bg-espresso-800 border border-cream-400/10 z-20 min-w-[160px]">
                      {[
                        { value: 'featured', label: 'Featured' },
                        { value: 'price-asc', label: 'Price: Low to High' },
                        { value: 'price-desc', label: 'Price: High to Low' },
                        { value: 'rating', label: 'Top Rated' },
                        { value: 'newest', label: 'Newest' },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                          className={`block w-full text-left px-4 py-2.5 text-xs tracking-[0.04em] transition-colors ${
                            sortBy === opt.value ? 'text-gold bg-gold/5' : 'text-cream-300/50 hover:text-cream-200 hover:bg-espresso-700'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Active filters */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCategory && (
                  <span className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 text-xs text-gold px-2.5 py-1">
                    {activeCategory}
                    <button onClick={() => updateFilter('category', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activeSubcategory && (
                  <span className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 text-xs text-gold px-2.5 py-1">
                    {activeSubcategory}
                    <button onClick={() => updateFilter('subcategory', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activeMaterial && (
                  <span className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 text-xs text-gold px-2.5 py-1">
                    {activeMaterial}
                    <button onClick={() => updateFilter('material', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {maxPrice && (
                  <span className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 text-xs text-gold px-2.5 py-1">
                    Under ${maxPrice}
                    <button onClick={() => updateFilter('maxPrice', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-cream-300/40 text-sm">No products match your filters.</p>
                <button onClick={clearAll} className="btn-outline mt-6 inline-block">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-espresso-800 animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-cream-400/10">
              <h3 className="serif-heading text-base text-cream-100">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-cream-300/60 hover:text-cream-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto h-full pb-32">
              {filterContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
