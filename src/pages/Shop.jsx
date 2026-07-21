import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products, categories } from '@/data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-70', label: '$50 - $70' },
  { value: 'over-70', label: 'Over $70' },
];

const materials = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold', label: 'Gold Plated' },
  { value: 'silver', label: 'Silver/Rhodium' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice !== 'all') {
      result = result.filter((p) => {
        if (activePrice === 'under-50') return p.price < 50;
        if (activePrice === '50-70') return p.price >= 50 && p.price <= 70;
        if (activePrice === 'over-70') return p.price > 70;
        return true;
      });
    }

    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    if (activeSort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, activeSort]);

  const activeFiltersCount = [
    activeCategory !== 'all',
    activePrice !== 'all',
    activeMaterial !== 'all',
  ].filter(Boolean).length;

  const FilterSection = ({ title, options, active, paramKey }) => (
    <div className="mb-8">
      <h4 className="text-xs uppercase tracking-widest font-medium text-velmora-espresso mb-4">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => updateParam(paramKey, option.value)}
            className={`block text-sm transition-colors ${
              active === option.value
                ? 'text-velmora-gold font-medium'
                : 'text-velmora-coffee hover:text-velmora-espresso'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-widest-xl text-velmora-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-espresso">
            Shop All Jewelry
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-taupe/30">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-coffee"
          >
            <SlidersHorizontal size={16} />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          <p className="hidden md:block text-sm text-velmora-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={activeSort}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="appearance-none bg-transparent border border-velmora-taupe/50 pl-4 pr-10 py-2 text-xs uppercase tracking-widest text-velmora-espresso focus:outline-none focus:border-velmora-gold"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-coffee pointer-events-none"
            />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSection
              title="Category"
              options={[
                { value: 'all', label: 'All Categories' },
                ...categories.map((c) => ({ value: c.id, label: c.name })),
                { value: 'sets', label: 'Gift Sets' },
              ]}
              active={activeCategory}
              paramKey="category"
            />
            <FilterSection
              title="Price"
              options={priceRanges}
              active={activePrice}
              paramKey="price"
            />
            <FilterSection
              title="Material"
              options={materials}
              active={activeMaterial}
              paramKey="material"
            />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-espresso mb-3">
                  No pieces found
                </p>
                <p className="text-velmora-warm-gray text-sm mb-6">
                  Try adjusting your filters to see more treasures.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchParams({})}
                  className="bg-velmora-espresso text-velmora-cream px-8 py-3 text-xs uppercase tracking-widest hover:bg-velmora-gold hover:text-velmora-espresso transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          mobileFiltersOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-velmora-espresso/40 transition-opacity duration-300 ${
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 bottom-0 w-[300px] bg-velmora-cream shadow-soft-lg transform transition-transform duration-500 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-velmora-taupe/30">
            <h2 className="font-serif text-xl text-velmora-espresso">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2 -mr-2"
            >
              <X size={22} />
            </button>
          </div>
          <div className="p-6">
            <FilterSection
              title="Category"
              options={[
                { value: 'all', label: 'All Categories' },
                ...categories.map((c) => ({ value: c.id, label: c.name })),
                { value: 'sets', label: 'Gift Sets' },
              ]}
              active={activeCategory}
              paramKey="category"
            />
            <FilterSection
              title="Price"
              options={priceRanges}
              active={activePrice}
              paramKey="price"
            />
            <FilterSection
              title="Material"
              options={materials}
              active={activeMaterial}
              paramKey="material"
            />
            <button
              type="button"
              onClick={() => {
                setSearchParams({});
                setMobileFiltersOpen(false);
              }}
              className="w-full border border-velmora-espresso text-velmora-espresso py-3 text-xs uppercase tracking-widest mt-4"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
