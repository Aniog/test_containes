import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const categoryOptions = [
  { label: 'All', value: '' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
];

const priceRanges = [
  { label: 'All Prices', value: '' },
  { label: 'Under $50', value: '0-50' },
  { label: '$50 - $75', value: '50-75' },
  { label: '$75 - $100', value: '75-100' },
  { label: 'Over $100', value: '100-999' },
];

function FilterSidebar({ category, priceRange, onCategoryChange, onPriceChange, onClose, isMobile }) {
  const content = (
    <div className="space-y-8">
      {isMobile && (
        <div className="flex items-center justify-between pb-4 border-b border-cream-300">
          <h3 className="font-serif text-xl tracking-wider text-walnut-900">Filters</h3>
          <button onClick={onClose} className="text-walnut-600">
            <X size={20} />
          </button>
        </div>
      )}

      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-walnut-900 mb-4">Category</h4>
        <div className="space-y-2">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onCategoryChange(opt.value)}
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                category === opt.value
                  ? 'text-gold-700 font-medium'
                  : 'text-walnut-600 hover:text-walnut-900'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-walnut-900 mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onPriceChange(opt.value)}
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                priceRange === opt.value
                  ? 'text-gold-700 font-medium'
                  : 'text-walnut-600 hover:text-walnut-900'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material (static) */}
      <div>
        <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-walnut-900 mb-4">Material</h4>
        <div className="space-y-2">
          <span className="block font-sans text-sm text-walnut-600">18K Gold Plated</span>
          <span className="block font-sans text-sm text-walnut-600">Sterling Silver</span>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return content;
  }

  return (
    <aside className="w-64 flex-shrink-0">
      {content}
    </aside>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);

  const category = searchParams.get('category') || '';
  const priceRange = searchParams.get('price') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
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
      default:
        break;
    }

    return result;
  }, [category, priceRange, sortBy]);

  return (
    <main className="min-h-screen bg-cream-100 pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-2">
          <p className="section-subtitle mb-3">Our Collection</p>
          <h1 className="section-title">Shop All Jewelry</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Controls bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-300">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-walnut-700"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <p className="hidden lg:block font-sans text-sm text-walnut-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-walnut-700 hover:text-walnut-900 transition-colors"
            >
              Sort by: {sortOptions.find((o) => o.value === sortBy)?.label}
              <ChevronDown size={14} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 bg-cream-100 border border-cream-300 shadow-lg z-20 min-w-[200px]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                      className={`block w-full text-left px-4 py-2.5 font-sans text-sm transition-colors ${
                        sortBy === opt.value
                          ? 'text-gold-700 bg-cream-200'
                          : 'text-walnut-600 hover:bg-cream-200'
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

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar
              category={category}
              priceRange={priceRange}
              onCategoryChange={(v) => updateParam('category', v)}
              onPriceChange={(v) => updateParam('price', v)}
            />
          </div>

          {/* Mobile filters overlay */}
          {mobileFiltersOpen && (
            <>
              <div
                className="fixed inset-0 bg-walnut-950/40 z-40 lg:hidden"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="fixed top-0 left-0 h-full w-80 bg-cream-100 z-50 p-6 overflow-y-auto lg:hidden shadow-2xl">
                <FilterSidebar
                  category={category}
                  priceRange={priceRange}
                  onCategoryChange={(v) => updateParam('category', v)}
                  onPriceChange={(v) => updateParam('price', v)}
                  onClose={() => setMobileFiltersOpen(false)}
                  isMobile
                />
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-walnut-600 mb-2">No pieces found</p>
                <p className="font-sans text-sm text-walnut-400">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
