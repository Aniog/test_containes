import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { products, categories } from '@/data/products';
import { SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const selectedCategory = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';
  const priceRange = searchParams.get('price') || 'all';

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-50':
          filtered = filtered.filter((p) => p.price < 50);
          break;
        case '50-75':
          filtered = filtered.filter((p) => p.price >= 50 && p.price <= 75);
          break;
        case '75-100':
          filtered = filtered.filter((p) => p.price >= 75 && p.price <= 100);
          break;
        case 'over-100':
          filtered = filtered.filter((p) => p.price > 100);
          break;
        default:
          break;
      }
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
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            {selectedCategory === 'all' ? 'All Jewelry' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-4" />
          <p className="text-ink-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar
              categories={categories.map((c) => c.id)}
              selectedCategory={selectedCategory}
              onCategoryChange={(cat) => updateFilter('category', cat)}
              priceRange={priceRange}
              onPriceChange={(price) => updateFilter('price', price)}
              sortBy={sortBy}
              onSortChange={(sort) => updateFilter('sort', sort)}
            />
          </div>

          {/* Mobile filter button */}
          <div className="lg:hidden fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="p-4 bg-gold text-base shadow-lg hover:bg-gold-light transition-colors"
              aria-label="Open filters"
            >
              <SlidersHorizontal size={24} />
            </button>
          </div>

          {/* Mobile filter drawer */}
          {isFilterOpen && (
            <>
              <div
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="lg:hidden fixed right-0 top-0 h-full w-80 bg-base-light z-50 shadow-2xl overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-2xl text-cream">Filters</h2>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="p-2 text-ink-muted hover:text-cream transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <FilterSidebar
                    categories={categories.map((c) => c.id)}
                    selectedCategory={selectedCategory}
                    onCategoryChange={(cat) => {
                      updateFilter('category', cat);
                    }}
                    priceRange={priceRange}
                    onPriceChange={(price) => updateFilter('price', price)}
                    sortBy={sortBy}
                    onSortChange={(sort) => updateFilter('sort', sort)}
                  />
                </div>
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-cream mb-4">No products found</p>
                <p className="text-ink-muted">Try adjusting your filters to find what you're looking for.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
};

export default Shop;
