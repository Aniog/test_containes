import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, priceRange, sortBy]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const handleAddToCart = (product) => {
    addToCart(product, product.variants[0]);
    setIsCartOpen(true);
  };

  // Filter products
  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (priceRange === 'under50') {
    filtered = filtered.filter(p => p.price < 50);
  } else if (priceRange === '50to100') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 100);
  } else if (priceRange === 'over100') {
    filtered = filtered.filter(p => p.price > 100);
  }

  // Sort
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'newest') {
    filtered.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-secondary/30 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">The Collection</p>
          <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light">Shop All</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm transition-colors ${
                      selectedCategory === 'all' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    All Pieces ({products.length})
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm transition-colors ${
                        selectedCategory === cat.id ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 - $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`block text-sm transition-colors ${
                        priceRange === option.value ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">18K Gold Plated</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">{filtered.length} pieces</p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm border border-border px-4 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile filter panel */}
          {showFilters && (
            <div className="lg:hidden bg-card border border-border rounded-sm p-6 mb-6 space-y-6">
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { setSelectedCategory('all'); setShowFilters(false); }}
                    className={`block text-sm ${selectedCategory === 'all' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                  >
                    All Pieces
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat.id); setShowFilters(false); }}
                      className={`block text-sm ${selectedCategory === cat.id ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 - $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => { setPriceRange(option.value); setShowFilters(false); }}
                      className={`block text-sm ${priceRange === option.value ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort & count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground hidden lg:block">{filtered.length} pieces</p>
              <div className="relative ml-auto lg:ml-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-border text-sm pr-8 pl-3 py-2 focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-xl mb-2">No pieces found</p>
                <p className="text-sm text-muted-foreground mb-4">Try adjusting your filters</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setPriceRange('all'); }}
                  className="btn-outline inline-flex"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          data-strk-bg-id={`shop-${product.id}-bg`}
          data-strk-bg={`[${product.id}-desc] [${product.id}-title] [shop-subtitle] [shop-title]`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-foreground/90 text-background text-xs tracking-widest uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-foreground transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`}>
        <h3 id={`${product.id}-title`} className="product-name text-xs md:text-sm mb-1.5 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p id={`${product.id}-desc`} className="text-xs text-muted-foreground mb-2 line-clamp-1 hidden md:block">
          {product.description}
        </p>
        <div className="flex items-center gap-1.5 mb-1.5">
          <Star className="w-3 h-3 fill-primary text-primary" />
          <span className="text-xs text-muted-foreground">{product.rating}</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </Link>
    </div>
  );
}
