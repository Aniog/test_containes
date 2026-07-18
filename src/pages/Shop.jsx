import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductGrid from '@/components/product/ProductGrid';
import { products, categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 — $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 — $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['18K Gold Plated', 'Sterling Silver', 'Gold Vermeil'];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategories, sort]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const togglePrice = (id) => {
    setSelectedPrices((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const activeFiltersCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((id) => {
          const range = priceRanges.find((r) => r.id === id);
          return range && p.price >= range.min && p.price <= range.max;
        })
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-velmora-charcoal mb-4">
          Category
        </h4>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedCategories.includes(cat.id)
                    ? 'bg-velmora-gold border-velmora-gold'
                    : 'border-velmora-hairline group-hover:border-velmora-charcoal'
                )}
              >
                {selectedCategories.includes(cat.id) && (
                  <X className="w-3 h-3 text-white" />
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
              />
              <span className="text-sm text-velmora-taupe group-hover:text-velmora-charcoal transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-velmora-charcoal mb-4">
          Price
        </h4>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedPrices.includes(range.id)
                    ? 'bg-velmora-gold border-velmora-gold'
                    : 'border-velmora-hairline group-hover:border-velmora-charcoal'
                )}
              >
                {selectedPrices.includes(range.id) && (
                  <X className="w-3 h-3 text-white" />
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPrices.includes(range.id)}
                onChange={() => togglePrice(range.id)}
              />
              <span className="text-sm text-velmora-taupe group-hover:text-velmora-charcoal transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-velmora-charcoal mb-4">
          Material
        </h4>
        <div className="space-y-3">
          {materials.map((mat) => (
            <label
              key={mat}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={cn(
                  'w-4 h-4 border flex items-center justify-center transition-colors',
                  selectedMaterials.includes(mat)
                    ? 'bg-velmora-gold border-velmora-gold'
                    : 'border-velmora-hairline group-hover:border-velmora-charcoal'
                )}
              >
                {selectedMaterials.includes(mat) && (
                  <X className="w-3 h-3 text-white" />
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggleMaterial(mat)}
              />
              <span className="text-sm text-velmora-taupe group-hover:text-velmora-charcoal transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-[0.15em] text-velmora-taupe hover:text-velmora-gold transition-colors underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="caption-label mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-velmora-charcoal">
            Shop All Jewelry
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-velmora-gold text-white rounded-full text-[10px] flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="hidden md:block text-sm text-velmora-taupe">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-white border border-velmora-hairline text-velmora-charcoal text-xs uppercase tracking-[0.1em] font-semibold pl-4 pr-10 py-2.5 focus:outline-none focus:border-velmora-gold"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-taupe pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-velmora-charcoal mb-6">
                Filter By
              </h3>
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-charcoal mb-3">
                  No pieces match your filters
                </p>
                <p className="text-sm text-velmora-taupe mb-6">
                  Try adjusting your selection.
                </p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden',
          mobileFiltersOpen ? 'visible' : 'invisible'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-velmora-espresso/40 backdrop-blur-sm transition-opacity',
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 bg-velmora-cream rounded-t-2xl p-6 transform transition-transform duration-300 max-h-[80vh] overflow-y-auto',
            mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-velmora-charcoal">
              Filter By
            </h3>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2 text-velmora-taupe"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterContent />
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="btn-primary w-full mt-8"
          >
            Show {filteredProducts.length} {filteredProducts.length === 1 ? 'Piece' : 'Pieces'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
