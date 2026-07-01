import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

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
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Material filter (all our products are 18K Gold Plated for now)
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

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
        // Remove it
        newParams.delete(key);
        current.filter((v) => v !== value).forEach((v) => newParams.append(key, v));
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

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedMaterials.length > 0 ||
    minPrice > 0 ||
    maxPrice < 200 ||
    sortBy !== 'featured' ||
    searchQuery;

  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <div className="text-xs tracking-[0.15em] text-velmora-muted mb-1">DISCOVER</div>
            <h1 className="font-serif text-4xl tracking-[0.02em]">The Collection</h1>
          </div>
          <div className="flex items-center gap-4">
            {searchQuery && (
              <span className="text-sm text-velmora-muted">Results for "{searchQuery}"</span>
            )}
            <select
              value={sortBy}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="bg-transparent border border-velmora-border px-4 py-2 text-sm focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <span className="text-xs tracking-[0.15em] text-velmora-muted">FILTERS</span>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs underline text-velmora-muted hover:text-velmora-charcoal"
                  >
                    Clear all
                  </button>
                )}
                <button
                  onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                  className="lg:hidden text-sm flex items-center gap-1"
                >
                  {isMobileFiltersOpen ? 'Hide' : 'Show'} Filters
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
                {/* Category */}
                <div>
                  <div className="filter-label">Category</div>
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 py-1.5 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => updateFilter('category', cat, true)}
                        className="accent-velmora-charcoal"
                      />
                      {cat}
                    </label>
                  ))}
                </div>

                {/* Price Range */}
                <div>
                  <div className="filter-label">Price Range</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => updateFilter('minPrice', e.target.value)}
                        className="w-20 border border-velmora-border px-2 py-1 text-sm"
                        min="0"
                      />
                      <span className="text-velmora-muted">to</span>
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => updateFilter('maxPrice', e.target.value)}
                        className="w-20 border border-velmora-border px-2 py-1 text-sm"
                        min="0"
                      />
                    </div>
                    <div className="text-xs text-velmora-muted">$30 — $120 typical range</div>
                  </div>
                </div>

                {/* Material */}
                <div>
                  <div className="filter-label">Material</div>
                  <label className="flex items-center gap-2 py-1.5 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes('18K Gold Plated')}
                      onChange={() => updateFilter('material', '18K Gold Plated', true)}
                      className="accent-velmora-charcoal"
                    />
                    18K Gold Plated
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <div className="text-xs text-velmora-muted mb-4 tracking-[0.05em]">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg mb-2">No pieces match your filters.</p>
                <button onClick={clearFilters} className="text-sm underline">
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;