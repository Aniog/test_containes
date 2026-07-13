import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';

  const [sort, setSort] = useState('featured');
  const [filters, setFilters] = useState({
    category: categoryParam,
    priceRange: 'all',
    material: 'all',
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (filters.priceRange === '50to100') {
      result = result.filter(p => p.price >= 50 && p.price <= 100);
    } else if (filters.priceRange === 'over100') {
      result = result.filter(p => p.price > 100);
    }

    if (filters.material && filters.material !== 'all') {
      result = result.filter(p => p.materials.toLowerCase().includes(filters.material.toLowerCase()));
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters, sort]);

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value === prev[key] ? (key === 'category' ? '' : 'all') : value }));
  };

  const clearFilters = () => {
    setFilters({ category: '', priceRange: 'all', material: 'all' });
  };

  const hasActiveFilters = filters.category || filters.priceRange !== 'all' || (filters.material && filters.material !== 'all');

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-serif text-sm uppercase tracking-widest text-velmora-dark mb-4">Category</h4>
        <div className="flex flex-col gap-2.5">
          {['Earrings', 'Necklaces', 'Huggies', 'Sets'].map(cat => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat)}
              className={`text-left text-sm transition-colors ${filters.category === cat ? 'text-velmora-gold font-medium' : 'text-velmora-taupe hover:text-velmora-dark'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-serif text-sm uppercase tracking-widest text-velmora-dark mb-4">Price</h4>
        <div className="flex flex-col gap-2.5">
          {[
            { label: 'All', value: 'all' },
            { label: 'Under $50', value: 'under50' },
            { label: '$50 – $100', value: '50to100' },
            { label: 'Over $100', value: 'over100' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => updateFilter('priceRange', opt.value)}
              className={`text-left text-sm transition-colors ${filters.priceRange === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-taupe hover:text-velmora-dark'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-serif text-sm uppercase tracking-widest text-velmora-dark mb-4">Material</h4>
        <div className="flex flex-col gap-2.5">
          {[
            { label: 'All', value: 'all' },
            { label: '18K Gold-Plated', value: 'gold-plated' },
            { label: 'Crystal Accent', value: 'crystal' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => updateFilter('material', opt.value)}
              className={`text-left text-sm transition-colors ${filters.material === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-taupe hover:text-velmora-dark'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-[10px] tracking-widest uppercase text-velmora-rose hover:text-velmora-dark transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-[#FAFAF8] min-h-screen pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Page header */}
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-super uppercase mb-3">Curated Collection</p>
          <h1 className="font-serif text-3xl md:text-5xl text-velmora-dark">
            {filters.category || 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-velmora-gold/30 mx-auto mt-5" />
        </div>

        <div className="flex gap-10">
          {/* Desktop filters */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-border">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-velmora-taupe hover:text-velmora-dark transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {hasActiveFilters && (
                  <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold" />
                )}
              </button>

              <p className="text-xs text-velmora-taupe hidden md:block">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest uppercase text-velmora-taupe">Sort</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs bg-transparent border border-velmora-border px-3 py-2 text-velmora-dark focus:outline-none focus:border-velmora-gold cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="w-12 h-12 text-velmora-border mx-auto mb-4" />
                <p className="font-serif text-lg text-velmora-dark">No pieces match your filters</p>
                <button onClick={clearFilters} className="text-xs text-velmora-gold mt-3 underline underline-offset-4">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-velmora-warm to-velmora-sand flex items-center justify-center">
                        <ShoppingBag className="w-10 h-10 text-velmora-gold/30" />
                      </div>
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-velmora-dark text-white text-[9px] tracking-wider uppercase px-2.5 py-1">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-velmora-dark group-hover:text-velmora-gold transition-colors">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`}
                        />
                      ))}
                    </div>
                    <p className="font-serif text-sm text-velmora-dark mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-[#FAFAF8] shadow-2xl animate-slide-right p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-widest uppercase">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-velmora-dark">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
}
