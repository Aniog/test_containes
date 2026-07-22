import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const activeCategory = searchParams.get('category') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  const materials = ['gold', 'silver'];
  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', label: 'Under $50', min: 0, max: 50 },
    { id: '50to75', label: '$50 - $75', min: 50, max: 75 },
    { id: 'over75', label: 'Over $75', min: 75, max: Infinity }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by material
    if (activeMaterial !== 'all') {
      result = result.filter(p => p.material === activeMaterial);
    }

    // Filter by price
    const priceRange = priceRanges.find(p => p.id === activePrice);
    if (priceRange) {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [activeCategory, activeMaterial, activePrice, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all' || activePrice !== 'all';

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
            {activeCategory === 'all' ? 'Shop All' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-4 text-[var(--color-taupe)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-taupe)]/20">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm tracking-widest uppercase hover:text-[var(--color-gold)] transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-[var(--color-gold)] rounded-full" />
            )}
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent text-sm tracking-widest uppercase pr-8 py-1 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[var(--color-taupe)]">No products found matching your criteria.</p>
            <button 
              onClick={clearFilters}
              className="mt-4 text-sm border-b border-[var(--color-charcoal)] pb-1 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50">
            <div 
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsFilterOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-[var(--color-cream)] shadow-2xl overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X size={20} />
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="text-sm tracking-widest uppercase text-[var(--color-taupe)] mb-4">Category</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={activeCategory === 'all'}
                        onChange={() => updateFilter('category', 'all')}
                        className="w-4 h-4 accent-[var(--color-gold)]"
                      />
                      <span className="text-sm">All Categories</span>
                    </label>
                    {categories.map((cat) => (
                      <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={activeCategory === cat.id}
                          onChange={() => updateFilter('category', cat.id)}
                          className="w-4 h-4 accent-[var(--color-gold)]"
                        />
                        <span className="text-sm capitalize">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="mb-8">
                  <h3 className="text-sm tracking-widest uppercase text-[var(--color-taupe)] mb-4">Material</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={activeMaterial === 'all'}
                        onChange={() => updateFilter('material', 'all')}
                        className="w-4 h-4 accent-[var(--color-gold)]"
                      />
                      <span className="text-sm">All Materials</span>
                    </label>
                    {materials.map((mat) => (
                      <label key={mat} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="material"
                          checked={activeMaterial === mat}
                          onChange={() => updateFilter('material', mat)}
                          className="w-4 h-4 accent-[var(--color-gold)]"
                        />
                        <span className="text-sm capitalize">{mat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-8">
                  <h3 className="text-sm tracking-widest uppercase text-[var(--color-taupe)] mb-4">Price</h3>
                  <div className="space-y-3">
                    {priceRanges.map((range) => (
                      <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          checked={activePrice === range.id}
                          onChange={() => updateFilter('price', range.id)}
                          className="w-4 h-4 accent-[var(--color-gold)]"
                        />
                        <span className="text-sm">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={clearFilters}
                    className="flex-1 py-3 border border-[var(--color-taupe)] text-sm tracking-widest uppercase hover:border-[var(--color-charcoal)] transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 py-3 bg-[var(--color-charcoal)] text-white text-sm tracking-widest uppercase hover:bg-[var(--color-gold)] transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}