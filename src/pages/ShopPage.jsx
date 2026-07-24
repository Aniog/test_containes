import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/shop/ProductCard';
import { products, categories } from '@/data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange !== 'all';

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="section-padding pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="serif-heading text-4xl md:text-5xl mb-2">All Jewelry</h1>
          <p className="text-muted-foreground text-sm">{filteredProducts.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="flex gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm transition-colors ${selectedCategory === 'all' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
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
                    className={`block text-sm transition-colors ${selectedMaterial === 'all' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedMaterial('18k gold plated')}
                    className={`block text-sm transition-colors ${selectedMaterial === '18k gold plated' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    18K Gold Plated
                  </button>
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { label: 'All', value: 'all' },
                    { label: 'Under $50', value: '0-50' },
                    { label: '$50 - $75', value: '50-75' },
                    { label: '$75+', value: '75-999' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`block text-sm transition-colors ${priceRange === opt.value ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-xs text-muted-foreground hover:text-primary transition-colors underline">
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden flex items-center justify-between w-full mb-6">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm border border-border px-4 py-2.5 hover:border-primary transition-colors"
            >
              <Filter size={16} />
              Filters
              {hasActiveFilters && <span className="w-2 h-2 bg-primary rounded-full" />}
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-border text-sm px-4 py-2.5 pr-8 hover:border-primary transition-colors cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <>
              <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setFilterOpen(false)} />
              <div className="fixed left-0 top-0 bottom-0 w-80 bg-background z-50 overflow-y-auto lg:hidden">
                <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                  <h2 className="text-sm tracking-widest uppercase">Filters</h2>
                  <button onClick={() => setFilterOpen(false)} className="p-2" aria-label="Close filters">
                    <X size={20} />
                  </button>
                </div>
                <div className="px-6 py-6 space-y-8">
                  <div>
                    <h3 className="text-sm tracking-widest uppercase mb-4">Category</h3>
                    <div className="space-y-3">
                      <button onClick={() => { setSelectedCategory('all'); setFilterOpen(false); }} className={`block text-sm ${selectedCategory === 'all' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>All</button>
                      {categories.map((cat) => (
                        <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setFilterOpen(false); }} className={`block text-sm ${selectedCategory === cat.id ? 'text-primary font-medium' : 'text-muted-foreground'}`}>{cat.name}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm tracking-widest uppercase mb-4">Price</h3>
                    <div className="space-y-3">
                      {[{ label: 'All', value: 'all' }, { label: 'Under $50', value: '0-50' }, { label: '$50 - $75', value: '50-75' }, { label: '$75+', value: '75-999' }].map((opt) => (
                        <button key={opt.value} onClick={() => { setPriceRange(opt.value); setFilterOpen(false); }} className={`block text-sm ${priceRange === opt.value ? 'text-primary font-medium' : 'text-muted-foreground'}`}>{opt.label}</button>
                      ))}
                    </div>
                  </div>
                  {hasActiveFilters && (
                    <button onClick={() => { clearFilters(); setFilterOpen(false); }} className="text-xs text-muted-foreground hover:text-primary underline">Clear all</button>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-border text-sm px-4 py-2 pr-8 hover:border-primary transition-colors cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-2xl mb-2">No pieces found</p>
                <p className="text-muted-foreground text-sm mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
};

export default ShopPage;
