import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories, priceRanges, materials } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.id === selectedPrice);
      if (range) {
        result = result.filter(
          (p) => p.price >= range.min && p.price < range.max
        );
      }
    }

    if (selectedMaterial) {
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

  const activeFiltersCount = [
    selectedCategory,
    selectedPrice,
    selectedMaterial,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice('');
    setSelectedMaterial('');
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">
          Category
        </h4>
        <div className="flex flex-col gap-2.5">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 text-sm cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                  selectedCategory === cat.id
                    ? 'border-base bg-base'
                    : 'border-hairline group-hover:border-base'
                }`}
                onClick={() => {
                  setSelectedCategory(
                    selectedCategory === cat.id ? '' : cat.id
                  );
                  if (selectedCategory !== cat.id) {
                    setSearchParams({ category: cat.id });
                  } else {
                    setSearchParams({});
                  }
                }}
              >
                {selectedCategory === cat.id && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </div>
              <span className="text-muted group-hover:text-base transition-colors">
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">
          Price
        </h4>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 text-sm cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                  selectedPrice === range.id
                    ? 'border-base bg-base'
                    : 'border-hairline group-hover:border-base'
                }`}
                onClick={() =>
                  setSelectedPrice(
                    selectedPrice === range.id ? '' : range.id
                  )
                }
              >
                {selectedPrice === range.id && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </div>
              <span className="text-muted group-hover:text-base transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">
          Material
        </h4>
        <div className="flex flex-col gap-2.5">
          {materials.map((mat) => (
            <label
              key={mat.id}
              className="flex items-center gap-3 text-sm cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                  selectedMaterial === mat.id
                    ? 'border-base bg-base'
                    : 'border-hairline group-hover:border-base'
                }`}
                onClick={() =>
                  setSelectedMaterial(
                    selectedMaterial === mat.id ? '' : mat.id
                  )
                }
              >
                {selectedMaterial === mat.id && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </div>
              <span className="text-muted group-hover:text-base transition-colors">
                {mat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-[0.1em] text-accent font-medium hover:text-accent-hover transition-colors text-left"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 bg-surface min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
          Shop
        </h1>
        <p className="text-muted text-sm mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} found
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-hairline">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.1em] font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-accent text-white text-[10px] rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <span className="text-xs uppercase tracking-[0.1em] text-muted hidden sm:inline">
              Sort by
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-hairline bg-transparent px-3 py-2 pr-8 focus:outline-none focus:border-base cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-6 py-3 bg-accent text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-accent-hover transition-colors"
                >
                  Clear Filters
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

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-base/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 z-[70] h-full w-80 max-w-[85vw] bg-surface shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
              <h2 className="font-serif text-xl font-light tracking-wide">
                Filters
              </h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterContent />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
