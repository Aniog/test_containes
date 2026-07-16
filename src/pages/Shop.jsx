import { useEffect, useRef, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedMaterial, setSelectedMaterial] = useState('all');

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (priceRange.min) {
      filtered = filtered.filter((p) => p.price >= Number(priceRange.min));
    }
    if (priceRange.max) {
      filtered = filtered.filter((p) => p.price <= Number(priceRange.max));
    }

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
      case 'newest':
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const updateCategory = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange({ min: '', max: '' });
    setSelectedMaterial('all');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== 'all' || priceRange.min || priceRange.max || selectedMaterial !== 'all';

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase text-soft-black mb-4">
          Category
        </h4>
        <div className="space-y-2.5">
          <button
            onClick={() => updateCategory('all')}
            className={`block text-sm transition-colors ${
              selectedCategory === 'all'
                ? 'text-gold-dark font-medium'
                : 'text-taupe/70 hover:text-soft-black'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => updateCategory(cat.slug)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.slug
                  ? 'text-gold-dark font-medium'
                  : 'text-taupe/70 hover:text-soft-black'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase text-soft-black mb-4">
          Price Range
        </h4>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="$ Min"
            value={priceRange.min}
            onChange={(e) => setPriceRange((p) => ({ ...p, min: e.target.value }))}
            className="w-full px-3 py-2 border border-gold-light/30 rounded-sm text-xs text-soft-black placeholder:text-taupe/40 focus:outline-none focus:border-gold/50 bg-transparent"
          />
          <span className="text-taupe/40 text-xs">—</span>
          <input
            type="number"
            placeholder="$ Max"
            value={priceRange.max}
            onChange={(e) => setPriceRange((p) => ({ ...p, max: e.target.value }))}
            className="w-full px-3 py-2 border border-gold-light/30 rounded-sm text-xs text-soft-black placeholder:text-taupe/40 focus:outline-none focus:border-gold/50 bg-transparent"
          />
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase text-soft-black mb-4">
          Material
        </h4>
        <div className="space-y-2.5">
          {['all', '18K Gold Plated', 'Sterling Silver'].map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm transition-colors ${
                selectedMaterial === mat
                  ? 'text-gold-dark font-medium'
                  : 'text-taupe/70 hover:text-soft-black'
              }`}
            >
              {mat === 'all' ? 'All Materials' : mat}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-dusty-rose hover:text-dusty-rose/70 transition-colors underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-taupe mb-3">
            Explore
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-soft-black font-normal">
            Shop All
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="md:hidden flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-taupe hover:text-soft-black transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                  {hasActiveFilters && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  )}
                </button>
                <span className="text-xs text-taupe/60 hidden md:block">
                  {filteredProducts.length} products
                </span>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-[0.1em] uppercase text-taupe border border-gold-light/30 rounded-sm px-3 py-2 pr-8 focus:outline-none focus:border-gold/50 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-taupe pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe text-sm mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">
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

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-soft-black/40 backdrop-blur-sm"
          onClick={() => setMobileFilterOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-cream rounded-t-2xl shadow-2xl transition-transform duration-400 p-6 max-h-[70vh] overflow-y-auto ${
            mobileFilterOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-lg tracking-[0.1em] text-soft-black">
              Filters
            </h3>
            <button onClick={() => setMobileFilterOpen(false)}>
              <X className="w-5 h-5 text-taupe" />
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </div>
  );
}
