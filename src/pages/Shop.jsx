import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const categories = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' }
];

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 - $60' },
  { value: '60-80', label: '$60 - $80' },
  { value: '80-100', label: '$80 - $100' },
  { value: '100+', label: '$100+' }
];

const materials = [
  { value: '', label: 'All Materials' },
  { value: '18K Gold Plated', label: '18K Gold Plated' },
  { value: 'Sterling Silver', label: 'Sterling Silver' }
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name' },
  { value: 'rating', label: 'Top Rated' }
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const category = searchParams.get('category') || '';
  const priceRange = searchParams.get('price') || '';
  const material = searchParams.get('material') || '';
  const sort = searchParams.get('sort') || 'featured';

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = category || priceRange || material;

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (category) {
      result = result.filter(p => p.category === category);
    }

    // Price range filter
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(v => v === '+' ? Infinity : Number(v));
      result = result.filter(p => {
        if (max === undefined) return p.price >= min;
        return p.price >= min && p.price <= max;
      });
    }

    // Material filter
    if (material) {
      result = result.filter(p => p.material === material);
    }

    // Sort
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [category, priceRange, material, sort]);

  const activeSortLabel = sortOptions.find(o => o.value === sort)?.label || 'Featured';

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-[#F5F3EF] py-12 md:py-16">
        <div className="container text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-3">
            Shop Our Collection
          </h1>
          <p className="text-[#57534E]">
            Discover demi-fine jewelry for every occasion
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2 text-sm font-medium text-[#1C1917]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-[#C4A962] text-white text-xs rounded-full flex items-center justify-center">
                  {[category, priceRange, material].filter(Boolean).length}
                </span>
              )}
            </button>

            {/* Mobile Sort */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 text-sm text-[#57534E]"
              >
                Sort by: <span className="text-[#1C1917]">{activeSortLabel}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E7E5E4] z-20">
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateFilter('sort', option.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-[#F5F3EF] transition-colors ${
                        sort === option.value ? 'text-[#C4A962] font-medium' : 'text-[#1C1917]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h2 className="font-serif text-xl text-[#1C1917] mb-6">Filters</h2>
              
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-[#A8A29E] mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => updateFilter('category', cat.value)}
                      className={`block text-sm w-full text-left py-1.5 transition-colors ${
                        category === cat.value 
                          ? 'text-[#C4A962] font-medium' 
                          : 'text-[#57534E] hover:text-[#1C1917]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-[#A8A29E] mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className={`block text-sm w-full text-left py-1.5 transition-colors ${
                        priceRange === range.value 
                          ? 'text-[#C4A962] font-medium' 
                          : 'text-[#57534E] hover:text-[#1C1917]'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-[#A8A29E] mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <button
                      key={mat.value}
                      onClick={() => updateFilter('material', mat.value)}
                      className={`block text-sm w-full text-left py-1.5 transition-colors ${
                        material === mat.value 
                          ? 'text-[#C4A962] font-medium' 
                          : 'text-[#57534E] hover:text-[#1C1917]'
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#57534E] hover:text-[#C4A962] transition-colors underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop Header */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-[#57534E]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              {/* Desktop Sort */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 text-sm text-[#57534E]"
                >
                  Sort by: <span className="text-[#1C1917]">{activeSortLabel}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E7E5E4] z-20">
                    {sortOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          updateFilter('sort', option.value);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-[#F5F3EF] transition-colors ${
                          sort === option.value ? 'text-[#C4A962] font-medium' : 'text-[#1C1917]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-[#1C1917] mb-2">
                  No pieces found
                </p>
                <p className="text-[#57534E] mb-6">
                  Try adjusting your filters to find what you're looking for
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setShowFilters(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 lg:hidden max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-[#E7E5E4] p-4 flex items-center justify-between">
              <h2 className="font-serif text-lg">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-6">
              {/* Category */}
              <div>
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-[#A8A29E] mb-3">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => updateFilter('category', cat.value)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        category === cat.value 
                          ? 'bg-[#1C1917] text-white' 
                          : 'bg-[#F5F3EF] text-[#57534E]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-[#A8A29E] mb-3">
                  Price
                </h3>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        priceRange === range.value 
                          ? 'bg-[#1C1917] text-white' 
                          : 'bg-[#F5F3EF] text-[#57534E]'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-[#E7E5E4] p-4 flex gap-3">
              <button
                onClick={() => {
                  clearFilters();
                  setShowFilters(false);
                }}
                className="flex-1 py-3 border border-[#E7E5E4] rounded text-sm font-medium text-[#57534E]"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 py-3 bg-[#1C1917] text-white rounded text-sm font-medium"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
