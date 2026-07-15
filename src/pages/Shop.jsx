import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [categoryFilter, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    return result;
  }, [categoryFilter, sortBy]);

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

  const allCategories = ['all', 'earrings', 'necklaces', 'huggies'];

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal font-light">
            {categoryFilter === 'all' ? 'All Jewelry' : categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}
          </h1>
          <p className="mt-3 text-muted font-sans text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-sm font-sans text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-6">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-sm font-sans tracking-wide capitalize transition-colors ${
                  categoryFilter === cat ? 'text-gold' : 'text-muted hover:text-charcoal'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm font-sans text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 bg-surface border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans font-medium text-charcoal">Category</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat); setFilterOpen(false); }}
                  className={`px-4 py-2 text-xs tracking-widest uppercase font-sans border transition-colors ${
                    categoryFilter === cat
                      ? 'border-gold bg-gold text-cream'
                      : 'border-border text-charcoal hover:border-gold'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-charcoal">No products found</p>
            <p className="mt-2 text-sm text-muted">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
