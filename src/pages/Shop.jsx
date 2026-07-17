import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [selectedCategory, sortBy, priceRange]);

  const handleCategoryChange = (cat) => {
    const next = cat === selectedCategory ? '' : cat;
    setSelectedCategory(next);
    if (next) {
      setSearchParams({ category: next });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

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
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <main className="min-h-screen pt-20 bg-ivory-50" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto section-padding py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-heading text-3xl sm:text-4xl md:text-5xl text-velvet-950 mb-3">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-sm text-obsidian-muted max-w-md mx-auto">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''} crafted with care.
          </p>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-velvet-950 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-velvet-950 font-medium'
                          : 'text-obsidian-muted hover:text-velvet-950'
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        {cat.name}
                        <span className="text-[11px] text-obsidian-muted">{cat.count}</span>
                      </span>
                    </button>
                  ))}
                  {selectedCategory && (
                    <button
                      onClick={() => handleCategoryChange('')}
                      className="text-[11px] text-gold-600 hover:text-gold-700 transition-colors mt-2"
                    >
                      Clear filter
                    </button>
                  )}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-velvet-950 mb-4">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full accent-gold-500"
                  />
                  <div className="flex justify-between text-xs text-obsidian-muted">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              {/* Mobile filter button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-velvet-950"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {selectedCategory && (
                  <span className="w-5 h-5 bg-gold-500 text-white text-[10px] rounded-full flex items-center justify-center">
                    1
                  </span>
                )}
              </button>

              {/* Sort */}
              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs font-medium tracking-[0.15em] uppercase text-velvet-950 
                           pr-8 pl-3 py-2 border border-velvet-200 cursor-pointer focus:outline-none focus:border-gold-500 transition-colors"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-velvet-950 pointer-events-none" />
              </div>
            </div>

            {/* Mobile filter panel */}
            {showFilters && (
              <div className="lg:hidden mb-6 p-5 bg-white border border-velvet-100 rounded-sm animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-velvet-950">
                    Filters
                  </h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-4 h-4 text-velvet-950" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase border transition-all ${
                        selectedCategory === cat.id
                          ? 'border-velvet-950 bg-velvet-950 text-ivory-50'
                          : 'border-velvet-200 text-velvet-950 hover:border-velvet-400'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
                <div>
                  <p className="text-xs text-obsidian-muted mb-2">
                    Up to ${priceRange[1]}
                  </p>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full accent-gold-500"
                  />
                </div>
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-heading text-xl text-velvet-950 mb-2">
                  No products found
                </p>
                <p className="text-sm text-obsidian-muted mb-6">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setPriceRange([0, 200]);
                    setSearchParams({});
                  }}
                  className="btn-outline text-xs"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
