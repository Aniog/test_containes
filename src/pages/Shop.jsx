import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { cn, formatPrice } from '@/lib/utils';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 – $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
];

const materials = [
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Sterling Silver' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && !selectedCategories.includes(cat)) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSortBy('featured');
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
      if (range) {
        filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategories, selectedPriceRange, sortBy]);

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRange;

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="section-padding py-8 md:py-12 border-b border-charcoal-200">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-2 font-sans">
            Our Collection
          </p>
          <h1 className="text-heading-1 text-charcoal-800 mb-4">
            Shop All Jewelry
          </h1>
          <p className="text-body-lg text-charcoal-500 max-w-xl">
            Discover our curated collection of demi-fine gold jewelry. Each piece is designed to 
            be treasured — premium quality at accessible prices.
          </p>
        </div>
      </div>

      <div className="section-padding py-8 md:py-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 border rounded text-body-sm uppercase tracking-wider transition-colors',
                  filtersOpen ? 'bg-charcoal-800 text-cream-100 border-charcoal-800' : 'border-charcoal-300 text-charcoal-700 hover:border-charcoal-500'
                )}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-body-sm text-charcoal-500 hover:text-charcoal-700 transition-colors flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear all
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-body-sm text-charcoal-500 hidden md:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-charcoal-300 rounded px-4 py-2.5 pr-10 text-body-sm text-charcoal-700 cursor-pointer focus:outline-none focus:border-charcoal-500"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar filters */}
            <aside
              className={cn(
                'w-64 flex-shrink-0 transition-all duration-300',
                'hidden lg:block',
                filtersOpen && '!block fixed lg:relative inset-0 z-30 lg:z-auto bg-cream-100 lg:bg-transparent p-6 lg:p-0 overflow-y-auto'
              )}
            >
              {/* Mobile close */}
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h3 className="text-heading-3 text-charcoal-800">Filters</h3>
                <button onClick={() => setFiltersOpen(false)}>
                  <X className="w-5 h-5 text-charcoal-600" />
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <h4 className="text-body font-medium text-charcoal-800 uppercase tracking-wider mb-4">Category</h4>
                <div className="space-y-2.5">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        className="w-4 h-4 border-charcoal-300 rounded text-gold-500 focus:ring-gold-500"
                      />
                      <span className="text-body text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="hairline-divider mb-8" />

              {/* Price filter */}
              <div className="mb-8">
                <h4 className="text-body font-medium text-charcoal-800 uppercase tracking-wider mb-4">Price</h4>
                <div className="space-y-2.5">
                  {priceRanges.map((range) => (
                    <label
                      key={range.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === range.id}
                        onChange={() => setSelectedPriceRange(range.id)}
                        className="w-4 h-4 border-charcoal-300 text-gold-500 focus:ring-gold-500"
                      />
                      <span className="text-body text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="hairline-divider mb-8" />

              {/* Material filter */}
              <div className="mb-8">
                <h4 className="text-body font-medium text-charcoal-800 uppercase tracking-wider mb-4">Material</h4>
                <div className="space-y-2.5">
                  {materials.map((mat) => (
                    <label
                      key={mat.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-charcoal-300 rounded text-gold-500 focus:ring-gold-500"
                      />
                      <span className="text-body text-charcoal-600 group-hover:text-charcoal-800 transition-colors">
                        {mat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-heading-3 text-charcoal-600 mb-2">No products found</p>
                  <p className="text-body text-charcoal-400 mb-6">Try adjusting your filters to find what you're looking for.</p>
                  <button onClick={clearFilters} className="btn-outline">
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
      </div>
    </div>
  );
}
