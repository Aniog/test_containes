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
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
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
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            The Collection
          </h1>
          <p className="font-sans text-sm text-brand-muted mt-3">
            Timeless pieces crafted for everyday luxury
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-sm font-sans text-brand-charcoal bg-transparent border-none p-0"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase font-sans transition-all border ${
                activeCategory === 'all'
                  ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                  : 'border-brand-sand text-brand-charcoal hover:border-brand-charcoal bg-transparent'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase font-sans transition-all border ${
                  activeCategory === cat.id
                    ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                    : 'border-brand-sand text-brand-charcoal hover:border-brand-charcoal bg-transparent'
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
              className="text-sm font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 rounded-none focus:outline-none focus:border-brand-charcoal"
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
          <div className="md:hidden mb-6 p-4 bg-brand-ivory border border-brand-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-wider uppercase text-brand-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)} className="p-1 bg-transparent border-none">
                <X className="w-4 h-4 text-brand-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setCategory('all'); setShowFilters(false); }}
                className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all border ${
                  activeCategory === 'all'
                    ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                    : 'border-brand-sand text-brand-charcoal bg-transparent'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setShowFilters(false); }}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all border ${
                    activeCategory === cat.id
                      ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                      : 'border-brand-sand text-brand-charcoal bg-transparent'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product count */}
        <p className="text-xs text-brand-muted font-sans mb-6">
          {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product) => (
            <ShopProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
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
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[3/4] bg-brand-ivory no-underline">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product);
          }}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-brand-charcoal text-brand-cream text-xs tracking-wider uppercase font-sans border-none transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Add to Cart
        </button>
      </Link>

      <div className="mt-4">
        <h3 id={`shop-${product.id}-title`} className="font-serif text-xs uppercase tracking-product text-brand-charcoal">
          {product.name}
        </h3>
        <p id={`shop-${product.id}-desc`} className="text-xs text-brand-muted mt-1 font-sans">
          {product.shortDesc}
        </p>
        <p className="text-sm font-sans text-brand-charcoal mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default Shop;
