import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    priceRanges: [],
    materials: [],
  });

  const priceRanges = [
    { id: 'under40', label: 'Under $40', min: 0, max: 40 },
    { id: '40to60', label: '$40 - $60', min: 40, max: 60 },
    { id: '60to100', label: '$60 - $100', min: 60, max: 100 },
    { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
  ];

  const materials = ['gold', 'silver'];
  const categoryOptions = ['earrings', 'necklaces', 'huggies', 'sets'];

  const toggleFilter = (type, value) => {
    setFilters(prev => {
      const current = prev[type];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const clearFilters = () => {
    setFilters({ categories: [], priceRanges: [], materials: [] });
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    if (filters.priceRanges.length > 0) {
      result = result.filter(p => {
        return filters.priceRanges.some(rangeId => {
          const range = priceRanges.find(r => r.id === rangeId);
          return range && p.price >= range.min && p.price < range.max;
        });
      });
    }

    if (filters.materials.length > 0) {
      result = result.filter(p => filters.materials.includes(p.material));
    }

    if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') result.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [filters, sort]);

  const FilterSection = ({ title, children }) => (
    <div className="mb-8">
      <h4 className="text-xs tracking-widest uppercase font-medium text-velmora-espresso mb-4">{title}</h4>
      {children}
    </div>
  );

  const FilterCheckbox = ({ label, checked, onChange }) => (
    <label className="flex items-center gap-3 cursor-pointer group mb-3">
      <div className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${checked ? 'bg-velmora-espresso border-velmora-espresso' : 'border-velmora-sand group-hover:border-velmora-taupe'}`}>
        {checked && <div className="w-2 h-2 bg-velmora-ivory rounded-[1px]" />}
      </div>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
      <span className="text-sm text-velmora-taupe group-hover:text-velmora-espresso transition-colors">{label}</span>
    </label>
  );

  const activeFilterCount = filters.categories.length + filters.priceRanges.length + filters.materials.length;
  const containerRef = useRef(null);
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts.length]);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-espresso mb-2">Shop All</h1>
          <p className="text-sm text-velmora-taupe">{filteredProducts.length} pieces</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-velmora-sand/40">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-velmora-espresso"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          <div className="hidden md:flex items-center gap-4">
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-velmora-taupe hover:text-velmora-espresso transition-colors underline"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-widest uppercase font-medium text-velmora-espresso pr-8 pl-3 py-2 border border-velmora-sand rounded-sm focus:outline-none focus:border-velmora-espresso cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-taupe" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSection title="Category">
              {categoryOptions.map(cat => (
                <FilterCheckbox
                  key={cat}
                  label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                  checked={filters.categories.includes(cat)}
                  onChange={() => toggleFilter('categories', cat)}
                />
              ))}
            </FilterSection>

            <FilterSection title="Price">
              {priceRanges.map(range => (
                <FilterCheckbox
                  key={range.id}
                  label={range.label}
                  checked={filters.priceRanges.includes(range.id)}
                  onChange={() => toggleFilter('priceRanges', range.id)}
                />
              ))}
            </FilterSection>

            <FilterSection title="Material">
              {materials.map(mat => (
                <FilterCheckbox
                  key={mat}
                  label={mat.charAt(0).toUpperCase() + mat.slice(1)}
                  checked={filters.materials.includes(mat)}
                  onChange={() => toggleFilter('materials', mat)}
                />
              ))}
            </FilterSection>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-espresso mb-2">No products match your filters</p>
                <button onClick={clearFilters} className="text-sm text-velmora-gold hover:underline">Clear all filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-velmora-charcoal/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-velmora-ivory p-6 overflow-y-auto animate-[slideIn_0.3s_ease]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-velmora-espresso">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-velmora-espresso" />
              </button>
            </div>

            <FilterSection title="Category">
              {categoryOptions.map(cat => (
                <FilterCheckbox
                  key={cat}
                  label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                  checked={filters.categories.includes(cat)}
                  onChange={() => toggleFilter('categories', cat)}
                />
              ))}
            </FilterSection>

            <FilterSection title="Price">
              {priceRanges.map(range => (
                <FilterCheckbox
                  key={range.id}
                  label={range.label}
                  checked={filters.priceRanges.includes(range.id)}
                  onChange={() => toggleFilter('priceRanges', range.id)}
                />
              ))}
            </FilterSection>

            <FilterSection title="Material">
              {materials.map(mat => (
                <FilterCheckbox
                  key={mat}
                  label={mat.charAt(0).toUpperCase() + mat.slice(1)}
                  checked={filters.materials.includes(mat)}
                  onChange={() => toggleFilter('materials', mat)}
                />
              ))}
            </FilterSection>

            <button
              onClick={() => { clearFilters(); setMobileFiltersOpen(false); }}
              className="w-full py-3 border border-velmora-sand text-xs tracking-widest uppercase font-medium text-velmora-espresso rounded-sm mt-4"
            >
              Clear All
            </button>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full py-3 bg-velmora-espresso text-velmora-ivory text-xs tracking-widest uppercase font-medium rounded-sm mt-3"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
