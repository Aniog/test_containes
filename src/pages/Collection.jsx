import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Check } from 'lucide-react';
import { products as allProducts, categories, materials, formatPrice } from '@/data/products';
import { ProductCard } from '@/components/shared/ProductCard';
import { Select } from '@/components/ui/Select';
import { useImageLoader } from '@/hooks/useImageLoader';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 — $80', min: 50, max: 80 },
  { id: '80-plus', label: '$80+', min: 80, max: Infinity },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const containerRef = useImageLoader([
    selectedCategories.join(','),
    selectedMaterials.join(','),
    selectedPrices.join(','),
    sort,
  ]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = allProducts.filter((p) => {
      const catMatch =
        selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matMatch =
        selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
      const priceMatch =
        selectedPrices.length === 0 ||
        selectedPrices.some((id) => {
          const range = priceRanges.find((r) => r.id === id);
          return range && p.price >= range.min && p.price < range.max;
        });
      return catMatch && matMatch && priceMatch;
    });

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, selectedMaterials, selectedPrices, sort]);

  const toggle = (setter, selected, id) => {
    setter(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const activeCount =
    selectedCategories.length + selectedMaterials.length + selectedPrices.length;

  const FilterGroup = ({ title, options, selected, setter }) => (
    <div className="mb-8">
      <h4 className="text-xs uppercase tracking-extra-wide text-foreground font-medium mb-4">
        {title}
      </h4>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-3 text-sm text-muted cursor-pointer group"
          >
            <div
              className={cn(
                'w-4 h-4 border flex items-center justify-center transition-colors',
                selected.includes(option.id)
                  ? 'bg-foreground border-foreground'
                  : 'border-hairline group-hover:border-muted'
              )}
            >
              {selected.includes(option.id) && (
                <Check className="w-3 h-3 text-background" strokeWidth={3} />
              )}
            </div>
            <input
              type="checkbox"
              className="sr-only"
              checked={selected.includes(option.id)}
              onChange={() => toggle(setter, selected, option.id)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-background pt-[88px] md:pt-[104px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 md:py-16">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-extra-wide text-muted mb-3">The Collection</p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground">
            Shop All Jewelry
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-hairline">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-extra-wide text-foreground"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter{activeCount > 0 && ` (${activeCount})`}
          </button>

          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-muted">{filtered.length} pieces</span>
            {activeCount > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs text-accent hover:underline ml-2"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="w-44 md:w-56">
            <Select
              value={sort}
              options={sortOptions}
              onChange={setSort}
              placeholder="Sort by"
            />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-[120px]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-xs uppercase tracking-extra-wide text-foreground font-medium">
                  Filters
                </h3>
                {activeCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs text-muted hover:text-foreground transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              <FilterGroup
                title="Category"
                options={categories}
                selected={selectedCategories}
                setter={setSelectedCategories}
              />
              <FilterGroup
                title="Price"
                options={priceRanges}
                selected={selectedPrices}
                setter={setSelectedPrices}
              />
              <FilterGroup
                title="Material"
                options={materials}
                selected={selectedMaterials}
                setter={setSelectedMaterials}
              />
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <>
              <div
                className="fixed inset-0 bg-foreground/40 z-40 md:hidden"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="fixed inset-y-0 left-0 w-[300px] bg-surface z-50 p-6 overflow-y-auto md:hidden">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-sans text-xs uppercase tracking-extra-wide text-foreground font-medium">
                    Filters
                  </h3>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    aria-label="Close filters"
                  >
                    <X className="w-5 h-5 text-muted" />
                  </button>
                </div>
                <FilterGroup
                  title="Category"
                  options={categories}
                  selected={selectedCategories}
                  setter={setSelectedCategories}
                />
                <FilterGroup
                  title="Price"
                  options={priceRanges}
                  selected={selectedPrices}
                  setter={setSelectedPrices}
                />
                <FilterGroup
                  title="Material"
                  options={materials}
                  selected={selectedMaterials}
                  setter={setSelectedMaterials}
                />
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-foreground text-background py-3 text-xs uppercase tracking-extra-wide font-medium mt-4"
                >
                  Show {filtered.length} Results
                </button>
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-foreground mb-3">No pieces found</p>
                <p className="text-muted mb-6">Try adjusting your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-extra-wide text-accent hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    sectionId="collection"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
