import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categories, materials } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const selectedCategory = searchParams.get('category') || '';
  const selectedMaterial = searchParams.get('material') || '';
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '200');
  const sortOption = searchParams.get('sort') || 'featured';

  const updateParam = (key, value) => {
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

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Material filter (simulated - all products are gold by default)
    if (selectedMaterial) {
      // For demo, we just filter by name or keep all since we don't have real silver variants
      if (selectedMaterial === 'Silver') {
        result = result.filter(p => p.name.toLowerCase().includes('silver') || p.id.includes('silver'));
      }
    }

    // Price filter
    result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

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
        // featured - keep original order, put bestsellers first
        result.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedMaterial, minPrice, maxPrice, sortOption]);

  const activeFiltersCount = [selectedCategory, selectedMaterial].filter(Boolean).length;

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="py-10 border-b border-[#E8E4DE]">
          <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">DISCOVER THE COLLECTION</p>
          <h1 className="font-serif text-4xl tracking-[1px]">All Jewelry</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pt-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="flex items-center justify-between lg:hidden mb-4">
              <button 
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                className="flex items-center gap-2 text-sm tracking-[1px]"
              >
                FILTERS {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
              </button>
              {activeFiltersCount > 0 && (
                <button onClick={clearFilters} className="text-xs text-[#C5A46E]">CLEAR ALL</button>
              )}
            </div>

            <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
              {/* Category */}
              <div>
                <p className="text-xs tracking-[1.5px] text-[#8B8178] mb-3">CATEGORY</p>
                <div className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateParam('category', selectedCategory === cat ? '' : cat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedCategory === cat ? 'text-[#C5A46E]' : 'text-[#5C5651] hover:text-[#2C2825]'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="text-xs tracking-[1.5px] text-[#8B8178] mb-3">MATERIAL</p>
                <div className="space-y-2 text-sm">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => updateParam('material', selectedMaterial === mat ? '' : mat)}
                      className={`block w-full text-left py-1 transition-colors ${selectedMaterial === mat ? 'text-[#C5A46E]' : 'text-[#5C5651] hover:text-[#2C2825]'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="text-xs tracking-[1.5px] text-[#8B8178] mb-3">PRICE</p>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2 items-center">
                    <input 
                      type="number" 
                      value={minPrice} 
                      onChange={(e) => updateParam('minPrice', e.target.value)}
                      className="w-20 border border-[#E8E4DE] px-2 py-1 text-sm"
                      placeholder="0"
                    />
                    <span className="text-[#8B8178]">to</span>
                    <input 
                      type="number" 
                      value={maxPrice} 
                      onChange={(e) => updateParam('maxPrice', e.target.value)}
                      className="w-20 border border-[#E8E4DE] px-2 py-1 text-sm"
                      placeholder="200"
                    />
                  </div>
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <button onClick={clearFilters} className="hidden lg:block text-xs tracking-[1px] text-[#C5A46E] hover:text-[#B89778]">
                  CLEAR ALL FILTERS
                </button>
              )}
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E4DE]">
              <p className="text-sm text-[#5C5651]">{filteredProducts.length} products</p>
              
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#8B8178] hidden sm:inline">SORT:</span>
                <select 
                  value={sortOption} 
                  onChange={(e) => updateParam('sort', e.target.value)}
                  className="bg-transparent border border-[#E8E4DE] px-3 py-1.5 text-sm focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#5C5651] mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>CLEAR FILTERS</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
