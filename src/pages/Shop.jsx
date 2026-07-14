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
  const [sortBy, setSortBy] = useState('featured');
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || 'all';

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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
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
          <h1 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.slug === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-sm text-muted font-light">
            Timeless pieces designed to elevate your everyday
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-product font-medium text-charcoal md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setCategory('all')}
              className={`text-xs uppercase tracking-product font-medium transition-colors ${
                activeCategory === 'all' ? 'text-charcoal border-b border-charcoal pb-0.5' : 'text-muted hover:text-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.slug)}
                className={`text-xs uppercase tracking-product font-medium transition-colors ${
                  activeCategory === cat.slug ? 'text-charcoal border-b border-charcoal pb-0.5' : 'text-muted hover:text-charcoal'
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
            className="text-xs uppercase tracking-wide text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-8 p-4 border border-border bg-cream">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-product font-medium text-charcoal">Category</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setFilterOpen(false); }}
                className={`px-4 py-2 text-xs uppercase tracking-product border transition-colors ${
                  activeCategory === 'all' ? 'border-charcoal bg-charcoal text-cream' : 'border-border text-charcoal'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.slug); setFilterOpen(false); }}
                  className={`px-4 py-2 text-xs uppercase tracking-product border transition-colors ${
                    activeCategory === cat.slug ? 'border-charcoal bg-charcoal text-cream' : 'border-border text-charcoal'
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
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-muted-bg overflow-hidden mb-4">
                  <img
                    data-strk-img-id={`shop-${product.id}-n0o1p2`}
                    data-strk-img={`[shop-${product.id}-title] gold jewelry product`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product);
                      }}
                      className="w-full bg-cream/95 backdrop-blur-sm text-charcoal py-2.5 text-xs uppercase tracking-product font-medium hover:bg-gold hover:text-cream transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h3
                  id={`shop-${product.id}-title`}
                  className="text-xs uppercase tracking-product font-medium text-charcoal"
                >
                  {product.name}
                </h3>
                <p className="text-sm text-muted font-light mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-muted">No products found</p>
            <button
              onClick={() => setCategory('all')}
              className="mt-4 text-sm text-gold underline"
            >
              View all products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
