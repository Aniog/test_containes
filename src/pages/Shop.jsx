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
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return filtered;
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
        <div className="text-center mb-10 md:mb-14">
          <h1 id="shop-title" className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.slug === activeCategory)?.name || 'Shop'}
          </h1>
          <p id="shop-subtitle" className="text-sm text-brand-muted mt-2 font-sans">
            Timeless pieces crafted with intention
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-wider text-brand-charcoal font-sans font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-sans font-medium border transition-colors ${
                activeCategory === 'all'
                  ? 'border-brand-charcoal bg-brand-charcoal text-white'
                  : 'border-brand-warm text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.slug)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider font-sans font-medium border transition-colors ${
                  activeCategory === cat.slug
                    ? 'border-brand-charcoal bg-brand-charcoal text-white'
                    : 'border-brand-warm text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-brand-muted font-sans hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-sans text-brand-charcoal bg-transparent border border-brand-warm px-3 py-1.5 focus:outline-none focus:border-brand-gold cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-brand-ivory border border-brand-warm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-sans font-medium text-brand-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-brand-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider font-sans border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-brand-charcoal bg-brand-charcoal text-white'
                    : 'border-brand-warm text-brand-muted'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.slug)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider font-sans border transition-colors ${
                    activeCategory === cat.slug
                      ? 'border-brand-charcoal bg-brand-charcoal text-white'
                      : 'border-brand-warm text-brand-muted'
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
          {filteredProducts.map((product) => (
            <ShopProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-brand-charcoal">No products found</p>
            <p className="text-sm text-brand-muted mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ShopProductCard = ({ product, addItem }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-brand-ivory aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.id}-name] [shop-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-400 ${hovered ? 'scale-105' : 'scale-100'}`}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="w-full bg-brand-charcoal/90 text-white py-2.5 text-xs tracking-wider uppercase font-sans font-medium hover:bg-brand-charcoal transition-colors backdrop-blur-sm"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="mt-3">
        <h3 id={`shop-${product.id}-name`} className="font-serif text-xs uppercase tracking-product text-brand-charcoal">
          {product.name}
        </h3>
        <p className="text-sm text-brand-muted mt-1 font-sans">${product.price}</p>
      </div>
    </div>
  );
};

export default Shop;
