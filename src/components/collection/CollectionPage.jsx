import { useSearchParams, Link } from 'react-router-dom';
import { products, categories } from '@/data/products';
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const materialFilter = searchParams.get('material') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter, priceFilter, materialFilter]);

  let filteredProducts = [...products];

  if (categoryFilter !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
  }
  if (priceFilter === 'under50') {
    filteredProducts = filteredProducts.filter(p => p.price < 50);
  } else if (priceFilter === '50to100') {
    filteredProducts = filteredProducts.filter(p => p.price >= 50 && p.price <= 100);
  } else if (priceFilter === 'over100') {
    filteredProducts = filteredProducts.filter(p => p.price > 100);
  }
  if (materialFilter !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.material.toLowerCase().includes(materialFilter));
  }

  if (sortBy === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-2">
            {categoryFilter === 'all' ? 'All Jewelry' : categories.find(c => c.id === categoryFilter)?.name || 'Shop'}
          </h1>
          <p className="text-sm text-muted-foreground">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => updateFilter('category', 'all')}
                      className={cn(
                        'text-sm transition-colors',
                        categoryFilter === 'all' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      All ({products.length})
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => updateFilter('category', cat.id)}
                        className={cn(
                          'text-sm transition-colors',
                          categoryFilter === cat.id ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        {cat.name} ({cat.count})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Price</h3>
                <ul className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 - $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map((option) => (
                    <li key={option.value}>
                      <button
                        onClick={() => updateFilter('price', option.value)}
                        className={cn(
                          'text-sm transition-colors',
                          priceFilter === option.value ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Material</h3>
                <ul className="space-y-2">
                  {[
                    { value: 'all', label: 'All Materials' },
                    { value: 'gold', label: '18K Gold Plated' },
                    { value: 'silver', label: 'Silver Tone' },
                  ].map((option) => (
                    <li key={option.value}>
                      <button
                        onClick={() => updateFilter('material', option.value)}
                        className={cn(
                          'text-sm transition-colors',
                          materialFilter === option.value ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile Filter */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 text-sm"
              >
                <SlidersHorizontal className="h-4 w-4" />
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
                </select>
                <ChevronDown className="h-4 w-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {isFilterOpen && (
              <div className="bg-secondary/30 rounded-sm p-4 mb-6 space-y-6">
                <div>
                  <h3 className="text-sm tracking-widest uppercase mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => updateFilter('category', 'all')}
                      className={cn(
                        'px-3 py-1.5 text-xs border transition-colors',
                        categoryFilter === 'all' ? 'border-primary bg-primary text-primary-foreground' : 'border-border/50'
                      )}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => updateFilter('category', cat.id)}
                        className={cn(
                          'px-3 py-1.5 text-xs border transition-colors',
                          categoryFilter === cat.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border/50'
                        )}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm tracking-widest uppercase mb-3">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to100', label: '$50 - $100' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateFilter('price', option.value)}
                        className={cn(
                          'px-3 py-1.5 text-xs border transition-colors',
                          priceFilter === option.value ? 'border-primary bg-primary text-primary-foreground' : 'border-border/50'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort - Desktop */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">{filteredProducts.length} results</p>
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
                </select>
                <ChevronDown className="h-4 w-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-xl mb-2">No pieces found</p>
                <p className="text-sm text-muted-foreground mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="btn-outline"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group cursor-pointer"
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-3">
                        <img
                          data-strk-img-id={`${product.id}-shop`}
                          data-strk-img={`[${product.id}-desc] [${product.id}-title] [shop-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          alt={product.name}
                          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <img
                          data-strk-img-id={`${product.id}-shop-hover`}
                          data-strk-img={`[${product.id}-desc-hover] [${product.id}-title] [shop-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />

                        {product.badge && (
                          <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-2 py-1">
                            {product.badge}
                          </span>
                        )}

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product, product.variants[0]);
                            toast.success(`${product.name} added to cart`);
                          }}
                          className="absolute bottom-0 left-0 right-0 bg-foreground/90 text-background py-3 text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="h-3.5 w-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </Link>

                    <h3 id={`${product.id}-title`} className="product-name text-xs md:text-sm mb-1">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p id={`${product.id}-desc`} className="text-xs text-muted-foreground mb-1 line-clamp-1">{product.shortDescription}</p>
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="text-xs">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                    <p className="text-sm font-medium">${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
