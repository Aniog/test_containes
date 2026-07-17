import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

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

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categoryOptions = [
    { id: 'all', name: 'All' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">The Collection</h1>
          <p className="text-taupe text-sm">Timeless pieces crafted for everyday elegance</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-4">
            {categoryOptions.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`text-sm transition-colors ${
                  activeCategory === cat.id
                    ? 'text-charcoal border-b border-charcoal pb-0.5'
                    : 'text-taupe hover:text-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe pointer-events-none" />
          </div>
        </div>

        {/* Mobile Filters */}
        {mobileFiltersOpen && (
          <div className="md:hidden mb-6 p-4 bg-linen border border-sand">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-charcoal">Category</span>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-taupe" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setMobileFiltersOpen(false); }}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wide border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-gold bg-gold/5 text-charcoal'
                      : 'border-sand text-taupe hover:border-charcoal'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-taupe text-sm">No products found in this category.</p>
          </div>
        )}

        {/* Results count */}
        <p className="text-xs text-taupe text-center mt-8">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>
    </div>
  );
};

export default Collection;
