import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import {
  VividAuraImage,
  MajesticFloraImage,
  GoldenSphereImage,
  AmberLaceImage,
  RoyalHeirloomImage,
} from '@/components/ProductImages';
import { useImageLoader } from '@/hooks/useImageLoader';

const productImageMap = {
  'vivid-aura-jewels': VividAuraImage,
  'majestic-flora-nectar': MajesticFloraImage,
  'golden-sphere-huggies': GoldenSphereImage,
  'amber-lace-earrings': AmberLaceImage,
  'royal-heirloom-set': RoyalHeirloomImage,
};

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useImageLoader();

  const initialCategory = searchParams.get('category') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activePrice, setActivePrice] = useState('');
  const [activeMaterial, setActiveMaterial] = useState('');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activePrice) {
      const range = priceRanges.find(r => r.label === activePrice);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    if (activeMaterial) {
      result = result.filter(p => p.material === activeMaterial);
    }

    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, sort]);

  const clearFilters = () => {
    setActiveCategory('');
    setActivePrice('');
    setActiveMaterial('');
    setSearchParams({});
  };

  const activeFiltersCount = [activeCategory, activePrice, activeMaterial].filter(Boolean).length;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-espresso">
          Category
        </h4>
        <ul className="space-y-2">
          <li>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('');
                setSearchParams({});
              }}
              className={`text-sm transition-colors ${
                !activeCategory ? 'text-gold' : 'text-taupe hover:text-espresso'
              }`}
            >
              All Jewelry
            </button>
          </li>
          {categories.map(category => (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory(category.id);
                  setSearchParams({ category: category.id });
                }}
                className={`text-sm transition-colors ${
                  activeCategory === category.id
                    ? 'text-gold'
                    : 'text-taupe hover:text-espresso'
                }`}
              >
                {category.name}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('sets');
                setSearchParams({ category: 'sets' });
              }}
              className={`text-sm transition-colors ${
                activeCategory === 'sets' ? 'text-gold' : 'text-taupe hover:text-espresso'
              }`}
            >
              Gift Sets
            </button>
          </li>
        </ul>
      </div>

      {/* Price */}
      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-espresso">
          Price
        </h4>
        <ul className="space-y-2">
          {priceRanges.map(range => (
            <li key={range.label}>
              <button
                type="button"
                onClick={() =>
                  setActivePrice(prev => (prev === range.label ? '' : range.label))
                }
                className={`text-sm transition-colors ${
                  activePrice === range.label
                    ? 'text-gold'
                    : 'text-taupe hover:text-espresso'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-espresso">
          Material
        </h4>
        <ul className="space-y-2">
          {['gold-plated', 'silver-plated'].map(material => (
            <li key={material}>
              <button
                type="button"
                onClick={() =>
                  setActiveMaterial(prev => (prev === material ? '' : material))
                }
                className={`text-sm capitalize transition-colors ${
                  activeMaterial === material
                    ? 'text-gold'
                    : 'text-taupe hover:text-espresso'
                }`}
              >
                {material.replace('-', ' ')}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeFiltersCount > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-taupe transition-colors hover:text-espresso"
        >
          <X size={14} />
          Clear Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-ivory pb-16 pt-24 md:pb-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h1 className="font-serif text-3xl font-medium text-espresso md:text-4xl">
            The Collection
          </h1>
          <p className="mx-auto mt-3 max-w-md font-sans text-sm text-taupe">
            Earrings, necklaces, and huggies designed to become your signature.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop Sidebar */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Toggle + Sort */}
          <div className="mb-6 flex items-center justify-between gap-4 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-border bg-cream px-4 py-2 font-sans text-xs font-semibold uppercase tracking-widest text-espresso"
            >
              <SlidersHorizontal size={14} />
              Filter
              {activeFiltersCount > 0 && (
                <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] text-cream">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none border border-border bg-cream py-2 pl-3 pr-8 font-sans text-xs uppercase tracking-widest text-espresso focus:border-gold focus:outline-none"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-taupe"
              />
            </div>
          </div>

          {/* Mobile Filters Drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
                aria-label="Close filters overlay"
              />
              <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-cream p-6 shadow-soft">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-serif text-xl font-medium text-espresso">Filters</span>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-taupe"
                    aria-label="Close filters"
                  >
                    <X size={22} />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="font-sans text-sm text-taupe">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="relative">
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="appearance-none border border-border bg-cream py-2 pl-3 pr-8 font-sans text-xs uppercase tracking-widest text-espresso focus:border-gold focus:outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-taupe"
                />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-espresso">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 font-sans text-xs uppercase tracking-widest text-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
                {filteredProducts.map(product => {
                  const ImageComponent = productImageMap[product.id];
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      image={ImageComponent ? <ImageComponent /> : null}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
