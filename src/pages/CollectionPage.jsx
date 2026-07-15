import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

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
  filtered = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const activeFilterCount = [
    selectedCategory !== 'all',
    selectedMaterial !== 'all',
    priceRange !== 'all',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange('all');
  };

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`space-y-6 ${mobile ? 'p-6' : ''}`}>
      {mobile && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="serif-heading text-xl">Filters</h3>
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase mb-3">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'all'}
              onChange={() => setSelectedCategory('all')}
              className="accent-foreground"
            />
            <span className="text-sm">All</span>
          </label>
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                className="accent-foreground"
              />
              <span className="text-sm">{cat.name}</span>
              <span className="text-xs text-muted-foreground">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase mb-3">Material</h4>
        <div className="space-y-2">
          {['all', 'gold', 'silver'].map(mat => (
            <label key={mat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat}
                onChange={() => setSelectedMaterial(mat)}
                className="accent-foreground"
              />
              <span className="text-sm capitalize">{mat === 'all' ? 'All' : `${mat} tone`}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 - $100' },
            { value: 'over100', label: 'Over $100' },
          ].map(range => (
            <label key={range.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={priceRange === range.value}
                onChange={() => setPriceRange(range.value)}
                className="accent-foreground"
              />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase text-muted-foreground underline hover:text-foreground transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Hidden text elements for stock image queries */}
      <div className="sr-only">
        {products.map((product) => (
          <div key={`hidden-${product.id}`}>
            <p id={`${product.id}-name`}>{product.name}</p>
            <p id={`${product.id}-desc`}>{product.description}</p>
          </div>
        ))}
        <p id="shop-all-title">Velmora Fine Jewelry demi-fine gold plated earrings necklace huggies collection</p>
      </div>

      {/* Page Header */}
      <div className="section-padding py-8 lg:py-12 border-b border-border">
        <div className="container-max">
          <h1 id="shop-all-title" className="serif-heading text-3xl sm:text-4xl lg:text-5xl mb-2">Shop All</h1>
          <p className="text-sm text-muted-foreground">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="section-padding py-8">
        <div className="container-max">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-28">
                <FilterSidebar />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <button
                  className="lg:hidden flex items-center gap-2 text-sm"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="w-5 h-5 bg-foreground text-background text-[10px] rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                <div className="ml-auto flex items-center gap-2">
                  <span className="text-xs text-muted-foreground hidden sm:inline">Sort by:</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-transparent text-sm pr-6 cursor-pointer focus:outline-none"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                      <option value="name">Name A-Z</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="serif-heading text-xl mb-4">No pieces found</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Try adjusting your filters
                  </p>
                  <button onClick={clearFilters} className="btn-outline">
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                  {filtered.map((product) => (
                    <div
                      key={product.id}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredId(product.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Link to={`/product/${product.id}`}>
                        <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
                          <img
                            alt={product.name}
                            data-strk-img-id={`shop-${product.id}`}
                            data-strk-img={`[${product.id}-desc] [${product.id}-name] [shop-all-title]`}
                            data-strk-img-ratio="3x4"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          {product.badge && (
                            <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-widest uppercase px-3 py-1.5">
                              {product.badge}
                            </span>
                          )}

                          <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                            hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                addItem(product, product.variants[0]);
                                toast.success(`${product.name} added to cart`);
                              }}
                              className="w-full bg-white/95 backdrop-blur-sm text-foreground text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-foreground hover:text-white transition-colors"
                            >
                              <ShoppingBag className="w-3.5 h-3.5" />
                              Add to Cart
                            </button>
                          </div>
                        </div>

                        <h3 className="product-name text-xs sm:text-sm mb-1.5 truncate">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">${product.price}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background overflow-y-auto animate-slide-in-right">
            <FilterSidebar mobile />
          </div>
        </div>
      )}
    </div>
  );
}
