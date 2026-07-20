import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges, materials } from '../data/products';
import ProductCard from '../components/home/ProductCard';

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Get filter values from URL
  const selectedCategory = searchParams.get('category') || '';
  const selectedPriceRange = searchParams.get('price') || '';
  const selectedMaterials = searchParams.getAll('material');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.id === selectedPriceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => 
        selectedMaterials.some(m => p.material.toLowerCase().includes(m.replace('-', ' ')))
      );
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
  }, [selectedCategory, selectedPriceRange, selectedMaterials, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const toggleMaterialFilter = (material) => {
    const newParams = new URLSearchParams(searchParams);
    const currentMaterials = newParams.getAll('material');
    
    if (currentMaterials.includes(material)) {
      newParams.delete('material');
      currentMaterials.filter(m => m !== material).forEach(m => newParams.append('material', m));
    } else {
      newParams.append('material', material);
    }
    
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedPriceRange || selectedMaterials.length > 0;

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-20">
      <div className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-[#F5F5F0] mb-3">
            All Jewelry
          </h1>
          <p className="text-[#A8A8A0]">
            {filteredProducts.length} pieces
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#333333]">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
          >
            <SlidersHorizontal size={18} strokeWidth={1.5} />
            <span className="text-sm uppercase tracking-wider">Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-[#C9A962] rounded-full" />
            )}
          </button>

          {/* Desktop Filters Summary */}
          <div className="hidden lg:flex items-center gap-4">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-[#333333] px-4 py-2 pr-10 text-sm text-[#F5F5F0] focus:border-[#C9A962] focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown
              size={16}
              strokeWidth={1.5}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8A8A0] pointer-events-none"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-[#F5F5F0] mb-4 font-semibold">
                  Category
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => updateFilter('category', category.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedCategory === category.id
                            ? 'border-[#C9A962] bg-[#C9A962]'
                            : 'border-[#333333] group-hover:border-[#666]'
                        }`}
                      >
                        {selectedCategory === category.id && (
                          <span className="w-1.5 h-1.5 bg-[#0D0D0D]" />
                        )}
                      </span>
                      <span className="text-sm text-[#A8A8A0] group-hover:text-[#F5F5F0] transition-colors">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-[#F5F5F0] mb-4 font-semibold">
                  Price
                </h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label
                      key={range.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === range.id}
                        onChange={() => updateFilter('price', range.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedPriceRange === range.id
                            ? 'border-[#C9A962] bg-[#C9A962]'
                            : 'border-[#333333] group-hover:border-[#666]'
                        }`}
                      >
                        {selectedPriceRange === range.id && (
                          <span className="w-1.5 h-1.5 bg-[#0D0D0D]" />
                        )}
                      </span>
                      <span className="text-sm text-[#A8A8A0] group-hover:text-[#F5F5F0] transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-[#F5F5F0] mb-4 font-semibold">
                  Material
                </h3>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <label
                      key={material.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material.id)}
                        onChange={() => toggleMaterialFilter(material.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedMaterials.includes(material.id)
                            ? 'border-[#C9A962] bg-[#C9A962]'
                            : 'border-[#333333] group-hover:border-[#666]'
                        }`}
                      >
                        {selectedMaterials.includes(material.id) && (
                          <span className="w-1.5 h-1.5 bg-[#0D0D0D]" />
                        )}
                      </span>
                      <span className="text-sm text-[#A8A8A0] group-hover:text-[#F5F5F0] transition-colors">
                        {material.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#A8A8A0] mb-4">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="text-[#C9A962] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0D0D0D] animate-slideInRight overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[#333333]">
              <h2 className="font-serif text-xl text-[#F5F5F0]">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
                aria-label="Close filters"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="p-6">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-[#F5F5F0] mb-4 font-semibold">
                  Category
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={selectedCategory === category.id}
                        onChange={() => updateFilter('category', category.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedCategory === category.id
                            ? 'border-[#C9A962] bg-[#C9A962]'
                            : 'border-[#333333] group-hover:border-[#666]'
                        }`}
                      >
                        {selectedCategory === category.id && (
                          <span className="w-1.5 h-1.5 bg-[#0D0D0D]" />
                        )}
                      </span>
                      <span className="text-sm text-[#A8A8A0] group-hover:text-[#F5F5F0] transition-colors">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-[#F5F5F0] mb-4 font-semibold">
                  Price
                </h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label
                      key={range.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={selectedPriceRange === range.id}
                        onChange={() => updateFilter('price', range.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedPriceRange === range.id
                            ? 'border-[#C9A962] bg-[#C9A962]'
                            : 'border-[#333333] group-hover:border-[#666]'
                        }`}
                      >
                        {selectedPriceRange === range.id && (
                          <span className="w-1.5 h-1.5 bg-[#0D0D0D]" />
                        )}
                      </span>
                      <span className="text-sm text-[#A8A8A0] group-hover:text-[#F5F5F0] transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-[#F5F5F0] mb-4 font-semibold">
                  Material
                </h3>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <label
                      key={material.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material.id)}
                        onChange={() => toggleMaterialFilter(material.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedMaterials.includes(material.id)
                            ? 'border-[#C9A962] bg-[#C9A962]'
                            : 'border-[#333333] group-hover:border-[#666]'
                        }`}
                      >
                        {selectedMaterials.includes(material.id) && (
                          <span className="w-1.5 h-1.5 bg-[#0D0D0D]" />
                        )}
                      </span>
                      <span className="text-sm text-[#A8A8A0] group-hover:text-[#F5F5F0] transition-colors">
                        {material.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#333333] flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border border-[#333333] text-[#A8A8A0] text-sm uppercase tracking-wider hover:border-[#666] transition-colors"
              >
                Clear
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 btn-primary py-3"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;