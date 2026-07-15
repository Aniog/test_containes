import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

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

  const categoryOptions = [
    { value: 'all', label: 'All' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
  ];

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
          <h1 id="shop-page-title" className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-sans text-sm text-brand-muted mt-3">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-brand-charcoal bg-transparent border-none cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-3">
            {categoryOptions.map(cat => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 font-sans text-xs tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                    : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs tracking-wider uppercase text-brand-charcoal bg-transparent border border-brand-warm px-4 py-2 cursor-pointer focus:outline-none focus:border-brand-charcoal"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-brand-ivory border border-brand-warm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-wider uppercase text-brand-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)} className="bg-transparent border-none cursor-pointer">
                <X className="w-4 h-4 text-brand-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => { setCategory(cat.value); setShowFilters(false); }}
                  className={`px-4 py-2 font-sans text-xs tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.value
                      ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                      : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[3/4] bg-brand-ivory no-underline">
                <img
                  data-strk-img-id={`shop-${product.imgId}`}
                  data-strk-img={`[shop-${product.id}-title] [shop-page-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Quick add */}
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                    className="w-full bg-brand-charcoal/90 text-brand-cream font-sans text-xs tracking-widest uppercase py-3 hover:bg-brand-charcoal transition-colors border-none cursor-pointer backdrop-blur-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
              <div className="mt-4 text-center">
                <h3 id={`shop-${product.id}-title`} className="font-serif text-xs tracking-product uppercase text-brand-charcoal mb-1">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-brand-muted">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-brand-muted">No products found</p>
            <button
              onClick={() => setCategory('all')}
              className="mt-4 font-sans text-xs tracking-widest uppercase text-brand-gold bg-transparent border-none cursor-pointer underline"
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
