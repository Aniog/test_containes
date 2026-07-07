import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ProductCard } from '@/components/ui/ProductCard';
import { useStrkImages } from '@/hooks/useStrkImages';
import { PRODUCTS } from '@/data/products';

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $120', min: 80, max: 120 },
];

const CATEGORIES = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const MATERIALS = [
  { id: 'gold-plated', label: 'Gold Plated' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && !selectedCategories.includes(cat)) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const togglePrice = (index) => {
    setSelectedPrices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((idx) => {
          const range = PRICE_RANGES[idx];
          return p.price >= range.min && p.price <= range.max;
        })
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy]);

  const activeFilterCount = selectedCategories.length + selectedPrices.length + selectedMaterials.length;
  const containerRef = useStrkImages([filteredProducts.length]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
          Category
        </h3>
        <div className="space-y-2.5">
          {CATEGORIES.map((cat) => (
            <label key={cat.id} className="flex cursor-pointer items-center gap-3 font-display text-sm text-velmora-brown">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="h-4 w-4 rounded border-velmora-taupe accent-velmora-gold-dark"
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
          Price
        </h3>
        <div className="space-y-2.5">
          {PRICE_RANGES.map((range, idx) => (
            <label key={idx} className="flex cursor-pointer items-center gap-3 font-display text-sm text-velmora-brown">
              <input
                type="checkbox"
                checked={selectedPrices.includes(idx)}
                onChange={() => togglePrice(idx)}
                className="h-4 w-4 rounded border-velmora-taupe accent-velmora-gold-dark"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
          Material
        </h3>
        <div className="space-y-2.5">
          {MATERIALS.map((mat) => (
            <label key={mat.id} className="flex cursor-pointer items-center gap-3 font-display text-sm text-velmora-brown">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat.id)}
                onChange={() => toggleMaterial(mat.id)}
                className="h-4 w-4 rounded border-velmora-taupe accent-velmora-gold-dark"
              />
              {mat.label}
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          className="font-display text-xs font-semibold uppercase tracking-widest text-velmora-gold-dark transition-colors hover:text-velmora-gold"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream px-6 pb-20 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 font-display text-xs font-medium uppercase tracking-superwide text-velmora-gold-dark">
            Explore
          </p>
          <h1 className="font-serif text-4xl font-light text-velmora-espresso md:text-5xl">
            The Collection
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop sidebar */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter bar */}
          <div className="mb-4 flex items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-velmora-taupe/50 px-4 py-2 font-display text-xs font-medium uppercase tracking-widest text-velmora-espresso"
            >
              <SlidersHorizontal size={14} />
              Filter {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border border-velmora-taupe/50 bg-transparent py-2 pl-3 pr-9 font-display text-xs uppercase tracking-widest text-velmora-espresso focus:outline-none"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-velmora-brown" />
            </div>
          </div>

          <main className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="font-display text-sm text-velmora-stone">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none border border-velmora-taupe/50 bg-transparent py-2 pl-3 pr-9 font-display text-xs uppercase tracking-widest text-velmora-espresso focus:outline-none"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-velmora-brown" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-velmora-espresso">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 bg-velmora-espresso px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-coffee"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-6">
                {filteredProducts.map((product) => (
                  <div key={product.id}>
                    <span id={`product-${product.id}-name`} className="sr-only">
                      {product.name}
                    </span>
                    <ProductCard
                      product={product}
                      imgId={`shop-${product.id}`}
                      query={`[product-${product.id}-name] ${product.category} gold jewelry product`}
                      ratio="4x5"
                      width={600}
                    />
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-velmora-espresso/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-[70] h-full w-80 max-w-[85vw] overflow-y-auto bg-velmora-cream p-6 shadow-2xl transition-transform duration-500 ease-out-lux lg:hidden ${
          mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-lg font-medium uppercase tracking-widest text-velmora-espresso">
            Filters
          </h2>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            aria-label="Close filters"
            className="text-velmora-brown"
          >
            <X size={22} />
          </button>
        </div>
        <FilterContent />
      </aside>
    </div>
  );
}
