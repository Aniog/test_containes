import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, materials } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const selectedCategories = searchParams.getAll('category');
  const selectedMaterials = searchParams.getAll('material');
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '200');
  const sortOption = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.get('search') || '';

  const updateParam = (key, value, isMulti = false) => {
    const newParams = new URLSearchParams(searchParams);

    if (isMulti) {
      const current = newParams.getAll(key);
      if (current.includes(value)) {
        newParams.delete(key);
        current.filter(v => v !== value).forEach(v => newParams.append(key, v));
      } else {
        newParams.append(key, value);
      }
    } else {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
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
  }, [selectedCategories, selectedMaterials, minPrice, maxPrice, sortOption, searchQuery]);

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || 
    minPrice > 0 || maxPrice < 200 || searchQuery;

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Discover</span>
            <h1 className="text-3xl md:text-4xl mt-1">The Collection</h1>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs tracking-[0.08em] uppercase text-velmora-text-muted hover:text-velmora-gold"
              >
                Clear Filters
              </button>
            )}
            <select
              value={sortOption}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="sort-select"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="lg:hidden w-full flex items-center justify-between border border-velmora-border p-3 mb-4 text-sm tracking-[0.08em] uppercase"
            >
              Filters
              <ChevronDown size={16} className={`transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
              {/* Category Filter */}
              <div>
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => updateParam('category', cat, true)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Material Filter */}
              <div>
                <div className="filter-label">Material</div>
                {materials.map((mat) => (
                  <label key={mat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => updateParam('material', mat, true)}
                    />
                    <span>{mat} Tone</span>
                  </label>
                ))}
              </div>

              {/* Price Filter */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => updateParam('minPrice', e.target.value)}
                      className="input py-2 text-sm w-20"
                      placeholder="Min"
                    />
                    <span className="text-velmora-text-muted">—</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => updateParam('maxPrice', e.target.value)}
                      className="input py-2 text-sm w-20"
                      placeholder="Max"
                    />
                  </div>
                  <div className="text-xs text-velmora-text-muted">
                    ${minPrice} — ${maxPrice}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p className="text-velmora-text-muted mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline btn-sm">
                  Clear Filters
                </button>
              </div>
            )}

            {filteredProducts.length > 0 && (
              <p className="mt-12 text-center text-xs tracking-[0.1em] uppercase text-velmora-text-muted">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
