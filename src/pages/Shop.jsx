import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const categoryFilters = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materialFilters = ['18K Gold Plated'];
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $70', min: 50, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [sort, setSort] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)] : []
  );
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategories.length > 0) {
      result = result.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }
    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max
      );
    }
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [selectedCategories, selectedPrice, sort]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice(null);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-sans text-xs uppercase tracking-label text-text-secondary mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categoryFilters.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 border-hairline accent-accent"
              />
              <span className="font-sans text-sm text-text-primary">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-xs uppercase tracking-label text-text-secondary mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {materialFilters.map((m) => (
            <label key={m} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked readOnly className="w-4 h-4 border-hairline accent-accent" />
              <span className="font-sans text-sm text-text-primary">{m}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-sans text-xs uppercase tracking-label text-text-secondary mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={selectedPrice?.label === range.label}
                onChange={() => setSelectedPrice(range)}
                className="w-4 h-4 border-hairline accent-accent"
              />
              <span className="font-sans text-sm text-text-primary">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {(selectedCategories.length > 0 || selectedPrice) && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs uppercase tracking-label text-text-secondary underline hover:text-text-primary"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 bg-surface min-h-screen">
      <div className="max-w-container mx-auto px-6 md:px-12 py-8 md:py-14">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-text-primary font-normal">
              Shop All
            </h1>
            <p className="mt-2 font-sans text-sm text-text-secondary">
              {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 border border-hairline px-3 py-2 text-xs uppercase tracking-label text-text-primary"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-hairline bg-surface px-3 py-2 font-sans text-xs uppercase tracking-label text-text-primary focus:outline-none"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-text-primary">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-accent underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[70]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 bg-surface z-[80] shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
              <h2 className="font-serif text-lg tracking-widest uppercase text-text-primary">
                Filters
              </h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} className="text-text-primary" />
              </button>
            </div>
            <div className="p-6">
              <FilterContent />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
