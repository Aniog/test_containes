import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { products, categories, materials } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [selectedVariants, setSelectedVariants] = useState({});
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Get filter values from URL
  const selectedCategories = searchParams.getAll('category');
  const selectedMaterials = searchParams.getAll('material');
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '200');
  const sortBy = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.get('search') || '';

  // Filter and sort products
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
  }, [selectedCategories, selectedMaterials, minPrice, maxPrice, sortBy, searchQuery]);

  const updateFilter = (key, value, isMulti = false) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (isMulti) {
      const current = newParams.getAll(key);
      if (current.includes(value)) {
        // Remove
        const filtered = current.filter(v => v !== value);
        newParams.delete(key);
        filtered.forEach(v => newParams.append(key, v));
      } else {
        newParams.append(key, value);
      }
    } else {
      if (newParams.get(key) === value) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    }
    
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    const variant = selectedVariants[product.id] || product.variants[0];
    addToCart(product, variant, 1);
  };

  const handleVariantSelect = (productId, variant) => {
    setSelectedVariants(prev => ({ ...prev, [productId]: variant }));
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || 
    minPrice > 0 || maxPrice < 200 || sortBy !== 'featured' || searchQuery;

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <div className="uppercase tracking-[0.15em] text-xs text-velmora-text-muted mb-2">Browse</div>
            <h1 className="font-serif text-4xl">All Jewelry</h1>
          </div>
          
          {/* Sort */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-velmora-text-muted">Sort</span>
            <select 
              value={sortBy} 
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden w-full flex items-center justify-between border border-velmora-border px-4 py-3 mb-4 text-sm uppercase tracking-widest"
            >
              Filters {hasActiveFilters && '(Active)'}
              <ChevronDown className={`transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} size={16} />
            </button>

            <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
              {/* Search */}
              <div>
                <div className="filter-label">Search</div>
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    const newParams = new URLSearchParams(searchParams);
                    if (e.target.value) {
                      newParams.set('search', e.target.value);
                    } else {
                      newParams.delete('search');
                    }
                    setSearchParams(newParams);
                  }}
                  placeholder="Search products..."
                  className="w-full border border-velmora-border px-3 py-2 text-sm focus:outline-none focus:border-velmora-gold"
                />
              </div>

              {/* Category */}
              <div>
                <div className="filter-label mb-3">Category</div>
                {categories.map((cat) => (
                  <label key={cat} className="filter-option flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => updateFilter('category', cat, true)}
                      className="accent-velmora-gold"
                    />
                    {cat}
                  </label>
                ))}
              </div>

              {/* Material */}
              <div>
                <div className="filter-label mb-3">Material</div>
                {materials.map((mat) => (
                  <label key={mat} className="filter-option flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => updateFilter('material', mat, true)}
                      className="accent-velmora-gold"
                    />
                    {mat}
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label mb-3">Price Range</div>
                <div className="space-y-2">
                  <div className="flex gap-2 items-center text-sm">
                    <input 
                      type="number" 
                      value={minPrice} 
                      onChange={(e) => updateFilter('minPrice', e.target.value)}
                      className="w-20 border border-velmora-border px-2 py-1 text-sm"
                      min="0"
                    />
                    <span className="text-velmora-text-muted">to</span>
                    <input 
                      type="number" 
                      value={maxPrice} 
                      onChange={(e) => updateFilter('maxPrice', e.target.value)}
                      className="w-20 border border-velmora-border px-2 py-1 text-sm"
                      min="0"
                    />
                  </div>
                  <div className="text-xs text-velmora-text-muted">
                    ${minPrice} — ${maxPrice}
                  </div>
                </div>
              </div>

              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-velmora-gold hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-sm text-velmora-text-muted mb-6">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                  {filteredProducts.map((product) => {
                    const variant = selectedVariants[product.id] || product.variants[0];
                    const secondaryImage = product.images[1] || product.images[0];
                    
                    return (
                      <div key={product.id} className="product-card group">
                        <Link to={`/product/${product.slug}`} className="block">
                          <div className="product-card-image">
                            <img src={product.images[0]} alt={product.name} />
                            <img src={secondaryImage} alt={product.name} className="secondary" />
                            
                            <button
                              onClick={(e) => handleAddToCart(product, e)}
                              className="quick-add btn btn-primary text-xs py-2 px-6"
                            >
                              Quick Add
                            </button>
                          </div>
                        </Link>

                        <div className="product-card-info px-1">
                          <Link to={`/product/${product.slug}`}>
                            <div className="product-card-name">{product.name}</div>
                          </Link>
                          <div className="product-card-price">{formatPrice(product.price)}</div>
                          
                          <div className="flex gap-2 mt-3">
                            {product.variants.map((v) => (
                              <button
                                key={v.id}
                                onClick={() => handleVariantSelect(product.id, v)}
                                className={`variant-pill text-[10px] py-1 px-3 ${variant.id === v.id ? 'active' : ''}`}
                              >
                                {v.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl font-serif mb-2">No products found</p>
                <p className="text-velmora-text-muted mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
