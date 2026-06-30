import { useEffect, useRef, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const { addItem } = useCart();

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

  return (
    <div className="pt-20 md:pt-24 min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-muted font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-4">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`font-sans text-sm transition-colors ${activeCategory === 'all' ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`font-sans text-sm transition-colors ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-4">Price</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => setSortBy('price-low')} className={`font-sans text-sm ${sortBy === 'price-low' ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'} transition-colors`}>Low to High</button></li>
                  <li><button onClick={() => setSortBy('price-high')} className={`font-sans text-sm ${sortBy === 'price-high' ? 'text-accent font-medium' : 'text-muted hover:text-charcoal'} transition-colors`}>High to Low</button></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter + Sort */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-charcoal border border-border px-4 py-2"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-xs uppercase tracking-wider text-charcoal border border-border px-4 py-2 bg-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Desktop Sort */}
            <div className="hidden md:flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-xs uppercase tracking-wider text-charcoal border border-border px-4 py-2 bg-transparent cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] bg-ivory overflow-hidden">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[shop-${product.id}-title] [shop-${product.id}-desc] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => addItem(product)}
                    className="absolute bottom-[calc(25%+1rem)] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-charcoal font-sans text-[10px] uppercase tracking-widest px-5 py-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-white"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Add
                  </button>
                  <div className="mt-4 text-center">
                    <h3 id={`shop-${product.id}-title`} className="font-sans text-[11px] uppercase tracking-product text-charcoal">
                      {product.name}
                    </h3>
                    <p className="font-serif text-lg text-charcoal mt-1">${product.price}</p>
                    <span id={`shop-${product.id}-desc`} className="sr-only">{product.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No pieces found</p>
                <p className="mt-2 text-sm text-muted">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <>
          <div className="fixed inset-0 bg-charcoal/40 z-[60]" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-[70] shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl text-charcoal">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>

            <div className="mb-8">
              <h4 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-4">Category</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => { setCategory('all'); setMobileFilterOpen(false); }}
                    className={`font-sans text-sm ${activeCategory === 'all' ? 'text-accent font-medium' : 'text-muted'}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => { setCategory(cat.id); setMobileFilterOpen(false); }}
                      className={`font-sans text-sm ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-8">
              <h4 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-4">Sort By</h4>
              <ul className="space-y-3">
                {[
                  { value: 'featured', label: 'Featured' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' },
                  { value: 'rating', label: 'Top Rated' },
                ].map(opt => (
                  <li key={opt.value}>
                    <button
                      onClick={() => { setSortBy(opt.value); setMobileFilterOpen(false); }}
                      className={`font-sans text-sm ${sortBy === opt.value ? 'text-accent font-medium' : 'text-muted'}`}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
