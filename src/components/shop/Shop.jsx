import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../shop/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const activeCategory = searchParams.get('category') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

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
    
    // Sort
    switch (activeSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }
    
    return result;
  }, [activeCategory, activeMaterial, activeSort]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all';

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <p className="text-[#8A8A8A]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={activeSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent pr-6 py-2 text-sm focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <div className="space-y-3">
                <button
                  onClick={() => updateFilter('category', 'all')}
                  className={`text-sm block ${activeCategory === 'all' ? 'text-[#C9A962]' : 'text-[#8A8A8A] hover:text-[#1A1A1A]'}`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={`text-sm block capitalize ${activeCategory === cat.id ? 'text-[#C9A962]' : 'text-[#8A8A8A] hover:text-[#1A1A1A]'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Material</h3>
              <div className="space-y-3">
                {['all', 'gold', 'silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => updateFilter('material', material)}
                    className={`text-sm block capitalize ${activeMaterial === material ? 'text-[#C9A962]' : 'text-[#8A8A8A] hover:text-[#1A1A1A]'}`}
                  >
                    {material === 'all' ? 'All Materials' : `${material} Tone`}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-[#8A8A8A] hover:text-[#1A1A1A] underline"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent pr-6 py-2 text-sm focus:outline-none border-b border-[#E8E4DE]"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="newest">Sort by: Newest</option>
                  <option value="price-low">Sort by: Price Low to High</option>
                  <option value="price-high">Sort by: Price High to Low</option>
                  <option value="rating">Sort by: Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl mb-4">No products found</p>
                <p className="text-[#8A8A8A] mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-[#FAF7F2] p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <div className="space-y-3">
                <button
                  onClick={() => { updateFilter('category', 'all'); setIsFilterOpen(false); }}
                  className={`text-sm block ${activeCategory === 'all' ? 'text-[#C9A962]' : 'text-[#8A8A8A]'}`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { updateFilter('category', cat.id); setIsFilterOpen(false); }}
                    className={`text-sm block capitalize ${activeCategory === cat.id ? 'text-[#C9A962]' : 'text-[#8A8A8A]'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Material</h3>
              <div className="space-y-3">
                {['all', 'gold', 'silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => { updateFilter('material', material); setIsFilterOpen(false); }}
                    className={`text-sm block capitalize ${activeMaterial === material ? 'text-[#C9A962]' : 'text-[#8A8A8A]'}`}
                  >
                    {material === 'all' ? 'All Materials' : `${material} Tone`}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={() => { clearFilters(); setIsFilterOpen(false); }}
                className="w-full btn-secondary"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}