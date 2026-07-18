import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);
  const sectionRef = useScrollReveal(0.05);
  const { addItem } = useCart();

  const categoryFilter = searchParams.get('category') || 'all';

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    // Sort
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
      case 'newest':
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [categoryFilter, sortBy]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [categoryFilter, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-500 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-300">Shop</span>
        </nav>

        {/* Header */}
        <div ref={sectionRef} className="reveal text-center mb-12">
          <p className="text-xs uppercase tracking-mega-wide text-gold mb-3">Collection</p>
          <h1 className="heading-serif text-3xl md:text-5xl text-brand-50 mb-3">
            {categoryFilter !== 'all'
              ? categories.find((c) => c.id === categoryFilter)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-brand-400 text-sm max-w-lg mx-auto">
            Discover our curated collection of demi-fine gold jewelry, designed to be worn and treasured every day.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gold/10">
          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`text-xs uppercase tracking-wider px-4 py-2 transition-all duration-300 ${
                categoryFilter === 'all'
                  ? 'bg-gold text-surface-primary'
                  : 'border border-brand-700 text-brand-400 hover:border-gold/40'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`text-xs uppercase tracking-wider px-4 py-2 transition-all duration-300 ${
                  categoryFilter === cat.id
                    ? 'bg-gold text-surface-primary'
                    : 'border border-brand-700 text-brand-400 hover:border-gold/40'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-brand-700 text-brand-300 text-xs uppercase tracking-wider px-4 py-2.5 pr-10 focus:outline-none focus:border-gold/50 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-500 pointer-events-none" />
          </div>
        </div>

        {/* Product grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-brand-400 text-sm mb-4">No products found in this category.</p>
            <button onClick={() => setCategory('all')} className="btn-outline">
              View All Jewelry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-surface-card aspect-[3/4]">
                  <img
                    data-strk-img-id={`shop-${product.id}`}
                    data-strk-img={`[shop-desc-${product.id}] [shop-name-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-gold text-surface-primary text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product, product.variants[0].id);
                      }}
                      className="w-full bg-surface-primary/90 backdrop-blur-sm text-brand-100 text-xs uppercase tracking-wider font-semibold py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-surface-primary transition-colors duration-300"
                    >
                      <ShoppingBag size={14} />
                      Add to Cart
                    </button>
                  </div>
                </Link>

                <div className="mt-4">
                  <p id={`shop-desc-${product.id}`} className="sr-only">{product.description}</p>
                  <h3 id={`shop-name-${product.id}`} className="product-name text-sm text-brand-100 mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={11}
                          className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-brand-700'}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-brand-500">({product.reviewCount})</span>
                  </div>
                  <p className="text-gold font-medium text-sm">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results count */}
        <div className="mt-10 text-center">
          <p className="text-xs text-brand-600 uppercase tracking-wider">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
