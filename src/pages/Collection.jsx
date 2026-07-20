import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/shared/ProductCard';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const filteredProducts = useMemo(() => {
    let filtered = activeCategory === 'all'
      ? [...products]
      : products.filter(p => p.category === activeCategory);

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
      default:
        break;
    }

    return filtered;
  }, [activeCategory, sortBy]);

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setSearchParams(params);
  };

  const setSort = (sort) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort);
    setSearchParams(params);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-muted-fg mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setCategory('all')}
            className={`block text-sm transition-colors ${activeCategory === 'all' ? 'text-charcoal font-medium' : 'text-muted-fg hover:text-charcoal'}`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.slug)}
              className={`block text-sm capitalize transition-colors ${activeCategory === cat.slug ? 'text-charcoal font-medium' : 'text-muted-fg hover:text-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-muted-fg mb-4">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSort('price-low')}
            className={`block text-sm transition-colors ${sortBy === 'price-low' ? 'text-charcoal font-medium' : 'text-muted-fg hover:text-charcoal'}`}
          >
            Low to High
          </button>
          <button
            onClick={() => setSort('price-high')}
            className={`block text-sm transition-colors ${sortBy === 'price-high' ? 'text-charcoal font-medium' : 'text-muted-fg hover:text-charcoal'}`}
          >
            High to Low
          </button>
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-muted-fg mb-4">Material</h3>
        <div className="space-y-2">
          <span className="block text-sm text-charcoal">18K Gold Plated</span>
          <span className="block text-sm text-muted-fg">Sterling Silver</span>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.slug === activeCategory)?.name || 'Collection'}
          </h1>
          <p className="mt-3 text-sm text-muted-fg">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter toggle */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm text-charcoal bg-transparent border border-border-warm px-3 py-1.5 focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-charcoal/40" onClick={() => setMobileFiltersOpen(false)} />
            <div className="absolute left-0 top-0 h-full w-72 bg-cream p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl text-charcoal">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="w-5 h-5 text-charcoal" />
                </button>
              </div>
              <FilterSidebar />
            </div>
          </div>
        )}

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm text-charcoal bg-transparent border border-border-warm px-3 py-1.5 focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="text-sm text-muted-fg mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
