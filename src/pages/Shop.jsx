import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/ui/Button';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get filter values from URL
  const selectedCategory = searchParams.get('category') || '';
  const selectedMaterial = searchParams.get('material') || '';
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '200');
  const sortBy = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.get('search') || '';

  // Update URL params helper
  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Material filter (simulated - all our products are gold plated)
    if (selectedMaterial) {
      result = result.filter(p => 
        p.material.toLowerCase().includes(selectedMaterial.toLowerCase())
      );
    }

    // Price filter
    result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
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
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, minPrice, maxPrice, sortBy, searchQuery]);

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedMaterial || minPrice > 0 || maxPrice < 200 || searchQuery;

  return (
    <div className="min-h-screen bg-[#F5F2ED] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <div className="text-xs tracking-[3px] text-[#C5A46E] mb-1">COLLECTION</div>
            <h1 className="font-serif text-4xl">All Jewelry</h1>
          </div>
          <p className="text-sm text-[#6B6359] mt-2 md:mt-0">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Mobile filter toggle */}
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="lg:hidden w-full flex items-center justify-between border border-[#EDE8E0] px-4 py-3 mb-4 text-sm"
            >
              FILTERS
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
              {/* Category */}
              <div>
                <div className="text-xs tracking-[2px] text-[#8B7B6B] mb-3">CATEGORY</div>
                <div className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', selectedCategory === cat ? '' : cat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedCategory === cat ? 'text-[#C5A46E]' : 'text-[#1A1A1A] hover:text-[#C5A46E]'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="text-xs tracking-[2px] text-[#8B7B6B] mb-3">MATERIAL</div>
                <div className="space-y-2 text-sm">
                  {['Gold Plated', 'Brass'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', selectedMaterial === mat ? '' : mat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedMaterial === mat ? 'text-[#C5A46E]' : 'text-[#1A1A1A] hover:text-[#C5A46E]'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="text-xs tracking-[2px] text-[#8B7B6B] mb-3">PRICE</div>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Under $50', min: 0, max: 49 },
                    { label: '$50 – $80', min: 50, max: 80 },
                    { label: 'Over $80', min: 81, max: 200 },
                  ].map((range) => {
                    const isActive = minPrice === range.min && maxPrice === range.max;
                    return (
                      <button
                        key={range.label}
                        onClick={() => {
                          const newParams = new URLSearchParams(searchParams);
                          newParams.set('minPrice', range.min);
                          newParams.set('maxPrice', range.max);
                          setSearchParams(newParams);
                        }}
                        className={`block w-full text-left py-1 transition-colors ${isActive ? 'text-[#C5A46E]' : 'text-[#1A1A1A] hover:text-[#C5A46E]'}`}
                      >
                        {range.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs tracking-[1.5px] text-[#C5A46E] hover:underline"
                >
                  CLEAR ALL FILTERS
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort + Search Results */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              {searchQuery && (
                <p className="text-sm text-[#6B6359]">Results for "{searchQuery}"</p>
              )}
              
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-xs tracking-[1.5px] text-[#8B7B6B]">SORT</span>
                <select 
                  value={sortBy}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="bg-transparent border border-[#EDE8E0] px-4 py-2 text-sm focus:outline-none focus:border-[#C5A46E]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg mb-4">No products found matching your filters.</p>
                <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
