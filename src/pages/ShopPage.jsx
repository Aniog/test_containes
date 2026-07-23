import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import products from '../data/products';
import { SlidersHorizontal, X } from 'lucide-react';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: searchParams.get('material') || '',
    minPrice: '',
    maxPrice: '',
    sort: searchParams.get('sort') || 'featured',
  });

  const categories = [...new Set(products.map(p => p.category))];
  const materials = [...new Set(products.map(p => p.material))];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }
    if (filters.material) {
      result = result.filter(p => p.material === filters.material);
    }
    if (filters.minPrice) {
      result = result.filter(p => p.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter(p => p.price <= parseInt(filters.maxPrice));
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

  const updateFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    const params = new URLSearchParams();
    if (newFilters.category) params.set('category', newFilters.category);
    if (newFilters.sort !== 'featured') params.set('sort', newFilters.sort);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      material: '',
      minPrice: '',
      maxPrice: '',
      sort: 'featured',
    });
    setSearchParams({});
  };

  return (
    <div className="container-premium py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
        <div className="hairline w-24" />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden flex items-center justify-between w-full p-4 border border-[#E5E5E5]"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal size={20} />
            Filters
          </span>
          {isFilterOpen ? <X size={20} /> : <span>▼</span>}
        </button>

        {/* Sidebar Filters */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="space-y-8">
            {/* Sort */}
            <div>
              <label className="block font-medium mb-3">Sort By</label>
              <select
                value={filters.sort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="w-full p-3 border border-[#E5E5E5] bg-white font-sans text-sm"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="bestsellers">Best Sellers</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block font-medium mb-3">Category</label>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={filters.category === cat}
                      onChange={() => updateFilter('category', filters.category === cat ? '' : cat)}
                      className="accent-[#C9A96E]"
                    />
                    <span className="text-sm">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <label className="block font-medium mb-3">Material</label>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <label key={mat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={filters.material === mat}
                      onChange={() => updateFilter('material', filters.material === mat ? '' : mat)}
                      className="accent-[#C9A96E]"
                    />
                    <span className="text-sm">{mat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block font-medium mb-3">Price Range</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) => updateFilter('minPrice', e.target.value)}
                  className="w-full p-3 border border-[#E5E5E5] text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) => updateFilter('maxPrice', e.target.value)}
                  className="w-full p-3 border border-[#E5E5E5] text-sm"
                />
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="text-sm text-[#6B6B6B] hover:text-[#C9A96E] underline"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <p className="text-sm text-[#6B6B6B] mb-6">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-[#6B6B6B]">No products found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-[#C9A96E] hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
