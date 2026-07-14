import { useState, useEffect, useRef, useMemo } from 'react';
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
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'all'
      ? [...products]
      : products.filter(p => p.category === activeCategory);

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

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 id="shop-page-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p id="shop-page-subtitle" className="mt-3 text-sm text-stone font-light">
            Discover our curated collection of demi-fine pieces
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-taupe">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-charcoal bg-transparent border-none font-sans md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setCategory('all')}
              className={`text-sm font-sans bg-transparent border-none transition-colors ${
                activeCategory === 'all' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`text-sm font-sans bg-transparent border-none transition-colors ${
                  activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
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
            className="text-sm text-charcoal bg-transparent border border-taupe px-3 py-2 font-sans rounded-sm focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-ivory border border-taupe rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)} className="bg-transparent border-none">
                <X className="w-4 h-4 text-stone" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-sans rounded-sm border transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-charcoal text-cream border-charcoal'
                    : 'bg-transparent text-charcoal border-taupe'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-sans rounded-sm border transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-charcoal text-cream border-charcoal'
                      : 'bg-transparent text-charcoal border-taupe'
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
            <ProductCard key={product.id} product={product} sectionTitleId="shop-page-title" />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-stone">No products found</p>
            <button
              onClick={() => setCategory('all')}
              className="mt-4 text-sm text-gold bg-transparent border-none font-sans hover:underline"
            >
              View all products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
