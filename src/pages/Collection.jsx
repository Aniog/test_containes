import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 — $80', min: 50, max: 80 },
  { id: '80plus', label: '$80+', min: 80, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'priceAsc', label: 'Price: Low to High' },
  { id: 'priceDesc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

const materialOptions = [
  { id: 'goldPlated', label: '18K Gold Plated', matcher: (p) => p.material.toLowerCase().includes('18k gold plated') },
  { id: 'stainlessSteel', label: 'Stainless Steel', matcher: (p) => p.material.toLowerCase().includes('stainless steel') },
  { id: 'hypoallergenic', label: 'Hypoallergenic', matcher: (p) => p.material.toLowerCase().includes('hypoallergenic') },
];

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [showSort, setShowSort] = useState(false);
  const containerRef = useRef(null);

  const selectedCategories = useMemo(
    () => searchParams.getAll('category'),
    [searchParams]
  );
  const selectedPrices = useMemo(
    () => searchParams.getAll('price'),
    [searchParams]
  );
  const selectedMaterials = useMemo(
    () => searchParams.getAll('material'),
    [searchParams]
  );

  useEffect(() => {
    const initialCategory = searchParams.get('category');
    if (initialCategory && !categories.some((c) => c.id === initialCategory)) {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [searchParams.toString(), sortBy, selectedMaterials.join(',')]);

  const toggleFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    const values = next.getAll(key);
    if (values.includes(value)) {
      next.delete(key);
      values.filter((v) => v !== value).forEach((v) => next.append(key, v));
    } else {
      next.append(key, value);
    }
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const priceMatch =
        selectedPrices.length === 0 ||
        selectedPrices.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId);
          return range && p.price >= range.min && p.price < range.max;
        });
      const materialMatch =
        selectedMaterials.length === 0 ||
        selectedMaterials.some((id) => {
          const option = materialOptions.find((m) => m.id === id);
          return option && option.matcher(p);
        });
      return categoryMatch && priceMatch && materialMatch;
    });

    switch (sortBy) {
      case 'priceAsc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy]);

  const activeFilterCount = selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const FilterPanel = ({ isMobile }) => (
    <div className="space-y-8">
      <div>
        <h4 className="font-serif text-lg text-stone-900 mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-3 font-sans text-sm text-stone-600 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleFilter('category', category.id)}
                className="h-4 w-4 accent-gold-600"
              />
              {category.label}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-serif text-lg text-stone-900 mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 font-sans text-sm text-stone-600 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedPrices.includes(range.id)}
                onChange={() => toggleFilter('price', range.id)}
                className="h-4 w-4 accent-gold-600"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-serif text-lg text-stone-900 mb-4">Material</h4>
        <div className="space-y-2">
          {materialOptions.map((material) => (
            <label
              key={material.id}
              className="flex items-center gap-3 font-sans text-sm text-stone-600 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(material.id)}
                onChange={() => toggleFilter('material', material.id)}
                className="h-4 w-4 accent-gold-600"
              />
              {material.label}
            </label>
          ))}
        </div>
      </div>
      {isMobile && (
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(false)}
          className="w-full py-4 bg-gold-500 text-white font-sans text-xs uppercase tracking-widest hover:bg-gold-600 transition-colors"
        >
          Show {filteredProducts.length} Results
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-24 md:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-3">The Shop</h1>
          <p className="font-sans text-stone-500 max-w-xl">
            Discover our curated collection of demi-fine gold jewelry — designed to be worn, loved, and treasured.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterPanel isMobile={false} />
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-stone-700"
              >
                <SlidersHorizontal size={16} />
                Filter {activeFilterCount > 0 && `(${activeFilterCount})`}
              </button>

              <div className="hidden lg:block text-sm text-stone-500">
                {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowSort((v) => !v)}
                  className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-stone-700"
                >
                  Sort by: {sortOptions.find((o) => o.id === sortBy)?.label}
                  <ChevronDown size={14} />
                </button>
                {showSort && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lift z-20 border border-stone-100">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setSortBy(option.id);
                          setShowSort(false);
                        }}
                        className={`w-full text-left px-4 py-3 font-sans text-sm hover:bg-champagne transition-colors ${
                          sortBy === option.id ? 'text-gold-600' : 'text-stone-700'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {activeFilterCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {[...selectedCategories, ...selectedPrices, ...selectedMaterials].map((value) => {
                  const label =
                    categories.find((c) => c.id === value)?.label ||
                    priceRanges.find((r) => r.id === value)?.label ||
                    materialOptions.find((m) => m.id === value)?.label ||
                    value;
                  return (
                    <span
                      key={value}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-stone-200 text-xs text-stone-600"
                    >
                      {label}
                      <button
                        type="button"
                        onClick={() => {
                          const key = categories.some((c) => c.id === value)
                            ? 'category'
                            : priceRanges.some((r) => r.id === value)
                            ? 'price'
                            : 'material';
                          toggleFilter(key, value);
                        }}
                        aria-label={`Remove ${label} filter`}
                      >
                        <X size={12} />
                      </button>
                    </span>
                  );
                })}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-stone-500 underline hover:text-stone-900"
                >
                  Clear all
                </button>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white border border-stone-200">
                <p className="font-serif text-xl text-stone-900 mb-2">No products match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 px-6 py-3 bg-gold-500 text-white font-sans text-xs uppercase tracking-widest hover:bg-gold-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-4/5 max-w-sm bg-cream p-6 overflow-y-auto shadow-lift">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl text-stone-900">Filters</h3>
              <button type="button" onClick={() => setMobileFiltersOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <FilterPanel isMobile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
