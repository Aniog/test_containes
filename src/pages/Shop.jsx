import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest' },
  { id: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  // Filter products
  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (selectedPriceRange) {
    const range = priceRanges.find((r) => r.id === selectedPriceRange);
    if (range) {
      filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
    }
  }

  if (selectedMaterial !== 'all') {
    // All products are gold plated in this demo
  }

  // Sort
  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange(null);
    setSelectedMaterial('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange || selectedMaterial !== 'all';

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-cream-dark py-10 md:py-14">
        <div className="container-wide text-center">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold-accent mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-base">
            Shop All Jewelry
          </h1>
        </div>
      </div>

      <div className="container-wide py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-deep-base hover:text-gold-accent transition-colors lg:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-warm-gray hover:text-gold-accent transition-colors"
              >
                <X size={14} />
                Clear All
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-warm-gray">
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </span>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-warm-border pl-4 pr-10 py-2 font-sans text-xs uppercase tracking-wider text-deep-base focus:outline-none focus:border-gold-accent transition-colors cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Filter sidebar */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block w-full lg:w-64 flex-shrink-0`}
          >
            <div className="space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-wider text-deep-base mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                      selectedCategory === 'all' ? 'text-gold-accent font-medium' : 'text-warm-gray hover:text-deep-base'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                        selectedCategory === cat.id ? 'text-gold-accent font-medium' : 'text-warm-gray hover:text-deep-base'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-wider text-deep-base mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedPriceRange(null)}
                    className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                      !selectedPriceRange ? 'text-gold-accent font-medium' : 'text-warm-gray hover:text-deep-base'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                        selectedPriceRange === range.id ? 'text-gold-accent font-medium' : 'text-warm-gray hover:text-deep-base'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-wider text-deep-base mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedMaterial('all')}
                    className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                      selectedMaterial === 'all' ? 'text-gold-accent font-medium' : 'text-warm-gray hover:text-deep-base'
                    }`}
                  >
                    All Materials
                  </button>
                  <button
                    onClick={() => setSelectedMaterial('gold')}
                    className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                      selectedMaterial === 'gold' ? 'text-gold-accent font-medium' : 'text-warm-gray hover:text-deep-base'
                    }`}
                  >
                    18K Gold Plated
                  </button>
                  <button
                    onClick={() => setSelectedMaterial('silver')}
                    className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                      selectedMaterial === 'silver' ? 'text-gold-accent font-medium' : 'text-warm-gray hover:text-deep-base'
                    }`}
                  >
                    Sterling Silver
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-deep-base mb-2">No products found</p>
                <p className="font-sans text-sm text-warm-gray mb-6">
                  Try adjusting your filters or browse all jewelry.
                </p>
                <button onClick={clearFilters} className="btn-secondary inline-block">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
