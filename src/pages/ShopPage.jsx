import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: '',
    priceRange: '',
    sort: searchParams.get('sort') || 'featured'
  });

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];
  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $75', value: '50-75' },
    { label: '$75 - $100', value: '75-100' },
    { label: 'Over $100', value: '100+' }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.material) {
      result = result.filter(p => p.material === filters.material);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(v => 
        v.includes('+') ? Infinity : parseInt(v)
      );
      result = result.filter(p => {
        if (max === undefined) return p.price >= min;
        return p.price >= min && p.price <= max;
      });
    }

    switch (filters.sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      case 'bestsellers':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category') {
      const newParams = new URLSearchParams(searchParams);
      if (value) {
        newParams.set('category', value);
      } else {
        newParams.delete('category');
      }
      setSearchParams(newParams);
    }
  };

  const clearFilters = () => {
    setFilters({ category: '', material: '', priceRange: '', sort: 'featured' });
    setSearchParams({});
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl mb-2">Shop All</h1>
            <p className="text-[#9A9590]">{filteredProducts.length} products</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={filters.sort}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="px-4 py-2 border border-[#E5E3E0] bg-white text-sm focus:outline-none focus:border-[#C9A96E]"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="bestsellers">Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-[#E5E3E0] text-sm"
            >
              <SlidersHorizontal size={16} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white p-6 border border-[#E5E3E0]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#9A9590] hover:text-[#C9A96E] transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-sm mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === category}
                        onChange={() => handleFilterChange('category', filters.category === category ? '' : category)}
                        className="text-[#C9A96E] focus:ring-[#C9A96E]"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-sm mb-3">Material</h4>
                <div className="space-y-2">
                  {materials.map(material => (
                    <label key={material} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={filters.material === material}
                        onChange={() => handleFilterChange('material', filters.material === material ? '' : material)}
                        className="text-[#C9A96E] focus:ring-[#C9A96E]"
                      />
                      <span className="text-sm">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-sm mb-3">Price</h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={filters.priceRange === range.value}
                        onChange={() => handleFilterChange('priceRange', filters.priceRange === range.value ? '' : range.value)}
                        className="text-[#C9A96E] focus:ring-[#C9A96E]"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#9A9590] mb-4">No products found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-[#C9A96E] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
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
