import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import ProductCard from '@/components/shop/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CATEGORIES = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const PRICE_RANGES = [
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 - $60' },
  { value: '60-100', label: '$60 - $100' },
  { value: '100-999', label: 'Over $100' },
];

const MATERIALS = [
  { value: '18k-gold-plated', label: '18K Gold Plated' },
  { value: 'sterling-silver', label: 'Sterling Silver' },
  { value: 'mixed', label: 'Mixed Materials' },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  useEffect(() => {
    let mounted = true;
    async function fetchProducts() {
      setLoading(true);
      try {
        let query = client.from('Products').select('*');
        if (activeCategory) query = query.eq('category', activeCategory);
        if (activeMaterial) query = query.eq('material', activeMaterial);
        const { data: response, error } = await query;
        if (error) throw error;
        const list = response?.data?.list ?? [];
        if (mounted) {
          setProducts(list.map(item => item.data || item));
          setLoading(false);
        }
      } catch (err) {
        console.error('Shop fetch error:', err);
        if (mounted) setLoading(false);
      }
    }
    fetchProducts();
    return () => { mounted = false; };
  }, [activeCategory, activeMaterial]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activePrice) {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }
    if (activeSort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (activeSort === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (activeSort === 'rating') result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return result;
  }, [products, activePrice, activeSort]);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const activeFiltersCount = [
    activeCategory, activePrice, activeMaterial,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24 pb-16">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 md:py-12 border-b border-border-light">
          <h1 className="font-serif text-3xl md:text-4xl text-text-primary mb-2">
            {activeCategory ? CATEGORIES.find(c => c.value === activeCategory)?.label || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="text-sm text-text-secondary">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8 mt-8">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-xs uppercase tracking-widest text-text-secondary">Filters</h3>
                {activeFiltersCount > 0 && (
                  <button onClick={clearFilters} className="text-xs text-accent-gold hover:underline">
                    Clear all
                  </button>
                )}
              </div>

              {/* Category */}
              <FilterGroup title="Category">
                {CATEGORIES.map(cat => (
                  <FilterCheckbox
                    key={cat.value}
                    label={cat.label}
                    checked={activeCategory === cat.value}
                    onChange={() => updateParam('category', activeCategory === cat.value ? '' : cat.value)}
                  />
                ))}
              </FilterGroup>

              {/* Price */}
              <FilterGroup title="Price">
                {PRICE_RANGES.map(range => (
                  <FilterCheckbox
                    key={range.value}
                    label={range.label}
                    checked={activePrice === range.value}
                    onChange={() => updateParam('price', activePrice === range.value ? '' : range.value)}
                  />
                ))}
              </FilterGroup>

              {/* Material */}
              <FilterGroup title="Material">
                {MATERIALS.map(mat => (
                  <FilterCheckbox
                    key={mat.value}
                    label={mat.label}
                    checked={activeMaterial === mat.value}
                    onChange={() => updateParam('material', activeMaterial === mat.value ? '' : mat.value)}
                  />
                ))}
              </FilterGroup>
            </div>
          </aside>

          {/* Mobile filter toggle + Sort */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-text-primary border border-border-light px-4 py-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-text-secondary hidden sm:inline">Sort:</span>
                <select
                  value={activeSort}
                  onChange={e => updateParam('sort', e.target.value)}
                  className="font-sans text-xs uppercase tracking-widest border border-border-light bg-transparent px-3 py-2 pr-8 text-text-primary focus:outline-none focus:border-accent-gold cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-border-light mb-4" />
                    <div className="h-4 bg-border-light w-3/4 mb-2" />
                    <div className="h-3 bg-border-light w-1/2" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-text-primary mb-2">No products found</p>
                <p className="text-sm text-text-secondary mb-4">Try adjusting your filters</p>
                <button onClick={clearFilters} className="text-accent-gold text-sm hover:underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-deep/40 z-50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-cream z-50 shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-light">
              <h3 className="font-sans text-xs uppercase tracking-widest">Filters</h3>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <FilterGroup title="Category">
                {CATEGORIES.map(cat => (
                  <FilterCheckbox
                    key={cat.value}
                    label={cat.label}
                    checked={activeCategory === cat.value}
                    onChange={() => updateParam('category', activeCategory === cat.value ? '' : cat.value)}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Price">
                {PRICE_RANGES.map(range => (
                  <FilterCheckbox
                    key={range.value}
                    label={range.label}
                    checked={activePrice === range.value}
                    onChange={() => updateParam('price', activePrice === range.value ? '' : range.value)}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Material">
                {MATERIALS.map(mat => (
                  <FilterCheckbox
                    key={mat.value}
                    label={mat.label}
                    checked={activeMaterial === mat.value}
                    onChange={() => updateParam('material', activeMaterial === mat.value ? '' : mat.value)}
                  />
                ))}
              </FilterGroup>
            </div>
            <div className="border-t border-border-light px-5 py-4 space-y-3">
              {activeFiltersCount > 0 && (
                <button onClick={clearFilters} className="w-full text-center text-sm text-accent-gold py-2">
                  Clear all filters
                </button>
              )}
              <button
                onClick={() => setSidebarOpen(false)}
                className="w-full bg-accent-gold text-deep font-sans text-xs uppercase tracking-widest py-3 hover:bg-accent-gold-hover transition-colors"
              >
                Show {filteredProducts.length} results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="mb-8">
      <h4 className="font-sans text-xs uppercase tracking-widest text-text-primary mb-3">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function FilterCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
          checked ? 'border-accent-gold bg-accent-gold' : 'border-border-light group-hover:border-text-secondary'
        }`}
      >
        {checked && (
          <svg className="w-3 h-3 text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{label}</span>
    </label>
  );
}
