import { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { initialProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '../lib/strk-sdk';

export default function Shop() {
  const { addItem } = useCart();
  const location = useLocation();
  const [filter, setFilter] = useState(location.state?.category || 'All');
  const [sort, setSort] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const config = await import('../strk-img-config.json', { assert: { type: 'json' } }).catch(() => null);
        if (config && ImageHelper) {
          ImageHelper.loadImages(config.default || config, containerRef.current);
        }
      } catch (err) {
        // ignore
      }
    };
    
    // We want to load images when the component mounts AND when the filter/sort changes the displayed products
    const frameId = window.requestAnimationFrame(() => loadImages());
    return () => window.cancelAnimationFrame(frameId);
  }, [filter, sort]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...initialProducts];

    // Filter
    if (filter !== 'All') {
      result = result.filter(p => p.category === filter);
    }

    // Sort
    switch (sort) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'Featured':
      default:
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
    }

    return result;
  }, [filter, sort]);

  return (
    <div className="pt-24 pb-16 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
      {/* Header */}
      <div className="text-center py-12 md:py-20 border-b border-border mb-8">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop Collections</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of demi-fine jewelry. Designed to be layered, loved, and lived in.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center bg-muted/30 p-4 rounded-sm">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-sm uppercase tracking-widest font-medium"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filter</span>
          </button>
          
          <div className="relative">
             <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent pr-8 py-2 text-sm uppercase tracking-widest font-medium focus:outline-none cursor-pointer"
            >
              <option>Featured</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
          </div>
        </div>

        {/* Sidebar */}
        <div className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="sticky top-28 space-y-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 border-b border-border pb-2">Category</h3>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setFilter(cat)}
                      className={`text-sm tracking-wide hover:text-primary transition-colors ${
                        filter === cat ? 'text-foreground font-semibold' : 'text-muted-foreground'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 border-b border-border pb-2">Material</h3>
              <ul className="space-y-4">
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked className="rounded-sm border-border text-primary focus:ring-primary h-4 w-4" />
                    <span className="text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">18K Gold Plated</span>
                  </label>
                </li>
                 <li>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="rounded-sm border-border text-primary focus:ring-primary h-4 w-4" />
                    <span className="text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">Sterling Silver</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Desktop Sort */}
          <div className="hidden lg:flex justify-end mb-8 relative">
             <div className="relative group">
              <span className="text-sm text-muted-foreground mr-4">Sort by</span>
              <select 
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent pr-8 py-2 text-sm uppercase tracking-widest font-medium focus:outline-none cursor-pointer border-b border-transparent hover:border-border transition-colors pb-1"
              >
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-0 top-[2px] h-4 w-4 pointer-events-none" />
             </div>
          </div>

          {/* Product Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
              {filteredAndSortedProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted block">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`shop-item-${product.id}`}
                      data-strk-img={`[shop-product-title-${product.id}] minimalist gold jewelry product shot on neutral background`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                      {product.isNew && (
                        <span className="bg-background text-foreground text-[10px] uppercase tracking-widest px-3 py-1 font-medium shadow-sm">
                          New
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1 font-medium shadow-sm">
                          Bestseller
                        </span>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <button 
                      onClick={(e) => { e.preventDefault(); addItem({...product, cartImgId: `shop-item-${product.id}`}); }}
                      className="absolute bottom-4 left-4 right-4 bg-white/90 text-foreground py-3 uppercase tracking-widest text-xs font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                    >
                      Quick Add
                    </button>
                  </Link>
                  <div className="flex flex-col mt-2">
                    <h3 id={`shop-product-title-${product.id}`} className="font-serif text-lg tracking-wide uppercase mb-1">
                      <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-muted-foreground text-sm">{product.category}</p>
                      <p className="font-medium">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-muted-foreground mb-4">No products found matching your active filters.</p>
              <button 
                onClick={() => { setFilter('All'); setSort('Featured'); }}
                className="uppercase tracking-widest text-sm font-medium hover:text-primary border-b border-foreground pb-1"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
