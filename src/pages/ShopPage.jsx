import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X, Grid3X3, LayoutGrid } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState(3);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = products
    .filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedPriceRange) {
        if (p.price < selectedPriceRange.min || p.price > selectedPriceRange.max) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'reviews': return b.reviewCount - a.reviewCount;
        default: return 0;
      }
    });

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
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== null;

  return (
    <main className="bg-cream pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-velmora-100">
        <div className="container-wide py-8 md:py-12 text-center">
          <span className="text-overline uppercase tracking-overline text-gold block mb-2">
            Our Collection
          </span>
          <h1 className="font-serif text-3xl md:text-heading-1 text-velmora-900">
            {selectedCategory !== 'all'
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="mt-3 text-sm text-velmora-400">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} available
          </p>
        </div>
      </div>

      <div className="container-wide py-8 md:py-12">
        {/* Controls bar */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-velmora-200 text-sm text-velmora-600 hover:border-velmora-400 transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-xs text-velmora-500 hover:text-velmora-900 transition-colors"
              >
                <X size={14} />
                Clear filters
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Grid toggle — desktop */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 ${gridCols === 3 ? 'text-velmora-900' : 'text-velmora-300'}`}
              >
                <Grid3X3 size={18} />
              </button>
              <button
                onClick={() => setGridCols(2)}
                className={`p-1.5 ${gridCols === 2 ? 'text-velmora-900' : 'text-velmora-300'}`}
              >
                <LayoutGrid size={18} />
              </button>
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-velmora-200 pl-4 pr-10 py-2 text-sm text-velmora-600 focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className={`${showFilters ? 'fixed inset-0 z-40 bg-black/40 md:relative md:bg-transparent' : 'hidden'} md:block md:w-56 flex-shrink-0`}>
            <div className={`${showFilters ? 'absolute right-0 top-0 bottom-0 w-72 bg-cream shadow-xl p-6 overflow-y-auto md:relative md:w-full md:bg-transparent md:shadow-none md:p-0' : ''}`}>
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h3 className="text-xs uppercase tracking-overline text-velmora-400 font-semibold">
                  Filters
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden p-1 text-velmora-500"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-overline text-velmora-500 mb-3 font-medium">
                  Category
                </h4>
                <div className="space-y-1.5">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block w-full text-left text-sm py-1.5 px-3 transition-colors ${
                      selectedCategory === 'all'
                        ? 'text-gold font-medium bg-gold/5'
                        : 'text-velmora-500 hover:text-velmora-900'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left text-sm py-1.5 px-3 transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-gold font-medium bg-gold/5'
                          : 'text-velmora-500 hover:text-velmora-900'
                      }`}
                    >
                      {cat.name}
                      <span className="text-xs text-velmora-300 ml-1">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-overline text-velmora-500 mb-3 font-medium">
                  Price
                </h4>
                <div className="space-y-1.5">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPriceRange(
                        selectedPriceRange?.label === range.label ? null : range
                      )}
                      className={`block w-full text-left text-sm py-1.5 px-3 transition-colors ${
                        selectedPriceRange?.label === range.label
                          ? 'text-gold font-medium bg-gold/5'
                          : 'text-velmora-500 hover:text-velmora-900'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-xs uppercase tracking-overline text-velmora-500 mb-3 font-medium">
                  Material
                </h4>
                <div className="space-y-1.5">
                  {['18K Gold Plated', 'Sterling Silver'].map((mat) => (
                    <div key={mat} className="flex items-center gap-2 py-1 px-3">
                      <div className="w-3.5 h-3.5 border border-velmora-300 rounded-sm" />
                      <span className="text-sm text-velmora-500">{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-600 mb-2">No pieces found</p>
                <p className="text-sm text-velmora-400 mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-4 md:gap-6 ${
                  gridCols === 2 ? 'grid-cols-2 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-3'
                }`}
              >
                {filteredProducts.map((product, i) => (
                  <div
                    key={product.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
