import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { formatPrice } from '../lib/utils';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get filter values from URL
  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const materialFilter = searchParams.get('material') || 'all';
  const searchQuery = searchParams.get('search') || '';

  // Update URL params
  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Material filter (based on product material string)
    if (materialFilter !== 'all') {
      const mat = materialFilter === 'gold' ? 'Gold' : 'Silver';
      result = result.filter(p => p.variants.includes(mat));
    }

    // Price filter
    if (priceFilter !== 'all') {
      if (priceFilter === 'under50') {
        result = result.filter(p => p.price < 50);
      } else if (priceFilter === '50to80') {
        result = result.filter(p => p.price >= 50 && p.price <= 80);
      } else if (priceFilter === 'over80') {
        result = result.filter(p => p.price > 80);
      }
    }

    // Search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

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
        // featured: keep original order (bestsellers first-ish)
        break;
    }

    return result;
  }, [categoryFilter, priceFilter, materialFilter, searchQuery, sortBy]);

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const hasActiveFilters = categoryFilter !== 'all' || priceFilter !== 'all' || materialFilter !== 'all' || searchQuery;

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif text-4xl mb-2">Shop All</h1>
          <p className="text-[var(--velmora-text-muted)]">Demi-fine gold jewelry, crafted with intention.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <span className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)]">Filters</span>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs text-[var(--velmora-gold)] hover:underline">
                    Clear All
                  </button>
                )}
                <button 
                  onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                  className="lg:hidden text-xs underline"
                >
                  {isMobileFiltersOpen ? 'Hide' : 'Show'} Filters
                </button>
              </div>

              <div className={`space-y-8 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
                {/* Category */}
                <div>
                  <div className="filter-label">Category</div>
                  <div className="space-y-1.5 text-sm">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => updateFilter('category', cat.value)}
                        className={`block w-full text-left py-1 transition-colors ${categoryFilter === cat.value ? 'text-[var(--velmora-gold-dark)] font-medium' : 'hover:text-[var(--velmora-gold-dark)]'}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <div className="filter-label">Price</div>
                  <div className="space-y-1.5 text-sm">
                    {[
                      { label: 'All Prices', value: 'all' },
                      { label: 'Under $50', value: 'under50' },
                      { label: '$50 – $80', value: '50to80' },
                      { label: 'Over $80', value: 'over80' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => updateFilter('price', opt.value)}
                        className={`block w-full text-left py-1 transition-colors ${priceFilter === opt.value ? 'text-[var(--velmora-gold-dark)] font-medium' : 'hover:text-[var(--velmora-gold-dark)]'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div>
                  <div className="filter-label">Material</div>
                  <div className="space-y-1.5 text-sm">
                    {[
                      { label: 'All Materials', value: 'all' },
                      { label: '18K Gold Plated', value: 'gold' },
                      { label: 'Silver Plated', value: 'silver' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => updateFilter('material', opt.value)}
                        className={`block w-full text-left py-1 transition-colors ${materialFilter === opt.value ? 'text-[var(--velmora-gold-dark)] font-medium' : 'hover:text-[var(--velmora-gold-dark)]'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--velmora-border)]">
              <span className="text-sm text-[var(--velmora-text-muted)]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>
              
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-transparent border border-[var(--velmora-border)] px-3 py-1.5 focus:outline-none focus:border-[var(--velmora-gold)]"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[var(--velmora-text-muted)] mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline">Clear Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
