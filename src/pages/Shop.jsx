import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let filtered = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-brand-ivory border-b border-brand-sand/60">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 text-center">
          <h1 id="shop-page-title" className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            The Collection
          </h1>
          <p id="shop-page-subtitle" className="text-sm text-brand-muted mt-3">
            Timeless pieces crafted with intention
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-xs tracking-wide uppercase text-brand-charcoal font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs tracking-wide uppercase transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-brand-charcoal text-white'
                  : 'border border-brand-sand text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs tracking-wide uppercase transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-brand-charcoal text-white'
                    : 'border border-brand-sand text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs tracking-wide text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-brand-ivory border border-brand-sand">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs tracking-wide uppercase font-medium text-brand-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-brand-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 text-xs tracking-wide uppercase transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-brand-charcoal text-white'
                    : 'border border-brand-sand text-brand-muted'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs tracking-wide uppercase transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-brand-charcoal text-white'
                      : 'border border-brand-sand text-brand-muted'
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
          {filtered.map((product) => (
            <ShopProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>

        {filtered.length === 0 && (
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
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[3/4] bg-brand-ivory">
        <img
          data-strk-img-id={`shop-${product.id}-n0p1q2`}
          data-strk-img={`[shop-${product.id}-title] [shop-page-title] gold jewelry`}
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
          className={`absolute bottom-0 left-0 right-0 bg-brand-charcoal/90 text-white text-xs tracking-wide-xl uppercase py-3 font-medium transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          Add to Cart
        </button>
      </Link>
      <div className="mt-3 text-center">
        <h3 id={`shop-${product.id}-title`} className="text-[11px] md:text-xs tracking-product uppercase font-medium text-brand-charcoal">
          {product.name}
        </h3>
        <p className="text-sm text-brand-muted mt-1 font-light">${product.price}</p>
      </div>
    </div>
  );
};

export default Shop;
