import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, priceRanges } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get filter values from URL
  const categoryFilter = searchParams.get('category') || '';
  const searchQuery = searchParams.get('search') || '';
  const sortOption = searchParams.get('sort') || 'featured';
  const minPrice = searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')) : 0;
  const maxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')) : Infinity;
  const materialFilter = searchParams.get('material') || '';

  // Local state for price inputs
  const [priceMin, setPriceMin] = useState(minPrice || '');
  const [priceMax, setPriceMax] = useState(maxPrice !== Infinity ? maxPrice : '');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Material filter (simulated - all products are Gold by default)
    if (materialFilter) {
      result = result.filter(p => p.material === materialFilter);
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
        // featured - keep original order
        break;
    }

    return result;
  }, [categoryFilter, searchQuery, sortOption, minPrice, maxPrice, materialFilter]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const applyPriceFilter = () => {
    const newParams = new URLSearchParams(searchParams);
    if (priceMin !== '') newParams.set('minPrice', priceMin);
    else newParams.delete('minPrice');
    if (priceMax !== '') newParams.set('maxPrice', priceMax);
    else newParams.delete('maxPrice');
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setPriceMin('');
    setPriceMax('');
  };

  const hasActiveFilters = categoryFilter || searchQuery || materialFilter || minPrice > 0 || maxPrice !== Infinity;

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-velmora-gold mb-1">DISCOVER</p>
            <h1 className="serif text-4xl tracking-[0.05em]">The Collection</h1>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <select 
              value={sortOption} 
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="sort-select"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 text-sm tracking-widest"
            >
              <Filter className="w-4 h-4" /> FILTER
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className={`w-full md:w-56 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs tracking-[0.15em] text-velmora-text-light">FILTERS</p>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs tracking-widest text-velmora-gold hover:underline">
                    CLEAR ALL
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-8">
                <p className="filter-label">CATEGORY</p>
                <div className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', categoryFilter === cat ? '' : cat)}
                      className={`block w-full text-left py-1 transition-colors ${categoryFilter === cat ? 'text-velmora-gold font-medium' : 'hover:text-velmora-gold'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <p className="filter-label">MATERIAL</p>
                <div className="space-y-2 text-sm">
                  {['Gold', 'Silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', materialFilter === mat ? '' : mat)}
                      className={`block w-full text-left py-1 transition-colors ${materialFilter === mat ? 'text-velmora-gold font-medium' : 'hover:text-velmora-gold'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <p className="filter-label mb-3">PRICE</p>
                <div className="flex gap-2 mb-3">
                  <input 
                    type="number" 
                    placeholder="Min" 
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    onBlur={applyPriceFilter}
                    className="price-input"
                  />
                  <input 
                    type="number" 
                    placeholder="Max" 
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    onBlur={applyPriceFilter}
                    className="price-input"
                  />
                </div>
                <div className="space-y-1.5 text-sm">
                  {priceRanges.map((range, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setPriceMin(range.min);
                        setPriceMax(range.max === Infinity ? '' : range.max);
                        const newParams = new URLSearchParams(searchParams);
                        newParams.set('minPrice', range.min);
                        if (range.max !== Infinity) newParams.set('maxPrice', range.max);
                        else newParams.delete('maxPrice');
                        setSearchParams(newParams);
                      }}
                      className="block w-full text-left py-0.5 hover:text-velmora-gold transition-colors"
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="pt-4 border-t border-velmora-light">
                  <p className="filter-label mb-2">ACTIVE FILTERS</p>
                  <div className="flex flex-wrap gap-2">
                    {categoryFilter && (
                      <span className="inline-flex items-center gap-1 text-xs bg-velmora-light px-3 py-1">
                        {categoryFilter}
                        <button onClick={() => updateFilter('category', '')}><X className="w-3 h-3" /></button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="inline-flex items-center gap-1 text-xs bg-velmora-light px-3 py-1">
                        "{searchQuery}"
                        <button onClick={() => updateFilter('search', '')}><X className="w-3 h-3" /></button>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {searchQuery && (
              <p className="text-sm text-velmora-text-light mb-4">
                Showing results for "{searchQuery}"
              </p>
            )}
            
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-xs tracking-widest text-velmora-text-light mb-6">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'PIECE' : 'PIECES'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg mb-2">No products found</p>
                <p className="text-sm text-velmora-text-light mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn btn-outline">CLEAR FILTERS</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;