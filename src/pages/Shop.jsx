import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Selling', value: 'bestselling' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(null);
  const [material, setMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      return cleanup;
    }
  }, [category, priceRange, material, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    // Price filter
    if (priceRange) {
      result = result.filter((p) => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Material filter
    if (material !== 'all') {
      result = result.filter((p) =>
        p.materials.toLowerCase().includes(material.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestselling':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    return result;
  }, [category, priceRange, material, sortBy]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setCategory('all');
    setPriceRange(null);
    setMaterial('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = category !== 'all' || priceRange || material !== 'all';

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen bg-cream-50">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
        <h1 className="font-serif text-3xl md:text-5xl text-charcoal mb-3">
          {category === 'all' ? 'Our Collection' : category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <div className="section-divider mb-4" />
        <p className="font-sans text-sm text-gray-400 tracking-wide">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} crafted to be treasured
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-gold-500 rounded-full" />
            )}
          </button>

          {/* Desktop filter labels (inline) */}
          <div className="hidden lg:flex items-center gap-6">
            {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-sans text-xs tracking-widest uppercase transition-colors ${
                  category === cat
                    ? 'text-gold-600 border-b border-gold-400 pb-0.5'
                    : 'text-gray-400 hover:text-charcoal'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-wider uppercase text-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-charcoal mb-3">
                Category
              </h3>
              <div className="space-y-2">
                {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full text-left font-sans text-sm transition-colors ${
                      category === cat ? 'text-gold-600' : 'text-gray-400 hover:text-charcoal'
                    }`}
                  >
                    {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-charcoal mb-3">
                Price
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(priceRange === range ? null : range)}
                    className={`block w-full text-left font-sans text-sm transition-colors ${
                      priceRange === range ? 'text-gold-600' : 'text-gray-400 hover:text-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-charcoal mb-3">
                Material
              </h3>
              <div className="space-y-2">
                {['all', 'gold', 'silver'].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setMaterial(mat)}
                    className={`block w-full text-left font-sans text-sm transition-colors ${
                      material === mat ? 'text-gold-600' : 'text-gray-400 hover:text-charcoal'
                    }`}
                  >
                    {mat === 'all' ? 'All Materials' : mat.charAt(0).toUpperCase() + mat.slice(1) + ' Plated'}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="font-sans text-xs tracking-wider uppercase text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Clear All
              </button>
            )}
          </aside>

          {/* Mobile filter drawer */}
          <div
            className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
              filtersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
            <div
              className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-cream-50 shadow-xl transform transition-transform duration-300 overflow-y-auto ${
                filtersOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif text-lg text-charcoal">Filters</h3>
                  <button onClick={() => setFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-charcoal mb-3">Category</h4>
                  <div className="space-y-2">
                    {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); setFiltersOpen(false); }}
                        className={`block w-full text-left py-1 font-sans text-sm ${
                          category === cat ? 'text-gold-600' : 'text-gray-400'
                        }`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-charcoal mb-3">Price</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => { setPriceRange(priceRange === range ? null : range); setFiltersOpen(false); }}
                        className={`block w-full text-left py-1 font-sans text-sm ${
                          priceRange === range ? 'text-gold-600' : 'text-gray-400'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={() => { clearFilters(); setFiltersOpen(false); }}
                    className="font-sans text-xs tracking-wider uppercase text-red-500 flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-xl text-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-sm text-gray-400 mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
