import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const allCategories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { id: 'under40', label: 'Under $40', min: 0, max: 40 },
  { id: '40to60', label: '$40 - $60', min: 40, max: 60 },
  { id: '60plus', label: '$60+', min: 60, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const initialCategory = searchParams.get('category') || '';
  const initialSort = searchParams.get('sort') || 'featured';

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState(initialSort);

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    );
  };

  const togglePrice = (priceId) => {
    setSelectedPrices((prev) =>
      prev.includes(priceId) ? prev.filter((p) => p !== priceId) : [...prev, priceId]
    );
  };

  const handleSort = (sortId) => {
    setSortBy(sortId);
    setSortOpen(false);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((pid) => {
          const range = priceRanges.find((r) => r.id === pid);
          return range && p.price >= range.min && p.price <= range.max;
        })
      );
    }

    switch (sortBy) {
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
  }, [selectedCategories, selectedPrices, sortBy]);

  const activeFilterCount = selectedCategories.length + selectedPrices.length;

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs tracking-widest uppercase text-warmgray font-medium mb-4">Category</h4>
        <div className="space-y-2">
          {allCategories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedCategories.includes(cat.id) ? 'bg-charcoal border-charcoal' : 'border-sand group-hover:border-umber'}`}>
                {selectedCategories.includes(cat.id) && <X size={10} className="text-cream" />}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
              />
              <span className="text-sm text-charcoal">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs tracking-widest uppercase text-warmgray font-medium mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedPrices.includes(range.id) ? 'bg-charcoal border-charcoal' : 'border-sand group-hover:border-umber'}`}>
                {selectedPrices.includes(range.id) && <X size={10} className="text-cream" />}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPrices.includes(range.id)}
                onChange={() => togglePrice(range.id)}
              />
              <span className="text-sm text-charcoal">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-2">Shop All</h1>
          <p className="text-sm text-warmgray">{filteredProducts.length} pieces</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 hairline-b">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-charcoal"
          >
            <SlidersHorizontal size={14} />
            Filter {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          <div className="hidden md:flex items-center gap-2">
            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="text-xs text-warmgray underline hover:text-charcoal transition-colors">
                Clear all
              </button>
            )}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-charcoal"
            >
              Sort: {sortOptions.find((s) => s.id === sortBy)?.label}
              <ChevronDown size={14} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-cream border border-sand shadow-lg z-10 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSort(opt.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-medium hover:bg-parchment transition-colors ${sortBy === opt.id ? 'text-charcoal' : 'text-warmgray'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filters Drawer */}
          {mobileFiltersOpen && (
            <>
              <div className="fixed inset-0 bg-charcoal/40 z-50 md:hidden" onClick={() => setMobileFiltersOpen(false)} />
              <div className="fixed inset-y-0 left-0 w-72 bg-cream z-50 md:hidden p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif text-lg">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
                <FilterContent />
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full mt-8 bg-charcoal text-cream py-3 text-xs tracking-widest uppercase font-medium"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warmgray mb-4">No products match your filters</p>
                <button onClick={clearFilters} className="text-xs tracking-widest uppercase text-charcoal underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}