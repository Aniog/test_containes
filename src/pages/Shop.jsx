import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import SortDropdown from '@/components/shop/SortDropdown';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';

const priceRanges = {
  'under-50': { min: 0, max: 50 },
  '50-75': { min: 50, max: 75 },
  'over-75': { min: 75, max: Infinity },
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const selectedCategory = searchParams.get('category') || null;
  const selectedPriceRange = searchParams.get('price') || null;
  const selectedMaterial = searchParams.get('material') || null;

  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedPriceRange) {
      const range = priceRanges[selectedPriceRange];
      if (range) {
        filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    if (selectedMaterial) {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero banner */}
      <div className="bg-brand-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold-light text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
            Our Jewelry
          </h1>
          <p className="text-white/60 mt-4 max-w-md mx-auto">
            Handcrafted pieces designed to be treasured. Each piece tells a story.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 text-sm text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-sm text-brand-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Mobile filter overlay */}
          <div
            className={cn(
              'fixed inset-0 z-40 lg:hidden transition-opacity duration-300',
              showFilters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
          >
            <div
              className="absolute inset-0 bg-brand-near-black/50"
              onClick={() => setShowFilters(false)}
            />
            <div
              className={cn(
                'absolute top-0 left-0 h-full w-72 bg-brand-ivory p-6 pt-20 shadow-xl transition-transform duration-300',
                showFilters ? 'translate-x-0' : '-translate-x-full'
              )}
            >
              <FilterSidebar
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                selectedMaterial={selectedMaterial}
                onCategoryChange={(v) => updateParam('category', v)}
                onPriceRangeChange={(v) => updateParam('price', v)}
                onMaterialChange={(v) => updateParam('material', v)}
                onClearAll={clearAllFilters}
                onClose={() => setShowFilters(false)}
              />
            </div>
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                selectedMaterial={selectedMaterial}
                onCategoryChange={(v) => updateParam('category', v)}
                onPriceRangeChange={(v) => updateParam('price', v)}
                onMaterialChange={(v) => updateParam('material', v)}
                onClearAll={clearAllFilters}
              />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No products found</p>
                <p className="text-sm text-brand-warm-gray mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="text-brand-gold hover:text-brand-gold-hover text-sm uppercase tracking-wider transition-colors"
                >
                  Clear all filters
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
  );
}
