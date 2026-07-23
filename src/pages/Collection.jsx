import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/shared/ProductCard';

export default function Collection() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [activeCategory, sortBy]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Collection'}
          </h1>
          <p className="mt-3 text-sm text-charcoal-light font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-sans font-medium text-charcoal bg-transparent border-none cursor-pointer p-0"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Desktop category pills */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 text-xs tracking-widest uppercase font-sans font-medium transition-colors border cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-charcoal text-cream border-charcoal'
                  : 'bg-transparent text-charcoal border-border hover:border-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 text-xs tracking-widest uppercase font-sans font-medium transition-colors border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-charcoal text-cream border-charcoal'
                    : 'bg-transparent text-charcoal border-border hover:border-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs tracking-wide font-sans text-charcoal bg-transparent border border-border px-3 py-1.5 cursor-pointer focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="lg:hidden mb-8 p-4 border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs tracking-widest uppercase font-sans font-medium text-charcoal">Category</span>
              <button
                onClick={() => setFilterOpen(false)}
                className="p-1 text-charcoal bg-transparent border-none cursor-pointer"
                aria-label="Close filters"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-3 py-1.5 text-xs tracking-widest uppercase font-sans font-medium transition-colors border cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-charcoal text-cream border-charcoal'
                    : 'bg-transparent text-charcoal border-border hover:border-charcoal'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs tracking-widest uppercase font-sans font-medium transition-colors border cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-charcoal text-cream border-charcoal'
                      : 'bg-transparent text-charcoal border-border hover:border-charcoal'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal-light">No products found</p>
            <button
              onClick={() => setCategory('all')}
              className="mt-4 text-sm text-gold hover:text-gold-dark font-sans underline bg-transparent border-none cursor-pointer"
            >
              View all products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
