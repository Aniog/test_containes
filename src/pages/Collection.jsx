import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/products/ProductCard';

const categories = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-120', label: '$75 - $120' },
];

const materials = [
  { value: '', label: 'All Materials' },
  { value: '18K Gold Plated', label: '18K Gold Plated' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categoryParam = searchParams.get('category') || '';
  const [category, setCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState('');
  const [material, setMaterial] = useState('');
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    setCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    if (mobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileFilterOpen]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (category) {
      result = result.filter(p => p.category === category);
    }

    // Price filter
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    // Material filter
    if (material) {
      result = result.filter(p => p.material === material);
    }

    // Sort
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
  }, [category, priceRange, material, sort]);

  const activeFiltersCount = [category, priceRange, material].filter(Boolean).length;

  const clearFilters = () => {
    setCategory('');
    setPriceRange('');
    setMaterial('');
    setSearchParams({});
  };

  const handleCategoryChange = (val) => {
    setCategory(val);
    if (val) {
      setSearchParams({ category: val });
    } else {
      setSearchParams({});
    }
  };

  const FilterPanel = ({ mobile = false }) => (
    <div className={`space-y-8 ${mobile ? 'p-6' : ''}`}>
      {/* Category */}
      <div>
        <h3 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-800 mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-300 ${
                category === cat.value
                  ? 'text-gold font-medium'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-800 mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-300 ${
                priceRange === range.value
                  ? 'text-gold font-medium'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-warm-800 mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map(mat => (
            <button
              key={mat.value}
              onClick={() => setMaterial(mat.value)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-300 ${
                material === mat.value
                  ? 'text-gold font-medium'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs text-warm-500 hover:text-warm-900 underline underline-offset-4 transition-colors duration-300"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container-wide section-padding !py-0">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-warm-900 mb-4">
            {category
              ? categories.find(c => c.value === category)?.label || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-4" />
          <p className="text-warm-500 text-sm max-w-md mx-auto">
            {category
              ? `Explore our curated selection of ${category}.`
              : 'Discover demi-fine 18K gold plated jewelry, designed for the modern woman.'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-warm-700 hover:text-warm-900 transition-colors"
            >
              <SlidersHorizontal size={16} strokeWidth={1.5} />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-gold text-white text-[10px] font-sans font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <p className="text-sm text-warm-500">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-warm-300 text-sm text-warm-700 pl-4 pr-10 py-2 focus:outline-none focus:border-warm-500 transition-colors cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-warm-600 mb-3">No pieces found</p>
                <p className="text-sm text-warm-400 mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-warm-900/50 backdrop-blur-sm" onClick={() => setMobileFilterOpen(false)} />
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-ivory-50 shadow-2xl transition-transform duration-300 ${
            mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.15em] uppercase text-warm-900">
              Filters
            </h2>
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="p-2 text-warm-600 hover:text-warm-900 transition-colors"
              aria-label="Close filters"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
          <div className="overflow-y-auto h-[calc(100%-64px)]">
            <FilterPanel />
          </div>
        </div>
      </div>
    </main>
  );
}
