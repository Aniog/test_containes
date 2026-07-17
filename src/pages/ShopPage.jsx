import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
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
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const pageRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (pageRef.current) {
      return ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = priceRanges.find(r => r.id === selectedPriceRange);
    if (priceRange && priceRange.id !== 'all') {
      filtered = filtered.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Material filter (simplified - all are gold plated)
    if (selectedMaterial === 'silver') {
      filtered = []; // No silver products in seed data
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

    return filtered;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

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
    setSelectedPriceRange('all');
    setSelectedMaterial('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== 'all' || selectedMaterial !== 'all';

  return (
    <main className="pt-20 md:pt-24 pb-16" ref={pageRef}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Page header */}
        <div className="text-center py-12 md:py-16">
          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-espresso mb-3">
            {selectedCategory !== 'all'
              ? categories.find(c => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="text-taupe text-sm font-sans">
            {selectedCategory !== 'all'
              ? categories.find(c => c.id === selectedCategory)?.description
              : 'Discover our complete collection of demi-fine gold jewelry.'}
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-xs tracking-wider uppercase font-sans font-medium text-espresso hover:text-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-gold rounded-full" />
              )}
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-taupe hover:text-espresso transition-colors underline"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-taupe hidden sm:inline">{filteredProducts.length} products</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs tracking-wider uppercase font-sans font-medium text-espresso pr-6 pl-2 py-2 border border-sand rounded-sm cursor-pointer focus:outline-none focus:border-gold transition-colors"
              >
                {sortOptions.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-taupe absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside
            className={`${
              filterOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-64 flex-shrink-0`}
          >
            <div className="sticky top-28 space-y-8">
              {/* Mobile close */}
              <div className="lg:hidden flex items-center justify-between mb-4">
                <h3 className="font-serif text-lg text-espresso">Filters</h3>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category filter */}
              <div>
                <h4 className="text-xs tracking-mega-wide uppercase text-taupe font-sans font-medium mb-4">
                  Category
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block text-sm w-full text-left py-1 transition-colors ${
                      selectedCategory === 'all' ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block text-sm w-full text-left py-1 transition-colors ${
                        selectedCategory === cat.id ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline-divider" />

              {/* Price filter */}
              <div>
                <h4 className="text-xs tracking-mega-wide uppercase text-taupe font-sans font-medium mb-4">
                  Price
                </h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`block text-sm w-full text-left py-1 transition-colors ${
                        selectedPriceRange === range.id ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline-divider" />

              {/* Material filter */}
              <div>
                <h4 className="text-xs tracking-mega-wide uppercase text-taupe font-sans font-medium mb-4">
                  Material
                </h4>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'All Materials' },
                    { id: 'gold', label: '18K Gold Plated' },
                    { id: 'silver', label: 'Silver' },
                  ].map(mat => (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat.id)}
                      className={`block text-sm w-full text-left py-1 transition-colors ${
                        selectedMaterial === mat.id ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso mb-2">No products found</p>
                <p className="text-sm text-taupe mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
