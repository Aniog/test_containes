import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import products from '../data/products';
import { SlidersHorizontal, X } from 'lucide-react';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: '',
    priceRange: '',
    sort: 'featured',
  });

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];
  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $80', value: '50-80' },
    { label: '$80 - $120', value: '80-120' },
    { label: 'Over $120', value: '120+' },
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
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(p => {
        if (max) {
          return p.price >= min && p.price <= max;
        } else {
          return p.price >= min;
        }
      });
    }

    // Sort
    switch (filters.sort) {
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
        break;
    }

    return result;
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category') {
      if (value) {
        searchParams.set('category', value);
      } else {
        searchParams.delete('category');
      }
      setSearchParams(searchParams);
    }
  };

  const clearFilters = () => {
    setFilters({ category: '', material: '', priceRange: '', sort: 'featured' });
    setSearchParams({});
  };

  return (
    <div className="container-premium py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Collection</h1>
        <div className="w-16 h-px bg-velmora-gold" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex items-center justify-between w-full p-4 border border-velmora-charcoal/20"
        >
          <span className="flex items-center space-x-2">
            <SlidersHorizontal size={18} />
            <span className="text-sm uppercase tracking-wide">Filters</span>
          </span>
          <span className="text-sm">({filteredProducts.length})</span>
        </button>

        {/* Filter Sidebar */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
          <div className="space-y-8">
            {/* Category */}
            <div>
              <h3 className="font-serif text-sm uppercase tracking-wide mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => updateFilter('category', filters.category === cat ? '' : cat)}
                    className={`block text-sm transition-colors ${
                      filters.category === cat
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-warm-gray hover:text-velmora-charcoal'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="font-serif text-sm uppercase tracking-wide mb-4">Material</h3>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => updateFilter('material', filters.material === mat ? '' : mat)}
                    className={`block text-sm transition-colors ${
                      filters.material === mat
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-warm-gray hover:text-velmora-charcoal'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-serif text-sm uppercase tracking-wide mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => updateFilter('priceRange', filters.priceRange === range.value ? '' : range.value)}
                    className={`block text-sm transition-colors ${
                      filters.priceRange === range.value
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-warm-gray hover:text-velmora-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(filters.category || filters.material || filters.priceRange) && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 text-sm text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
              >
                <X size={14} />
                <span>Clear all filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort & Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-velmora-warm-gray">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <select
              value={filters.sort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="text-sm border border-velmora-charcoal/20 px-4 py-2 focus:outline-none focus:border-velmora-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-velmora-warm-gray mb-4">No products found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="text-velmora-gold hover:text-velmora-gold-dark transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
