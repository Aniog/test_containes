import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under50', label: 'Under $50' },
  { value: '50to80', label: '$50 – $80' },
  { value: 'over80', label: 'Over $80' },
];

const materials = ['18K Gold Plated'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice !== 'all') {
      result = result.filter((p) => {
        if (selectedPrice === 'under50') return p.price < 50;
        if (selectedPrice === '50to80') return p.price >= 50 && p.price <= 80;
        if (selectedPrice === 'over80') return p.price > 80;
        return true;
      });
    }

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedPrice !== 'all' ? 1 : 0) +
    (selectedMaterial !== 'all' ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedMaterial('all');
    setSearchParams({});
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">
          Category
        </h4>
        <ul className="mt-4 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className={cn(
                'font-sans text-sm transition-colors hover:text-velmora-gold',
                selectedCategory === 'all' ? 'font-medium text-velmora-charcoal' : 'text-velmora-warm-gray'
              )}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  'font-sans text-sm transition-colors hover:text-velmora-gold',
                  selectedCategory === cat.id ? 'font-medium text-velmora-charcoal' : 'text-velmora-warm-gray'
                )}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">
          Price
        </h4>
        <ul className="mt-4 space-y-3">
          {priceRanges.map((range) => (
            <li key={range.value}>
              <button
                type="button"
                onClick={() => setSelectedPrice(range.value)}
                className={cn(
                  'font-sans text-sm transition-colors hover:text-velmora-gold',
                  selectedPrice === range.value ? 'font-medium text-velmora-charcoal' : 'text-velmora-warm-gray'
                )}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">
          Material
        </h4>
        <ul className="mt-4 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setSelectedMaterial('all')}
              className={cn(
                'font-sans text-sm transition-colors hover:text-velmora-gold',
                selectedMaterial === 'all' ? 'font-medium text-velmora-charcoal' : 'text-velmora-warm-gray'
              )}
            >
              All Materials
            </button>
          </li>
          {materials.map((mat) => (
            <li key={mat}>
              <button
                type="button"
                onClick={() => setSelectedMaterial(mat)}
                className={cn(
                  'font-sans text-sm transition-colors hover:text-velmora-gold',
                  selectedMaterial === mat ? 'font-medium text-velmora-charcoal' : 'text-velmora-warm-gray'
                )}
              >
                {mat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream px-5 pt-24 pb-16 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl text-velmora-charcoal md:text-4xl">Shop</h1>
          <p className="mt-2 font-sans font-light text-velmora-warm-gray">
            Discover demi-fine gold jewelry designed for everyday luxury.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Desktop Sidebar */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <div className="sticky top-28">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">
                  Filters
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs text-velmora-warm-gray underline underline-offset-4 hover:text-velmora-gold"
                  >
                    Clear ({activeFiltersCount})
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter toggle + sort */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-velmora-stone bg-white px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-charcoal"
            >
              <SlidersHorizontal size={14} />
              Filter
              {activeFiltersCount > 0 && (
                <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border border-velmora-stone bg-white py-2.5 pl-4 pr-10 font-sans text-xs uppercase tracking-widest text-velmora-charcoal focus:border-velmora-gold focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-velmora-charcoal"
              />
            </div>
          </div>

          {/* Main grid */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="font-sans text-sm text-velmora-warm-gray">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none border border-velmora-stone bg-white py-2.5 pl-4 pr-10 font-sans text-xs uppercase tracking-widest text-velmora-charcoal focus:border-velmora-gold focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-velmora-charcoal"
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="border border-velmora-stone bg-white py-20 text-center">
                <p className="font-serif text-xl text-velmora-charcoal">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 font-sans text-xs uppercase tracking-widest text-velmora-gold underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => {
                  const slug = product.id;
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      imgId={`product-thumb-${slug}`}
                      hoverImgId={`product-hover-${slug}`}
                      titleId={`product-title-${slug}`}
                      descId={`product-desc-${slug}`}
                      query={`[product-desc-${slug}] [product-title-${slug}] gold jewelry elegant`}
                      hoverQuery={`[product-desc-${slug}] [product-title-${slug}] gold jewelry worn on model`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-velmora-charcoal/40 transition-opacity lg:hidden',
          mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <div
        className={cn(
          'fixed top-0 left-0 z-[70] h-full w-80 max-w-[85vw] bg-velmora-cream p-6 shadow-2xl transition-transform duration-500 lg:hidden',
          mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">
            Filters
          </h3>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="p-2 text-velmora-charcoal"
          >
            <X size={20} />
          </button>
        </div>
        <FilterContent />
        <button
          type="button"
          onClick={() => {
            clearFilters();
            setMobileFiltersOpen(false);
          }}
          className="mt-8 w-full border border-velmora-charcoal py-3 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-charcoal"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
