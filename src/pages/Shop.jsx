import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const categories = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { value: '50-70', label: '$50 – $70', min: 50, max: 70 },
  { value: '70-100', label: '$70 – $100', min: 70, max: 100 },
  { value: 'over-100', label: 'Over $100', min: 100, max: Infinity },
];

const materials = [
  { value: '18k-gold-plated', label: '18K Gold Plated' },
];

export default function Shop() {
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
    const cat = searchParams.get('category');
    if (cat) setSelectedCategories([cat]);
  }, [searchParams]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((range) => {
          const r = priceRanges.find((pr) => pr.value === range);
          return r && p.price >= r.min && p.price <= r.max;
        })
      );
    }

    if (selectedMaterials.length) {
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

  const toggle = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
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

  return (
    <div ref={containerRef} className="bg-velmora-porcelain pb-16 pt-24 sm:pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-3xl text-velmora-ink sm:text-4xl lg:text-5xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 border border-velmora-sand bg-white px-4 py-2 text-xs font-medium uppercase tracking-widest text-velmora-ink"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[9px] text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none border border-velmora-sand bg-white px-4 py-2 pr-10 text-xs font-medium uppercase tracking-widest text-velmora-ink outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-velmora-taupe"
              />
            </div>
          </div>

          {/* Sidebar filters */}
          <aside
            className={`fixed inset-y-0 left-0 z-50 w-80 transform bg-velmora-porcelain p-6 shadow-2xl transition-transform duration-300 lg:static lg:z-auto lg:w-64 lg:transform-none lg:bg-transparent lg:p-0 lg:shadow-none ${
              mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="mb-6 flex items-center justify-between lg:hidden">
              <h2 className="font-serif text-xl text-velmora-ink">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-velmora-taupe"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-velmora-ink">
                  Category
                </h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label
                      key={cat.value}
                      className="flex cursor-pointer items-center gap-3 text-sm text-velmora-taupe"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-velmora-sand text-velmora-gold focus:ring-velmora-gold"
                        checked={selectedCategories.includes(cat.value)}
                        onChange={() =>
                          toggle(cat.value, selectedCategories, setSelectedCategories)
                        }
                      />
                      {cat.label}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-velmora-ink">
                  Price
                </h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label
                      key={range.value}
                      className="flex cursor-pointer items-center gap-3 text-sm text-velmora-taupe"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-velmora-sand text-velmora-gold focus:ring-velmora-gold"
                        checked={selectedPrices.includes(range.value)}
                        onChange={() =>
                          toggle(range.value, selectedPrices, setSelectedPrices)
                        }
                      />
                      {range.label}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-velmora-ink">
                  Material
                </h3>
                <div className="space-y-3">
                  {materials.map((mat) => (
                    <label
                      key={mat.value}
                      className="flex cursor-pointer items-center gap-3 text-sm text-velmora-taupe"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-velmora-sand text-velmora-gold focus:ring-velmora-gold"
                        checked={selectedMaterials.includes(mat.value)}
                        onChange={() =>
                          toggle(mat.value, selectedMaterials, setSelectedMaterials)
                        }
                      />
                      {mat.label}
                    </label>
                  ))}
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-medium uppercase tracking-widest text-velmora-gold underline underline-offset-4"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {mobileFiltersOpen && (
            <div
              className="fixed inset-0 z-40 bg-velmora-ink/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileFiltersOpen(false)}
            />
          )}

          {/* Product grid */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="text-sm text-velmora-taupe">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-velmora-sand bg-white px-4 py-2 pr-10 text-xs font-medium uppercase tracking-widest text-velmora-ink outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-velmora-taupe"
                />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="rounded border border-velmora-sand bg-white py-20 text-center">
                <p className="font-serif text-xl text-velmora-ink">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm font-medium uppercase tracking-widest text-velmora-gold underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
