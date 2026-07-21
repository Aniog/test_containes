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
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sort]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    switch (sort) {
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
  }, [activeCategory, sort]);

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
      <div className="bg-ivory border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-heading">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-muted font-sans">
            Timeless pieces crafted with intention
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="md:hidden flex items-center gap-2 text-sm font-sans text-charcoal border border-border px-3 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
            <span className="text-sm text-muted font-sans hidden md:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm font-sans text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-sans uppercase tracking-widest text-charcoal mb-4">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm font-sans transition-colors ${activeCategory === 'all' ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm font-sans transition-colors ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-xs font-sans uppercase tracking-widest text-charcoal mb-4">Price</h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-muted font-sans">Under $40</span></li>
                  <li><span className="text-sm text-muted font-sans">$40 – $70</span></li>
                  <li><span className="text-sm text-muted font-sans">$70 – $100</span></li>
                  <li><span className="text-sm text-muted font-sans">Over $100</span></li>
                </ul>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-xs font-sans uppercase tracking-widest text-charcoal mb-4">Material</h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-muted font-sans">18K Gold Plated</span></li>
                  <li><span className="text-sm text-muted font-sans">Sterling Silver</span></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl text-heading">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                    <X className="w-5 h-5 text-muted" />
                  </button>
                </div>
                <h4 className="text-xs font-sans uppercase tracking-widest text-charcoal mb-3">Category</h4>
                <ul className="space-y-2 mb-6">
                  <li>
                    <button
                      onClick={() => { setCategory('all'); setFilterOpen(false); }}
                      className={`text-sm font-sans ${activeCategory === 'all' ? 'text-accent font-medium' : 'text-muted'}`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => { setCategory(cat.id); setFilterOpen(false); }}
                        className={`text-sm font-sans ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted'}`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-heading">No pieces found</p>
                <p className="text-sm text-muted mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
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
