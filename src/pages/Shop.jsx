import { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/data/CartContext';
import { formatPrice } from '@/lib/utils';

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

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
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.slug === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-muted hover:text-charcoal transition-colors md:hidden"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setCategory('all')}
              className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                activeCategory === 'all'
                  ? 'border-gold text-gold bg-gold/5'
                  : 'border-border text-muted hover:border-gold/50'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                  activeCategory === cat.slug
                    ? 'border-gold text-gold bg-gold/5'
                    : 'border-border text-muted hover:border-gold/50'
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
            className="text-xs text-muted bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-ivory rounded-sm border border-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-charcoal uppercase tracking-wider">Category</span>
              <button onClick={() => setShowFilters(false)} className="text-muted">
                <X size={16} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-gold text-gold bg-gold/5'
                    : 'border-border text-muted'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setCategory(cat.slug)}
                  className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                    activeCategory === cat.slug
                      ? 'border-gold text-gold bg-gold/5'
                      : 'border-border text-muted'
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
              <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] bg-ivory rounded-sm overflow-hidden mb-3">
                  <img
                    alt={product.name}
                    data-strk-img-id={`shop-${product.slug}-img-o5p6`}
                    data-strk-img={`[shop-${product.slug}-name] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product);
                      }}
                      className="w-full bg-charcoal/90 hover:bg-charcoal text-cream py-2.5 text-xs font-medium uppercase tracking-wider transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <Link to={`/product/${product.slug}`}>
                <h3
                  id={`shop-${product.slug}-name`}
                  className="font-serif text-xs md:text-sm text-charcoal uppercase tracking-product leading-tight"
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted font-medium">{formatPrice(product.price)}</p>
              </Link>
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
  );
}
