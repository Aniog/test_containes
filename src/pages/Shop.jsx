import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const [sortBy, setSortBy] = useState('featured');

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
  }, [activeCategory]);

  const filteredProducts = products.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const handleCategoryChange = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-charcoal font-light text-center">
          {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
        </h1>
        <p className="mt-3 text-sm text-brand-muted font-sans text-center">
          {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-sm font-sans text-brand-charcoal bg-transparent border-none p-0 hover:text-brand-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm font-sans text-brand-charcoal bg-transparent border border-brand-warm px-3 py-2 focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <aside
            className={`${
              filterOpen ? 'block' : 'hidden'
            } md:block w-full md:w-56 flex-shrink-0`}
          >
            {/* Mobile close */}
            <div className="flex items-center justify-between md:hidden mb-4">
              <span className="text-sm font-sans font-medium text-brand-charcoal">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="p-1 bg-transparent border-none">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Category filter */}
            <div className="mb-8">
              <h3 className="text-xs font-sans uppercase tracking-wider text-brand-charcoal mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block w-full text-left text-sm font-sans py-1.5 bg-transparent border-none px-0 transition-colors ${
                    activeCategory === 'all' ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block w-full text-left text-sm font-sans py-1.5 bg-transparent border-none px-0 transition-colors ${
                      activeCategory === cat.id ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="text-xs font-sans uppercase tracking-wider text-brand-charcoal mb-4">Price</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSortBy('price-low')}
                  className="block w-full text-left text-sm font-sans py-1.5 text-brand-muted hover:text-brand-charcoal bg-transparent border-none px-0 transition-colors"
                >
                  Under $50
                </button>
                <button
                  onClick={() => setSortBy('price-high')}
                  className="block w-full text-left text-sm font-sans py-1.5 text-brand-muted hover:text-brand-charcoal bg-transparent border-none px-0 transition-colors"
                >
                  $50 – $100
                </button>
              </div>
            </div>

            {/* Material filter */}
            <div>
              <h3 className="text-xs font-sans uppercase tracking-wider text-brand-charcoal mb-4">Material</h3>
              <div className="space-y-2">
                <span className="block text-sm font-sans py-1.5 text-brand-gold">18K Gold Plated</span>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-brand-muted font-sans">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
