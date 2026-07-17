import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { products, categories, materials, priceRanges, sortOptions } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Update category from URL params
  React.useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    // Filter by price
    if (selectedPrice !== 'all') {
      const range = priceRanges.find((r) => r.value === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
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
      case 'featured':
      default:
        // Keep original order for featured
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy]);

  const handleFilterChange = (type, value) => {
    if (type === 'category') setSelectedCategory(value);
    if (type === 'material') setSelectedMaterial(value);
    if (type === 'price') setSelectedPrice(value);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setSelectedPrice('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || selectedPrice !== 'all';

  const activeFilterCount = [selectedCategory, selectedMaterial, selectedPrice].filter(v => v !== 'all').length;

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 pt-8">
          <div>
            <span className="text-xs tracking-[0.2em] text-[var(--color-gold)]">COLLECTION</span>
            <h1 className="font-serif text-4xl md:text-5xl mt-2">All Jewelry</h1>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-[var(--color-border)] text-xs tracking-[0.1em] hover:border-[var(--color-gold)] transition-colors"
            >
              <Filter size={14} />
              FILTERS
              {activeFilterCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-[var(--color-gold)] text-white text-[10px] rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar — Desktop */}
          <aside className="hidden lg:block lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat.value} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.value}
                      onChange={() => handleFilterChange('category', cat.value)}
                    />
                    {cat.label}
                  </label>
                ))}
              </div>

              <div>
                <div className="filter-label">Material</div>
                {materials.map((mat) => (
                  <label key={mat.value} className="filter-option">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === mat.value}
                      onChange={() => handleFilterChange('material', mat.value)}
                    />
                    {mat.label}
                  </label>
                ))}
              </div>

              <div>
                <div className="filter-label">Price</div>
                {priceRanges.map((range) => (
                  <label key={range.value} className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === range.value}
                      onChange={() => handleFilterChange('price', range.value)}
                    />
                    {range.label}
                  </label>
                ))}
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-[0.1em] text-[var(--color-gold)] hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p className="mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline btn-sm">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 z-[90] lg:hidden"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[var(--color-surface)] z-[100] lg:hidden overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
              <span className="font-medium tracking-[0.1em] text-sm uppercase">Filters</span>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="p-1">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat.value} className="filter-option">
                    <input
                      type="radio"
                      name="category-mobile"
                      checked={selectedCategory === cat.value}
                      onChange={() => handleFilterChange('category', cat.value)}
                    />
                    {cat.label}
                  </label>
                ))}
              </div>

              <div>
                <div className="filter-label">Material</div>
                {materials.map((mat) => (
                  <label key={mat.value} className="filter-option">
                    <input
                      type="radio"
                      name="material-mobile"
                      checked={selectedMaterial === mat.value}
                      onChange={() => handleFilterChange('material', mat.value)}
                    />
                    {mat.label}
                  </label>
                ))}
              </div>

              <div>
                <div className="filter-label">Price</div>
                {priceRanges.map((range) => (
                  <label key={range.value} className="filter-option">
                    <input
                      type="radio"
                      name="price-mobile"
                      checked={selectedPrice === range.value}
                      onChange={() => handleFilterChange('price', range.value)}
                    />
                    {range.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="sticky bottom-0 p-6 bg-[var(--color-surface)] border-t border-[var(--color-border)] space-y-3">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full text-xs tracking-[0.1em] text-[var(--color-gold)] py-2"
                >
                  Clear All Filters
                </button>
              )}
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="btn btn-primary w-full"
              >
                Show {filteredAndSortedProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
