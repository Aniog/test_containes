import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    material: 'all',
  });
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.material !== 'all') {
      result = result.filter(p => p.material === filters.material);
    }

    if (filters.priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (filters.priceRange === '50to100') {
      result = result.filter(p => p.price >= 50 && p.price <= 100);
    } else if (filters.priceRange === 'over100') {
      result = result.filter(p => p.price > 100);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [filters, sortBy]);

  const ProductCard = ({ product }) => {
    return (
      <div className="group">
        <Link to={`/product/${product.id}`}>
          <div className="relative aspect-[3/4] bg-secondary/20 overflow-hidden mb-4 rounded-sm">
            <img
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={product.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-foreground text-background text-xs tracking-widest uppercase px-3 py-1">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product, product.variants[0]);
                }}
                className="w-full bg-foreground text-background py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
          <h3 id={product.titleId} className="product-name text-sm mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mb-1">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-xs text-muted-foreground">{product.rating}</span>
          </div>
          <p className="text-sm font-medium">${product.price}</p>
        </Link>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-secondary/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif-heading text-4xl md:text-5xl mb-3">The Collection</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Demi-fine jewelry crafted for everyday luxury. Each piece is designed to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={filters.category === 'all'}
                      onChange={() => setFilters({ ...filters, category: 'all' })}
                      className="accent-primary"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat.id}
                        onChange={() => setFilters({ ...filters, category: cat.id })}
                        className="accent-primary"
                      />
                      <span className="text-sm">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 - $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === option.value}
                        onChange={() => setFilters({ ...filters, priceRange: option.value })}
                        className="accent-primary"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'gold', label: 'Gold' },
                    { value: 'silver', label: 'Silver' },
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={filters.material === option.value}
                        onChange={() => setFilters({ ...filters, material: option.value })}
                        className="accent-primary"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm tracking-widest uppercase"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm pr-8 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>

          {/* Mobile filter panel */}
          {showFilters && (
            <div className="lg:hidden bg-background border border-border/50 p-6 mb-6 rounded-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm tracking-widest uppercase mb-3">Category</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="category-mobile"
                        checked={filters.category === 'all'}
                        onChange={() => setFilters({ ...filters, category: 'all' })}
                        className="accent-primary"
                      />
                      <span className="text-sm">All</span>
                    </label>
                    {categories.map(cat => (
                      <label key={cat.id} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="category-mobile"
                          checked={filters.category === cat.id}
                          onChange={() => setFilters({ ...filters, category: cat.id })}
                          className="accent-primary"
                        />
                        <span className="text-sm">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm tracking-widest uppercase mb-3">Price</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to100', label: '$50 - $100' },
                      { value: 'over100', label: 'Over $100' },
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="price-mobile"
                          checked={filters.priceRange === option.value}
                          onChange={() => setFilters({ ...filters, priceRange: option.value })}
                          className="accent-primary"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort and count - desktop */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm pr-8 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-2xl mb-2">No products found</p>
                <p className="text-muted-foreground mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setFilters({ category: 'all', priceRange: 'all', material: 'all' })}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
