import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const materialFilter = searchParams.get('material') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter, priceFilter, materialFilter, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  let filtered = [...products];

  if (categoryFilter !== 'all') {
    filtered = filtered.filter(p => p.category === categoryFilter);
  }
  if (priceFilter === 'under50') {
    filtered = filtered.filter(p => p.price < 50);
  } else if (priceFilter === '50to75') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 75);
  } else if (priceFilter === 'over75') {
    filtered = filtered.filter(p => p.price > 75);
  }
  if (materialFilter !== 'all') {
    filtered = filtered.filter(p => p.material.toLowerCase().includes(materialFilter));
  }

  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'newest') {
    filtered.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
  }

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="serif-heading text-xl">Filters</h3>
        {mobile && (
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xs tracking-widest uppercase text-foreground mb-3">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', 'all')}
            className={`block text-sm transition-colors ${categoryFilter === 'all' ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={`block text-sm transition-colors capitalize ${categoryFilter === cat.id ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="text-xs tracking-widest uppercase text-foreground mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to75', label: '$50 – $75' },
            { value: 'over75', label: 'Over $75' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => updateFilter('price', opt.value)}
              className={`block text-sm transition-colors ${priceFilter === opt.value ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="text-xs tracking-widest uppercase text-foreground mb-3">Material</h4>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('material', 'all')}
            className={`block text-sm transition-colors ${materialFilter === 'all' ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}
          >
            All
          </button>
          <button
            onClick={() => updateFilter('material', 'gold')}
            className={`block text-sm transition-colors ${materialFilter === 'gold' ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {mobile && (
        <button
          onClick={() => setMobileFiltersOpen(false)}
          className="btn-accent w-full mt-4"
        >
          View Results ({filtered.length})
        </button>
      )}
    </div>
  );

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
          <h1 className="serif-heading text-4xl md:text-5xl mb-2">The Collection</h1>
          <p className="text-muted-foreground text-sm">Demi-fine jewelry, designed for everyday luxury</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <span className="hidden lg:block text-sm text-muted-foreground">
                {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent text-sm pr-8 pl-2 py-1 border-b border-border focus:outline-none focus:border-accent cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-2xl mb-2">No pieces found</p>
                <p className="text-muted-foreground text-sm mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="btn-outline inline-block"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters overlay */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden animate-fade-in"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-background z-50 overflow-y-auto animate-slide-in-right lg:hidden">
            <FilterSidebar mobile />
          </div>
        </>
      )}
    </main>
  );
}
