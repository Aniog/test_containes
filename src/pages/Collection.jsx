import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Collection() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || 'all';

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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sort]);

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
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-brand-dark text-center">
          {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
        </h1>
        <p className="text-center text-sm text-brand-muted font-sans mt-2">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-divider">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-brand-dark md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-3">
            {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 font-sans text-xs tracking-wider uppercase border transition-colors ${
                  activeCategory === cat
                    ? 'border-brand-dark bg-brand-dark text-white'
                    : 'border-brand-divider text-brand-dark hover:border-brand-dark'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="font-sans text-xs tracking-wider text-brand-dark bg-transparent border border-brand-divider px-3 py-2 focus:outline-none focus:border-brand-dark"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 border border-brand-divider">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-widest uppercase text-brand-dark">Category</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-brand-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat); setFilterOpen(false); }}
                  className={`px-4 py-2 font-sans text-xs tracking-wider uppercase border transition-colors ${
                    activeCategory === cat
                      ? 'border-brand-dark bg-brand-dark text-white'
                      : 'border-brand-divider text-brand-dark hover:border-brand-dark'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-brand-divider overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`col-${product.imgId}`}
                    data-strk-img={`[col-${product.id}-desc] [col-${product.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 id={`col-${product.id}-title`} className="font-sans text-xs tracking-[0.15em] uppercase text-brand-dark">
                  {product.name}
                </h3>
                <p id={`col-${product.id}-desc`} className="text-sm text-brand-muted mt-1 font-sans">{product.shortDesc}</p>
                <p className="text-sm text-brand-dark mt-1 font-sans font-medium">${product.price}</p>
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product);
                }}
                className="absolute bottom-[76px] left-0 right-0 mx-3 bg-brand-dark text-white font-sans text-[10px] tracking-widest uppercase py-2.5 text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-gold"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-brand-dark">No products found</p>
            <button
              onClick={() => setCategory('all')}
              className="mt-4 text-brand-gold font-sans text-sm hover:underline"
            >
              View all jewelry
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
