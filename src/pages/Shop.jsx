import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ProductGrid from '@/components/shop/ProductGrid';
import SortDropdown from '@/components/shop/SortDropdown';

const priceRanges = {
  'under-50': { min: 0, max: 50 },
  '50-75': { min: 50, max: 75 },
  'over-75': { min: 75, max: Infinity },
};

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange && priceRanges[selectedPriceRange]) {
      const { min, max } = priceRanges[selectedPriceRange];
      filtered = filtered.filter(p => p.price >= min && p.price < max);
    }

    // Material filter (simplified - all products are gold plated)
    if (selectedMaterial) {
      // In a real app, filter by material attribute
      filtered = filtered.filter(p => true);
    }

    // Sort
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
      case 'newest':
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange(null);
    setSelectedMaterial(null);
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="section-padding py-10 md:py-16 text-center bg-charcoal/5">
        <p 
          className="text-xs uppercase tracking-widest text-charcoal/50 mb-2"
          style={{ letterSpacing: '0.3em' }}
        >
          Our Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
          Shop All Jewelry
        </h1>
        <p className="text-charcoal/60 max-w-lg mx-auto">
          Discover our curated collection of demi-fine gold jewelry. 
          Each piece is crafted to be treasured.
        </p>
      </section>

      {/* Shop content */}
      <section className="section-padding section-margin">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-charcoal/70 hover:text-charcoal"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            
            <p className="text-sm text-charcoal/50 hidden lg:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>

          {/* Main content */}
          <div className="flex gap-8">
            {/* Sidebar */}
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedPriceRange={selectedPriceRange}
              onPriceRangeChange={setSelectedPriceRange}
              selectedMaterial={selectedMaterial}
              onMaterialChange={setSelectedMaterial}
              onClearAll={clearAllFilters}
              isOpen={filtersOpen}
              onClose={() => setFiltersOpen(false)}
            />

            {/* Product grid */}
            <div className="flex-1">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
