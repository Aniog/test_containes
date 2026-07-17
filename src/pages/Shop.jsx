import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

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

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-stone text-sm mt-3">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-sm text-charcoal bg-transparent border-none md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all border ${
                activeCategory === 'all'
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-transparent text-charcoal border-border hover:border-charcoal'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-charcoal text-white border-charcoal'
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
            className="text-sm text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile Filter Panel */}
        {filterOpen && (
          <div className="md:hidden mb-8 p-4 bg-ivory border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-charcoal">Category</span>
              <button
                onClick={() => setFilterOpen(false)}
                className="p-1 bg-transparent border-none text-stone"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setFilterOpen(false); }}
                className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-widest transition-all border ${
                  activeCategory === 'all'
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-transparent text-charcoal border-border'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setFilterOpen(false); }}
                  className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-widest transition-all border ${
                    activeCategory === cat.id
                      ? 'bg-charcoal text-white border-charcoal'
                      : 'bg-transparent text-charcoal border-border'
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
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
