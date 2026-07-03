import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import products from '../../data/products';
import { SlidersHorizontal, X } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: '',
    priceRange: '',
    sort: searchParams.get('sort') || 'featured',
  });

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];
  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $75', value: '50-75' },
    { label: '$75 - $100', value: '75-100' },
    { label: 'Over $100', value: '100+' },
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
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  const handleFilterChange = (key, value) => {
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
    setFilters({
      category: '',
      material: '',
      priceRange: '',
      sort: 'featured',
    });
    setSearchParams({});
  };

  const hasActiveFilters = filters.category || filters.material || filters.priceRange;

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wider text-velmora-text mb-4">
            Shop All
          </h1>
          <div className="w-16 h-[1px] bg-velmora-gold" />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-sm tracking-wider uppercase text-velmora-text"
          >
            <SlidersHorizontal size={18} />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="ml-2 w-5 h-5 bg-velmora-gold text-white text-xs rounded-full flex items-center justify-center">
                {(filters.category ? 1 : 0) + (filters.material ? 1 : 0) + (filters.priceRange ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
            <div className="bg-velmora-cream p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-text">
                  Filters
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-velmora-gold hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm tracking-wider uppercase text-velmora-text mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === category}
                        onChange={() => handleFilterChange('category', filters.category === category ? '' : category)}
                        className="text-velmora-gold focus:ring-velmora-gold"
                      />
                      <span className="text-sm text-velmora-text-secondary">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="text-sm tracking-wider uppercase text-velmora-text mb-3">
                  Material
                </h4>
                <div className="space-y-2">
                  {materials.map(material => (
                    <label key={material} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={filters.material === material}
                        onChange={() => handleFilterChange('material', filters.material === material ? '' : material)}
                        className="text-velmora-gold focus:ring-velmora-gold"
                      />
                      <span className="text-sm text-velmora-text-secondary">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="text-sm tracking-wider uppercase text-velmora-text mb-3">
                  Price
                </h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={filters.priceRange === range.value}
                        onChange={() => handleFilterChange('priceRange', filters.priceRange === range.value ? '' : range.value)}
                        className="text-velmora-gold focus:ring-velmora-gold"
                      />
                      <span className="text-sm text-velmora-text-secondary">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-velmora-text-secondary">
                {filteredProducts.length} products
              </p>
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="px-4 py-2 border border-velmora-border text-sm focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-velmora-text-secondary">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:underline mt-2"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
