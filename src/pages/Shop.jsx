import { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

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
      result = result.filter((p) => p.category === activeCategory);
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

  const handleCategoryChange = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-900 font-light">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-stone-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-medium uppercase tracking-widest text-stone-500 mb-4">Category</h3>
              <ul className="space-y-2 list-none p-0 m-0">
                <li>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`text-sm transition-colors bg-transparent border-none text-left w-full py-1 ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-stone-600 hover:text-gold'
                    }`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-sm transition-colors bg-transparent border-none text-left w-full py-1 ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone-600 hover:text-gold'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-xs font-medium uppercase tracking-widest text-stone-500 mb-4">Price</h3>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li className="text-sm text-stone-600">$30 – $50</li>
                  <li className="text-sm text-stone-600">$50 – $75</li>
                  <li className="text-sm text-stone-600">$75 – $120</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xs font-medium uppercase tracking-widest text-stone-500 mb-4">Material</h3>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li className="text-sm text-stone-600">18K Gold Plated</li>
                  <li className="text-sm text-stone-600">Sterling Silver</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 text-sm text-stone-600 bg-transparent border-none"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-stone-600 bg-transparent border border-stone-300 px-3 py-2 focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Mobile filters */}
            {showFilters && (
              <div className="md:hidden mb-6 p-4 bg-cream border border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-stone-900">Filters</h3>
                  <button onClick={() => setShowFilters(false)} className="bg-transparent border-none text-stone-400">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                      activeCategory === 'all'
                        ? 'border-gold bg-gold text-white'
                        : 'border-stone-300 text-stone-600 bg-transparent'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                        activeCategory === cat.id
                          ? 'border-gold bg-gold text-white'
                          : 'border-stone-300 text-stone-600 bg-transparent'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-stone-500">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
