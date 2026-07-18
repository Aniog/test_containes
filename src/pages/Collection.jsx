import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const categoryFilters = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const materialFilters = [
  { value: '18k-gold-plated', label: '18K Gold Plated' },
  { value: 'sterling-silver', label: 'Sterling Silver' },
];

const priceRanges = [
  { min: 0, max: 50, label: 'Under $50' },
  { min: 50, max: 80, label: '$50 – $80' },
  { min: 80, max: 999, label: 'Over $80' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const initialCategory = searchParams.get('category') || '';
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategories, selectedMaterials, selectedPrice, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max
      );
    }

    switch (sortBy) {
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
  }, [selectedCategories, selectedMaterials, selectedPrice, sortBy]);

  const toggleCategory = (val) => {
    setSelectedCategories((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const toggleMaterial = (val) => {
    setSelectedMaterials((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const activeFiltersCount =
    selectedCategories.length + selectedMaterials.length + (selectedPrice ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrice(null);
  };

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-parchment border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-espresso font-light">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-stone max-w-md mx-auto">
            Explore our curated selection of demi-fine jewelry. Each piece is designed to be
            worn, loved, and treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase font-medium text-espresso"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <p className="hidden md:block text-sm text-stone">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-xs tracking-wider uppercase font-medium text-espresso hover:text-gold transition-colors"
            >
              Sort: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-48 bg-cream border border-border shadow-lg rounded-sm z-50 py-1">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-parchment transition-colors ${
                        sortBy === opt.value ? 'text-gold font-medium' : 'text-espresso'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-widest uppercase font-medium text-espresso">
                Filters
              </h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-[11px] text-stone hover:text-gold transition-colors underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Category */}
            <FilterGroup title="Category">
              {categoryFilters.map((cat) => (
                <label
                  key={cat.value}
                  className="flex items-center gap-2.5 py-1.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.value)}
                    onChange={() => toggleCategory(cat.value)}
                    className="w-4 h-4 accent-espresso border-border rounded-sm"
                  />
                  <span className="text-sm text-stone group-hover:text-espresso transition-colors">
                    {cat.label}
                  </span>
                </label>
              ))}
            </FilterGroup>

            {/* Material */}
            <FilterGroup title="Material">
              {materialFilters.map((mat) => (
                <label
                  key={mat.value}
                  className="flex items-center gap-2.5 py-1.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(mat.value)}
                    onChange={() => toggleMaterial(mat.value)}
                    className="w-4 h-4 accent-espresso border-border rounded-sm"
                  />
                  <span className="text-sm text-stone group-hover:text-espresso transition-colors">
                    {mat.label}
                  </span>
                </label>
              ))}
            </FilterGroup>

            {/* Price */}
            <FilterGroup title="Price">
              {priceRanges.map((range) => (
                <label
                  key={range.label}
                  className="flex items-center gap-2.5 py-1.5 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={
                      selectedPrice?.min === range.min &&
                      selectedPrice?.max === range.max
                    }
                    onChange={() => setSelectedPrice(range)}
                    className="w-4 h-4 accent-espresso"
                  />
                  <span className="text-sm text-stone group-hover:text-espresso transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
              {selectedPrice && (
                <button
                  onClick={() => setSelectedPrice(null)}
                  className="text-[11px] text-stone hover:text-gold transition-colors mt-1"
                >
                  Clear price filter
                </button>
              )}
            </FilterGroup>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso">No products found</p>
                <p className="mt-2 text-sm text-stone">
                  Try adjusting your filters to see more results.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-6 py-2 bg-espresso text-cream text-xs tracking-widest uppercase font-medium hover:bg-espresso-light transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity md:hidden ${
          mobileFiltersOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 bg-cream shadow-xl transition-transform duration-300 flex flex-col ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h3 className="text-xs tracking-widest uppercase font-medium text-espresso">
              Filters
            </h3>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-1 text-espresso"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5">
            <MobileFilterGroup title="Category">
              {categoryFilters.map((cat) => (
                <label key={cat.value} className="flex items-center gap-3 py-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.value)}
                    onChange={() => toggleCategory(cat.value)}
                    className="w-4 h-4 accent-espresso"
                  />
                  <span className="text-sm text-espresso">{cat.label}</span>
                </label>
              ))}
            </MobileFilterGroup>

            <MobileFilterGroup title="Material">
              {materialFilters.map((mat) => (
                <label key={mat.value} className="flex items-center gap-3 py-2">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(mat.value)}
                    onChange={() => toggleMaterial(mat.value)}
                    className="w-4 h-4 accent-espresso"
                  />
                  <span className="text-sm text-espresso">{mat.label}</span>
                </label>
              ))}
            </MobileFilterGroup>

            <MobileFilterGroup title="Price">
              {priceRanges.map((range) => (
                <label key={range.label} className="flex items-center gap-3 py-2">
                  <input
                    type="radio"
                    name="mobile-price"
                    checked={
                      selectedPrice?.min === range.min &&
                      selectedPrice?.max === range.max
                    }
                    onChange={() => setSelectedPrice(range)}
                    className="w-4 h-4 accent-espresso"
                  />
                  <span className="text-sm text-espresso">{range.label}</span>
                </label>
              ))}
            </MobileFilterGroup>
          </div>

          <div className="p-5 border-t border-border flex gap-3">
            <button
              onClick={clearFilters}
              className="flex-1 py-3 border border-espresso text-espresso text-xs tracking-widest uppercase font-medium"
            >
              Clear
            </button>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="flex-1 py-3 bg-espresso text-cream text-xs tracking-widest uppercase font-medium"
            >
              Show {filteredProducts.length}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }) {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-2 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-medium text-espresso">
          {title}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-stone transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}
      >
        <div className="pt-1">{children}</div>
      </div>
    </div>
  );
}

function MobileFilterGroup({ title, children }) {
  return (
    <div className="mb-6">
      <p className="text-xs tracking-widest uppercase font-medium text-espresso mb-2">
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
}
