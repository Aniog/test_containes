import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [activeFilters, setActiveFilters] = useState({
    category: searchParams.get('category') || '',
    price: '',
    material: '',
  });

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveFilters(prev => ({ ...prev, category: cat }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeFilters.category) {
      result = result.filter(p => p.category === activeFilters.category);
    }
    if (activeFilters.price) {
      const [min, max] = activeFilters.price.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }
    if (activeFilters.material) {
      result = result.filter(p => p.material === activeFilters.material);
    }
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeFilters, sortBy]);

  const updateFilter = (key, value) => {
    setActiveFilters(prev => {
      const next = { ...prev, [key]: prev[key] === value ? '' : value };
      if (key === 'category' && next.category !== searchParams.get('category')) {
        setSearchParams(next.category ? { category: next.category } : {});
      }
      return next;
    });
  };

  const clearFilters = () => {
    setActiveFilters({ category: '', price: '', material: '' });
    setSearchParams({});
  };

  const hasActiveFilters = Object.values(activeFilters).some(Boolean);

  const categories = [
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
    { value: 'sets', label: 'Gift Sets' },
  ];

  const priceRanges = [
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-100', label: '$60 - $100' },
    { value: '100-999', label: 'Over $100' },
  ];

  return (
    <div className="pt-20 lg:pt-24 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal mb-3">
            {activeFilters.category
              ? activeFilters.category.charAt(0).toUpperCase() + activeFilters.category.slice(1)
              : 'All Jewelry'}
          </h1>
          <p className="font-sans text-sm text-velmora-warmGray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-border">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 font-sans text-xs tracking-[0.12em] uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
          >
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-velmora-gold rounded-full" />
            )}
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs text-velmora-warmGray pr-6 py-1 focus:outline-none cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-warmGray pointer-events-none" />
          </div>
        </div>

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {Object.entries(activeFilters).map(([key, value]) =>
              value ? (
                <button
                  key={key}
                  onClick={() => updateFilter(key, value)}
                  className="flex items-center gap-1.5 bg-velmora-creamDark border border-velmora-border px-3 py-1.5 font-sans text-[11px] text-velmora-warmGray hover:text-velmora-charcoal transition-colors"
                >
                  {value}
                  <X size={12} />
                </button>
              ) : null
            )}
            <button
              onClick={clearFilters}
              className="font-sans text-[11px] text-velmora-gold underline hover:text-velmora-goldDark transition-colors"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-12">
          {/* Filter Sidebar */}
          <aside
            className={`${
              filtersOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-56 flex-shrink-0 mb-8 lg:mb-0`}
          >
            <div className="space-y-8">
              <FilterGroup
                title="Category"
                options={categories}
                active={activeFilters.category}
                onSelect={(v) => updateFilter('category', v)}
              />
              <FilterGroup
                title="Price"
                options={priceRanges}
                active={activeFilters.price}
                onSelect={(v) => updateFilter('price', v)}
              />
              <FilterGroup
                title="Material"
                options={[{ value: 'gold-plated', label: 'Gold Plated' }]}
                active={activeFilters.material}
                onSelect={(v) => updateFilter('material', v)}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-velmora-warmGray mb-4">
                  No products match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-sm text-velmora-gold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
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
};

const FilterGroup = ({ title, options, active, onSelect }) => (
  <div>
    <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-velmora-charcoal mb-4">
      {title}
    </h4>
    <div className="space-y-2.5">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onSelect(opt.value)}
          className={`block font-sans text-xs transition-colors ${
            active === opt.value
              ? 'text-velmora-gold font-medium'
              : 'text-velmora-warmGray hover:text-velmora-charcoal'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  </div>
);

export default Shop;
