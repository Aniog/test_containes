import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const containerRef = useRef(null);

  // Initialize from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategories([category]);
    }
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [selectedCategories, selectedPriceRange, sortBy]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId];
      
      // Update URL
      const params = new URLSearchParams(searchParams);
      if (newCategories.length === 1) {
        params.set('category', newCategories[0]);
      } else {
        params.delete('category');
      }
      setSearchParams(params);
      
      return newCategories;
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSortBy('featured');
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.id === selectedPriceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
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
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPriceRange, sortBy]);

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRange;

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-500 mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {categories.map(category => (
            <label
              key={category.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
                className="w-4 h-4 border-charcoal-300 text-gold-600 focus:ring-gold-500 rounded"
              />
              <span className="font-sans text-sm text-charcoal-700 group-hover:text-charcoal-900 transition-colors">
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-500 mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {priceRanges.map(range => (
            <label
              key={range.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === range.id}
                onChange={() => setSelectedPriceRange(
                  selectedPriceRange === range.id ? null : range.id
                )}
                className="w-4 h-4 border-charcoal-300 text-gold-600 focus:ring-gold-500"
              />
              <span className="font-sans text-sm text-charcoal-700 group-hover:text-charcoal-900 transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material (placeholder) */}
      <div>
        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal-500 mb-4">
          Material
        </h3>
        <div className="space-y-3">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(material => (
            <label
              key={material}
              className="flex items-center gap-3 cursor-pointer group opacity-60"
            >
              <input
                type="checkbox"
                disabled
                className="w-4 h-4 border-charcoal-300 text-gold-600 focus:ring-gold-500 rounded"
              />
              <span className="font-sans text-sm text-charcoal-700">
                {material}
              </span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="mt-8 font-sans text-xs tracking-[0.15em] uppercase text-charcoal-500 hover:text-charcoal-800 transition-colors underline underline-offset-4"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-cream-100 py-12 md:py-16">
        <div className="container-wide text-center">
          <h1 className="font-serif text-heading-xl md:text-display text-charcoal-800">
            Shop All
          </h1>
          <p className="font-sans text-charcoal-500 mt-3">
            Discover our collection of fine demi-fine jewelry
          </p>
        </div>
      </div>

      <div className="container-wide py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-charcoal-100">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="lg:hidden flex items-center gap-2 font-sans text-sm text-charcoal-600 hover:text-charcoal-800 transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <p className="font-sans text-sm text-charcoal-500">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-sm text-charcoal-600 pr-8 pl-4 py-2 border border-charcoal-200 cursor-pointer focus:outline-none focus:border-gold-500"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile Filter Drawer */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-charcoal-900/50"
                onClick={() => setShowMobileFilters(false)}
              />
              <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-cream-50 p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl text-charcoal-800">Filters</h2>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-2 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-500 mb-4">
                  No products found
                </p>
                <p className="font-sans text-sm text-charcoal-400 mb-6">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
