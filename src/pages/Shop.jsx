import { useState, useRef, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return filtered;
  }, [activeCategory, sortBy]);

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
      {/* Header */}
      <div className="bg-sand border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-taupe font-sans">
            Discover our curated collection of demi-fine pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-ultra-wide font-sans text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-sans border transition-colors ${
                activeCategory === 'all' ? 'border-gold bg-gold text-cream' : 'border-border text-charcoal hover:border-gold'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-sans border transition-colors ${
                  activeCategory === cat.id ? 'border-gold bg-gold text-cream' : 'border-border text-charcoal hover:border-gold'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-taupe font-sans hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-sans text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-sand border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-ultra-wide font-sans font-medium text-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-taupe" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setShowFilters(false); }}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider font-sans border transition-colors ${
                  activeCategory === 'all' ? 'border-gold bg-gold text-cream' : 'border-border text-charcoal'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setShowFilters(false); }}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider font-sans border transition-colors ${
                    activeCategory === cat.id ? 'border-gold bg-gold text-cream' : 'border-border text-charcoal'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results count */}
        <p className="text-xs text-taupe font-sans mb-6">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} sectionId="shop" />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal">No pieces found</p>
            <p className="text-sm text-taupe mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
