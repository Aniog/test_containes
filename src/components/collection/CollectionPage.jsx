import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial);
    }
    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50to100') {
      result = result.filter(p => p.price >= 50 && p.price <= 100);
    } else if (priceRange === 'over100') {
      result = result.filter(p => p.price > 100);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  return (
    <div className="pt-20 md:pt-24">
      <div className="container-wide py-8 md:py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="serif-heading text-4xl md:text-5xl mb-2">Shop All</h1>
          <p className="text-muted-foreground">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm transition-colors ${selectedCategory === 'all' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedMaterial('all')}
                    className={`block text-sm transition-colors ${selectedMaterial === 'all' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedMaterial('gold')}
                    className={`block text-sm transition-colors ${selectedMaterial === 'gold' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    Gold Plated
                  </button>
                  <button
                    onClick={() => setSelectedMaterial('silver')}
                    className={`block text-sm transition-colors ${selectedMaterial === 'silver' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    Silver Plated
                  </button>
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Price</h3>
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
                      className={`block text-sm transition-colors ${priceRange === option.value ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between w-full mb-6">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 text-sm"
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
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>

          {/* Mobile Filter Panel */}
          {filtersOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
              <div className="flex items-center justify-between p-5 border-b border-border/50">
                <h2 className="serif-heading text-2xl">Filters</h2>
                <button onClick={() => setFiltersOpen(false)} className="p-2" aria-label="Close filters">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-8 overflow-y-auto max-h-[calc(100vh-60px)]">
                <div>
                  <h3 className="text-sm tracking-widest uppercase mb-4">Category</h3>
                  <div className="space-y-3">
                    <button onClick={() => { setSelectedCategory('all'); setFiltersOpen(false); }} className={`block text-sm py-2 ${selectedCategory === 'all' ? 'text-accent font-medium' : 'text-muted-foreground'}`}>All Jewelry</button>
                    {categories.map(cat => (
                      <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setFiltersOpen(false); }} className={`block text-sm py-2 ${selectedCategory === cat.id ? 'text-accent font-medium' : 'text-muted-foreground'}`}>{cat.name}</button>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border/30 pt-6">
                  <h3 className="text-sm tracking-widest uppercase mb-4">Price</h3>
                  <div className="space-y-3">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to100', label: '$50 - $100' },
                      { value: 'over100', label: 'Over $100' },
                    ].map(option => (
                      <button key={option.value} onClick={() => { setPriceRange(option.value); setFiltersOpen(false); }} className={`block text-sm py-2 ${priceRange === option.value ? 'text-accent font-medium' : 'text-muted-foreground'}`}>{option.label}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

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
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-2xl mb-2">No pieces found</p>
                <p className="text-muted-foreground">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] bg-secondary rounded overflow-hidden mb-3">
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] tracking-widest uppercase px-3 py-1">
              {product.badge}
            </span>
          )}
          <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, product.variants[0]);
              }}
              className="w-full bg-primary/90 backdrop-blur-sm text-primary-foreground py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
        <h3 className="product-name text-sm mb-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-1">
          <Star className="w-3 h-3 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">{product.rating}</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </Link>
    </div>
  );
}
