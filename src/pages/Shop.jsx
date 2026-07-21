import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories, materials } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  React.useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'All') {
      result = result.filter((p) => p.material === selectedMaterial);
    }
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }
    return result;
  }, [selectedCategory, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedMaterial !== 'All';

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-20 md:pt-24">
      <div className="container-luxury py-8">
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl font-light mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {selectedCategory === 'All' ? 'All Collections' : selectedCategory}
          </h1>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto" />
        </div>

        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium md:hidden"
          >
            <SlidersHorizontal size={16} />
            Filter
          </button>

          <div className="hidden md:flex items-center gap-2 text-sm text-[#8A8580]">
            {hasActiveFilters && (
              <>
                <span>Filtered by:</span>
                {selectedCategory !== 'All' && (
                  <span className="bg-[#F5F0EB] px-3 py-1 text-[#1A1A1A]">
                    {selectedCategory} <button onClick={() => setSelectedCategory('All')} className="ml-2 text-[#C9A96E]">x</button>
                  </span>
                )}
                <button onClick={clearFilters} className="text-[#C9A96E] ml-2">Clear all</button>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-[#8A8580]">{filteredProducts.length} pieces</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E8E2D9] px-3 py-2 bg-transparent focus:border-[#C9A96E] focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          <div
            className={`fixed md:static inset-0 z-40 md:z-auto bg-white md:bg-transparent w-72 md:w-56 lg:w-64 p-6 md:p-0 transform transition-transform duration-300 ${
              isFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            } md:block h-screen md:h-auto overflow-y-auto md:overflow-visible`}
          >
            <div className="md:sticky md:top-24">
              <div className="flex items-center justify-between mb-6 md:hidden">
                <h3 className="text-sm uppercase tracking-[0.15em] font-medium">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}><X size={18} /></button>
              </div>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4 text-[#1A1A1A]">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        if (cat === 'All') {
                          setSearchParams({});
                        } else {
                          setSearchParams({ category: cat });
                        }
                        setIsFilterOpen(false);
                      }}
                      className={`block text-sm py-1 transition-colors ${
                        selectedCategory === cat ? 'text-[#C9A96E] font-medium' : 'text-[#8A8580] hover:text-[#1A1A1A]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4 text-[#1A1A1A]">Material</h4>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => { setSelectedMaterial(mat); setIsFilterOpen(false); }}
                      className={`block text-sm py-1 transition-colors ${
                        selectedMaterial === mat ? 'text-[#C9A96E] font-medium' : 'text-[#8A8580] hover:text-[#1A1A1A]'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={() => { clearFilters(); setIsFilterOpen(false); }}
                  className="text-sm text-[#C9A96E] uppercase tracking-[0.1em] font-medium"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {isFilterOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-30 md:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
          )}

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#8A8580] mb-4">No pieces found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-[#C9A96E] text-sm uppercase tracking-[0.15em] font-medium"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
