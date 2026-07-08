import { useEffect, useRef, useState } from 'react';
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

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

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
    <main ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-taupe font-sans">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-taupe/10">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-charcoal font-sans hover:text-warm-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop Category Filters */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all ${
                activeCategory === 'all'
                  ? 'bg-charcoal text-cream'
                  : 'border border-taupe/30 text-charcoal hover:border-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all ${
                  activeCategory === cat.id
                    ? 'bg-charcoal text-cream'
                    : 'border border-taupe/30 text-charcoal hover:border-charcoal'
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
            className="text-xs font-sans text-charcoal bg-transparent border border-taupe/30 px-3 py-1.5 focus:outline-none focus:border-charcoal"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-sand border border-taupe/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-sans uppercase tracking-wide text-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-4 h-4 text-taupe" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-3 py-1 rounded-full text-xs font-sans ${
                  activeCategory === 'all' ? 'bg-charcoal text-cream' : 'border border-taupe/30 text-charcoal'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-sans ${
                    activeCategory === cat.id ? 'bg-charcoal text-cream' : 'border border-taupe/30 text-charcoal'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-sand overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={`shop-${product.id}`}
                    data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product);
                    }}
                    className="absolute bottom-0 left-0 right-0 bg-charcoal/90 text-cream text-xs font-sans uppercase tracking-widest py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-warm-gold"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
              <div className="mt-3 text-center">
                <h3 id={`shop-${product.id}-title`} className="font-product text-xs text-charcoal">
                  {product.name}
                </h3>
                <p id={`shop-${product.id}-desc`} className="sr-only">{product.description}</p>
                <p className="mt-1 text-sm text-taupe font-sans">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
