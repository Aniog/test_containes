import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setSearchParams(params);
    setMobileFilterOpen(false);
  };

  const setSort = (sort) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort);
    setSearchParams(params);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-muted font-medium mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setCategory('all')}
            className={`block text-sm transition-colors ${
              activeCategory === 'all' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
            }`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-muted font-medium mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { label: 'Under $40', value: 'under-40' },
            { label: '$40 – $70', value: '40-70' },
            { label: 'Over $70', value: 'over-70' },
          ].map(price => (
            <button
              key={price.value}
              className="block text-sm text-charcoal hover:text-gold transition-colors"
            >
              {price.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-muted font-medium mb-4">Material</h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Crystal'].map(mat => (
            <button
              key={mat}
              className="block text-sm text-charcoal hover:text-gold transition-colors"
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Page header */}
        <div className="text-center py-10 md:py-14">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {activeCategory === 'all'
              ? 'All Jewelry'
              : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-muted text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter toggle + sort */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm text-charcoal bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm text-charcoal bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} sectionId="shop" />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal">No pieces found</p>
                <p className="mt-2 text-sm text-muted">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[60]"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-[70] shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-lg text-charcoal">Filters</h2>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </main>
  );
}
