import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-plus', label: '$75+', min: 75, max: Infinity },
];

const materials = [
  { id: 'gold', label: 'Gold Plated' },
  { id: 'silver', label: 'Silver' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
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
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange(null);
    setSelectedMaterial(null);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange || selectedMaterial;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase text-champagne font-sans font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block text-sm font-sans font-light transition-colors ${
              selectedCategory === 'all' ? 'text-gold' : 'text-champagne/50 hover:text-champagne'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-sm font-sans font-light transition-colors ${
                selectedCategory === cat.id ? 'text-gold' : 'text-champagne/50 hover:text-champagne'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase text-champagne font-sans font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setSelectedPriceRange(selectedPriceRange === range.id ? null : range.id)}
              className={`block text-sm font-sans font-light transition-colors ${
                selectedPriceRange === range.id ? 'text-gold' : 'text-champagne/50 hover:text-champagne'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase text-champagne font-sans font-medium mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setSelectedMaterial(selectedMaterial === mat.id ? null : mat.id)}
              className={`block text-sm font-sans font-light transition-colors ${
                selectedMaterial === mat.id ? 'text-gold' : 'text-champagne/50 hover:text-champagne'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-gold hover:text-gold-light font-sans tracking-wider uppercase transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 pb-16 lg:pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-light mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-champagne mb-4">
            Shop All
          </h1>
          <p className="text-sm text-champagne/50 font-sans font-light max-w-md mx-auto">
            Discover our curated collection of demi-fine jewelry, designed to be worn and treasured every day.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between border-y border-divider py-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-champagne/70 hover:text-champagne transition-colors"
          >
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            <span className="font-sans font-light">Filters</span>
            {hasActiveFilters && (
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            )}
          </button>

          {/* Result count (desktop) */}
          <span className="hidden lg:block text-sm text-muted font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </span>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-champagne/70 font-sans font-light pr-8 pl-2 py-1 border border-divider focus:border-gold/40 focus:outline-none cursor-pointer transition-colors"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id} className="bg-night text-champagne">
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted text-sm mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-gold text-sm hover:text-gold-light transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileFiltersOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-velvet/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-night border-r border-divider transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-divider">
            <h2 className="text-sm tracking-wider uppercase text-champagne font-sans font-medium">Filters</h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="text-muted hover:text-champagne transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto h-[calc(100%-60px)]">
            <FilterContent />
          </div>
        </div>
      </div>
    </main>
  );
}
