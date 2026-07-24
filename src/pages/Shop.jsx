import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

const priceRanges = [
  { value: 'under-50', label: 'Under $50', filter: (p) => p.price < 50 },
  { value: '50-75', label: '$50 – $75', filter: (p) => p.price >= 50 && p.price <= 75 },
  { value: '75-100', label: '$75 – $100', filter: (p) => p.price >= 75 && p.price <= 100 },
  { value: 'over-100', label: 'Over $100', filter: (p) => p.price > 100 },
];

const materials = [
  { value: 'gold', label: '18K Gold Plated' },
  { value: 'crystal', label: 'Crystal' },
  { value: 'silver', label: 'Silver Tone' },
];

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [sort, setSort] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || '');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.value === selectedPrice);
      if (range) result = result.filter(range.filter);
    }

    if (selectedMaterial) {
      if (selectedMaterial === 'gold') {
        result = result.filter((p) => p.variants.includes('Gold'));
      } else if (selectedMaterial === 'crystal') {
        result = result.filter((p) => p.materials.includes('Crystal'));
      } else if (selectedMaterial === 'silver') {
        result = result.filter((p) => p.variants.includes('Silver'));
      }
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sort]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice('');
    setSelectedMaterial('');
  };

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-espresso mb-4">Category</h4>
        <div className="space-y-2">
          {['Earrings', 'Necklaces', 'Huggies', 'Sets'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat.toLowerCase() ? '' : cat.toLowerCase())}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.toLowerCase()
                  ? 'text-gold'
                  : 'text-taupe hover:text-espresso'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-espresso mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setSelectedPrice(selectedPrice === range.value ? '' : range.value)}
              className={`block text-sm transition-colors ${
                selectedPrice === range.value ? 'text-gold' : 'text-taupe hover:text-espresso'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-espresso mb-4">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.value}
              onClick={() => setSelectedMaterial(selectedMaterial === mat.value ? '' : mat.value)}
              className={`block text-sm transition-colors ${
                selectedMaterial === mat.value ? 'text-gold' : 'text-taupe hover:text-espresso'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-taupe hover:text-espresso transition-colors underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef}>
      <div className="pt-24 md:pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-espresso tracking-wide mb-4">
              {selectedCategory
                ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
                : 'All Jewelry'}
            </h1>
            <p className="text-taupe text-sm">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex gap-8 lg:gap-12">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:block w-[200px] flex-shrink-0">
              <FilterContent />
            </aside>

            {/* Main content */}
            <div className="flex-1">
              {/* Sort + Mobile filter toggle */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-borderline">
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-taupe"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                  {hasFilters && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  )}
                </button>

                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-xs text-taupe tracking-wider uppercase hidden sm:inline">Sort by</span>
                  <div className="relative">
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className="appearance-none bg-transparent border border-borderline px-4 py-2 pr-8 text-xs tracking-wider uppercase text-espresso focus:outline-none focus:border-gold cursor-pointer"
                    >
                      {sortOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-taupe" />
                  </div>
                </div>
              </div>

              {/* Mobile filters */}
              {mobileFiltersOpen && (
                <div className="md:hidden mb-8 p-6 bg-warmgray">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs tracking-[0.2em] uppercase text-espresso">Filters</span>
                    <button onClick={() => setMobileFiltersOpen(false)} className="text-taupe">
                      <X size={16} />
                    </button>
                  </div>
                  <FilterContent />
                </div>
              )}

              {/* Product Grid */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-taupe mb-4">No products match your filters.</p>
                  <button onClick={clearFilters} className="btn-outline">
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}