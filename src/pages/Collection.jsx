import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
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

  return (
    <main ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-taupe text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar filters */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs uppercase tracking-wider text-charcoal font-medium mb-4">Category</h3>
              <ul className="space-y-2 list-none p-0 m-0">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm transition-colors bg-transparent border-none cursor-pointer p-0 ${
                      activeCategory === 'all' ? 'text-charcoal font-medium' : 'text-taupe hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm transition-colors bg-transparent border-none cursor-pointer p-0 ${
                        activeCategory === cat.id ? 'text-charcoal font-medium' : 'text-taupe hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-stone/50">
                <h3 className="text-xs uppercase tracking-wider text-charcoal font-medium mb-4">Price</h3>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li><button className="text-sm text-taupe hover:text-charcoal transition-colors bg-transparent border-none cursor-pointer p-0">Under $40</button></li>
                  <li><button className="text-sm text-taupe hover:text-charcoal transition-colors bg-transparent border-none cursor-pointer p-0">$40 – $70</button></li>
                  <li><button className="text-sm text-taupe hover:text-charcoal transition-colors bg-transparent border-none cursor-pointer p-0">$70 – $100</button></li>
                  <li><button className="text-sm text-taupe hover:text-charcoal transition-colors bg-transparent border-none cursor-pointer p-0">Over $100</button></li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-stone/50">
                <h3 className="text-xs uppercase tracking-wider text-charcoal font-medium mb-4">Material</h3>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li><button className="text-sm text-taupe hover:text-charcoal transition-colors bg-transparent border-none cursor-pointer p-0">18K Gold Plated</button></li>
                  <li><button className="text-sm text-taupe hover:text-charcoal transition-colors bg-transparent border-none cursor-pointer p-0">Sterling Silver</button></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone/50">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm text-charcoal bg-transparent border-none cursor-pointer p-0"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort dropdown */}
              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-stone rounded-sm px-4 py-2 pr-8 text-sm text-charcoal cursor-pointer focus:outline-none focus:border-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-taupe">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal/40 z-[60]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-[70] shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl text-charcoal">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-taupe hover:text-charcoal transition-colors bg-transparent border-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Category</h4>
              <ul className="space-y-2 list-none p-0 m-0">
                <li>
                  <button
                    onClick={() => { setCategory('all'); setMobileFiltersOpen(false); }}
                    className={`text-sm bg-transparent border-none cursor-pointer p-0 ${activeCategory === 'all' ? 'text-charcoal font-medium' : 'text-taupe'}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => { setCategory(cat.id); setMobileFiltersOpen(false); }}
                      className={`text-sm bg-transparent border-none cursor-pointer p-0 ${activeCategory === cat.id ? 'text-charcoal font-medium' : 'text-taupe'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Collection;
