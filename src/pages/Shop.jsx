import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, CATEGORIES, MATERIALS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75plus', label: '$75+' },
];

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory && Object.values(CATEGORIES).includes(initialCategory)
      ? [initialCategory]
      : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && Object.values(CATEGORIES).includes(category)) {
      setSelectedCategories([category]);
    }
  }, [searchParams]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleMaterial = (material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    if (priceRange !== 'all') {
      result = result.filter((p) => {
        if (priceRange === 'under50') return p.price < 50;
        if (priceRange === '50-75') return p.price >= 50 && p.price <= 75;
        if (priceRange === '75plus') return p.price > 75;
        return true;
      });
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
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

  const activeFiltersCount =
    selectedCategories.length + selectedMaterials.length + (priceRange !== 'all' ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange('all');
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {Object.values(CATEGORIES).map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  'pointer-events-none h-4 w-4 border flex items-center justify-center transition-colors',
                  selectedCategories.includes(category)
                    ? 'bg-velmora-accent border-velmora-accent'
                    : 'border-velmora-sand group-hover:border-velmora-text'
                )}
              >
                {selectedCategories.includes(category) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span className="text-sm text-velmora-muted group-hover:text-velmora-text transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {Object.values(MATERIALS).map((material) => (
            <label
              key={material}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  'pointer-events-none h-4 w-4 border flex items-center justify-center transition-colors',
                  selectedMaterials.includes(material)
                    ? 'bg-velmora-accent border-velmora-accent'
                    : 'border-velmora-sand group-hover:border-velmora-text'
                )}
              >
                {selectedMaterials.includes(material) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedMaterials.includes(material)}
                onChange={() => toggleMaterial(material)}
              />
              <span className="text-sm text-velmora-muted group-hover:text-velmora-text transition-colors">
                {material}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  'pointer-events-none h-4 w-4 rounded-full border flex items-center justify-center transition-colors',
                  priceRange === range.value
                    ? 'border-velmora-accent'
                    : 'border-velmora-sand group-hover:border-velmora-text'
                )}
              >
                {priceRange === range.value && (
                  <div className="h-2 w-2 rounded-full bg-velmora-accent" />
                )}
              </div>
              <input
                type="radio"
                name="price"
                className="sr-only"
                checked={priceRange === range.value}
                onChange={() => setPriceRange(range.value)}
              />
              <span className="text-sm text-velmora-muted group-hover:text-velmora-text transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-widest text-velmora-accent hover:text-velmora-accent-hover underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-bg pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="px-5 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <span className="block mb-3 font-sans text-xs uppercase tracking-[0.25em] text-velmora-accent">
            Explore
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text">
            The Collection
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-8 pb-4 border-b border-velmora-hairline">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex md:hidden items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-text"
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="ml-1 h-5 w-5 rounded-full bg-velmora-accent text-white text-[10px] flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <p className="hidden md:block text-sm text-velmora-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs uppercase tracking-widest text-velmora-muted">
              Sort by
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none border border-velmora-hairline bg-velmora-surface px-4 py-2 pr-8 text-sm text-velmora-text focus:border-velmora-accent focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-velmora-text">
                  No pieces match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm uppercase tracking-widest text-velmora-accent hover:text-velmora-accent-hover underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-opacity duration-300',
          mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div
          className="absolute inset-0 bg-velmora-text/30 backdrop-blur-sm"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-[85%] max-w-sm bg-velmora-bg shadow-2xl transition-transform duration-500 ease-out-editorial',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-velmora-hairline">
            <span className="font-sans text-xs uppercase tracking-widest text-velmora-text">
              Filters
            </span>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2 text-velmora-text"
              aria-label="Close filters"
            >
              <X size={22} />
            </button>
          </div>
          <div className="p-5 overflow-y-auto h-[calc(100%-64px)]">
            <FilterContent />
          </div>
        </div>
      </div>
    </div>
  );
}
