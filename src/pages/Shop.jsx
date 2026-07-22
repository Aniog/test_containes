import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

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

  let filtered = selectedCategory === 'all'
    ? [...products]
    : products.filter(p => p.category === selectedCategory);

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <main ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 id="shop-page-title" className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-brand-muted">
            Timeless pieces crafted with intention
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-brand-charcoal md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-xs tracking-widest uppercase font-medium transition-colors ${
                selectedCategory === 'all' ? 'text-brand-charcoal' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs tracking-widest uppercase font-medium transition-colors ${
                  selectedCategory === cat.id ? 'text-brand-charcoal' : 'text-brand-muted hover:text-brand-charcoal'
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
            className="text-xs tracking-wide text-brand-charcoal bg-transparent border border-brand-warm px-3 py-2 focus:outline-none focus:border-brand-charcoal"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters panel */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-brand-ivory border border-brand-warm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs tracking-widest uppercase font-medium">Category</span>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setSelectedCategory('all'); setShowFilters(false); }}
                className={`px-4 py-2 text-xs tracking-wide uppercase border transition-all ${
                  selectedCategory === 'all'
                    ? 'border-brand-charcoal bg-brand-charcoal text-white'
                    : 'border-brand-warm text-brand-charcoal'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setShowFilters(false); }}
                  className={`px-4 py-2 text-xs tracking-wide uppercase border transition-all ${
                    selectedCategory === cat.id
                      ? 'border-brand-charcoal bg-brand-charcoal text-white'
                      : 'border-brand-warm text-brand-charcoal'
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
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={`shop-${product.id}-i1j2k3`}
                    data-strk-img={`[shop-${product.id}-title] [shop-page-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product);
                      }}
                      className="w-full bg-white text-brand-charcoal px-4 py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-brand-cream transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <div className="mt-3">
                <h3 id={`shop-${product.id}-title`} className="text-xs tracking-product uppercase font-medium text-brand-charcoal">
                  {product.name}
                </h3>
                <p className="text-sm text-brand-charcoal mt-1 font-medium">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-brand-muted">No products found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;
