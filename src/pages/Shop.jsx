import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [categoryFilter, sortBy]);

  const filteredProducts = products.filter(p => {
    if (categoryFilter === 'all') return true;
    return p.category === categoryFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') params.delete('category');
    else params.set('category', cat);
    setSearchParams(params);
  };

  const setSort = (sort) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort);
    setSearchParams(params);
  };

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      <h3 className="text-xs font-sans font-semibold uppercase tracking-wide-xl text-brand-charcoal mb-4">
        Category
      </h3>
      <div className="space-y-2">
        <button
          onClick={() => setCategory('all')}
          className={`block w-full text-left text-sm font-sans py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
            categoryFilter === 'all' ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
          }`}
        >
          All Jewelry
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.slug)}
            className={`block w-full text-left text-sm font-sans py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
              categoryFilter === cat.slug ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xs font-sans font-semibold uppercase tracking-wide-xl text-brand-charcoal mb-4">
          Price Range
        </h3>
        <div className="space-y-2">
          {['Under $40', '$40 – $60', '$60 – $80', 'Over $80'].map(range => (
            <label key={range} className="flex items-center gap-2 text-sm text-brand-muted font-sans cursor-pointer hover:text-brand-charcoal transition-colors">
              <input type="checkbox" className="accent-brand-gold w-3.5 h-3.5" />
              {range}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xs font-sans font-semibold uppercase tracking-wide-xl text-brand-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(mat => (
            <label key={mat} className="flex items-center gap-2 text-sm text-brand-muted font-sans cursor-pointer hover:text-brand-charcoal transition-colors">
              <input type="checkbox" className="accent-brand-gold w-3.5 h-3.5" />
              {mat}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-espresso font-light">
            {categoryFilter === 'all' ? 'All Jewelry' : categories.find(c => c.slug === categoryFilter)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-brand-muted font-sans">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter toggle + sort */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm font-sans text-brand-charcoal bg-transparent border border-brand-sand rounded-sm px-3 py-2 cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm font-sans text-brand-charcoal bg-transparent border border-brand-sand rounded-sm px-3 py-2 cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters drawer */}
        {mobileFiltersOpen && (
          <>
            <div className="fixed inset-0 bg-brand-espresso/40 z-[60] md:hidden" onClick={() => setMobileFiltersOpen(false)} />
            <div className="fixed top-0 left-0 h-full w-72 bg-brand-cream z-[70] p-6 overflow-y-auto md:hidden">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-lg text-brand-espresso">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)} className="p-1 bg-transparent border-none">
                  <X className="w-5 h-5 text-brand-charcoal" />
                </button>
              </div>
              <FilterSidebar />
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <FilterSidebar className="hidden md:block" />

          {/* Product grid */}
          <div>
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm font-sans text-brand-charcoal bg-transparent border border-brand-sand rounded-sm px-3 py-2 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-brand-charcoal">No products found</p>
                <p className="text-sm text-brand-muted mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
