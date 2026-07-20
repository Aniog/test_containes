import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
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

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal mb-3">
            The Collection
          </h1>
          <p className="text-sm text-brand-muted">
            Explore our curated selection of demi-fine jewelry
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-brand-charcoal bg-transparent border-none"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all border ${
                activeCategory === 'all'
                  ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                  : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all border ${
                  activeCategory === cat.slug
                    ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                    : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs font-medium text-brand-charcoal bg-transparent border border-brand-warm px-3 py-2 focus:outline-none focus:border-brand-charcoal"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-8 p-4 bg-brand-ivory border border-brand-warm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium tracking-wider uppercase text-brand-charcoal">Category</span>
              <button onClick={() => setFilterOpen(false)} className="bg-transparent border-none text-brand-charcoal">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setFilterOpen(false); }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all border ${
                  activeCategory === 'all'
                    ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                    : 'bg-transparent text-brand-charcoal border-brand-warm'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.slug); setFilterOpen(false); }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all border ${
                    activeCategory === cat.slug
                      ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                      : 'bg-transparent text-brand-charcoal border-brand-warm'
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
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block no-underline">
                <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden mb-4">
                  <img
                    data-strk-img-id={`shop-${product.imgId}`}
                    data-strk-img={`[shop-${product.id}-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 id={`shop-${product.id}-title`} className="font-serif text-xs font-medium tracking-product uppercase text-brand-charcoal mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-brand-muted">${product.price}</p>
              </Link>
              <button
                onClick={() => addItem(product)}
                className="absolute bottom-[60px] left-0 right-0 mx-3 py-2 bg-brand-charcoal text-brand-cream text-xs font-medium tracking-widest uppercase text-center transition-all duration-300 border-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-brand-charcoal">No products found</p>
            <p className="text-sm text-brand-muted mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
