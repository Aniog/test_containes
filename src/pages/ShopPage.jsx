import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get filter values from URL
  const activeCategory = searchParams.get('category') || '';
  const activeMaterial = searchParams.get('material') || '';
  const activePrice = searchParams.get('price') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Category filter
    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }
    
    // Material filter
    if (activeMaterial) {
      result = result.filter(p => p.material.toLowerCase().includes(activeMaterial.toLowerCase()));
    }
    
    // Price filter
    if (activePrice) {
      switch (activePrice) {
        case 'under-50':
          result = result.filter(p => p.price < 50);
          break;
        case '50-75':
          result = result.filter(p => p.price >= 50 && p.price <= 75);
          break;
        case 'over-75':
          result = result.filter(p => p.price > 75);
          break;
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
      case 'newest':
        result.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }
    
    return result;
  }, [activeCategory, activeMaterial, activePrice, sortBy]);

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

  const hasActiveFilters = activeCategory || activeMaterial || activePrice;

  const priceRanges = [
    { value: 'under-50', label: 'Under $50' },
    { value: '50-75', label: '$50 - $75' },
    { value: 'over-75', label: 'Over $75' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  return (
    <div className="pt-[var(--header-height)]">
      {/* Header */}
      <div className="bg-[#F5F0E8] py-12">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-center mb-3">
            Shop All
          </h1>
          <p className="text-[#6B6B6B] text-center">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 py-10">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 py-3 px-4 border border-[#E8E4DE]"
          >
            <SlidersHorizontal size={18} strokeWidth={1.5} />
            <span className="text-sm tracking-wider uppercase">Filters</span>
          </button>

          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => updateFilter('category', '')}
                      className={`text-sm hover:text-[#C9A962] transition-colors ${
                        !activeCategory ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => updateFilter('category', cat.id)}
                        className={`text-sm hover:text-[#C9A962] transition-colors ${
                          activeCategory === cat.id ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Price</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => updateFilter('price', '')}
                      className={`text-sm hover:text-[#C9A962] transition-colors ${
                        !activePrice ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'
                      }`}
                    >
                      All Prices
                    </button>
                  </li>
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => updateFilter('price', range.value)}
                        className={`text-sm hover:text-[#C9A962] transition-colors ${
                          activePrice === range.value ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#C9A962] hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Results Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E4DE]">
              <p className="text-sm text-[#6B6B6B]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </p>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent py-2 pr-8 pl-0 text-sm tracking-wider border-none focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  strokeWidth={1.5}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#6B6B6B] mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#1A1A1A]/40"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-[#FAF7F2] p-6 transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-xl">Filters</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 hover:text-[#C9A962]"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-sm tracking-wider uppercase mb-4">Category</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => { updateFilter('category', ''); }}
                  className={`text-sm hover:text-[#C9A962] ${
                    !activeCategory ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'
                  }`}
                >
                  All
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => { updateFilter('category', cat.id); }}
                    className={`text-sm hover:text-[#C9A962] ${
                      activeCategory === cat.id ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="text-sm tracking-wider uppercase mb-4">Price</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => { updateFilter('price', ''); }}
                  className={`text-sm hover:text-[#C9A962] ${
                    !activePrice ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'
                  }`}
                >
                  All Prices
                </button>
              </li>
              {priceRanges.map((range) => (
                <li key={range.value}>
                  <button
                    onClick={() => { updateFilter('price', range.value); }}
                    className={`text-sm hover:text-[#C9A962] ${
                      activePrice === range.value ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'
                    }`}
                  >
                    {range.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-6 border-t border-[#E8E4DE]">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full btn-secondary text-sm"
              >
                Clear All
              </button>
            )}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full btn-accent text-sm"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}