import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories, materials } from '@/data/products';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get filter values from URL
  const selectedCategory = searchParams.get('category') || 'All';
  const selectedMaterial = searchParams.get('material') || 'All';
  const sortOption = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.get('search') || '';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortOption) {
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
  }, [selectedCategory, selectedMaterial, sortOption, searchQuery]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedMaterial !== 'All' || searchQuery;

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[3px] text-[#B89778] mb-2">DISCOVER</p>
          <h1 className="font-serif text-4xl tracking-[1px] text-[#2C2825]">The Collection</h1>
          {searchQuery && (
            <p className="mt-2 text-[#6B665F]">Results for "{searchQuery}"</p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="lg:hidden w-full flex items-center justify-between border border-[#E8E4DE] px-4 py-3 mb-4 text-sm tracking-[1px]"
            >
              FILTERS
              <ChevronDown className={`transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} size={16} />
            </button>

            <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
              {/* Category Filter */}
              <div>
                <h3 className="text-xs tracking-[2px] mb-4 text-[#2C2825]">CATEGORY</h3>
                <div className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', cat)}
                      className={`block w-full text-left py-0.5 transition-colors ${
                        selectedCategory === cat
                          ? 'text-[#B89778]'
                          : 'text-[#6B665F] hover:text-[#2C2825]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-xs tracking-[2px] mb-4 text-[#2C2825]">MATERIAL</h3>
                <div className="space-y-2 text-sm">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', mat)}
                      className={`block w-full text-left py-0.5 transition-colors ${
                        selectedMaterial === mat
                          ? 'text-[#B89778]'
                          : 'text-[#6B665F] hover:text-[#2C2825]'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-[1.5px] text-[#B89778] hover:text-[#8B6F47] underline"
                >
                  CLEAR ALL FILTERS
                </button>
              )}
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E4DE]">
              <p className="text-sm text-[#6B665F]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent pr-8 py-1 text-sm tracking-[1px] text-[#2C2825] border-b border-[#E8E4DE] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">A — Z</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-2.5 pointer-events-none text-[#6B665F]" />
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#6B665F] mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>
                  CLEAR FILTERS
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
