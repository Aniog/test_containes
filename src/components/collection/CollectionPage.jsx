import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedMaterial, priceRange]);

  // Filter products
  let filtered = products.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (selectedMaterial !== 'all' && p.material !== selectedMaterial) return false;
    if (priceRange === 'under50' && p.price >= 50) return false;
    if (priceRange === '50to100' && (p.price < 50 || p.price > 100)) return false;
    if (priceRange === 'over100' && p.price <= 100) return false;
    return true;
  });

  // Sort products
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  if (sortBy === 'newest') filtered.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="container-custom py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1
            className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {selectedCategory === 'all' ? 'All Jewelry' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <p className="text-sm text-muted-foreground">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] text-foreground font-medium mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm transition-colors ${
                      selectedCategory === 'all' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm transition-colors ${
                        selectedCategory === cat.id ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline" />

              {/* Price */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] text-foreground font-medium mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 - $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map(option => (
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

              <div className="hairline" />

              {/* Material */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] text-foreground font-medium mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'gold', label: 'Gold Tone' },
                    { value: 'silver', label: 'Silver Tone' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedMaterial(option.value)}
                      className={`block text-sm transition-colors ${
                        selectedMaterial === option.value ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm text-foreground border border-border px-4 py-2.5"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-border text-sm text-foreground pr-8 pl-3 py-2.5 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Mobile Filter Panel */}
          {filterOpen && (
            <div className="lg:hidden bg-white border border-border p-6 mb-6 space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] text-foreground font-medium mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.1em] border ${
                      selectedCategory === 'all' ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 text-xs uppercase tracking-[0.1em] border ${
                        selectedCategory === cat.id ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.15em] text-foreground font-medium mb-3">Price</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50-$100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`px-4 py-2 text-xs uppercase tracking-[0.1em] border ${
                        priceRange === option.value ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-border text-sm text-foreground pr-8 pl-3 py-2 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">No pieces match your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                    setSelectedMaterial('all');
                  }}
                  className="btn-outline inline-block"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="relative aspect-[3/4] bg-[#E8E2DA] overflow-hidden mb-4">
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[${product.id}-subtitle] [${product.id}-name] [shop-collection]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.15em] px-3 py-1.5">
                          {product.badge}
                        </span>
                      )}

                      {/* Quick Add */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                          hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem(product, product.variants[0]);
                          }}
                          className="w-full bg-white/95 backdrop-blur-sm text-foreground text-[10px] uppercase tracking-[0.15em] py-2.5 flex items-center justify-center gap-1.5 hover:bg-primary hover:text-white transition-colors"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          Quick Add
                        </button>
                      </div>
                    </div>

                    <h3 className="text-xs uppercase tracking-[0.15em] text-foreground mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">{product.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[#D4A843] text-[#D4A843]" />
                        <span className="text-xs text-muted-foreground">{product.rating}</span>
                      </div>
                    </div>
                  </Link>
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
